import WhyTis from "../../../components/About TIS/WhyTis/WhyTis";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Why Choose TIS",
  description:
    "Discover why Tula's International School is one of the best CBSE co-ed boarding schools in Dehradun, offering modern facilities and holistic education.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/why-choose-us/",
  },
};

export default function WhyTisPage() {
  return (
    <>
      <Navbar />
      <WhyTis />
      <Footer />
    </>
  );
}
