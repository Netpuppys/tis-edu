"use client";
import React, { useRef } from "react";
import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import Image from "next/image";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import Banner1 from "../../../../../public/LandingPage/Banner.webp";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
import FormEnquire from "@/components/globalComponents/Form-Popup/formPopup";

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
      <div className="z-30 shadow-2xl mt-[55vh] md:mt-0 relative w-[95%] md:w-full max-w-[480px] mx-auto md:mr-[15vw] bg-white rounded-2xl pointer-events-auto">
        <FormEnquire heading={"Admissions Open 2025"} formPopup={false} />
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
              <iframe
                src="https://player.vimeo.com/video/1022468806?autoplay=1&loop=1&muted=1&controls=0"
                className={`w-full h-full absolute z-10 top-0 object-cover min-h-full min-w-full scale-125`}
                title="mobile version"
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          )}

          {/* <div className="absolute z-50 flex-col top-0 justify-center text-white hidden md:flex md:animate-translateRightHalf items-start w-full h-[75vh] md:h-screen">
            <div className="w-full md:w-[50%] text-center flex flex-col items-center justify-center gap-[2vh]">
              <p
                className="text-[2.5rem] md:text-[11vh] m-0 leading-[2.875rem] tracking-[0.125rem] font-normal"
                style={{
                  fontFamily: "PF din Display",
                }}
              >
                LET&apos;S DO{" "}
                <span className="text-[3.75rem] md:text-[13vh] font-[Mirador800] italic font-black leading-[3.75rem] md:leading-[15vh]">
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
              <p className="text-[3.75rem] md:text-[13vh] font-[Mirador800] pt-[1vh] italic tracking-[0.125rem] leading-[3.75rem] md:leading-[13vh]">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
