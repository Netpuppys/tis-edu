import { MobileProvider } from "@/components/globalComponents/IsMobileContext";
import "./globals.css";
import Script from "next/script";
import { UtmProvider } from "@/components/globalComponents/utmParams";

export const metadata = {
  title:
    "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Bree+Serif&family=Pacifico&display=swap"
          rel="stylesheet"
        />

        {/* SEO SCHEMA TAGS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Tula's International School",
              alternateName: "TIS",
              url: "https://tis.edu.in/",
              logo: "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "0135-2699666",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "0135-2699444",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9837983791",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "Hindi"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/tulasinternationalschool",
                "https://www.instagram.com/tulasinternationalschool",
                "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
                "https://www.linkedin.com/in/tulasinternationalschool/",
                "https://x.com/Tulas_IntSchool",
                "https://tis.edu.in/",
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
                target: "https://tis.edu.in/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tula's International School",
              image:
                "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png",
              "@id": "",
              url: "https://tis.edu.in/",
              telephone: "0135-2699444",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tula's International School",
                addressLocality:
                  "Dhoolkot, P.O –Selaqui, Chakrata Road, Dehradun",
                postalCode: "248011",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/tulasinternationalschool",
                "https://x.com/Tulas_IntSchool",
                "https://www.instagram.com/tulasinternationalschool",
                "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
                "https://www.linkedin.com/in/tulasinternationalschool/",
                "https://tis.edu.in/",
              ],
            }),
          }}
        />
 <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Tula's International School",
              description:
                "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
              thumbnailUrl:
                "https://tis.edu.in/_next/static/media/blogs.ee4c5683.webp", // use an actual image file
              uploadDate: "2025-08-18T14:30:00Z", // fixed date
              duration: "PT5M10S",
              contentUrl: "https://tis.edu.in/virtual-tour/",
              embedUrl: "https://tis.edu.in/virtual-tour/",
              potentialAction: {
                "@type": "SeekToAction",
                target:
                  "https://tis.edu.in/virtual-tour/={seek_to_second_number}",
                "startOffset-input": "required name=seek_to_second_number",
              },
            }),
          }}
        />

        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KR9HW9RM"
        />
        <Script
          id="gtag-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-KR9HW9RM");
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZL190LFCTT"
        />
        <Script
          id="gtag-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-ZL190LFCTT");
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          id="clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nub3bd48zx"
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
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR9HW9RM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MobileProvider>
          <UtmProvider>{children}</UtmProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
