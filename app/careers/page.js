import Careers from "../../components/QuickLinks/Careers";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "Careers at TIS",
  description:
    "Explore current teaching and non-teaching job openings at Tula's International School, a leading CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/careers/",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <Careers />
      <Footer />
    </>
  );
}
