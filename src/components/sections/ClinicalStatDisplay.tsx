import { cn } from "@/lib/utils";

type ClinicalStatDisplayProps = {
  value: string;
  label: string;
  detail?: string;
  className?: string;
};

/** Chiffre clinique en display — ancrage mémorable dans une section longform. */
export function ClinicalStatDisplay({ value, label, detail, className }: ClinicalStatDisplayProps) {
  return (
    <div className={cn("clinical-stat reveal", className)}>
      <p className="clinical-stat-value">{value}</p>
      <p className="clinical-stat-label">{label}</p>
      {detail && <p className="clinical-stat-detail">{detail}</p>}
    </div>
  );
}
