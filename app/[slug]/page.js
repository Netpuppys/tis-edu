import React from "react";
import axios from "axios";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";
import Navbar from "../../components/globalComponents/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";

// Fetch blog content statically
async function getBlogData(slug) {
  const response = await axios.get(
    `https://admin.tis.edu.in/wp-json/wp/v2/posts?slug=${slug}`
  );
  return response.data.length > 0 ? response.data[0] : null;
}

// Define the Slug component
const Slug = async ({ params }) => {
  const blog = await getBlogData(params.slug);

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

// Generate static paths for all slugs
export async function generateStaticParams() {
  const response1 = await axios.get(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=1&per_page=100"
  );
  const response2 = await axios.get(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=2&per_page=100"
  );
  const response3 = await axios.get(
    "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=3&per_page=100"
  );

  const data1 = response1.data;
  const data2 = response2.data;
  const data3 = response3.data;
  const data = data1.concat(data2, data3);

  // Create paths based on the slugs
  return data.map((blog) => ({
    slug: blog.slug,
  }));
}

export default Slug;
