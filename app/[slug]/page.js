// app/[slug]/page.js
import React from "react";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";
import TableOfContent from "@/components/TableOfContent";
export const revalidate = 60; // optional: ISR for revalidation every 60 seconds

// Generate static params for dynamic routing
export async function generateStaticParams() {
  const res = await fetch("https://blog.tis.edu.in/api/v1/post", {
    timeout: 20000,
  });
  const { data } = await res.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch the blog data based on the slug
async function fetchBlogData(slug) {
  const res = await fetch(`https://blog.tis.edu.in/api/v1/post/${slug}`);

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
  const cleanContent = (content) => {
    if (!content) return "";
    // Replace empty <p></p> with <br /> tag
    return content.replace(/<p><\/p>/g, "<br /><br />");
  };

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
        <div
          className="blog-page-content"
          style={{ fontFamily: "TT Chocolates" }}
        >
          <h6 className="text-[18px] md:text-[25px]">
            Published on {formattedDate} by {blog.author_name}
          </h6>
          <TableOfContent slug={slug} />
          <div
            className="content-div-blog"
            dangerouslySetInnerHTML={{ __html: cleanContent(blog?.content) }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

// import React from "react";
// import Image from "next/image";
// import Navbar from "@/components/globalComponents/navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import loader from "../../public/loader.svg"; // Replace with your actual loader image path
// import "../globals.css";
// import "../../styles/QuickLinks/Blog.css";
// import "../../styles/globalComponents/Header/header.css";

// export const revalidate = 60; // ISR revalidation every 60 seconds

// export async function generateStaticParams() {
//   const response1 = await fetch(
//     "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=1&per_page=100"
//   );
//   const response2 = await fetch(
//     "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=2&per_page=100"
//   );
//   const response3 = await fetch(
//     "https://admin.tis.edu.in/wp-json/wp/v2/posts?page=3&per_page=100"
//   );
//   const data1 = await response1.json();
//   const data2 = await response2.json();
//   const data3 = await response3.json();
//   const data = data1.concat(data2, data3);

//   if (!Array.isArray(data)) {
//     return [];
//   }

//   return data.map((post) => ({
//     slug: post.slug,
//   }));
// }

// // Fetch the blog data based on the slug
// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://admin.tis.edu.in/wp-json/wp/v2/posts?slug=${slug}`
//   );

//   if (!res.ok) {
//     throw new Error(`Failed to fetch data for slug: ${slug}`);
//   }

//   const [blogData] = await res.json();
//   return blogData || null;
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const blog = await fetchBlogData(slug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found",
//       description: "The requested blog could not be found.",
//     };
//   }

//   return {
//     title: blog?.yoast_head_json?.title,
//     description: blog?.yoast_head_json?.description,
//   };
// }

// export default async function SlugPage({ params }) {
//   const { slug } = params;
//   let blog;
//   let isLoading = true;

//   try {
//     blog = await fetchBlogData(slug);
//     isLoading = false; // Set to false when data is successfully fetched
//   } catch (error) {
//     console.error("Error fetching blog data:", error);
//     isLoading = true; // Remain loading if an error occurs during fetching
//   }

//   if (isLoading) {
//     return (
//       <div className="loader">
//         <Image src={loader} alt="Loading..." />
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div>
//         <h2>Blog not found</h2>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const formattedDate = formatDate(blog.date);
//   const formattedTitle = blog.title.rendered
//     .replace(/&#8217;/g, "'")
//     .replace(/&#038;/g, "&");
//   const headerImg = blog?.yoast_head_json?.og_image?.[0]?.url;

//   return (
//     <>
//       <Navbar />

//       <div className="blog-page-container">
//         <div className="header">
//           <div
//             className="heading-outer"
//             style={{
//               backgroundImage: `url(${headerImg})`,
//               backgroundSize: "cover", // Adjusted background size to cover for better display
//               backgroundRepeat: "no-repeat",
//             }}
//           ></div>
//           <div className="middle">
//             <div className="top">
//               <h2 className="top-heading">
//                 {blog?.title?.rendered}
//                 <br />
//               </h2>
//             </div>
//           </div>
//         </div>
//         <>
//           <div
//             className="blog-page-content"
//             dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
//           />
//         </>
//       </div>
//       <Footer />
//     </>
//   );
// }
