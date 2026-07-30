import TutionAndFianance from "../../../components/Admission/TutionAndFianance";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Scholarship Programmes",
  description:
    "Learn about scholarship and financial aid programmes available for students at Tula's International School, a CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/admission-procedure/scholarship-programmes/",
  },
};

export default function ScholarshipPage() {
  return (
    <>
      <Navbar />
      <TutionAndFianance />
      <Footer />
    </>
  );
}
