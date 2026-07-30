import Infirmary from "../../../components/BoardingLife/Infirmary/Infirmary";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Infirmary & Medical Facilities",
  description:
    "Learn about the on-campus infirmary and medical care facilities available for boarding students at Tula's International School, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-life/infirmary-and-medical-facilities/",
  },
};

export default function InfirmaryPage() {
  return (
    <>
      <Navbar />
      <Infirmary />
      <Footer />
    </>
  );
}
