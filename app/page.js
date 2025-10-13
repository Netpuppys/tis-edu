// app/page.js (server component by default)

import Footer from "../components/Footer/Footer";
import HomePage from "../components/Pages/Home/Home";
import Navbar from "../components/globalComponents/navbar/Navbar";
import "../app/globals.css";

export const metadata = {
  title: "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
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

      {/* ✅ JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "Tula's International School",
            url: "https://tis.edu.in/",
            logo: "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "9837983791",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "Hindi"],
            },
            sameAs: [
              "https://www.facebook.com/tulasinternationalschool/",
              "https://www.instagram.com/tulasinternationalschool/?hl=en",
              "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
              "https://twitter.com/tulas_intschool?lang=en",
              "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Tula's International School",
            url: "https://tis.edu.in/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://tis.edu.in/{search_term_string}https://tis.edu.in/contact-us/",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
