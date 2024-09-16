import { MobileProvider } from "../../components/globalComponents/IsMobileContext";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import ThankYouPage from "../../components/ThankYou";
export default function CareersPage() {
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apso;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>

      <MobileProvider>
        <Navbar />
        <ThankYouPage />

        <Footer />
      </MobileProvider>
    </>
  );
}
