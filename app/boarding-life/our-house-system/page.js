import OurHousesystem from "../../../components/BoardingLife/Houses/OurHouseSystem";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Our House System",
  description:
    "Learn about the residential house system at Tula's International School, Dehradun, that builds community and leadership among boarding students.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-life/our-house-system/",
  },
};

export default function OurHouseSystemPage() {
  return (
    <>
      <Navbar />
      <OurHousesystem />
      <Footer />
    </>
  );
}
