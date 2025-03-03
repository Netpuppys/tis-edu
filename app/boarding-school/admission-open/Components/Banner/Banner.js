"use client";
import React, { useRef } from "react";
import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import Image from "next/image";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import Banner1 from "../../../../../public/LandingPage/Banner.webp";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
import FormEnquire from "@/components/globalComponents/Form-Popup/formPopup";
import ranked from "../../../../../public/LandingPage/ranked.png";

function Banner() {
  const { isMobile } = useMobile();
  const searchParams = new URLSearchParams(window.location.search);
  const utmSource = searchParams.get("utm_source");
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-end relative object-cover bg-transparent md:bg-[#b90124]">
      <div className="fixed top-0 left-0 z-40 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between w-full">
        <a
          href={`tel:+91-${
            utmSource === "MetaADS" ? "8069204014" : "8069204029"
          }`}
          title={`Admission Helpline No. +91-${
            utmSource === "MetaADS" ? "8069204014" : "8069204029"
          }`}
          className="w-20 md:w-28 bg-[#60BAB1] p-6 md:p-8 rounded-full"
        >
          <Image src={phoneCallGif} alt="" className="" />
        </a>
        <Image src={schoolLogo} className="w-20 md:w-28" alt="school" />
      </div>
      <div className="z-30 mt-[50vh] md:mt-0 w-[95%] md:w-full max-w-[440px] mx-auto relative md:mr-[10vw]">
        <Image
          src={ranked}
          alt=""
          className="w-[40%] relative mx-auto -mb-14"
        />
        <div className="bg-white md:bg-opacity-70 pt-14 shadow-2xl rounded-2xl pointer-events-auto">
          <FormEnquire heading={"Admissions Open 2025"} formPopup={false} />
        </div>
      </div>

      <div className="h-[100vh] w-full absolute top-0 object-cover">
        <div className="z-10 w-full h-[75vh] relative md:h-screen overflow-hidden">
          {!isMobile && (
            <div className="w-full h-full min-w-[100%] min-h-screen relative">
              <Image
                src={Banner1}
                alt=""
                className="w-full h-full object-cover relative -z-10"
              />
              {/* <iframe
                src="https://player.vimeo.com/video/1022462718?autoplay=1&loop=1&muted=1&controls=0"
                className={`w-full h-full absolute object-cover min-h-full min-w-full z-0 scale-125`}
                title="MAIN_COMPOSITION"
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script> */}
            </div>
          )}

          {isMobile && (
            <div className="w-full h-full min-w-[100%] min-h-full relative">
              <Image
                src={Banner1}
                alt=""
                className="w-full h-full object-cover -z-10 absolute"
              />
              {/* <iframe
                src="https://player.vimeo.com/video/1022468806?autoplay=1&loop=1&muted=1&controls=0"
                className={`w-full h-full absolute z-10 top-0 object-cover min-h-full min-w-full scale-125`}
                title="mobile version"
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
