// app/[slug]/page.js
import React from "react";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";
import TableOfContent from "@/components/TableOfContent";
export const revalidate = 60; // optional: ISR for revalidation every 60 seconds

// Fetch the blog data based on the slug
async function fetchBlogData(slug) {
  const res = await fetch(`https://blog.repsoft.in/api/v1/post/${slug}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  const { data } = await res.json();
  return data || null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      meta_title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.meta_title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
    robots: blog.tags,
    author: blog.author_name,
  };
}

// Main page component for the blog post
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formattedDate = formatDate(blog.created_at);
  const headerImg = blog.banner_img;

  return (
    <>
      <Navbar />
      <div className="blog-page-container">
        <div className="header">
          <div
            className="heading-outer"
            style={{
              backgroundImage: `url(${headerImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="middle">
            <div className="top">
              <h2 className="top-heading">
                {blog.title}
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="blog-page-content">
          <h6 className="text-[18px] md:text-[25px]">
            Published on {formattedDate} by {blog.author_name}
          </h6>
          <TableOfContent slug={slug} />
          <div
            className="content-div-blog"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  const res = await fetch("https://blog.repsoft.in/api/v1/posts");
  const { data } = await res.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}
