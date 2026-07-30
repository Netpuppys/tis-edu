import ContactUs from "../../components/QuickLinks/ContactUs";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tula's International School, Dehradun for admissions enquiries, campus visits and general information.",
  alternates: {
    canonical: "https://tis.edu.in/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
}
