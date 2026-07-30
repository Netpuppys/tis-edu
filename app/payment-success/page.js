import Link from "next/link";

export const metadata = {
  title: "Payment Successful",
  description: "Your payment to Tula's International School, Dehradun has been successfully processed.",
  alternates: {
    canonical: "https://tis.edu.in/payment-success/",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#60bab1a4]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#60bab1a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-[#60bab1a4]">Payment Successful</h1>

        <p className="mt-3 text-gray-600">Your payment has been successfully processed.</p>

        <div className="mt-6 p-4 rounded-2xl border border-gray-100 bg-[#60bab1a4]/10">
          <p className="text-sm text-gray-700">A confirmation receipt has been sent to your email.</p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link href={'/'} className="w-full bg-[#60bab1a4] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">Go to Home</Link>
          {/* <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition">Go to Home</button> */}
        </div>

        <p className="mt-6 text-xs text-gray-400">Thank you ❤️</p>
      </div>
    </div>
  );
}