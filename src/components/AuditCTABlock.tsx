import { Mail, ClipboardList, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";

const optionKeys = ["contactDirect", "auditInitial"] as const;

const AuditCTABlock = () => {
  const { t } = useLanguage();
  const { openContact, openAudit } = useEmailDialog();

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-[920px] mx-auto text-left">
      {optionKeys.map((key) => {
        const isGold = key === "auditInitial";
        const Icon = isGold ? ClipboardList : Mail;
        const prefix = `common.auditCta.${key}`;
        const className = `inline-flex items-center justify-between gap-3 px-5 py-3 border text-xs tracking-[0.15em] uppercase transition-colors ${
          isGold
            ? "border-n-gold text-n-gold hover:bg-n-gold/10"
            : "border-n-border text-n-text hover:border-n-muted"
        }`;

        return (
          <div
            key={key}
            className={`reveal flex flex-col p-8 rounded-lg border bg-n-surface transition-colors ${
              isGold
                ? "border-n-gold-dim hover:border-n-gold"
                : "border-n-border hover:border-n-muted"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 ${
                isGold ? "border-n-gold text-n-gold" : "border-n-border text-n-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>

            <p className="font-display text-2xl text-n-text mb-3 tracking-[0.05em] uppercase">
              {t(`${prefix}.name`)}
            </p>

            <p className="text-sm text-n-muted mb-8 flex-1">{t(`${prefix}.description`)}</p>

            <button
              type="button"
              onClick={() => (isGold ? openAudit("nomos") : openContact())}
              className={className}
            >
              <span>{t(`${prefix}.cta`)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const AuditIntroHeader = () => {
  const { t, getTr } = useLanguage();
  const deliverables = getTr("common.auditIntro.deliverables") as string[];

  return (
    <div className="reveal text-center max-w-[640px] mx-auto mb-10">
      <h3 className="h-sub mb-2">{t("common.auditIntro.title")}</h3>
      <p className="text-sm text-n-muted mb-6">{t("common.auditIntro.duration")}</p>
      <p className="text-sm text-n-text mb-4">{t("common.auditIntro.deliverablesLabel")}</p>
      <ul className="flex flex-col gap-2 text-sm text-n-muted text-left inline-block mx-auto">
        {deliverables.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuditCTABlock;
