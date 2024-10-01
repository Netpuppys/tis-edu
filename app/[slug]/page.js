import React from "react";
import Head from "next/head";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";

// The main component for rendering the blog
const Slug = ({ blog }) => {
  const headerImg = blog.banner_img;

  return (
    <>
      <Navbar />
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.meta_description} />
      </Head>
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
          {/* {tocItems.length > 0 && (
            <div>
              <h1>Table of Contents</h1>
              <ul>
                {tocItems.map((item) => (
                  <li key={item.id}>
                    {item.tagName === "h1" ? "-" : ""}
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
          <h3 dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://blog.repsoft.in/api/v1/posts`); // Adjusted to fetch all posts
  const { data } = await res.json();

  if (!Array.isArray(data)) {
    return { paths: [], fallback: false }; // or handle differently
  }

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" }; // adjust fallback based on your needs
}

// Fetch the blog data based on the slug
export default async function SlugPage({ params }) {
  let blog;

  try {
    const response = await fetch(
      `https://blog.repsoft.in/api/v1/post?slug=${params.slug}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blogs = await response.json();
    console.log("API Response:", blogs); // Inspect the full response
    blog = blogs.data.length > 0 ? blogs.data[0] : null;
  } catch (error) {
    return (
      <div>
        <h2>Error loading blog data</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // Check if the blog is found
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <Slug blog={blog} />;
}
