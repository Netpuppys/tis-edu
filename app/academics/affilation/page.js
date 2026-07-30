import Curriculum from "../../../components/Academics/Curriculum";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "CBSE Affiliation & Curriculum",
  description:
    "Tula's International School is a CBSE-affiliated boarding school in Dehradun offering a structured curriculum from Class 4 to 12 for holistic academic growth.",
  alternates: {
    canonical: "https://tis.edu.in/academics/affilation/",
  },
};

export default function AffilationPage() {
  return (
    <>
      <Navbar />
      <Curriculum />
      <Footer />
    </>
  );
}
