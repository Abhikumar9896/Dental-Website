import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { BRAND_LOGO_BASE64 } from './_brand-logo-base64.js'

type AppointmentPayload = {
  name?: string
  phone?: string
  email?: string
  date?: string
  treatment?: string
  description?: string
}

/** Must match Content-ID; @domain form is required by many clients (Gmail/Outlook). */
const BRAND_CID = 'brandlogo@dentalesthetique'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatDate(date: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  const datePart = parsed.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  if (!date.includes('T')) return datePart
  const timePart = parsed.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
  })
  return `${datePart} at ${timePart}`
}

/**
 * Same branding as site header:
 * tree logo (CID) + "Dental" blue + "Esthetique" pink.
 */
function brandHeader(): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:24px 32px;background:#ffffff;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:middle;padding-right:10px;">
                <img
                  src="cid:${BRAND_CID}"
                  alt="Dental Esthetique"
                  width="42"
                  height="45"
                  style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:42px;height:45px;"
                />
              </td>
              <td style="vertical-align:middle;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:700;line-height:1.2;color:#1E73BE;">
                  Dental <span style="color:#D35B8F;">Esthetique</span>
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`
}

function detailRow(label: string, value: string, isLast = false): string {
  return `
    <tr>
      <td style="padding:14px 0;${isLast ? '' : 'border-bottom:1px solid #ece7e1;'}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td width="38%" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#A66689;vertical-align:top;padding-right:12px;">
              ${label}
            </td>
            <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:500;color:#28231F;vertical-align:top;line-height:1.5;">
              ${escapeHtml(value)}
            </td>
          </tr>
        </table>
      </td>
    </tr>`
}

function brandAttachment() {
  // Buffer content only - do not set `encoding` (that would double-encode and break the PNG).
  return [
    {
      filename: 'dental-esthetique-logo.png',
      content: Buffer.from(BRAND_LOGO_BASE64, 'base64'),
      cid: BRAND_CID,
      contentDisposition: 'inline' as const,
      contentType: 'image/png',
    },
  ]
}

/**
 * Doctor / clinic notification only.
 * Patient fills the website form → this mail goes to MAIL_TO (doctors).
 */
function buildDoctorNotificationHtml(
  data: Required<AppointmentPayload>,
  clinicEmail: string,
): string {
  const descriptionBlock = data.description
    ? detailRow('Notes / Description', data.description, true)
    : ''

  const rows = [
    detailRow('Patient Name', data.name),
    detailRow('Phone', data.phone),
    detailRow('Email', data.email),
    detailRow('Preferred Date & Time', formatDate(data.date)),
    detailRow('Treatment', data.treatment, !data.description),
    descriptionBlock,
  ].join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Appointment Booked</title>
</head>
<body style="margin:0;padding:0;background:#F5F7FA;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#F5F7FA;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);">
          ${brandHeader()}

          <tr>
            <td style="height:4px;background:#0A5BA8;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="height:3px;background:#A66689;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#A66689;">
                Clinic Alert · For Doctors
              </p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:700;color:#0A5BA8;line-height:1.3;">
                New appointment booked
              </h1>
              <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#555;">
                <strong>${escapeHtml(data.name)}</strong> has booked an appointment from the website.
                Please review the details below and contact the patient to confirm.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#F9F4F1;border-radius:10px;">
                <tr>
                  <td style="padding:8px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                      ${rows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="border-radius:8px;background:#A66689;">
                    <a
                      href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Appointment confirmation - ${data.name}`)}"
                      style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;"
                    >
                      Email Patient
                    </a>
                  </td>
                  <td width="12"></td>
                  <td style="border-radius:8px;background:#0A5BA8;">
                    <a
                      href="tel:${escapeHtml(data.phone.replace(/\s+/g, ''))}"
                      style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;"
                    >
                      Call Patient
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#999;">
                Tip: Reply to this email to message the patient directly.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px;background:#0A5BA8;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#ffffff;">
                Dental Esthetique - Doctor Notification
              </p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#d6e6f5;">
                55, Vindhyachal Marg, Block B, Sector 22, Noida, Uttar Pradesh<br />
                <a href="tel:+919818862265" style="color:#d6e6f5;text-decoration:none;">+91 98188 62265</a> | <a href="tel:01204266344" style="color:#d6e6f5;text-decoration:none;">0120 4266 344</a><br />
                <a href="mailto:${escapeHtml(clinicEmail)}" style="color:#ffffff;text-decoration:none;">${escapeHtml(clinicEmail)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = (req.body ?? {}) as AppointmentPayload
  const name = body.name?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const date = body.date?.trim() ?? ''
  const treatment = body.treatment?.trim() ?? ''
  const description = body.description?.trim() ?? ''

  if (!name || !phone || !email || !date || !treatment) {
    return res.status(400).json({ error: 'All required fields must be filled' })
  }

  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Please enter a valid email address' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  // Doctors' / clinic inbox
  const mailTo = process.env.MAIL_TO

  if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
    console.error('Missing SMTP configuration')
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const from = process.env.SMTP_FROM || `"Dental Esthetique Appointments" <${smtpUser}>`
  const payload = { name, phone, email, date, treatment, description }

  const textBody = [
    'CLINIC ALERT - New appointment booked on the website',
    '',
    `Patient Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Preferred Date & Time: ${date}`,
    `Treatment: ${treatment}`,
    description ? `Notes: ${description}` : '',
    '',
    'Please contact the patient to confirm the appointment.',
  ]
    .filter(Boolean)
    .join('\n')

  try {
    // Only doctors/clinic receive this - not a patient-facing email
    await transporter.sendMail({
      from,
      to: mailTo,
      replyTo: email,
      subject: `New Appointment Booked - ${name} (${treatment})`,
      text: textBody,
      html: buildDoctorNotificationHtml(payload, mailTo),
      attachments: brandAttachment(),
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Failed to send appointment email to doctors:', error)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
