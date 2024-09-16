"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import { useMobile } from "../../globalComponents/IsMobileContext";
import underlineImage from "../../../public/YellowLine.png";
import underLineImageMobile from "../../../public/doodles/underline-mobile.png";
import "../../../styles/home/loading/LoadingScreen.css";

function LoadingScreen() {
  const { isMobile } = useMobile();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    AOS.init();
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
          <Image
            data-aos="flip-right"
            data-aos-duration="1500"
            src={isMobile ? underLineImageMobile : underlineImage}
            alt="Underline"
            className="underline"
          />
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
