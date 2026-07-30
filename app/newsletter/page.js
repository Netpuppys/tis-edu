import Newsletter from "../../components/QuickLinks/Newsletter";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "School Newsletter",
  description:
    "Read the latest newsletter from Tula's International School, Dehradun, featuring campus news, events and student achievements.",
  alternates: {
    canonical: "https://tis.edu.in/newsletter/",
  },
};

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <Newsletter />
      <Footer />
    </>
  );
}
