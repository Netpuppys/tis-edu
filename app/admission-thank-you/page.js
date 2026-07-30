import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ThankYouPage from "../../components/ThankYou";
export const metadata = {
  title: "Thank You",
  description:
    "Thank you for your admission enquiry to Tula's International School, Dehradun. Our admissions team will be in touch shortly.",
  alternates: {
    canonical: "https://tis.edu.in/admission-thank-you/",
  },
  robots: { index: false, follow: true },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <ThankYouPage />
      <Footer />
    </>
  );
}
