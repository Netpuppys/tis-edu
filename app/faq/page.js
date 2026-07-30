import FAQ from "../../components/FooterPages/faq";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description:
    "Find answers to common questions about admissions, boarding life, fees and academics at Tula's International School, a CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/faq/",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FAQ />
      <Footer />
    </>
  );
}
