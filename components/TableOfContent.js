"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TableOfContent({ slug }) {
  const [tocItems, setTocItems] = useState([]);
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://blog.repsoft.in/api/v1/post/${slug}`
      );
      if (res?.data?.data) {
        setBlog(res.data.data);
        generateToc(res.data.data.content); // Generate TOC from content
      }
    };

    const generateToc = (htmlContent) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      const headings = tempDiv.querySelectorAll("h2, h3, h4");
      const tocList = Array.from(headings).map((heading) => ({
        text: heading.innerText,
        id: heading.id,
        tagName: heading.tagName.toLowerCase(), // Get the tag name (h2, h3, h4)
      }));

      setTocItems(tocList);
    };

    fetchPost();
  }, []);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 100; // Offset by 100px
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      {tocItems.length > 0 && (
        <div
          className="content-div-blog-table"
          style={{ fontFamily: "TT Chocolates" }}
        >
          <h8 className="text-[28px] md:text-[45px] font-[600]">
            Table of Content
          </h8>
          <ul>
            {tocItems?.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer 
                 ${
                   item.tagName === "h2"
                     ? "text-[24px] md:text-[32px] underline ml-5 md:ml-10"
                     : item.tagName === "h3"
                     ? "text-[18px] font-semibold list-disc underline mt-4 text-black md:text-[24px] ml-10 md:ml-20"
                     : item.tagName === "h4"
                     ? "text-[16px] text-[#b90124] underline md:text-[20px] ml-14 md:ml-24"
                     : ""
                 }`}
              >
                {item.tagName === "h3" ? "" : ""}
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
      <br />
    </div>
  );
}

export default TableOfContent;
