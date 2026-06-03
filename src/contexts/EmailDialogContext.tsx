import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { NomosEmailDialog } from "@/components/NomosEmailDialog";
import type { AuditProtocol, EmailRequestVariant } from "@/lib/contactEmail";

type DialogState = {
  variant: EmailRequestVariant;
  auditProtocol: AuditProtocol;
} | null;

type EmailDialogContextValue = {
  openContact: () => void;
  openAudit: (protocol?: AuditProtocol) => void;
};

const EmailDialogContext = createContext<EmailDialogContextValue | null>(null);

export function EmailDialogProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DialogState>(null);

  const openContact = useCallback(() => {
    setState({ variant: "contact", auditProtocol: "hub" });
  }, []);

  const openAudit = useCallback((protocol: AuditProtocol = "nomos") => {
    setState({ variant: "audit", auditProtocol: protocol });
  }, []);

  const value = useMemo(() => ({ openContact, openAudit }), [openContact, openAudit]);

  return (
    <EmailDialogContext.Provider value={value}>
      {children}
      {state && (
        <NomosEmailDialog
          open={Boolean(state)}
          onOpenChange={(open) => {
            if (!open) setState(null);
          }}
          variant={state.variant}
          auditProtocol={state.auditProtocol}
        />
      )}
    </EmailDialogContext.Provider>
  );
}

export function useEmailDialog(): EmailDialogContextValue {
  const ctx = useContext(EmailDialogContext);
  if (!ctx) throw new Error("useEmailDialog must be used within EmailDialogProvider");
  return ctx;
}
