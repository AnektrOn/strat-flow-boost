import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ClinicalDefinitionBlockProps = {
  term: string;
  children: ReactNode;
  className?: string;
};

/** Bloc définition clinique — terme + corps, accent protocole. */
export function ClinicalDefinitionBlock({ term, children, className }: ClinicalDefinitionBlockProps) {
  return (
    <div className={cn("clinical-definition reveal", className)}>
      <h3 className="clinical-definition-term">{term}</h3>
      <div className="clinical-definition-body">{children}</div>
    </div>
  );
}
