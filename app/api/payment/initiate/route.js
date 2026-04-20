// app/api/payment/initiate/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

const MERCHANT_CODE = process.env.PAYNIMO_MERCHANT_CODE || 'T1122272';
const SCHEME_CODE   = process.env.PAYNIMO_SCHEME_CODE   || 'FIRST';
const SALT          = process.env.PAYNIMO_ENCRYPTION_KEY || '9258299657DMFSTJ';

// Purely numeric txnId — matches Paynimo sample format
function generateTxnId() {
  return Date.now().toString();
}

// Token format confirmed by Worldline support email:
// merchantId|txnId|totalamount|accountNo|consumerId|consumerMobileNo|consumerEmailId
// |debitStartDate|debitEndDate|maxAmount|amountType|frequency
// |cardNumber|expMonth|expYear|cvvCode|SALT
//
// For standard one-time payment, eNACH fields are empty strings.
// CRITICAL: values here must EXACTLY match what is in consumerData below.
function generateToken({ merchantId, txnId, amount, consumerId, mobile, email }) {
  const parts = [
    merchantId,   // consumerData.merchantId
    txnId,        // consumerData.txnId
    amount,       // items[0].amount  (e.g. "5.00")
    '',           // accountNo        — empty for standard payment
    consumerId,   // consumerData.consumerId
    mobile,       // consumerData.consumerMobileNo
    email,        // consumerData.consumerEmailId
    '',           // debitStartDate   — empty
    '',           // debitEndDate     — empty
    '',           // maxAmount        — empty
    '',           // amountType       — empty
    '',           // frequency        — empty
    '',           // cardNumber       — empty
    '',           // expMonth         — empty
    '',           // expYear          — empty
    '',           // cvvCode          — empty
    SALT,         // Encryption Key = SALT (must be last)
  ];

  const tokenData = parts.join('|');
  const token = crypto.createHash('sha512').update(tokenData).digest('hex');

  console.log('══════════════════════════════════════');
  console.log('[tokenData] ', tokenData);
  console.log('[token]     ', token);
  console.log('[token len] ', token.length, 'hex chars');
  console.log('══════════════════════════════════════');

  return token;
}

export async function POST(request) {
  try {
    const { amount, name, email, mobile } = await request.json();

    if (!amount || !name || !email || !mobile) {
      return NextResponse.json(
        { error: 'All fields (amount, name, email, mobile) are required.' },
        { status: 400 },
      );
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return NextResponse.json({ error: 'Invalid amount.' }, { status: 400 });
    }

    // TEST MODE: Paynimo only allows ₹1–₹10. Remove after going live.
    if (numAmount < 1 || numAmount > 10) {
      return NextResponse.json(
        { error: 'In test mode, amount must be between ₹1 and ₹10.' },
        { status: 400 },
      );
    }

    const txnId     = generateTxnId();
    const amountStr = numAmount.toFixed(2); // "5.00" — confirmed by Worldline support
    const baseUrl   = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
    const returnUrl = `${baseUrl}/api/payment/callback`;

    const token = generateToken({
      merchantId: MERCHANT_CODE,
      txnId,
      amount:     amountStr,
      consumerId: email,
      mobile,
      email,
    });

    return NextResponse.json({
      features: {
        enableAbortResponse:            true,
        enableExpressPay:               true,
        enableInstrumentDeRegistration: true,
        enableMerTxnDetails:            true,
      },
      consumerData: {
        deviceId:          'WEBSH2',
        token,
        returnUrl,
        paymentMode:       'all',
        merchantLogoUrl:   '',
        merchantId:        MERCHANT_CODE,
        currency:          'INR',
        consumerId:        email,       // MUST match token field
        consumerMobileNo:  mobile,      // MUST match token field
        consumerEmailId:   email,       // MUST match token field
        txnId,
        merchantTxnId:     txnId,
        schemeCode:        SCHEME_CODE, // ← FIXED: was missing, must be "FIRST"
        consumerfirstName: name,
        items: [{
          itemId: 'first',             // matches Paynimo sample
          amount: amountStr,           // MUST match token field (e.g. "5.00")
          comAmt: '0',
        }],
        customStyle: {
          PRIMARY_COLOR_CODE:   '#45beaa',
          SECONDARY_COLOR_CODE: '#FFFFFF',
          BUTTON_COLOR_CODE_1:  '#2d8c8c',
          BUTTON_COLOR_CODE_2:  '#FFFFFF',
        },
      },
    });
  } catch (err) {
    console.error('[payment/initiate] Error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}