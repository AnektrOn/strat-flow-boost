import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

function AnimatedLetter({ char, progress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

/** Paragraphe dont chaque caractère passe de 20% à 100% d'opacité au scroll. */
export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden>
        {chars.map((char, i) => (
          <AnimatedLetter
            key={i}
            char={char}
            progress={scrollYProgress}
            index={i}
            total={chars.length}
          />
        ))}
      </span>
    </p>
  );
}
