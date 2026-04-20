'use client';

// app/pay/page.jsx
// Payment page for the Paynimo / Worldline checkout.
// Triggered by a navbar link → /pay
//
// Flow:
//   1. User fills in name, email, mobile, amount
//   2. "Pay Now" calls /api/payment/initiate (server generates checksum)
//   3. Client calls $.pnCheckout(config) → Paynimo popup opens
//   4. On completion, Paynimo POSTs to /api/payment/callback → redirect

import { useState, useEffect, useCallback } from 'react';

export const dynamic = 'force-dynamic'; // ← add this line

import { useSearchParams } from 'next/navigation';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Remove existing tag so the script re-executes fresh
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) existing.remove();
    const s = document.createElement('script');
    s.src = src;
    s.onload  = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export default function PaymentPage() {
  const searchParams = useSearchParams();

  // ── Form state ─────────────────────────────────────────────────────────────
  const [form, setForm] = useState({
    name:   '',
    email:  '',
    mobile: '',
    amount: '',
  });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(''); // 'cancelled' | ''

  // ── SDK load state ─────────────────────────────────────────────────────────
  const [checkoutReady, setCheckoutReady] = useState(false);

  // Show a banner if user cancelled and came back
  useEffect(() => {
    if (searchParams.get('status') === 'cancelled') setStatus('cancelled');
  }, [searchParams]);

  // ── Load Paynimo scripts in order ──────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        // 1. Load jQuery
        await loadScript('https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js');

        // 2. Confirm $ is available before loading checkout.js
        if (typeof window.$ === 'undefined') {
          console.error('jQuery failed to initialise');
          return;
        }

        // 3. Load Paynimo checkout SDK
        await loadScript('https://www.paynimo.com/paynimocheckout/server/lib/checkout.js');

        // 4. Confirm pnCheckout is available before enabling the button
        if (typeof window.$.pnCheckout !== 'function') {
          console.error('pnCheckout not available — checkout.js may have errored');
          return;
        }

        setCheckoutReady(true);
      } catch (e) {
        console.error('Failed to load Paynimo SDK:', e);
      }
    })();
  }, []);

  // ── Payment response handler (passed directly into pnCheckout config) ────
  function handleResponse(res) {
    const code = res?.paymentMethod?.paymentTransaction?.statusCode;
    if (code === '0300') {
      window.location.href = '/payment-success';
    } else if (code === '0398') {
      window.location.href = '/payment-pending';
    } else {
      window.location.href = '/payment-failed';
    }
  }

  // ── Form helpers ───────────────────────────────────────────────────────────
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = useCallback(() => {
    const errs = {};
    if (!form.name.trim())                    errs.name   = 'Name is required.';
    if (!/\S+@\S+\.\S+/.test(form.email))    errs.email  = 'Valid email required.';
    if (!/^[6-9]\d{9}$/.test(form.mobile))   errs.mobile = 'Valid 10-digit mobile required.';
    const amt = parseFloat(form.amount);
    if (isNaN(amt) || amt < 1 || amt > 10)   errs.amount = 'Amount must be between ₹1 and ₹10 (test mode).';
    return errs;
  }, [form]);

  // ── Payment trigger ────────────────────────────────────────────────────────
  const handlePay = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    if (!checkoutReady) {
      alert('Payment SDK is still loading, please wait a moment and try again.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/payment/initiate', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const config = await res.json();

      if (!res.ok) {
        alert(config.error || 'Could not initiate payment.');
        return;
      }

      // Inject responseHandler into consumerData (required by Paynimo SDK)
      const finalConfig = {
        ...config,
        consumerData: {
          ...config.consumerData,
          responseHandler: handleResponse,
        },
      };

      console.log('Paynimo config:', finalConfig);
      window.$.pnCheckout(finalConfig);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Make a Payment</h1>
            <p className="text-sm text-gray-500 mt-1">Powered by Worldline / Paynimo</p>
          </div>

          {/* Cancelled banner */}
          {status === 'cancelled' && (
            <div className="mb-4 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3 text-sm text-yellow-800">
              Your previous payment was cancelled. You can try again below.
            </div>
          )}

          {/* Form */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="9876543210"
                maxLength={10}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="5.00"
                  min="1"
                  max="10"
                  step="0.01"
                  className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.amount && <p className="mt-1 text-xs text-red-600">{errors.amount}</p>}
              <p className="mt-1 text-xs text-gray-400">
                Test mode: ₹1 – ₹10 only. Remove this limit after going live.
              </p>
            </div>

            {/* Pay button */}
            <button
              id="btnPay"
              onClick={handlePay}
              disabled={loading || !checkoutReady}
              className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading
                ? 'Initiating...'
                : !checkoutReady
                  ? 'Loading SDK...'
                  : 'Proceed to Pay'}
            </button>

            <p className="text-center text-xs text-gray-400">
              Your information is secured using industry-standard encryption.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
