import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import type { AuditProtocol } from "@/lib/contactEmail";

type MobileCTAVariant = "default" | "ascension" | "metaphysique" | "aegis";

type MobileCTABarProps = {
  variant?: MobileCTAVariant;
};

const labelKey: Record<MobileCTAVariant, string> = {
  default: "common.mobileCta.default",
  ascension: "common.mobileCta.ascension",
  metaphysique: "common.mobileCta.metaphysique",
  aegis: "common.mobileCta.aegis",
};

const protocolByVariant: Record<MobileCTAVariant, AuditProtocol> = {
  default: "nomos",
  ascension: "ascension",
  metaphysique: "metaphysique",
  aegis: "aegis",
};

const MobileCTABar = ({ variant = "default" }: MobileCTABarProps) => {
  const { t } = useLanguage();
  const { openAudit } = useEmailDialog();

  return (
    <div className="mobile-cta-bar sm:hidden">
      <button type="button" className="btn-primary w-full" onClick={() => openAudit(protocolByVariant[variant])}>
        {t(labelKey[variant])}
      </button>
    </div>
  );
};

export default MobileCTABar;
