import Facility from "../../../components/BoardingLife/Facilities/Facility";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Boarding Facilities",
  description:
    "Explore the on-campus boarding facilities at Tula's International School, Dehradun, including residential accommodation, recreation and student amenities.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-life/facilities/",
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <Facility />
      <Footer />
    </>
  );
}
