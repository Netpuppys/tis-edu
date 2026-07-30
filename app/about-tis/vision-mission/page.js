import Mission from "../../../components/About TIS/Mission/Mission";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Vision & Mission",
  description:
    "Discover the vision and mission of Tula's International School, a CBSE co-ed boarding school in Dehradun committed to holistic, future-ready education.",
  alternates: {
    canonical: "https://tis.edu.in/about-tis/vision-mission/",
  },
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <Mission />
      <Footer />
    </>
  );
}
