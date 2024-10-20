"use client";
import React, { use, useEffect, useRef, useState } from "react";
import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import Image from "next/image";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import Banner1 from "../../../../../public/Banner1.png";
import Banner1Mobile from "../../../../../public/Banner1Mobile.png";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
function Banner() {
  const { isMobile } = useMobile();
  useEffect(() => {
    const loadScriptAndStyles = () => {
      window.ee_form_widget_baseurl =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

      if (!document.getElementById("__formWidgetCss")) {
        const linkElement = document.createElement("link");
        linkElement.id = "__formWidgetCss";
        linkElement.rel = "stylesheet";
        linkElement.href =
          window.ee_form_widget_baseurl + "css/stylesheet.min.css";
        linkElement.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(linkElement);
      }
      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src =
        window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
      scriptElement.onload = async function () {
        const _eeFormWidget = new eeFormWidget();
        await _eeFormWidget.init("tisd", "form-3", "ee-form-3");
      };

      document.getElementsByTagName("head")[0].appendChild(scriptElement);
    };

    loadScriptAndStyles();
  }, []);

  // const images = [Banner1];
  // const imagesMobile = [Banner1Mobile];
  // const [currentIndex, setCurrentIndex] = useState(2);
  // const [changeIndexValue, setChangeIndexValue] = useState(2000);
  // const [fade, setFade] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // const changeImage = (index) => {
  //   setFade(true);
  //   setTimeout(() => {
  //     setCurrentIndex(index);
  //     setFade(false);
  //   }, 300); // Duration of fade out/in
  // };

  // const handleDotClick = (index) => {
  //   if (index !== currentIndex) {
  //     changeImage(index);
  //     resetInterval();
  //   }
  //   if (containerRef.current) {
  //     containerRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const resetInterval = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, changeIndexValue);
  // };

  // useEffect(() => {
  //   if (currentIndex === 2) {
  //     setChangeIndexValue(10000);
  //   } else {
  //     setChangeIndexValue(2000);
  //   }
  // }, [currentIndex]);

  // useEffect(() => {
  //   resetInterval();
  // }, [changeIndexValue]);

  // useEffect(() => {
  //   resetInterval();
  //   return () => clearInterval(intervalRef.current);
  // }, []);

  // useEffect(() => {
  //   changeImage(currentIndex);
  // }, [currentIndex]);
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-end md:justify-center items-end relative object-cover bg-transparent md:bg-[#b90124]">
      <div className="absolute top-0 left-0 z-30 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between w-full">
        <a
          href="tel:+91-8108012525"
          className="w-20 md:w-28 bg-[#60BAB1] p-6 md:p-8 rounded-full"
        >
          <Image src={phoneCallGif} alt="" className="" />
          {/* <div className="footer-call-number-text">+91-8108012525</div> */}
        </a>
        <Image src={schoolLogo} className="w-20 md:w-28" alt="school" />
      </div>
      <div className="z-40 relative mt-[70vh] md:mt-0 flex md:pr-40">
        <div
          id="ee-form-3"
          className="shadow-2xl w-[90%] mx-auto p-2 md:p-4 bg-white max-w-[450px] rounded-3xl"
        ></div>
      </div>
      <div className="h-[100vh] w-full absolute top-0 object-cover">
        {/* {currentIndex === 2 && (
          <iframe
            src="https://player.vimeo.com/video/970387029?autoplay=1&loop=1&muted=1&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            className="absolute w-full h-full z-20 object-fit opacity-70 left-0 top-0"
          />
        )} */}
        <div className="z-10 w-full h-[75vh] relative md:h-screen inset-0 transition-opacity duration-500 overflow-hidden bg-black">
          <Image
            src={isMobile ? Banner1Mobile : Banner1}
            alt=""
            className="object-cover w-full opacity-50 h-[75vh] md:h-screen"
          />
          <div className="absolute z-50 flex flex-col top-0 justify-center text-white animate-translateBottomHalf md:animate-translateRightHalf items-start w-full h-[75vh] md:h-screen">
            <div className="w-full md:w-[50%] text-center flex flex-col items-center justify-center gap-[2vh]">
              <p
                className="text-[2.5rem] md:text-[11vh] m-0 leading-[2.875rem] tracking-[0.125rem] font-normal"
                style={{
                  fontFamily: "PF din Display",
                }}
              >
                LET&apos;S DO{" "}
                <span className="text-[3.75rem] md:text-[13vh] font-[Mirador] italic font-black leading-[3.75rem] md:leading-[15vh]">
                  it
                </span>
              </p>
              <p
                className="text-[2.5rem] md:text-[9vh] font-normal uppercase tracking-[0.125rem] leading-[2.875rem]"
                style={{
                  fontFamily: "PF din Display",
                }}
              >
                with
              </p>
              <p className="text-[3.75rem] md:text-[13vh] font-[Mirador] pt-[1vh] italic tracking-[0.125rem] leading-[3.75rem] md:leading-[13vh]">
                {" "}
                Tula&apos;s
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.317 14.075"
                >
                  <path
                    id="mainTextScribble"
                    d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
                    transform="translate(-403.065 -1791.313)"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex z-30 flex-col self-center items-center pt-4 absolute top-1/2 gap-2 transform -translate-y-1/2 right-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`pointer-events-auto ${
                index === currentIndex
                  ? "border-2 border-white p-[2px] rounded-full"
                  : "border-none"
              } `}
            >
              <div
                className={`w-[10px] h-[10px] md:w-[15px] z-10 md:h-[15px] rounded-full flex items-center justify-center cursor-pointer ${
                  index === currentIndex
                    ? " bg-white"
                    : " bg-gray-400 blur-[0.6px]"
                }`}
              ></div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
