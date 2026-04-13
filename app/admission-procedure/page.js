import Apply from "../../components/Admission/Apply";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// ✅ SEO Metadata (App Router way)
export const metadata = {
  title:
    "Best Boarding School in Dehradun (India) | Tula's International School",
  description:
    "Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
};

export default function AdmissionPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "@id": "https://tis.edu.in/admission-procedure/#2026-27",
    "url": "https://tis.edu.in/admission-procedure/",
    "name": "Tula's International School Admission 2026-27 (Classes 4-12)",
    "description":
      "CBSE boarding school admissions open Classes 4 to 12. Modern Gurukul campus, Dehradun. Visit or apply March 1 - September 30, 2026. +91-9837983791",
    "image":
      "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
    "startDate": "2026-03-01T09:00:00+05:30",
    "endDate": "2026-09-30T18:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode":
      "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Tula's International School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Dhoolkot, P.O. Selaqui, Chakrata Road",
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "postalCode": "248011",
        "addressCountry": "IN",
      },
      "telephone": "+91-9837983791",
    },
    "organizer": {
      "@type": "EducationalOrganization",
      "name": "Tula's International School",
      "url": "https://tis.edu.in",
      "telephone": "+91-9837983791",
    },
    "performer": {
      "@type": "EducationalOrganization",
      "name": "Tula's International School",
    },
    "offers": {
      "@type": "Offer",
      "url": "https://tis.edu.in/admission-procedure/",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01T09:00:00+05:30",
    },
  };

  return (
    <>
      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <Navbar />
      <Apply />
      <Footer />
    </>
  );
}