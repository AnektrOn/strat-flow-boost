import {
  openNomosEmailClient,
  openNomosGmailCompose,
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

function auditProtocolFor(payload: SubmitNomosEmailPayload) {
  return payload.variant === "audit" ? payload.auditProtocol : undefined;
}

export function openNativeMailClient(payload: SubmitNomosEmailPayload): void {
  const { locale, variant, data } = payload;
  openNomosEmailClient(locale, variant, data, auditProtocolFor(payload));
}

export function openGmailInBrowser(payload: SubmitNomosEmailPayload): void {
  const { locale, variant, data } = payload;
  openNomosGmailCompose(locale, variant, data, auditProtocolFor(payload));
}
