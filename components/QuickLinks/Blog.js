"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import loader from "../../public/loader.svg";
import "../../styles/QuickLinks/Blog.css";
import { UtmContext } from "../globalComponents/utmParams";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(false);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const { utmParams } = useContext(UtmContext);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://blog.tis.edu.in/api/v1/post?page=${page}&per_page=18`
        );
        const data = await response.json();

        if (data.success) {
          const filteredBlogs = data.data.filter(
            (blog) => blog.category && blog.category.name === "Blogs"
          );

          if (filteredBlogs.length === 0) {
            setAllBlogsLoaded(true); // If no blogs are returned, set allBlogsLoaded to true
          } else {
            setBlogs((prevBlogs) => {
              const uniqueBlogs = filteredBlogs.filter(
                (newBlog) =>
                  !prevBlogs.some((prevBlog) => prevBlog.slug === newBlog.slug)
              );
              return [...prevBlogs, ...uniqueBlogs]; // Append only unique blogs
            });
          }
        } else {
          console.error("Failed to fetch blogs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchBlogs();
  }, [page]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleLoadMore = () => {
    if (!allBlogsLoaded) {
      setPage((prevPage) => prevPage + 1); // Increment page to fetch more blogs
    }
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="loader">
        <Image src={loader} alt="Loading..." />
      </div>
    ); // Display loader if still loading and no blogs are fetched
  }

  return (
    <>
      <div className="blog-container">
        <div className="card-grid">
          {blogs.map((blog) => {
            const formattedDate = formatDate(blog.created_at);

            // Check if title and rendered property exist
            const formattedTitle = blog.title
              ? blog.title.replace(/&#8217;/g, "'").replace(/&#038;/g, "&")
              : ""; // Fallback if title is not available

            return (
              <a href={`/${blog.slug}${utmParams}`} key={blog.slug}>
                <div>
                  <div className="card-wrapper">
                    <Image
                      width="400"
                      height="250"
                      src={blog.banner_img}
                      className="cardImage"
                      alt="Blog Image"
                    />
                    <div className="card-text">
                      <p>{formattedDate}</p>
                      <h5>{formattedTitle}</h5>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        {allBlogsLoaded ? (
          <button className="load-more" disabled>
            All Blogs Loaded
          </button>
        ) : (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Blog;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import loader from "../../public/loader.svg";
// import "../../styles/QuickLinks/Blog.css";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]); // Initialize as an empty array
//   const [page, setPage] = useState(1);
//   const [allBlogsLoaded, setAllBlogsLoaded] = useState(false);
//   const [loading, setLoading] = useState(true); // Set loading to true initially

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `https://admin.tis.edu.in/wp-json/wp/v2/posts?page=${page}&per_page=18`
//         );

//         // Check if the response status is OK (200-299)
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (Array.isArray(data) && data.length > 0) {
//           // Assuming that the posts don't have a specific category structure in the response
//           setBlogs((prevBlogs) => {
//             const uniqueBlogs = data.filter(
//               (newBlog) =>
//                 !prevBlogs.some((prevBlog) => prevBlog.slug === newBlog.slug)
//             );
//             return [...prevBlogs, ...uniqueBlogs]; // Append only unique blogs
//           });
//         } else {
//           setAllBlogsLoaded(true); // If no blogs are returned, set allBlogsLoaded to true
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };

//     fetchBlogs();
//   }, [page]);

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const handleLoadMore = () => {
//     if (!allBlogsLoaded) {
//       setPage((prevPage) => prevPage + 1); // Increment page to fetch more blogs
//     }
//   };

//   if (loading && blogs.length === 0) {
//     return (
//       <div className="loader">
//         <Image src={loader} alt="Loading..." />
//       </div>
//     ); // Display loader if still loading and no blogs are fetched
//   }

//   return (
//     <>
//       {loading && (
//         <div className="absolute-loader">
//           <Image src={loader} alt="Loading..." />
//         </div>
//       )}
//       <div className="blog-container">
//         <div className="card-grid">
//           {blogs.map((blog) => {
//             const formattedDate = formatDate(blog.date);
//             const formattedTitle = blog.title.rendered
//               .replace(/&#8217;/g, "'")
//               .replace(/&#038;/g, "&");
//             return (
//               <a href={`/${blog.slug}`} key={blog.slug}>
//                 <div>
//                   <div className="card-wrapper">
//                     <Image
//                       width="400"
//                       height="250"
//                       src={blog?.yoast_head_json?.og_image?.[0]?.url}
//                       className="cardImage"
//                       alt="Blog Image"
//                     />
//                     <div className="card-text">
//                       <p>{formattedDate}</p>
//                       <h5>{formattedTitle}</h5>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             );
//           })}
//         </div>
//         {allBlogsLoaded ? (
//           <button className="load-more" disabled>
//             All Blogs Loaded
//           </button>
//         ) : (
//           <button className="load-more" onClick={handleLoadMore}>
//             Load More
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Blog;
