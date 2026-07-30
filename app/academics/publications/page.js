import Publication from "../../../components/Academics/Publication";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "School Publications & Magazines",
  description:
    "Explore student publications, magazines and creative writing from Tula's International School, a CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/academics/publications/",
  },
};

export default function PublicationPage() {
  return (
    <>
      <Navbar />
      <Publication />
      <Footer />
    </>
  );
}
