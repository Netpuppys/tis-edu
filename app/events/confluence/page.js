import EventConfluence from "../../../components/BeyondAcademics/EventConfluence";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Event Confluence",
  description:
    "Explore Confluence, the annual inter-school event hosted by Tula's International School, Dehradun, celebrating talent, culture and sportsmanship.",
  alternates: {
    canonical: "https://tis.edu.in/events/confluence/",
  },
};

export default function EventConfluencePage() {
  return (
    <>
      <Navbar />
      <EventConfluence />
      <Footer />
    </>
  );
}
