"use client"

import React, { useEffect, useState } from "react";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";
import { useParams } from "next/navigation";
import axios from "axios";

// The main component for rendering the blog
const Slug = () => {
  const { slug } = useParams();
  const [ blog, setBlog] = useState(null);
  const [ tocItems, setTocItems] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`https://blog.repsoft.in/api/v1/post/${slug}`);
      if (res?.data?.data) {
        setBlog(res.data.data);
        generateToc(res.data.data.content); // Generate TOC from content
      }
    };

    const generateToc = (htmlContent) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      const headings = tempDiv.querySelectorAll("h1, h2, h3");
      const tocList = Array.from(headings).map((heading) => ({
        text: heading.innerText,
        id: heading.id,
        tagName: heading.tagName.toLowerCase(), // Get the tag name (h1, h2, h3)
      }));

      setTocItems(tocList);
    };

    fetchPost();
  }, []);

  if (!blog) {
    return
  }

  const formattedDate = formatDate(blog?.created_at);
  const headerImg = blog?.banner_img;

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100; // Offset by 100px
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };
  

  return (
    <>
      <Navbar />
      
      <head>
      <meta name="robots" content={blog.tags} />
        <title>{blog?.title}</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
        <meta name="author" content={blog.author_name} />
      </head>
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
                {blog?.title}
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="blog-page-content">
        <h6 className="text-[18px] md:text-[25px]">Published on {formattedDate} by {blog?.author_name}</h6>
        {tocItems.length > 0 && (
          <div className="content-div-blog-table">
            
            <h1 className="text-[28px] md:text-[45px] text-[#b90124] font-[600]">Table of Contents</h1>
            <ul>
              {tocItems?.map((item) => (
                <li key={item.id} className={`hover:text-[#b90124] cursor-pointer
                ${
                  item.tagName === "h1"
                    ? "text-[24px] md:text-[32px] ml-5 md:ml-10"
                    : item.tagName === "h2"
                    ? "text-[18px] md:text-[26px] ml-10 md:ml-20"
                    : item.tagName === "h3"
                    ? "text-[16px] md:text-[20px] ml-14 md:ml-24"
                    : ""
                  }`}>
                  {item.tagName === "h1" ? "-" : ""}
                  <a
                    onClick={() => handleScroll(item.id)}
                    // href={`#${item.id}`}
                    
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <br/>
                  <div className="content-div-blog" dangerouslySetInnerHTML={{ __html: blog?.content }} />
                </div>
              </div>
              <Footer />
            </>
          );
        };

// export async function getStaticPaths() {
//   const res = await fetch(`https://blog.repsoft.in/api/v1/posts`); // Adjusted to fetch all posts
//   const { data } = await res.json();

//   if (!Array.isArray(data)) {
//     return { paths: [], fallback: false }; // or handle differently
//   }

//   const paths = data.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return { paths, fallback: "blocking" }; // adjust fallback based on your needs
// }

// export async function generateStaticParams() {
//   const res = await fetch(`https://blog.repsoft.in/api/v1/posts`);
//   const { data } = await res.json();

//   if (!Array.isArray(data)) {
//     return [];
//   }

//   return data.map((post) => ({
//     slug: post.slug,
//   }));
// }

// // Fetch the blog data based on the slug
// export default async function SlugPage({ params }) {
//   let blog;

//   try {
//     const response = await fetch(
//       `https://blog.repsoft.in/api/v1/post?slug=${params.slug}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const blogs = await response.json();
//     blog = blogs.data.length > 0 ? blogs.data[0] : null;
//   } catch (error) {
//     return (
//       <div>
//         <h2>Error loading blog data</h2>
//         <p>{error.message}</p>
//       </div>
//     );
//   }

//   // Check if the blog is found
//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return <Slug blog={blog} />;
// }

export default Slug;