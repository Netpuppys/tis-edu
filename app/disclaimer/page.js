import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Disclaimer from "@/components/FooterPages/Disclaimer";
export const metadata = {
  title: "Disclaimer",
  description:
    "Read the official disclaimer for Tula's International School's website, Dehradun, covering the use of content, images and information published online.",
  alternates: {
    canonical: "https://tis.edu.in/disclaimer/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <Disclaimer/>
      <Footer />
    </>
  );
}
