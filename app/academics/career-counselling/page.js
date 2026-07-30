import CareerCounselling from "../../../components/Academics/CareerCounselling";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Career Counselling Services",
  description:
    "Tula's International School offers dedicated career counselling to help boarding school students in Dehradun make informed choices about higher education and careers.",
  alternates: {
    canonical: "https://tis.edu.in/academics/career-counselling/",
  },
};

export default function CareerCounsellingPage() {
  return (
    <>
      <Navbar />
      <CareerCounselling />
      <Footer />
    </>
  );
}
