import "./globals.css";
import Script from "next/script";
import ProvidersWrapper from "./provider";

export const metadata = {
  metadataBase: new URL("https://tis.edu.in"),
  title: {
    default:
      "Boarding School in Dehradun India | CBSE Co-Ed Boarding School | Tula's International School",
    template: "%s | Tula's International School",
  },
  description:
    "Tula's International School is a CBSE-affiliated co-educational boarding school in Dehradun India for boys and girls from Class 4 to 12. Admissions open for 2026-27.",
  keywords: [
    "boarding school in dehradun india",
    "cbse co-ed boarding school in dehradun",
    "cbse boarding school in uttarakhand india",
    "coed boarding school in dehradun india",
    "residential school in uttarakhand india",
    "boarding school for boys and girls in dehradun",
    "class 4 to 12 boarding school in dehradun",
    "tula's international school dehradun",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boarding School in Dehradun India | Tula's International School",
    description:
      "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.",
    url: "/",
    siteName: "Tula's International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/tis-campus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tula's International School campus in Dehradun India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Boarding School in Dehradun India | Tula's International School",
    description:
      "CBSE-affiliated co-ed boarding school for boys and girls from Class 4 to 12.",
    images: ["/images/tis-campus-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};

export default function RootLayout({ children }) {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "School",
        "@id": "https://tis.edu.in/#school",
        name: "Tula's International School",
        url: "https://tis.edu.in/",
        logo: "https://tis.edu.in/logo.png",
        image:
          "https://tis.edu.in/wp-content/uploads/2023/06/campus-view.jpg",
        description:
          "Tula's International School is a CBSE-affiliated co-educational boarding school in Dehradun, Uttarakhand.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chakrata Road, Dhoolkot",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          postalCode: "248011",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.3551",
          longitude: "77.8961",
        },
        telephone: "+91-9458319102",
        email: "info@tis.edu.in",
        sameAs: [
          "https://www.facebook.com/tulasinternationalschool/",
          "https://www.instagram.com/tulasinternationalschool/",
          "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://tis.edu.in/#localbusiness",
        name: "Tula's International School",
        image: "https://tis.edu.in/logo.png",
        url: "https://tis.edu.in/",
        telephone: "+91-135-2699444",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dhoolkot, P.O – Selaqui, Chakrata Road",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          postalCode: "248011",
          addressCountry: "IN",
        },
      },

      {
        "@type": "WebSite",
        "@id": "https://tis.edu.in/#website",
        url: "https://tis.edu.in/",
        name: "Tula's International School",
        publisher: {
          "@id": "https://tis.edu.in/#school",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://tis.edu.in/#webpage",
        url: "https://tis.edu.in/",
        name: "Boarding School in Dehradun India | Tula's International School",
        isPartOf: {
          "@id": "https://tis.edu.in/#website",
        },
        about: {
          "@id": "https://tis.edu.in/#school",
        },
        description:
          "Tula's International School is a CBSE-affiliated co-educational boarding school in Dehradun India.",
      },

      // {
      //   "@type": "Event",
      //   "@id": "https://tis.edu.in/#event",
      //   name: "Admissions Open 2026-2027",
      //   startDate: "2026-03-01T09:00:00+05:30",
      //   endDate: "2026-09-30T18:00:00+05:30",
      //   eventStatus: "https://schema.org/EventScheduled",
      //   eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      //   location: {
      //     "@type": "Place",
      //     name: "Tula's International School",
      //   },
      // },

      {
        "@type": "Course",
        "@id": "https://tis.edu.in/#course",
        name: "CBSE Boarding School Program",
        description:
          "Tula's International School offers CBSE co-ed boarding education from Class 4 to 12.",
        provider: {
          "@id": "https://tis.edu.in/#school",
        },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(unifiedSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="antialiased">
        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR9HW9RM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ProvidersWrapper>{children}</ProvidersWrapper>

          {/* <Script
          src="https://ai-service.edustoke.com/widget?botId=bot_0reoptd6"
          strategy="afterInteractive"
        /> */}

        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KR9HW9RM"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZL190LFCTT"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZL190LFCTT');
            `,
          }}
        />
      </body>
    </html>
  );
}