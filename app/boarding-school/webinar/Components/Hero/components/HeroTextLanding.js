import React from "react";
import { useMobile } from "../../../../../../components/globalComponents/IsMobileContext";
import "../../../../../../styles/home/components/Hero/components/HeroText.css";

function HeroText(props) {
  const isFilledText = props.isFilledText;
  const { isMobile } = useMobile();
  return (
    <div className="base-main-div">
      <div className="text-div">
        {/* <p className={isFilledText ? "top-text" : "top-text border-text"}>
          Image <span></span>
        </p> */}
        <p className={isFilledText ? "mid-text" : "mid-text border-text"}>
          Image
        </p>
        <p className={isFilledText ? "bottom-text" : "bottom-text border-text"}>
          {" "}
          Gallery
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.317 14.075">
            <path
              id="mainTextScribble"
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
              transform="translate(-403.065 -1791.313)"
              fill="none"
              stroke="#c09d59"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default HeroText;
