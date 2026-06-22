import type { Locale } from "@/i18n/translations";

export const CONTACT_EMAIL = "contact@protocolenomos.com";

/** NOMOS palette — inline for email clients */
const C = {
  bg: "#0A0B0D",
  surface: "#111214",
  surface2: "#161719",
  border: "#252628",
  text: "#E2E0DA",
  muted: "#8A8880",
  faint: "#55534E",
  gold: "#C9A96E",
  goldDim: "#8A7548",
  teal: "#2D969A",
  white: "#F5F5F0",
} as const;

export type ContactExpectation = "message" | "email" | "call";

export type MessengerApp = "whatsapp" | "telegram";

export type NomosFormData = {
  companyName: string;
  referral: string;
  expectation: ContactExpectation;
  messengerApp?: MessengerApp;
  messengerContact?: string;
};

export function needsMessengerContact(expectation: ContactExpectation): boolean {
  return expectation === "message" || expectation === "call";
}

export type EmailRequestVariant = "contact" | "audit";

export type AuditProtocol = "hub" | "nomos" | "ascension" | "metaphysique" | "aegis";

const expectationLabel: Record<Locale, Record<ContactExpectation, string>> = {
  fr: { message: "Message", email: "E-mail", call: "Appel" },
  en: { message: "Message", email: "Email", call: "Call" },
};

const messengerAppLabel: Record<Locale, Record<MessengerApp, string>> = {
  fr: { whatsapp: "WhatsApp", telegram: "Telegram" },
  en: { whatsapp: "WhatsApp", telegram: "Telegram" },
};

const protocolLabel: Record<Locale, Record<AuditProtocol, string>> = {
  fr: {
    hub: "Portail d'entrée — diagnostic",
    nomos: "NOMOS — Protocole CRISIS",
    ascension: "ASCENSION — Protocole LEVEL UP",
    metaphysique: "Dimension Métaphysique",
    aegis: "AEGIS — Exocortex APP",
  },
  en: {
    hub: "Entry portal — diagnostic",
    nomos: "NOMOS — CRISIS Protocol",
    ascension: "ASCENSION — LEVEL UP Protocol",
    metaphysique: "Metaphysical dimension",
    aegis: "AEGIS — Exocortex APP",
  },
};

const shellTitle: Record<Locale, Record<EmailRequestVariant, string>> = {
  fr: { contact: "Demande de contact", audit: "Candidature audit stratégique" },
  en: { contact: "Contact request", audit: "Strategic audit application" },
};

const shellSubtitle: Record<Locale, Record<EmailRequestVariant, string>> = {
  fr: {
    contact: "Premier point de contact — réponse sous 48h ouvrées",
    audit: "Audit stratégique 45 min — offert, sur sélection",
  },
  en: {
    contact: "First contact — response within 48 business hours",
    audit: "45 min strategic audit — offered, by selection",
  },
};

const footerTagline: Record<Locale, string> = {
  fr: "Système neuro-opérationnel pour dirigeants · Protocoles propriétaires",
  en: "Neuro-operational system for leaders · Proprietary protocols",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type FieldEntry = { label: string; value: string; highlight?: boolean };

/** Styled data row — card-like field block */
function dataFieldRow(entry: FieldEntry, isLast: boolean): string {
  const accent = entry.highlight ? C.teal : C.goldDim;
  const marginBottom = isLast ? "0" : "12px";
  return `
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:${marginBottom};">
  <tr>
    <td style="background-color:${C.surface2};border:1px solid ${C.border};border-left:3px solid ${accent};border-radius:6px;padding:14px 18px;">
      <p style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:${C.goldDim};line-height:1.2;">
        ${entry.label}
      </p>
      <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.45;color:${C.text};">
        ${escapeHtml(entry.value)}
      </p>
    </td>
  </tr>
</table>`;
}

function htmlShell(
  locale: Locale,
  variant: EmailRequestVariant,
  fields: FieldEntry[],
): string {
  const title = shellTitle[locale][variant];
  const subtitle = shellSubtitle[locale][variant];
  const docTitle = variant === "contact" ? "Contact NOMOS" : "Audit NOMOS";
  const accentColor = variant === "audit" ? C.teal : C.gold;
  const badge =
    variant === "audit"
      ? locale === "fr"
        ? "AUDIT"
        : "AUDIT"
      : locale === "fr"
        ? "CONTACT"
        : "CONTACT";

  const fieldsHtml = fields
    .map((f, i) => dataFieldRow(f, i === fields.length - 1))
    .join("");

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${docTitle}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.bg};-webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${C.bg};min-height:100%;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;">
          <!-- Top gold rule -->
          <tr>
            <td style="padding:0 0 24px;border-top:2px solid ${C.goldDim};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="height:1px;background-color:${C.gold};font-size:0;line-height:0;max-width:120px;">&nbsp;</td>
                  <td style="width:100%;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Main card -->
          <tr>
            <td style="background-color:${C.surface};border:1px solid ${C.border};border-radius:10px;overflow:hidden;">
              <!-- Header -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:32px 36px 28px;border-bottom:1px solid ${C.border};background-color:${C.surface2};">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 12px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:${C.gold};">
                            <span style="color:${accentColor};margin-right:8px;">◈</span> NOMOS
                          </p>
                          <span style="display:inline-block;margin-bottom:16px;padding:4px 10px;border:1px solid ${accentColor};border-radius:4px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;font-weight:600;letter-spacing:0.2em;color:${accentColor};">
                            ${badge}
                          </span>
                          <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;font-style:normal;color:${C.white};line-height:1.2;letter-spacing:-0.01em;">
                            ${title}
                          </h1>
                          <p style="margin:14px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;line-height:1.5;color:${C.muted};max-width:420px;">
                            ${subtitle}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Fields -->
                <tr>
                  <td style="padding:28px 36px 32px;">
                    ${fieldsHtml}
                  </td>
                </tr>
                <!-- Footer strip -->
                <tr>
                  <td style="padding:20px 36px 24px;border-top:1px solid ${C.border};background-color:${C.bg};">
                    <p style="margin:0 0 8px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${C.faint};">
                      ${footerTagline[locale]}
                    </p>
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:12px;font-style:italic;color:${C.goldDim};">
                      protocolenomos.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Bottom rule -->
          <tr>
            <td style="padding:24px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;color:${C.faint};letter-spacing:0.15em;">
                    ◈ &nbsp; NOMOS
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldLabels(locale: Locale) {
  return locale === "fr"
    ? {
        company: "Nom de l'entreprise",
        referral: "Comment nous avez-vous connus",
        expectation: "Votre attente",
        protocol: "Protocole / page",
        messenger: "WhatsApp ou Telegram",
      }
    : {
        company: "Company name",
        referral: "How you found us",
        expectation: "Preferred follow-up",
        protocol: "Protocol / page",
        messenger: "WhatsApp or Telegram",
      };
}

function formatMessengerLine(locale: Locale, data: NomosFormData): string | null {
  if (!needsMessengerContact(data.expectation) || !data.messengerApp || !data.messengerContact?.trim()) {
    return null;
  }
  const app = messengerAppLabel[locale][data.messengerApp];
  return `${app} — ${data.messengerContact.trim()}`;
}

function buildFieldEntries(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): FieldEntry[] {
  const labels = fieldLabels(locale);
  const entries: FieldEntry[] = [];

  if (variant === "audit" && auditProtocol) {
    entries.push({
      label: labels.protocol,
      value: protocolLabel[locale][auditProtocol],
      highlight: true,
    });
  }

  entries.push(
    { label: labels.company, value: data.companyName },
    { label: labels.referral, value: data.referral },
    { label: labels.expectation, value: expectationLabel[locale][data.expectation] },
  );

  const messenger = formatMessengerLine(locale, data);
  if (messenger) {
    entries.push({ label: labels.messenger, value: messenger });
  }

  return entries;
}

export function getNomosEmailHtml(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): string {
  return htmlShell(locale, variant, buildFieldEntries(locale, variant, data, auditProtocol));
}

const expectationFollowUp: Record<
  Locale,
  Record<ContactExpectation, string>
> = {
  fr: {
    message:
      "Je souhaite être recontacté(e) par message (WhatsApp ou Telegram — coordonnées ci-dessous).",
    email: "Je souhaite être recontacté(e) par e-mail à l'adresse depuis laquelle j'envoie ce message.",
    call: "Je souhaite être recontacté(e) par téléphone ou visio — coordonnées ci-dessous si besoin.",
  },
  en: {
    message:
      "I would like to be reached by message (WhatsApp or Telegram — details below).",
    email: "I would like to be reached by email at the address I am sending from.",
    call: "I would like to be reached by phone or video call — contact details below if needed.",
  },
};

const mailtoIntro: Record<Locale, Record<EmailRequestVariant, string>> = {
  fr: {
    contact: `Bonjour,

Je vous écris depuis le site protocolenomos.com pour une demande de contact avec l'équipe NOMOS.

${shellSubtitle.fr.contact}. Merci de prendre connaissance des informations ci-dessous et de me répondre selon mon mode de contact indiqué.`,
    audit: `Bonjour,

Je vous écris depuis le site protocolenomos.com pour candidater à l'audit stratégique NOMOS.

${shellSubtitle.fr.audit}. Je confirme mon intérêt pour une session de lecture stratégique (45 minutes) et vous transmets les éléments demandés ci-dessous.`,
  },
  en: {
    contact: `Hello,

I am writing from protocolenomos.com to get in touch with the NOMOS team.

${shellSubtitle.en.contact}. Please review the information below and reply using my preferred contact method.`,
    audit: `Hello,

I am writing from protocolenomos.com to apply for the NOMOS strategic audit.

${shellSubtitle.en.audit}. I confirm my interest in a strategic reading session (45 minutes) and provide the requested details below.`,
  },
};

const mailtoClosing: Record<Locale, Record<EmailRequestVariant, string>> = {
  fr: {
    contact: `Merci pour votre retour. Je reste disponible pour échanger selon mon attente ci-dessus.

Bien cordialement,`,
    audit: `Merci d'étudier ma candidature. Je reste disponible pour planifier l'audit selon mon mode de contact indiqué.

Bien cordialement,`,
  },
  en: {
    contact: `Thank you for your reply. I remain available to connect as indicated above.

Best regards,`,
    audit: `Thank you for reviewing my application. I remain available to schedule the audit using my preferred contact method.

Best regards,`,
  },
};

function plainTextField(label: string, value: string): string {
  const line = "─".repeat(Math.max(40, label.length + 6));
  return `${label}\n${line}\n${value}`;
}

export function getNomosEmailPlainText(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): string {
  const labels = fieldLabels(locale);
  const divider = "══════════════════════════════════════════════";
  const section = "──────────────────────────────────────────────";

  const blocks: string[] = [
    mailtoIntro[locale][variant],
    "",
    divider,
    `◈ NOMOS — ${shellTitle[locale][variant].toUpperCase()}`,
    footerTagline[locale],
    divider,
    "",
    locale === "fr" ? "INFORMATIONS TRANSMISES" : "DETAILS PROVIDED",
    section,
    "",
  ];

  if (variant === "audit" && auditProtocol) {
    blocks.push(
      plainTextField(labels.protocol, protocolLabel[locale][auditProtocol]),
      "",
    );
  }

  blocks.push(
    plainTextField(labels.company, data.companyName),
    "",
    plainTextField(labels.referral, data.referral),
    "",
    plainTextField(labels.expectation, expectationLabel[locale][data.expectation]),
    "",
    locale === "fr" ? "PRÉCISION SUR MON ATTENTE" : "FOLLOW-UP PREFERENCE",
    section,
    expectationFollowUp[locale][data.expectation],
  );

  const messenger = formatMessengerLine(locale, data);
  if (messenger) {
    blocks.push(
      "",
      plainTextField(labels.messenger, messenger),
    );
  }

  blocks.push(
    "",
    divider,
    mailtoClosing[locale][variant],
    "",
    locale === "fr"
      ? `Site : protocolenomos.com\nContact : ${CONTACT_EMAIL}`
      : `Website: protocolenomos.com\nContact: ${CONTACT_EMAIL}`,
    locale === "fr"
      ? "Réponse attendue sous 48h ouvrées."
      : "Expected response within 48 business hours.",
  );

  return blocks.join("\n");
}

function getNomosEmailComposeParams(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
) {
  return {
    to: CONTACT_EMAIL,
    subject: getNomosEmailSubject(locale, variant, data.companyName, auditProtocol),
    body: getNomosEmailPlainText(locale, variant, data, auditProtocol),
  };
}

export function buildNomosMailtoUrl(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): string {
  const { to, subject, body } = getNomosEmailComposeParams(
    locale,
    variant,
    data,
    auditProtocol,
  );
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Compose Gmail dans le navigateur (même destinataire, objet et corps que mailto). */
export function buildNomosGmailComposeUrl(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): string {
  const { to, subject, body } = getNomosEmailComposeParams(
    locale,
    variant,
    data,
    auditProtocol,
  );
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function openNomosEmailClient(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): void {
  window.location.href = buildNomosMailtoUrl(locale, variant, data, auditProtocol);
}

export function openNomosGmailCompose(
  locale: Locale,
  variant: EmailRequestVariant,
  data: NomosFormData,
  auditProtocol?: AuditProtocol,
): void {
  window.open(
    buildNomosGmailComposeUrl(locale, variant, data, auditProtocol),
    "_blank",
    "noopener,noreferrer",
  );
}

export function getNomosEmailSubject(
  locale: Locale,
  variant: EmailRequestVariant,
  companyName: string,
  auditProtocol?: AuditProtocol,
): string {
  if (variant === "contact") {
    const prefix = locale === "fr" ? "Contact NOMOS" : "NOMOS Contact";
    return `${prefix} — ${companyName}`;
  }
  const prefix = locale === "fr" ? "Audit NOMOS" : "NOMOS Audit";
  const proto = auditProtocol ? ` · ${protocolLabel[locale][auditProtocol]}` : "";
  return `${prefix}${proto} — ${companyName}`;
}

/** @deprecated Use NomosFormData */
export type ContactFormData = NomosFormData;

export const getContactEmailHtml = (locale: Locale, data: NomosFormData) =>
  getNomosEmailHtml(locale, "contact", data);

export const getContactEmailPlainText = (locale: Locale, data: NomosFormData) =>
  getNomosEmailPlainText(locale, "contact", data);

export const getContactEmailSubject = (locale: Locale, companyName: string) =>
  getNomosEmailSubject(locale, "contact", companyName);

