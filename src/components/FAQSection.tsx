import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type FaqItem = { q: string; a: string };

const FAQSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const faqs = getTr("nomos.faq.items") as FaqItem[];

  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("nomos.faq.title")}</h2>

        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="reveal border-b border-n-border group">
              <summary className="py-5 font-medium cursor-pointer flex justify-between items-center text-base list-none [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-lg text-n-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 text-n-muted text-sm max-w-[60ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
