import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PillButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "gold" | "teal";
  className?: string;
  "aria-label"?: string;
}

/** CTA pilule avec cercle-flèche, style cinématique. */
export function PillButton({
  children,
  to,
  onClick,
  variant = "gold",
  className = "",
  "aria-label": ariaLabel,
}: PillButtonProps) {
  const cls = `btn-pill ${variant === "teal" ? "btn-pill--teal" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-pill-circle">
        <ArrowRight className="w-4 h-4" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
