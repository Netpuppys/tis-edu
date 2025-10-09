import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";

// Dynamically import client-only providers
const MobileProvider = dynamic(
  () =>
    import("@/components/globalComponents/IsMobileContext").then(
      (mod) => mod.MobileProvider
    ),
  { ssr: false }
);

const UtmProvider = dynamic(
  () =>
    import("@/components/globalComponents/utmParams").then(
      (mod) => mod.UtmProvider
    ),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Best Boarding School in Dehradun, India | Tula's International School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <link rel="canonical" href="https://tis.edu.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Tula's International School" />
        <meta
          property="og:description"
          content="Best Boarding School in Dehradun offering world-class education and holistic development."
        />
        <meta property="og:url" content="https://tis.edu.in/" />
        <meta property="og:site_name" content="Tula's International School" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tula's International School" />
      </head>

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

        {/* Client-only providers */}
        <MobileProvider>
          <UtmProvider>{children}</UtmProvider>
        </MobileProvider>

        {/* Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KR9HW9RM"
        />

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

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
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
