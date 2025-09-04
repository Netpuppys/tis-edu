// app/[slug]/page.js
import React from "react";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";

export const revalidate = 60; // ISR for revalidation every 60s

// --- Fetch single blog data ---
async function fetchBlogData(slug) {
  try {
    const res = await fetch(`https://blog.tis.edu.in/api/v1/post/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const { data } = await res.json();
    return data || null;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

// --- Clean blog content ---
const cleanContent = (content) => {
  if (!content) return "";
  let cleaned = content.replace(/<p><\/p>/g, "<br /><br />");
  cleaned = cleaned.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "");
  return cleaned;
};

// --- Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  const url = `https://tis.edu.in/${blog.slug}`;
  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || "",
    alternates: { canonical: url },
    openGraph: {
      url,
      title: blog.meta_title || blog.title,
      description: blog.meta_description || "",
      images: blog.banner_img ? [blog.banner_img] : [],
    },
  };
}

// --- Blog Page ---
export default async function SlugPage({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return (
      <div>
        <h2>Blog not found</h2>
      </div>
    );
  }

  const canonicalUrl = `https://tis.edu.in/${blog.slug}`;
  const publisherLogo =
    "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png";

  // ✅ BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: [blog.banner_img],
    author: {
      "@type": "Person",
      name: blog.author_name || "TIS Team",
    },
    publisher: {
      "@type": "Organization",
      name: "TIS",
      logo: { "@type": "ImageObject", url: publisherLogo },
    },
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    description: blog.meta_description,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  // ✅ FAQ Schema
  const faqSchema =
    blog.faqs && blog.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  // ✅ Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formattedDate = formatDate(blog.created_at);

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      {/* ✅ Keep your old design */}
      <Navbar />
      <div className="blog-page-container">
        <div className="header">
          <div
            className="heading-outer"
            style={{
              backgroundImage: `url(${blog.banner_img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="middle">
            <div className="top">
              <h2 className="top-heading">{blog.title}</h2>
            </div>
          </div>
        </div>

        <div
          className="blog-page-content"
          style={{ fontFamily: "TT Chocolates" }}
        >
          <h6 className="text-[18px] md:text-[25px]">
            Published on {formattedDate} by {blog.author_name}
          </h6>
          <div
            className="content-div-blog"
            dangerouslySetInnerHTML={{ __html: cleanContent(blog.content) }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
