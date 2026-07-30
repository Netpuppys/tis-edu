import WidthrawalPolicy from "../../../components/Admission/WidthrawalPolicy";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Withdrawal Policy",
  description:
    "Read the official student withdrawal policy of Tula's International School, a CBSE boarding school in Dehradun, Uttarakhand.",
  alternates: {
    canonical: "https://tis.edu.in/admission-procedure/withdrawal-policy/",
  },
};

export default function WidthrawalPolicyPage() {
  return (
    <>
      <Navbar />
      <WidthrawalPolicy />
      <Footer />
    </>
  );
}
