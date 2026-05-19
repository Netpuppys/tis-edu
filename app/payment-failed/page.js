import Link from "next/link";


export default function Page() {
  return (
     <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#b90124]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#b90124]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-semibold text-[#b90124]">
          Payment Failed
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-600">
          Something went wrong while processing your payment. Please try again or use a different payment method.
        </p>

        {/* Info Box */}
        <div className="mt-6 p-4 rounded-2xl border border-gray-100 bg-[#60bab1a4]/10">
          <p className="text-sm text-gray-700">
            If the amount was deducted, it will be refunded within 5–7 business days.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link href={'/pay'} className="w-full bg-[#b90124] hover:bg-[#a00120] text-white py-3 rounded-xl font-medium transition">
            Retry Payment
          </Link>

          <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400">
          Need help? Contact support for instant assistance.
        </p>
      </div>
    </div>
  );
}