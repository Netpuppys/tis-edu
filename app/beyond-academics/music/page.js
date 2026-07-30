import Music from "../../../components/BeyondAcademics/Music";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Music Programme",
  description:
    "Discover the music programme at Tula's International School, Dehradun, nurturing student talent through vocal and instrumental training.",
  alternates: {
    canonical: "https://tis.edu.in/beyond-academics/music/",
  },
};

export default function MusicPage() {
  return (
    <>
      <Navbar />
      <Music />
      <Footer />
    </>
  );
}
