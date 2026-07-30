import Sport from "../../../components/BeyondAcademics/Sport";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Sports at TIS",
  description:
    "Learn about the sports facilities and programmes at Tula's International School, a CBSE boarding school in Dehradun with a strong sporting culture.",
  alternates: {
    canonical: "https://tis.edu.in/beyond-academics/sports/",
  },
};

export default function SportPage() {
  return (
    <>
      <Navbar />
      <Sport />
      <Footer />
    </>
  );
}
