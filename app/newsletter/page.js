import Newsletter from "../../components/QuickLinks/Newsletter";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
export default function NewsletterPage() {
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apos;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>
      <Navbar />
      <Newsletter />
      <Footer />
    </>
  );
}
