import {
  openNomosEmailClient,
  type AuditProtocol,
  type EmailRequestVariant,
  type NomosFormData,
} from "@/lib/contactEmail";
import type { Locale } from "@/i18n/translations";

export type SubmitNomosEmailPayload = {
  locale: Locale;
  variant: EmailRequestVariant;
  auditProtocol?: AuditProtocol;
  data: NomosFormData;
};

/** Ouvre la messagerie avec objet + long corps prérempli (FR/EN selon locale). */
export function submitNomosEmail(payload: SubmitNomosEmailPayload): void {
  const { locale, variant, data } = payload;
  openNomosEmailClient(
    locale,
    variant,
    data,
    variant === "audit" ? payload.auditProtocol : undefined,
  );
}
