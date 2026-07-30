import OurManagement from "../../../components/About TIS/OurManagement/ourManagement";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Our Management",
  description:
    "Meet the management team behind Tula's International School, a CBSE co-ed boarding school in Dehradun committed to holistic student development.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/about-management/",
  },
};

export default function AboutManagementPage() {
  return (
    <>
      <Navbar />
      <OurManagement />
      <Footer />
    </>
  );
}
