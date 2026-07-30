import "../globals.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/QuickLinks/Blog";
import BlogsHeader from "../../public/Banner/blogs.webp";
import BlogsHeaderMobile from "../../public/Banner/blogsMobile.webp";
import Header from "../../components/globalComponents/Header/Header";

export const metadata = {
  title: "Tula's International Boarding School Dehradun Blog",
  description:
    "Tula's International School One among top boarding, residential, CBSE, Co-ed boarding schools in Dehradun, Uttarakhand India. Visit blog for latest updates.",
  alternates: {
    canonical: "https://tis.edu.in/blog/",
  },
};

export default function blog() {
  return (
    <>
      {/* BlogPosting Schema Markup — this previously lived inside a next/head
          <Head> block, which is a no-op in the App Router, so it was never
          actually rendered. Moved here so it's part of the real HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tis.edu.in/blog/"
            },
            "headline": "Best Boarding School in Dehradun, India | Tula's International School",
            "description":
              "Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus.",
            "image": "https://tis.edu.in/_next/static/media/blogs.ee4c5683.webp",
            "author": {
              "@type": "Organization",
              "name": "Tula's International School",
              "url": "https://tis.edu.in/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Tula's International School",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tis.edu.in/"
              }
            },
            "datePublished": "2025-04-01T14:30:00Z",
            "dateModified": "2025-08-18T14:30:00Z"
          }),
        }}
      />

      <Navbar />
      <Header
        headerImg={BlogsHeader}
        headerImgMobile={BlogsHeaderMobile}
        title={"Blogs"}
        subtitle={
          "Your window into the inspiring world of talent, creativity, and culture at TIS"
        }
      />
      <Blog />
      <Footer />
    </>
  );
}
