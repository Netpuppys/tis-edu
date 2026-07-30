import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Thank You",
  description:
    "Thank you for registering for Tula's International School's webinar, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-school/webinar/thank-you/",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ThankYouClient />;
}
