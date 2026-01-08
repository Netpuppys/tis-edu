import "./globals.css";
import Script from "next/script";
import ProvidersWrapper from "./provider";

export const metadata = {
  title:
    "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
  alternates: {
    canonical: "https://tis.edu.in/",
  },
  openGraph: {
    title: "Tula's International School",
    description:
      "Best Boarding School in Dehradun offering world-class education and holistic development.",
    url: "https://tis.edu.in/",
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
