import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AuditEmailButton } from "@/components/AuditEmailButton";
import { WordsPullUp } from "@/components/motion/WordsPullUp";
import type { AuditProtocol } from "@/lib/contactEmail";

const EASE = [0.16, 1, 0.3, 1] as const;

type Accent = "teal" | "gold";

interface CinematicHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent: string;
  intro?: string;
  /** Ligne de promesse colorée */
  promise?: ReactNode;
  promiseClass?: string;
  cta: string;
  protocol: AuditProtocol;
  footnote?: string;
  accent?: Accent;
}

/** Hero pleine hauteur inset arrondi, fond génératif + noise, typographie cinétique. */
export function CinematicHero({
  eyebrow,
  title,
  titleAccent,
  intro,
  promise,
  promiseClass = "text-n-gold-warm",
  cta,
  protocol,
  footnote,
  accent = "teal",
}: CinematicHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-shell hero-shell--protocol min-h-[600px] flex items-center"
    >
        <div className="container-nomos narrow w-full text-center relative z-10 py-12 sm:py-16">
          {eyebrow && (
            <motion.span
              className="eyebrow-bordered mb-8 inline-block"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              {eyebrow}
            </motion.span>
          )}
          <h1 className="h-hero h-hero-cinematic mb-6 text-[clamp(2.6rem,1rem+6vw,6rem)]">
            <WordsPullUp as="span" text={title} className="block" delay={0.25} justify="center" immediate />
            <WordsPullUp
              as="span"
              text={titleAccent}
              className="block italic text-n-gold font-display hero-accent-line"
              delay={0.45}
              justify="center"
              immediate
            />
          </h1>
          {intro && (
            <motion.p
              className="section-intro mx-auto hero-body-copy"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            >
              {intro}
            </motion.p>
          )}
          {promise && (
            <motion.p
              className={`text-base font-medium mb-8 max-w-[56ch] mx-auto hero-body-copy ${promiseClass}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            >
              {promise}
            </motion.p>
          )}
          <motion.div
            className="mb-6"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          >
            <AuditEmailButton
              protocol={protocol}
              className={`btn-pill ${accent === "teal" ? "btn-pill--teal" : ""}`}
            >
              <span>{cta}</span>
              <span className="btn-pill-circle">
                <ArrowRight className="w-4 h-4" />
              </span>
            </AuditEmailButton>
          </motion.div>
          {footnote && (
            <motion.p
              className="text-xs text-n-faint tracking-wider"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
            >
              {footnote}
            </motion.p>
          )}
        </div>
    </section>
  );
}
