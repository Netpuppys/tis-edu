// app/page.js (server component)

import Footer from "../components/Footer/Footer";
import HomePage from "../components/Pages/Home/Home";
import Navbar from "../components/globalComponents/navbar/Navbar";
import "../app/globals.css";

export const metadata = {
  title: "Best Boarding School in Dehradun | CBSE Co Ed School India",
  description:
    "Discover one of the best CBSE boarding schools in Dehradun, offering co-ed and day boarding education with modern learning, sports and holistic development. Contact now for the top boarding school in Dehradun",
  alternates: {
    canonical: "https://tis.edu.in/",
  },
  verification: {
    google: "45l-c_yntJwqdKfX55egBlZhXwd2-u6Cz8sVHUWOvDM",
  },
};

// SEO-provided schema (from SEO sheet) — homepage only.
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://tis.edu.in/#organization",
      name: "Tula's International School",
      alternateName: "TIS",
      url: "https://tis.edu.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://tis.edu.in/images/tis-campus-og.jpg",
        width: 1200,
        height: 630,
      },
      image: "https://tis.edu.in/images/tis-campus-og.jpg",
      description:
        "Tula's International School (TIS) is a top-ranked CBSE-affiliated co-ed boarding and day school in Dehradun, Uttarakhand, offering world-class residential education for boys and girls from Class 4 to 12.",
      email: "info@tis.edu.in",
      telephone: "+91-9837983791",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dhoolkot, P.O - Selaqui, Chakrata Road",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248011",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.3430336,
        longitude: 77.8891652,
      },
      hasMap:
        "https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9837983791",
          contactType: "admissions",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-135-2699444",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/tulasinternationalschool/",
        "https://twitter.com/tulas_intschool",
        "https://www.linkedin.com/school/tulas-international-school/",
        "https://www.instagram.com/tulasinternationalschool/",
        "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      ],
      areaServed: { "@type": "Country", name: "India" },
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "School",
      "@id": "https://tis.edu.in/#school",
      name: "Tula's International School",
      alternateName: "TIS",
      url: "https://tis.edu.in/",
      logo: "https://tis.edu.in/images/tis-campus-og.jpg",
      image: "https://tis.edu.in/images/tis-campus-og.jpg",
      description:
        "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12, offering holistic residential education with a Modern Gurukul approach.",
      email: "info@tis.edu.in",
      telephone: "+91-9837983791",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dhoolkot, P.O - Selaqui, Chakrata Road",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248011",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.3430336,
        longitude: 77.8891652,
      },
      sameAs: [
        "https://www.facebook.com/tulasinternationalschool/",
        "https://twitter.com/tulas_intschool",
        "https://www.linkedin.com/school/tulas-international-school/",
        "https://www.instagram.com/tulasinternationalschool/",
        "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      ],
      parentOrganization: { "@id": "https://tis.edu.in/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* SEO-provided schema (sheet) — rendered on homepage only.
          Note: Next.js App Router pages can't inject into the literal
          <head> tag (only the root layout owns <head>); Google explicitly
          reads JSON-LD anywhere in the HTML, so this is the standard
          Next.js pattern for page-specific structured data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />
      <HomePage />
      <Footer />

      {/* Video Schema */}
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
          }),
        }}
      />
    </>
  );
}
