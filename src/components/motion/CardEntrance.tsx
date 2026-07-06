import { ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface CardEntranceProps {
  children: ReactNode;
  className?: string;
  /** Position dans la grille : décale l'entrée de index * 0.15s */
  index?: number;
}

/** Entrée de carte : scale 0.95 + fade, staggerée par index. */
export function CardEntrance({ children, className = "", index = 0 }: CardEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, scale: 0.95, y: 24 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay: index * 0.15, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
