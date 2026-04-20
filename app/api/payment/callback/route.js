// app/api/payment/callback/route.js
// Paynimo POSTs the payment result here (via the returnUrl / successCallbackUrl).
// Parse the response, verify it, then redirect the user to the right page.

import { NextResponse } from 'next/server';

/**
 * Paynimo status codes:
 *   0300 → Success
 *   0398 → Initiated / Pending
 *   anything else → Failure / Cancelled
 */
function resolveRedirect(statusCode, baseUrl) {
  if (statusCode === '0300') return `${baseUrl}/payment-success`;
  if (statusCode === '0398') return `${baseUrl}/payment-pending`;
  return `${baseUrl}/payment-failed`;
}

// Paynimo sends the response as a POST with a pipe-separated "msg" field.
export async function POST(request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Paynimo sends application/x-www-form-urlencoded
    const formData = await request.formData();
    const msg      = formData.get('msg') || '';

    // The "msg" value is a pipe-separated string:
    // statusCode|statusMessage|txnId|amount|merchantCode|...
    const parts      = msg.split('|');
    const statusCode = parts[0];   // e.g. "0300"
    const statusMsg  = parts[1];   // e.g. "SUCCESS"
    const txnId      = parts[2];
    const amount     = parts[3];

    console.log('[payment/callback]', { statusCode, statusMsg, txnId, amount });

    // ── Optional: save the transaction to your database here ─────────────────
    // await db.transactions.upsert({ txnId, statusCode, amount });
    // ─────────────────────────────────────────────────────────────────────────

    const redirectUrl = resolveRedirect(statusCode, baseUrl);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (err) {
    console.error('[payment/callback] Error:', err);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${baseUrl}/payment-failed`, { status: 303 });
  }
}

// Paynimo may also call back with GET in some integration modes
export async function GET(request) {
  const baseUrl     = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const { searchParams } = new URL(request.url);
  const statusCode  = searchParams.get('statusCode') || '';
  const redirectUrl = resolveRedirect(statusCode, baseUrl);
  return NextResponse.redirect(redirectUrl, { status: 303 });
}
