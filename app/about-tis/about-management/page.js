import OurManagement from "../../../components/About TIS/OurManagement/ourManagement";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Head from "next/head";
export default function AboutManagementPage() {
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apos;s International
          School
        </title>
        <link rel="canonical" href="https://tis.edu.in/about-tis/about-management/" />
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>
      <Navbar />
      <OurManagement />
      <Footer />
    </>
  );
}
