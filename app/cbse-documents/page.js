import MandatoryDisclosure from "../../components/MandatoryDisclosure/MandatoryDisclosure";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "CBSE Mandatory Disclosure",
  description:
    "View the CBSE mandatory disclosure documents and compliance information for Tula's International School, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/cbse-documents/",
  },
};

export default function MandatoryDisclosurePage() {
  return (
    <>
      <Navbar />
      <MandatoryDisclosure />
      <Footer />
    </>
  );
}
