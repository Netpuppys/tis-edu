"use client";
import React, { use, useEffect, useRef, useState } from "react";
import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import Image from "next/image";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import Banner1 from "../../../../../public/LandingPage/Banner.webp";
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
        await _eeFormWidget.init("tisd", "form-5", "ee-form-5");
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
      <div className="fixed top-0 left-0 z-40 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between w-full">
        <a
          href="tel:+91-9837983791"
          className="w-20 md:w-28 bg-[#60BAB1] p-6 md:p-8 rounded-full"
        >
          <Image src={phoneCallGif} alt="" className="" />
          {/* <div className="footer-call-number-text">+91-9837983791</div> */}
        </a>
        <Image src={schoolLogo} className="w-20 md:w-28" alt="school" />
      </div>
      <div className="z-30 relative mt-[55vh] md:mt-0 flex md:pr-40">
        <div
          id="ee-form-5"
          className="shadow-2xl w-[90%] mx-auto p-2 md:p-4 bg-white max-w-[450px] rounded-3xl"
        ></div>
      </div>

      <div className="h-[100vh] w-full absolute top-0 object-cover">
        <div className="z-10 w-full h-[65vh] relative md:h-screen overflow-hidden">
          {!isMobile && (
            <div className="w-full h-full min-w-[100%] min-h-screen relative">
              <Image
                src={Banner1}
                alt=""
                className="w-full h-full object-cover absolute -z-10"
              />
              <div className="z-10 bg-black absolute top-0 right-0 w-full h-full opacity-60"></div>
              <iframe
                src="https://player.vimeo.com/video/1022462718?autoplay=1&loop=1&muted=1&controls=0"
                className={`w-full h-full absolute object-cover min-h-full min-w-full z-0 scale-125`}
                title="MAIN_COMPOSITION"
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          )}

          {isMobile && (
            <div className="w-full h-full min-w-[100%] min-h-full relative">
              <Image
                src={Banner1}
                alt=""
                className="w-full h-full object-cover -z-10 absolute"
              />
              <div className="z-20 relative bg-black w-full h-full bg-opacity-60"></div>
              <iframe
                src="https://player.vimeo.com/video/1022468806?autoplay=1&loop=1&muted=1&controls=0"
                className={`w-full h-full absolute z-10 top-0 object-cover min-h-full min-w-full scale-125`}
                title="mobile version"
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          )}

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
      </div>
    </div>
  );
}

export default Banner;
