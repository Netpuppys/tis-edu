import AcademicArchievements from "../../../components/About TIS/AwardsAndArchievements/AcademicArchievements";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Awards & Achievements",
  description:
    "Explore the academic and co-curricular awards and achievements of Tula's International School, a top-ranked CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/awards-achievements/",
  },
};

export default function AwardsAndArchievementsPage() {
  return (
    <>
      <Navbar />
      <AcademicArchievements />
      <Footer />
    </>
  );
}
