import PrivacyPolicy from "../../components/FooterPages/Privacy-Policy";
import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Tula's International School's privacy policy to understand how we collect, use and protect the personal information of visitors, parents and students.",
  alternates: {
    canonical: "https://tis.edu.in/privacy-policy/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
