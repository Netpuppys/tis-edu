"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/QuickLinks/Blog.css"; // Assuming you have a Blog.module.css file
import loader from "../../public/loader.svg";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchblog = useCallback(
    async (pageno) => {
      setLoading(true);
      const response = await fetch(
        `https://admin.tis.edu.in/wp-json/wp/v2/posts?page=${
          pageno ? pageno : page
        }&per_page=18`
      );
      const data = await response.json();
      if (
        data?.message ===
        "The page number requested is larger than the number of pages available."
      ) {
        setLoading(false);
        setAllBlogsLoaded(true);
        return;
      }
      setBlogs((prevBlogs) => [...prevBlogs, ...data]);
      setLoading(false);
    },
    [page]
  );

  useEffect(() => {
    fetchblog();
  }, [fetchblog]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchblog(page + 1);
  };

  if (loading && blogs.length === 0)
    return (
      <>
        <div className="loader">
          <Image src={loader} alt="Loading..." />
        </div>
      </>
    );
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      {loading && (
        <div className="absolute-loader">
          <Image src={loader} alt="Loading..." />
        </div>
      )}
      <div className="blog-container">
        <div className="card-grid">
          {blogs.map((blog) => {
            const formattedDate = formatDate(blog.date);
            const formattedTitle = blog.title.rendered
              .replace(/&#8217;/g, "'")
              .replace(/&#038;/g, "&");
            return (
              <Link href={`/${blog.slug}`} key={blog.slug} passHref>
                <div>
                  <div className="card-wrapper">
                    <Image
                      width="400"
                      height="250"
                      src={blog?.yoast_head_json?.og_image?.[0]?.url}
                      className="cardImage"
                      alt="Blog Image"
                    />
                    <div className="card-text">
                      <p>{formattedDate}</p>
                      <h5>{formattedTitle}</h5>
                    </div>
                  </div>
                </div>
              </Link>
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
