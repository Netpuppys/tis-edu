import Headmaster from "../../../components/About TIS/Headmaster/Headmaster";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Principal's Message",
  description:
    "Read a welcome message from the Principal of Tula's International School, Dehradun, on the school's vision for holistic, modern education.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/principal-message/",
  },
};

export default function PrincipalMessagePage() {
  return (
    <>
      <Navbar />
      <Headmaster />
      <Footer />
    </>
  );
}
