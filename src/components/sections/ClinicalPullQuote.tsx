import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ClinicalPullQuoteProps = {
  children: ReactNode;
  className?: string;
  cite?: string;
};

/** Citation pleine largeur — rupture editorial dans le flux narrow. */
export function ClinicalPullQuote({ children, className, cite }: ClinicalPullQuoteProps) {
  return (
    <blockquote className={cn("clinical-pull-quote reveal", className)}>
      {children}
      {cite && <footer className="clinical-pull-quote-cite">{cite}</footer>}
    </blockquote>
  );
}
