import ClubAndSocieties from "../../../components/BeyondAcademics/ClubAndSocieties";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Clubs & Societies",
  description:
    "Explore the student clubs and societies at Tula's International School, Dehradun that encourage leadership, creativity and teamwork beyond academics.",
  alternates: {
    canonical: "https://tis.edu.in/beyond-academics/clubs-and-societies/",
  },
};

export default function ClubAndSocietiesPage() {
  return (
    <>
      <Navbar />
      <ClubAndSocieties />
      <Footer />
    </>
  );
}
