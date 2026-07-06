import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface WordsPullUpProps {
  text: string;
  className?: string;
  /** Ajoute un astérisque superscript après le dernier mot */
  showAsterisk?: boolean;
  /** Anime dès le montage (hero above-the-fold) */
  immediate?: boolean;
  delay?: number;
  justify?: "center" | "start";
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  immediate = false,
  delay = 0,
  justify = "start",
  as: Tag = "div",
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: immediate ? "0px" : "-40px" });
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const visible = immediate || isInView;

  return (
    <Tag className={className}>
      <span
        ref={ref}
        className={`inline-flex flex-wrap gap-x-[0.25em] max-w-full ${
          justify === "center" ? "justify-center" : ""
        }`}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="overflow-hidden inline-flex">
            <motion.span
              className="inline-block relative"
              initial={reduced ? false : { y: "1.1em", opacity: 0 }}
              animate={visible ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 0.7, delay: delay + i * 0.08, ease: EASE }}
            >
              {word}
              {showAsterisk && i === words.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-[0.05em] -right-[0.35em] text-[0.31em] text-n-gold"
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
  justify?: "center" | "start";
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
  delay = 0,
  justify = "center",
  as: Tag = "div",
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const words = segments.flatMap((seg) =>
    seg.text.split(" ").filter(Boolean).map((word) => ({ word, className: seg.className ?? "" })),
  );

  return (
    <Tag className={className}>
      <span
        ref={ref}
        className={`inline-flex flex-wrap gap-x-[0.25em] ${
          justify === "center" ? "justify-center" : "justify-start"
        }`}
      >
        {words.map(({ word, className: wordClass }, i) => (
          <span key={`${word}-${i}`} className="overflow-hidden inline-flex">
            <motion.span
              className={`inline-block ${wordClass}`}
              initial={reduced ? false : { y: "1.1em", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 0.7, delay: delay + i * 0.08, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
