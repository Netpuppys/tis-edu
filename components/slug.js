"use client";

import React from "react";
import { useParams } from "next/navigation";
import "../app/globals.css";
import "../styles/QuickLinks/Blog.css";
import "../styles/globalComponents/Header/header.css";
import { MobileProvider } from "./globalComponents/IsMobileContext";
import Navbar from "./globalComponents/navbar/Navbar";
import Footer from "./Footer/Footer";
import Head from "next/head";

// Define the Slug component
const Slug = ({ blog }) => {
  const { slug } = useParams(); // Update this line to match the correct destructuring

  if (!blog) {
    return <div>Loading...</div>;
  }

  const headerImg = blog?.yoast_head_json?.og_image?.[0]?.url;

  return (
    <MobileProvider>
      <Navbar />
      <Head>
        <title>{blog?.yoast_head_json?.title}</title>
        <meta name="description" content={blog?.yoast_head_json?.description} />
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
                {blog?.title?.rendered}
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="blog-page-content">
          <h3
            dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
          ></h3>
        </div>
      </div>
      <Footer />
    </MobileProvider>
  );
};

// Implement generateStaticParams

export default Slug;

export async function generateStaticParams() {
  const response1 = await fetch(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=1&per_page=100"
  );
  const response2 = await fetch(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=2&per_page=100"
  );
  const response3 = await fetch(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=3&per_page=100"
  );
  const data1 = await response1.json();
  const data2 = await response2.json();
  const data3 = await response3.json();
  const data = data1.concat(data2, data3);

  const paths = data.map((blog) => ({
    slug: blog?.slug,
  }));

  return { paths };
}

// Implement getStaticProps
export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://admin.tis.edu.in/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const blogs = await response.json();
  const blog = blogs.length > 0 ? blogs[0] : null;

  return {
    props: { blog },
  };
}
