import Events from "../../../components/BeyondAcademics/Events";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Events & Celebrations",
  description:
    "Explore festivals, celebrations and cultural events at Tula's International School, a boarding school in Dehradun that nurtures community and tradition.",
  alternates: {
    canonical: "https://tis.edu.in/events/celebrations/",
  },
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}
