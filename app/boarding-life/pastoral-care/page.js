import PastoralCare from "../../../components/BoardingLife/PastoralCare/PastoralCare";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Pastoral Care",
  description:
    "Discover the pastoral care system at Tula's International School that supports the emotional wellbeing of boarding students in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-life/pastoral-care/",
  },
};

export default function PastoralCarePage() {
  return (
    <>
      <Navbar />
      <PastoralCare />
      <Footer />
    </>
  );
}
