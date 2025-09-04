// app/[slug]/page.js
// app/[slug]/page.js
import React from "react";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
import "../../styles/QuickLinks/Blog.css";
import "../../styles/globalComponents/Header/header.css";

export const revalidate = 60; // ISR for revalidation every 60s

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

// Fetch single blog data
async function fetchBlogData(slug) {
  const res = await fetch(`https://blog.tis.edu.in/api/v1/post/${slug}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  const { data } = await res.json();
  return data || null;
}

// Generate SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
    robots: blog.tags,
    author: blog.author_name,
  };
}

// Blog page
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formattedDate = formatDate(blog.created_at);

  const headerImg = blog.banner_img;

  // Clean content
  const cleanContent = (content) => {
    if (!content) return "";
    return content.replace(/<p><\/p>/g, "<br /><br />");
  };

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
      logo: {
        "@type": "ImageObject",
        url: "https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
      },
    },
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    description: blog.meta_description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tis.edu.in/${blog.slug}`,
    },
  };

  // ✅ FAQ Schema (only if faqs exist)
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
          <a slug={slug} />
          <div
            className="content-div-blog"
            dangerouslySetInnerHTML={{ __html: cleanContent(blog?.content) }}
          />
        </div>
      </div>

      {/* ✅ Blog Schema */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(blogSchema)}
      </script>

      {/* ✅ FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(faqSchema)}
        </script>
      )}

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
