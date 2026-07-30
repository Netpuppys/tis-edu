import OurHistory from "../../../components/About TIS/OurHistory/OurHistory";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Our History",
  description:
    "Discover the history and founding story of Tula's International School, a CBSE boarding school in Dehradun established to deliver world-class residential education.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/our-history/",
  },
};

export default function OurHistoryPage() {
  return (
    <>
      <Navbar />
      <OurHistory />
      <Footer />
    </>
  );
}
