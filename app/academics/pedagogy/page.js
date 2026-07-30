import Pedagogy from "../../../components/Academics/Pedagogy";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "CBSE Curriculum & Teaching Pedagogy",
  description:
    "Learn about the modern teaching pedagogy and CBSE curriculum approach at Tula's International School, a top boarding school in Dehradun focused on holistic learning.",
  alternates: {
    canonical: "https://tis.edu.in/academics/pedagogy/",
  },
};

export default function PedagogyPage() {
  return (
    <>
      <Navbar />
      <Pedagogy />
      <Footer />
    </>
  );
}
