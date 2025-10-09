import "./globals.css";
import AnalyticsAndProviders from "./AnalyticsAndProviders";

export const metadata = {
  title: "Best Boarding School in Dehradun, India | Tula's International School",
  description:
    "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education.",
  alternates: { canonical: "https://tis.edu.in/" },
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
        <AnalyticsAndProviders>{children}</AnalyticsAndProviders>
      </body>
    </html>
  );
}
