import StreamOffered from "../../../components/Academics/StreamsOffered";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Streams Offered - Science, Commerce & Humanities",
  description:
    "Discover the academic streams offered at Tula's International School, Dehradun, including Science, Commerce and Humanities for Class 11 and 12 students.",
  alternates: {
    canonical: "https://tis.edu.in/academics/streams-offered/",
  },
};

export default function StreamsOfferedPage() {
  return (
    <>
      <Navbar />
      <StreamOffered />
      <Footer />
    </>
  );
}
