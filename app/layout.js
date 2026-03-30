import "./globals.css";
import Script from "next/script";
import ProvidersWrapper from "./provider";

export const metadata = {
  metadataBase: new URL("https://tis.edu.in"),
  title:
    "Best Boarding School in Dehradun, India | Tula's International School",
  description:
  "Best CBSE Boarding School in Dehradun, Uttarakhand | Tula's International School Offers World-class Residential Education for Boys & Girls. Top-ranked Co-ed Boarding With Modern Gurukul Campus, Holistic Learning & 100% Results. Admissions Open 2026-27.",

    authors: [{ name: "Tula's International School" }],
  publisher: "Tula's International School",

  keywords: [
    "Top Schools India",
    "Best Boarding Schools Dehradun",
    "Coed Residential Schools Uttarakhand",
    "CBSE International Schools",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Tula's International School",
    description:
      "Best Boarding School in Dehradun offering world-class education and holistic development.",
    url: "https://tis.edu.in",
    siteName: "Tula's International School",
    images: [
      {
        url: "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp",
        width: 1200,
        height: 630,
        alt: "Tula's International School",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR9HW9RM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Providers */}
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>

        <Script
  id="global-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "School",
          "name": "Tula's International School",
          "url": "https://tis.edu.in/",
          "logo": "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "9837983791",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/tulasinternationalschool/",
            "https://www.instagram.com/tulasinternationalschool/?hl=en",
            "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
            "https://twitter.com/tulas_intschool?lang=en",
            "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in"
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "Tula's International School",
          "image": "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
          "url": "https://tis.edu.in/",
          "telephone": "0135-2699444",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tula's International School",
            "addressLocality": "Dhoolkot, P.O –Selaqui, Chakrata Road, Dehradun",
            "postalCode": "248011",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/tulasinternationalschool",
            "https://x.com/Tulas_IntSchool",
            "https://www.instagram.com/tulasinternationalschool",
            "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
            "https://www.linkedin.com/in/tulasinternationalschool/",
            "https://tis.edu.in/"
          ]
        },
        {
          "@type": "WebSite",
          "name": "Tula's International School",
          "url": "https://tis.edu.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://tis.edu.in/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
  "@type": "Event",
  "name": "Boarding School Admission 2026-2027: Tula's International School",
  "description": "Boarding School Admissions 2026-2027 at Tula’s International School, Dehradun. Admissions open for Classes 4th-12th.",
  "image": "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp",
  "startDate": "2026-03-01T09:00:00+05:30",
  "endDate": "2026-09-30T18:00:00+05:30",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Tula's International School",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhoolkot, P.O – Selaqui, Chakrata Road",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248011",
      "addressCountry": "IN"
    }
  },
  "organizer": {
    "@type": "EducationalOrganization",
    "name": "Tula's International School",
    "url": "https://tis.edu.in"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://tis.edu.in/contact-us/",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01T09:00:00+05:30"
  }
}
      ]
    }),
  }}
/>

        {/* 🧠 Scripts for analytics (load AFTER page renders) */}
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

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nub3bd48zx");
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '343518338071033');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
