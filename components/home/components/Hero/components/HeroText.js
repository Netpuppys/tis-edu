import React from "react";
import { useMobile } from "../../../../globalComponents/IsMobileContext";
import underlineImage from "../../../../../public/YellowLine.png";
import underLineImageMobile from "../../../../../public/doodles/underline-mobile.png";
import "../../../../../styles/home/components/Hero/components/HeroText.css";
// import AnimatedIcon from '../../../../Animated';
import Image from "next/image";
function HeroText(props) {
  const isFilledText = props.isFilledText;
  const { isMobile } = useMobile();

  //     const pointA = { x: 0, y: 50 }; // Adjust the coordinates for point A
  //   const pointB = { x: 100, y: 50 }; // Adjust the coordinates for point B

  return (
    <div className="base-main-div">
      <div className="text-div">
        <p className={isFilledText ? "top-text" : "top-text border-text"}>
          LET&apos;S DO <span>it</span>
        </p>
        <p className={isFilledText ? "mid-text" : "mid-text border-text"}>
          with
        </p>
        <p className={isFilledText ? "bottom-text" : "bottom-text border-text"}>
          {" "}
          Tula&apos;s
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
          {/* <Image
            src={isMobile ? underLineImageMobile : underlineImage}
            className="underline"
            alt="refresh"
          /> */}
        </p>
        {/* <AnimatedIcon pointA={pointA} pointB={pointB}/> */}
      </div>
    </div>
  );
}

export default HeroText;
