import { AuditEmailButton } from "@/components/AuditEmailButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type ProtocolLayer = {
  num: string;
  title: string;
  sub: string;
  body: string;
  result: string;
};

type ProtocolSession = { title: string; body: string };

const ProtocolSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const layers = getTr("nomos.protocol.layers") as ProtocolLayer[];
  const sessions = getTr("nomos.protocol.sessions") as ProtocolSession[];

  return (
    <section ref={ref} id="protocol" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.protocol.title")}
          <br />
          {t("nomos.protocol.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("nomos.protocol.intro")}</p>

        <div className="reveal text-center mb-12">
          <span className="eyebrow block mb-2">{t("nomos.protocol.eyebrow")}</span>
          <h3 className="font-display text-xl">{t("nomos.protocol.name")}</h3>
        </div>

        <div className="flex flex-col gap-10 mb-12">
          {layers.map((l) => (
            <div key={l.num} className="reveal border border-n-border rounded-lg p-8 relative">
              <span
                className="absolute top-4 right-6 text-5xl font-bold leading-none font-body"
                style={{ color: "hsl(var(--color-surface-2))" }}
              >
                {l.num}
              </span>
              <h4 className="text-lg text-n-text font-semibold mb-1">{l.title}</h4>
              <p className="text-xs text-n-faint mb-4">{l.sub}</p>
              <p className="text-n-muted">{l.body}</p>
              <p className="text-n-teal font-medium mt-4">{l.result}</p>
            </div>
          ))}
        </div>

        <div className="reveal bg-n-surface border border-n-border rounded-lg p-10 my-12">
          <h3 className="font-display text-xl text-n-gold mb-8 font-normal">
            {t("nomos.protocol.concreteTitle")}
          </h3>
          {sessions.map((session, i) => (
            <div
              key={session.title}
              className={i < sessions.length - 1 ? "pb-8 mb-8 border-b border-n-border" : ""}
            >
              <h4 className="text-n-gold text-sm font-semibold mb-3 uppercase tracking-wider">
                {session.title}
              </h4>
              <p className="text-sm text-n-muted">{session.body}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-sm text-n-muted text-center mb-8">
          {(() => {
            const full = t("nomos.protocol.commitment");
            const strong = t("nomos.protocol.commitmentStrong");
            const parts = full.split(strong);
            if (parts.length === 2) {
              return (
                <>
                  {parts[0]}
                  <strong className="text-n-text">{strong}</strong>
                  {parts[1]}
                </>
              );
            }
            return full;
          })()}
        </p>

        <div className="reveal text-center mt-8">
          <AuditEmailButton protocol="nomos" className="btn-primary">
            {t("nomos.protocol.cta")}
          </AuditEmailButton>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
