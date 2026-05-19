export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#60bab1a4]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#60bab1a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-[#60bab1a4]">Payment Pending</h1>

        <p className="mt-3 text-gray-600">Your payment is being processed. Please do not refresh or go back.</p>

        <div className="mt-6 p-4 rounded-2xl border border-gray-100 bg-[#60bab1a4]/10">
          <p className="text-sm text-gray-700">This usually takes a few seconds to a minute depending on your bank.</p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button className="w-full bg-[#60bab1a4] text-white py-3 rounded-xl font-medium">Checking Status...</button>
          <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition">Go Back</button>
        </div>

        <p className="mt-6 text-xs text-gray-400">We will automatically update once payment is confirmed.</p>
      </div>
    </div>
  );
}