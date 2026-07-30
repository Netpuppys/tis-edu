import Terms from "../..//components/FooterPages/Terms-condition";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using the Tula's International School website and services, Dehradun, Uttarakhand.",
  alternates: {
    canonical: "https://tis.edu.in/terms-conditions/",
  },
};

export default function TermsConditionPage() {
  return (
    <>
      <Navbar />
      <Terms />
      <Footer />
    </>
  );
}
