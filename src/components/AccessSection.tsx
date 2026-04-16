import { ArrowRight, Mail, ClipboardList } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAIL = "contact@humancatalystbeacon.com";

function buildMailto(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const AccessSection = () => {
  const { t, tr } = useLanguage();
  const { mailtoContact, mailtoAudit } = tr.access;
  const contactHref = buildMailto(EMAIL, mailtoContact.subject, mailtoContact.body);
  const auditHref = buildMailto(EMAIL, mailtoAudit.subject, mailtoAudit.body);

  return (
    <section id="access" className="section-light py-24 md:py-40 px-6 border-t border-foreground/5">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <span className="label-gold mb-4 block">{t("access.availability")}</span>
        <h2 className="heading-main mb-6">{t("access.title")}</h2>
        <p className="text-lg font-light opacity-50 mb-16">{t("access.duration")}</p>

        <div className="max-w-2xl mx-auto text-left mb-16 space-y-2 text-sm font-light opacity-60">
          <p>{t("access.youLeave")}</p>
          {tr.access.items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
          <div className="p-8 border border-foreground/5 bg-card shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
              <Mail className="w-5 h-5 opacity-40 group-hover:text-gold group-hover:opacity-100 transition-all" />
            </div>
            <h3 className="text-xl font-light mb-4 uppercase tracking-widest">{t("access.directTitle")}</h3>
            <p className="text-sm opacity-50 font-light leading-relaxed mb-8">
              {tr.access.directP}
            </p>
            <a href={contactHref} className="cta-link group/link">
              <span>{t("access.directCta")}</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* PDF téléchargement masqué pour le moment
          <div className="p-8 border border-foreground/5 bg-card shadow-sm hover:shadow-md transition-all group hidden">
            ...
          </div>
          */}

          <div className="p-8 border border-foreground/5 bg-card shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
              <ClipboardList className="w-5 h-5 opacity-40 group-hover:text-gold group-hover:opacity-100 transition-all" />
            </div>
            <h3 className="text-xl font-light mb-4 uppercase tracking-widest">{t("access.auditTitle")}</h3>
            <p className="text-sm opacity-50 font-light leading-relaxed mb-8">
              {tr.access.auditP}
            </p>
            <a href={auditHref} className="cta-link group/link">
              <span>{t("access.auditCta")}</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
