import InternationaltieUps from "../../../components/Academics/InternationalTieUps";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "International Tie-Ups & Collaborations",
  description:
    "Learn about Tula's International School's global partnerships and international tie-ups that give Dehradun boarding school students exposure beyond the classroom.",
  alternates: {
    canonical: "https://tis.edu.in/academics/international-tie-ups/",
  },
};

export default function InternationalTieUpsPage() {
  return (
    <>
      <Navbar />
      <InternationaltieUps />
      <Footer />
    </>
  );
}
