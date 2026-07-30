import FeeStructure from "../../../components/Admission/FeeStructure";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Boarding School Fee Structure in Dehradun | TIS Admissions",
  description:
    "View the latest fee structure of a boarding school in Dehradun, TIS, a leading CBSE boarding school in Dehradun with transparent admission fees. Contact us now",
  alternates: {
    canonical: "https://tis.edu.in/admission-procedure/fee-structure/",
  },
};

export default function FeeStructurePage() {
  return (
    <>
      <Navbar />
      <FeeStructure />
      <Footer />
    </>
  );
}
