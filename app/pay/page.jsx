// app/pay/page.jsx
import PayClient from "./PayClient";

// Must be exported from a server component
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Pay Fee Online",
  description: "Pay your school fee online at Tula's International School, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/pay/",
  },
  // Transactional payment form — not meant to rank in search.
  robots: { index: false, follow: true },
};

export default function PaymentPage() {
  return <PayClient />;
}
