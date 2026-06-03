import type { ReactNode } from "react";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import type { AuditProtocol } from "@/lib/contactEmail";
import { cn } from "@/lib/utils";

type AuditEmailButtonProps = {
  protocol?: AuditProtocol;
  className?: string;
  children: ReactNode;
};

export function AuditEmailButton({ protocol = "nomos", className, children }: AuditEmailButtonProps) {
  const { openAudit } = useEmailDialog();

  return (
    <button type="button" onClick={() => openAudit(protocol)} className={cn(className)}>
      {children}
    </button>
  );
}
