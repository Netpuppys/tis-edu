// app/page.js (server component by default)

import Footer from "../components/Footer/Footer";
import HomePage from "../components/Pages/Home/Home";
import Navbar from "../components/globalComponents/navbar/Navbar";
import "../app/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
  canonical: "https://tis.edu.in/",

};

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="45l-c_yntJwqdKfX55egBlZhXwd2-u6Cz8sVHUWOvDM"
        />

        {/* Organization Schema */}
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
                "https://tis.edu.in/",
                "https://twitter.com/tulas_intschool?lang=en",
                "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
              ],
            }),
          }}
        />

        {/* Website Schema */}
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
      </Head>

      {/* ✅ Components marked "use client" inside their own files */}
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
