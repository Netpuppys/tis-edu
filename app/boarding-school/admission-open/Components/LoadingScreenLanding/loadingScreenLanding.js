"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useMobile } from "../../../../../components/globalComponents/IsMobileContext";
import "./LoadingScreenLanding.css";

function LoadingScreenLanding() {
  const { isMobile } = useMobile();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    AOS.init();
  }, []);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setIsActive(true);
  }, []);
  return (
    <div className="loading-screen-container">
      <div className="text-main">
        <p className="top-text">
          LET&apos;S DO <span>it</span>
        </p>
        <p className="mid-text">with</p>
        <p className="bottom-text">
          Tula&apos;s{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 268.317 14.075"
            className={`mainText-scribble ${isActive ? "active" : ""}`}
          >
            <path
              id="mainTextScribble"
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
              transform="translate(-403.065 -1791.313)"
              fill="none"
              stroke="#c09d59"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="svg-elem-1"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default LoadingScreenLanding;
