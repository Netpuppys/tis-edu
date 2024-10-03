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
        <p className={isFilledText ? "mid-text" : "mid-text border-text"}>with</p>
        <p className={isFilledText ? "bottom-text" : "bottom-text border-text"}>
          {" "}
          Tula&apos;s
          <Image
            src={isMobile ? underLineImageMobile : underlineImage}
            className="underline"
            alt="refresh"
          />
        </p>
        {/* <AnimatedIcon pointA={pointA} pointB={pointB}/> */}
      </div>
    </div>
  );
}

export default HeroText;
