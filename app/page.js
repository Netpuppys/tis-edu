// app/page.js (server component)

import Footer from "../components/Footer/Footer";
import HomePage from "../components/Pages/Home/Home";
import Navbar from "../components/globalComponents/navbar/Navbar";
import "../app/globals.css";

export const metadata = {
  title: "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Best CBSE Boarding School in Dehradun, Uttarakhand | Tula's International School Offers World-class Residential Education for Boys & Girls. Top-ranked Co-ed Boarding With Modern Gurukul Campus, Holistic Learning & 100% Results. Admissions Open 2026-27.",
  alternates: {
    canonical: "https://tis.edu.in/",
  },
  verification: {
    google: "45l-c_yntJwqdKfX55egBlZhXwd2-u6Cz8sVHUWOvDM",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />

      {/* ✅ Video Schema (Your Provided Schema) */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Tula's International School",
      "description": "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus in Dehradun. Boarding Schools Admission Open 2026-2027",
      "thumbnailUrl": "https://tis.edu.in",
      "uploadDate": "2024-03-25T09:00:00+05:30",
      "contentUrl": "https://tis.edu.in/virtual-tour/",
      "embedUrl": "https://tis.edu.in/virtual-tour/",
      "potentialAction": {
        "@type": "SeekToAction",
        "target": "https://tis.edu.in/virtual-tour/={seek_to_second_number}",
        "startOffset-input": "required name=seek_to_second_number"
      }
    })
  }}
/>
    </>
  );
}
