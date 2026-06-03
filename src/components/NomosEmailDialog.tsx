import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  needsMessengerContact,
  type AuditProtocol,
  type ContactExpectation,
  type EmailRequestVariant,
  type MessengerApp,
  type NomosFormData,
} from "@/lib/contactEmail";
import { submitNomosEmail } from "@/lib/sendNomosEmail";

type NomosEmailDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: EmailRequestVariant;
  auditProtocol: AuditProtocol;
};

const expectationOptions: ContactExpectation[] = ["message", "email", "call"];
const messengerApps: MessengerApp[] = ["whatsapp", "telegram"];

const formPrefix: Record<EmailRequestVariant, string> = {
  contact: "common.contactForm",
  audit: "common.auditForm",
};

export function NomosEmailDialog({
  open,
  onOpenChange,
  variant,
  auditProtocol,
}: NomosEmailDialogProps) {
  const { t, locale } = useLanguage();
  const prefix = formPrefix[variant];
  const [companyName, setCompanyName] = useState("");
  const [referral, setReferral] = useState("");
  const [expectation, setExpectation] = useState<ContactExpectation>("email");
  const [messengerApp, setMessengerApp] = useState<MessengerApp>("whatsapp");
  const [messengerContact, setMessengerContact] = useState("");
  const [sending, setSending] = useState(false);

  const showMessenger = needsMessengerContact(expectation);

  const reset = () => {
    setCompanyName("");
    setReferral("");
    setExpectation("email");
    setMessengerApp("whatsapp");
    setMessengerContact("");
    setSending(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next && !sending) reset();
    onOpenChange(next);
  };

  const handleExpectationChange = (opt: ContactExpectation) => {
    setExpectation(opt);
    if (!needsMessengerContact(opt)) {
      setMessengerContact("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedCompany = companyName.trim();
    const trimmedReferral = referral.trim();
    const trimmedMessenger = messengerContact.trim();

    if (!trimmedCompany || !trimmedReferral) {
      toast.error(t(`${prefix}.validationRequired`));
      return;
    }

    if (showMessenger && !trimmedMessenger) {
      toast.error(t(`${prefix}.validationMessengerRequired`));
      return;
    }

    const data: NomosFormData = {
      companyName: trimmedCompany,
      referral: trimmedReferral,
      expectation,
      ...(showMessenger
        ? { messengerApp, messengerContact: trimmedMessenger }
        : {}),
    };

    setSending(true);

    try {
      submitNomosEmail({
        locale,
        variant,
        auditProtocol: variant === "audit" ? auditProtocol : undefined,
        data,
      });

      toast.success(t(`${prefix}.successTitle`), {
        description: t(`${prefix}.successDescription`),
      });
      handleOpenChange(false);
    } catch {
      toast.error(t(`${prefix}.sendErrorTitle`), {
        description: t(`${prefix}.sendErrorDescription`),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-n-bg border-n-border text-n-text sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-normal tracking-wide">
            {t(`${prefix}.title`)}
          </DialogTitle>
          <DialogDescription className="text-n-muted">{t(`${prefix}.subtitle`)}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-2">
            <Label htmlFor={`${variant}-company`} className="text-n-text">
              {t(`${prefix}.companyName`)}
            </Label>
            <Input
              id={`${variant}-company`}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={t(`${prefix}.companyNamePlaceholder`)}
              className="bg-n-surface border-n-border text-n-text"
              autoComplete="organization"
              required
              disabled={sending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${variant}-referral`} className="text-n-text">
              {t(`${prefix}.referral`)}
            </Label>
            <Input
              id={`${variant}-referral`}
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              placeholder={t(`${prefix}.referralPlaceholder`)}
              className="bg-n-surface border-n-border text-n-text"
              required
              disabled={sending}
            />
          </div>

          <fieldset className="space-y-3" disabled={sending}>
            <legend className="text-sm font-medium text-n-text">{t(`${prefix}.expectation`)}</legend>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {expectationOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-2 rounded border px-4 py-3 text-sm transition-colors ${
                    expectation === opt
                      ? "border-n-gold bg-n-gold/10 text-n-gold"
                      : "border-n-border text-n-muted hover:border-n-muted"
                  } ${sending ? "pointer-events-none opacity-60" : ""}`}
                >
                  <input
                    type="radio"
                    name={`${variant}-expectation`}
                    value={opt}
                    checked={expectation === opt}
                    onChange={() => handleExpectationChange(opt)}
                    className="sr-only"
                    disabled={sending}
                  />
                  {t(`${prefix}.expectationOptions.${opt}`)}
                </label>
              ))}
            </div>
          </fieldset>

          {showMessenger && (
            <fieldset
              className="space-y-3 rounded border border-n-border bg-n-surface/50 p-4"
              disabled={sending}
            >
              <legend className="px-1 text-sm font-medium text-n-text">{t(`${prefix}.messengerLabel`)}</legend>
              <div className="flex gap-2">
                {messengerApps.map((app) => (
                  <label
                    key={app}
                    className={`flex flex-1 cursor-pointer items-center justify-center rounded border px-3 py-2.5 text-sm transition-colors ${
                      messengerApp === app
                        ? "border-n-gold bg-n-gold/10 text-n-gold"
                        : "border-n-border text-n-muted hover:border-n-muted"
                    } ${sending ? "pointer-events-none opacity-60" : ""}`}
                  >
                    <input
                      type="radio"
                      name={`${variant}-messenger-app`}
                      value={app}
                      checked={messengerApp === app}
                      onChange={() => setMessengerApp(app)}
                      className="sr-only"
                      disabled={sending}
                    />
                    {t(`${prefix}.messengerApp${app.charAt(0).toUpperCase()}${app.slice(1)}`)}
                  </label>
                ))}
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${variant}-messenger-contact`} className="text-n-text">
                  {t(`${prefix}.messengerContact`)}
                </Label>
                <Input
                  id={`${variant}-messenger-contact`}
                  value={messengerContact}
                  onChange={(e) => setMessengerContact(e.target.value)}
                  placeholder={t(`${prefix}.messengerContactPlaceholder`)}
                  className="bg-n-surface border-n-border text-n-text"
                  required
                  autoComplete="tel"
                  disabled={sending}
                />
              </div>
            </fieldset>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="btn-outline sm w-full sm:w-auto"
              disabled={sending}
            >
              {t(`${prefix}.cancel`)}
            </button>
            <button type="submit" className="btn-primary sm w-full sm:w-auto" disabled={sending}>
              {sending ? t(`${prefix}.submitSending`) : t(`${prefix}.submit`)}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
