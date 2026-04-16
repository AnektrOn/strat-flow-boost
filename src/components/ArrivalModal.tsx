import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const OPEN_DELAY_MS = 500;

const ArrivalModal = () => {
  const { t, tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const m = tr.arrivalModal;

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAudit = () => {
    scrollTo("modal-s4");
    handleClose();
    setTimeout(() => document.getElementById("access")?.scrollIntoView({ behavior: "smooth" }), 300);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent
        aria-describedby="arrival-modal-description"
        className="section-dark border-0 w-[100vw] max-w-[100vw] h-[100vh] max-h-[100vh] overflow-hidden p-0 gap-0 rounded-none !left-0 !top-0 !translate-x-0 !translate-y-0 [&>button]:fixed [&>button]:right-6 [&>button]:top-6 [&>button]:z-[100] [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:w-11 [&>button]:h-11 [&>button]:rounded-none [&>button]:bg-white/10 [&>button]:text-[hsl(var(--surface-dark-foreground))] [&>button]:opacity-90 [&>button:hover]:opacity-100 [&>button:hover]:bg-white/20 [&>button]:border [&>button]:border-white/20"
      >
        <div id="arrival-modal-description" className="h-full overflow-y-auto overflow-x-hidden">
          {/* Nav */}
          <nav className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/10 bg-[hsl(var(--surface-dark))]/95 backdrop-blur-md">
            <div className="text-lg md:text-xl font-light tracking-[0.25em] text-[hsl(var(--surface-dark-foreground))]">
              NOM<span className="gold-accent">OS</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <LanguageSwitcher className="!border-white/20 !bg-white/5 [&_button]:!text-[hsl(var(--surface-dark-foreground))] [&_button]:opacity-90 [&_button:hover]:!opacity-100 [&_button:hover]:!text-[hsl(var(--surface-dark-foreground))]" />
              <button
                type="button"
                onClick={scrollToAudit}
                className="label-gold text-[9px] md:text-[10px] tracking-[0.25em] uppercase border border-[hsl(var(--gold))] py-2 px-4 md:px-6 hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--surface-dark))] transition-colors"
              >
                {t("arrivalModal.navCta")}
              </button>
            </div>
          </nav>

          {/* Section 1 — Choc */}
          <section className="min-h-[80vh] flex items-center border-b border-white/10">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="label-gold mb-8 flex items-center gap-3">
                  <span className="w-7 h-px bg-current opacity-60" />
                  {t("arrivalModal.tag")}
                </span>
                <DialogTitle className="sr-only">
                  {t("arrivalModal.title")} {t("arrivalModal.titleAccent")}
                </DialogTitle>
                <h2 className="heading-main mb-6">
                  {t("arrivalModal.title")}{" "}
                  <span className="gold-accent">{t("arrivalModal.titleAccent")}</span>
                </h2>
                <p className="text-body-light max-w-xl mb-10">
                  {t("arrivalModal.subtitle")}
                </p>
                <button
                  type="button"
                  onClick={() => scrollTo("modal-s3")}
                  className="cta-link border-white/30 hover:border-[hsl(var(--gold))] text-[hsl(var(--surface-dark-foreground))] inline-flex bg-[hsl(var(--gold))] border-[hsl(var(--gold))] text-[hsl(var(--surface-dark))] hover:bg-[hsl(var(--gold))]/90 py-4 px-8 text-[10px] md:text-xs tracking-[0.22em] uppercase"
                >
                  <span>{t("arrivalModal.cta")}</span>
                </button>
              </div>
              <div className="border border-white/10 bg-white/5 p-6 md:p-10 relative border-gold-left">
                <span className="absolute -top-px left-6 bg-[hsl(var(--surface-dark))] px-2 label-gold text-[9px] tracking-[0.2em]">
                  SIGNAL
                </span>
                <div className="text-5xl md:text-7xl font-light gold-accent leading-none">
                  {m.signalStat}{" "}
                  <span className="text-2xl md:text-4xl opacity-60">{m.signalUnit}</span>
                </div>
                <p className="text-xs uppercase tracking-widest opacity-50 mt-2">{m.signalLabel}</p>
                <p className="font-light text-sm opacity-70 leading-relaxed mt-6 pt-6 border-t border-white/10 italic">
                  {m.signalBody.includes(m.signalStrong)
                    ? <>
                        {m.signalBody.split(m.signalStrong)[0]}
                        <strong className="text-[hsl(var(--surface-dark-foreground))] not-italic font-normal">
                          {m.signalStrong}
                        </strong>
                        {m.signalBody.split(m.signalStrong)[1]}
                      </>
                    : m.signalBody}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Le bug */}
          <section className="py-20 md:py-28 px-6 md:px-12 bg-white/[0.02] border-b border-white/10">
            <div className="max-w-5xl mx-auto">
              <span className="label-gold mb-5 flex items-center gap-3">
                <span className="w-7 h-px bg-current opacity-60" />
                {m.s2.eyebrow}
              </span>
              <h2 className="heading-main mb-14 whitespace-pre-line">
                {m.s2.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10">
                {m.s2.cells.map((cell: { title: string; body: string; strong: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-[hsl(var(--surface-dark))] p-6 md:p-8 relative hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="absolute top-2 right-4 text-6xl md:text-7xl font-light text-white/[0.06] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="label-gold text-[9px] tracking-[0.25em] mb-4">{cell.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed relative z-10">
                      {cell.body.includes(cell.strong)
                        ? <>
                            {cell.body.split(cell.strong)[0]}
                            <strong className="text-[hsl(var(--surface-dark-foreground))]">{cell.strong}</strong>
                            {cell.body.split(cell.strong)[1]}
                          </>
                        : cell.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Deux offres */}
          <section id="modal-s3" className="py-20 md:py-28 px-6 md:px-12 border-b border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                <h2 className="heading-main whitespace-pre-line">
                  {m.s3.headTitle}
                </h2>
                <p className="font-light text-base md:text-lg text-white/60 italic max-w-md leading-relaxed">
                  {m.s3.headBody}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-white/10 bg-white/10">
                {/* Ascension */}
                <div className="bg-white/[0.03] p-8 md:p-10 relative overflow-hidden">
                  <span className="absolute bottom-0 right-0 text-[120px] md:text-[140px] font-light text-white/[0.06] leading-none pointer-events-none">
                    ASC
                  </span>
                  <div className="relative z-10">
                    <span className="inline-block label-gold text-[8px] tracking-[0.3em] border border-[hsl(var(--gold))]/25 py-1 px-3 mb-6">
                      {m.s3.asc.badge}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tight text-[hsl(var(--surface-dark-foreground))] mb-3">
                      {m.s3.asc.name}
                    </h3>
                    <p className="text-sm text-white/60 italic leading-relaxed mb-6 max-w-sm">
                      {m.s3.asc.tagline.includes(m.s3.asc.taglineStrong)
                        ? <>
                            {m.s3.asc.tagline.split(m.s3.asc.taglineStrong)[0]}
                            <strong className="not-italic text-[hsl(var(--surface-dark-foreground))]">{m.s3.asc.taglineStrong}</strong>
                            {m.s3.asc.tagline.split(m.s3.asc.taglineStrong)[1]}
                          </>
                        : m.s3.asc.tagline}
                    </p>
                    <div className="text-4xl md:text-5xl font-light text-[hsl(var(--surface-dark-foreground))] mb-1">
                      {m.s3.asc.price}
                    </div>
                    <p className="text-[9px] tracking-widest uppercase text-white/30 mb-8">{m.s3.asc.priceNote}</p>
                    <div className="w-full h-px bg-white/10 my-8" />
                    <ul className="space-y-3 mb-8">
                      {m.s3.asc.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-white/60 leading-relaxed">
                          <span className="gold-accent flex-shrink-0">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-l-2 border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 py-4 px-5 mb-8 italic text-sm text-[hsl(var(--gold))] leading-relaxed">
                      {m.s3.asc.promise}
                    </div>
                    <button
                      type="button"
                      onClick={scrollToAudit}
                      className="w-full py-4 text-center label-gold text-[10px] tracking-[0.22em] uppercase border border-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--surface-dark))] transition-colors"
                    >
                      {m.s3.asc.cta}
                    </button>
                    <p className="text-center text-[9px] tracking-widest uppercase text-white/30 mt-3">
                      {m.s3.asc.caveat}
                    </p>
                  </div>
                </div>
                {/* NOMOS */}
                <div className="bg-[hsl(var(--surface-dark))] p-8 md:p-10 border-l-0 lg:border-l-2 border-[hsl(var(--gold))] relative overflow-hidden">
                  <span className="absolute bottom-0 right-0 text-[120px] md:text-[140px] font-light text-white/[0.06] leading-none pointer-events-none">
                    NOM
                  </span>
                  <div className="relative z-10">
                    <span className="inline-block label-gold text-[8px] tracking-[0.3em] border border-[hsl(var(--gold))]/25 py-1 px-3 mb-6">
                      {m.s3.nom.badge}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tight text-[hsl(var(--surface-dark-foreground))] mb-3">
                      {m.s3.nom.name}
                    </h3>
                    <p className="text-sm text-white/60 italic leading-relaxed mb-6 max-w-sm">
                      {m.s3.nom.tagline.includes(m.s3.nom.taglineStrong)
                        ? <>
                            {m.s3.nom.tagline.split(m.s3.nom.taglineStrong)[0]}
                            <strong className="not-italic text-[hsl(var(--surface-dark-foreground))]">{m.s3.nom.taglineStrong}</strong>
                            {m.s3.nom.tagline.split(m.s3.nom.taglineStrong)[1]}
                          </>
                        : m.s3.nom.tagline}
                    </p>
                    <div className="text-4xl md:text-5xl font-light gold-accent mb-1">
                      {m.s3.nom.price}
                    </div>
                    <p className="text-[9px] tracking-widest uppercase text-white/30 mb-8">{m.s3.nom.priceNote}</p>
                    <div className="w-full h-px bg-white/10 my-8" />
                    <ul className="space-y-3 mb-8">
                      {m.s3.nom.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-white/60 leading-relaxed">
                          <span className="gold-accent flex-shrink-0">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-l-2 border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 py-4 px-5 mb-8 italic text-sm text-[hsl(var(--gold))] leading-relaxed">
                      {m.s3.nom.promise}
                    </div>
                    <button
                      type="button"
                      onClick={scrollToAudit}
                      className="w-full py-4 text-center text-[10px] tracking-[0.22em] uppercase bg-[hsl(var(--gold))] text-[hsl(var(--surface-dark))] hover:opacity-90 transition-opacity"
                    >
                      {m.s3.nom.cta}
                    </button>
                    <p className="text-center text-[9px] tracking-widest uppercase text-white/30 mt-3">
                      {m.s3.nom.caveat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Audit CTA */}
          <section id="modal-s4" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,hsl(var(--gold))/0.06,transparent_70%)]" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="label-gold mb-8 flex items-center justify-center gap-3">
                <span className="w-10 h-px bg-current opacity-50" />
                {m.s4.eyebrow}
                <span className="w-10 h-px bg-current opacity-50" />
              </span>
              <h2 className="heading-main mb-6">
                {m.s4.title}
                <span className="gold-accent block">{m.s4.titleAccent}</span>
              </h2>
              <p className="text-base md:text-xl font-light text-white/60 italic leading-relaxed mb-12">
                {m.s4.sub}
              </p>
              <div className="inline-block border border-white/10 bg-white/5 py-8 px-8 md:px-12 text-left border-gold-left mb-12">
                <ul className="space-y-3">
                  {m.s4.deliverables.map((d: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="gold-accent flex-shrink-0">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={scrollToAudit}
                className="inline-block bg-[hsl(var(--gold))] text-[hsl(var(--surface-dark))] text-[11px] tracking-[0.22em] uppercase py-5 px-12 hover:opacity-90 transition-opacity"
              >
                {m.s4.cta}
              </button>
              <p className="text-[9px] tracking-widest uppercase text-white/30 mt-5">
                {m.s4.note}
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm md:text-base font-light tracking-[0.25em] text-white/50">
            NOM<span className="gold-accent">OS</span>
            </div>
            <p className="text-[9px] tracking-widest text-white/30">
              {m.footer.copy}
            </p>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArrivalModal;
