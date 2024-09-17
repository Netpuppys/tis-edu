"use client"; // Client component since you're using useParams

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";

const Slug = () => {
  const { slug } = useParams(); // Retrieve the slug from URL
  const [blog, setBlog] = useState(null); // State to store the blog data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://admin.tis.edu.in/wp-json/wp/v2/posts?slug=${slug}`
        );
        const blogData = response.data.length > 0 ? response.data[0] : null;
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const headerImg = blog?.yoast_head_json?.og_image?.[0]?.url;

  return (
    <>
      <Head>
        <title>{blog?.yoast_head_json?.title}</title>
        <meta name="description" content={blog?.yoast_head_json?.description} />
      </Head>
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
    </>
  );
};

export default Slug;
