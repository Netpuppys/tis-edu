// app/[slug]/page.js
import React from "react";
import Head from "next/head";

// --- Helper: Fetch blog data ---
async function fetchBlogData(slug) {
  try {
    const res = await fetch(`https://blog.tis.edu.in/api/v1/post/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data || null;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

// --- Clean HTML content (remove empty <p> and <script> tags) ---
const cleanContent = (content) => {
  if (!content) return "";
  let cleaned = content.replace(/<p><\/p>/g, "<br /><br />");
  cleaned = cleaned.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "");
  return cleaned;
};

// --- Metadata for SEO ---
export async function generateMetadata({ params }) {
  const blog = await fetchBlogData(params.slug);
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
      images: blog.banner_img ? [blog.banner_img] : undefined,
    },
  };
}

// --- Blog Page ---
export default async function BlogPage({ params }) {
  const blog = await fetchBlogData(params.slug);
  if (!blog) return <h1>Blog Not Found</h1>;

  const canonicalUrl = `https://tis.edu.in/${blog.slug}`;
  const publisherLogo =
    "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png";

  // --- BlogPosting Schema ---
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title || "",
    description: blog.meta_description || "",
    image: blog.banner_img || "",
    author: {
      "@type": "Person",
      name: blog.author_name || "TIS Team",
    },
    publisher: {
      "@type": "Organization",
      name: "TIS",
      logo: { "@type": "ImageObject", url: publisherLogo },
    },
    datePublished: blog.created_at || new Date().toISOString(),
    dateModified:
      blog.updated_at || blog.created_at || new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  // --- FAQ Schema (if FAQs exist) ---
  const faqSchema =
    blog.faqs && blog.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

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

      <article className="blog-single">
        <h1>{blog.title}</h1>
        {blog.banner_img && (
          <img
            src={blog.banner_img}
            alt={blog.title || "Blog banner"}
            className="blog-banner"
          />
        )}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: cleanContent(blog.content) }}
        />
      </article>
    </>
  );
}
