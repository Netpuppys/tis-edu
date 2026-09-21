import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Thank You",
  description:
    "Thank you for your admissions enquiry to Tulas International School, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-school/admission-open/thank-you/",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ThankYouClient />;
}
