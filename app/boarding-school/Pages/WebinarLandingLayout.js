"use client";

import React, { useRef } from "react";
import "../../../styles/globalComponents/navbar/NavBar.css";
import "../../../styles/home/HomeLayout.css";
import ActivityGrid from "@/components/home/components/activityGrid/ActivityGrid";
import Ranking from "@/components/home/components/Ranking/ranking";
import SixthSection from "@/components/home/components/sixthSection/sixthSection";
import AwardSection from "@/components/home/components/awardsSection/AwardSection";
import ParentsReviews from "@/components/home/components/parentsReviews/ParentsReviews";
import HeroLanding from "../admission-open/Components/Hero/HeroLanding";
import Banner from "../webinar/Components/Banner/Banner";
import GoogleReviews from "../admission-open/Components/Hero/components/GoogleReviews";
import Stats from "@/components/home/components/TisByNumbers/stats";
import { FaPhone } from "react-icons/fa6";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
import { FaWhatsapp } from "react-icons/fa";
import scrollArrow from "../../../public/icons/downArrowDoodle.svg";
import Image from "next/image";
import NewStats from "@/components/home/components/stats/stats";
import TisByNumbers from "@/components/home/components/TisByNumbers/TisByNumbers";
import { SiGoogleforms } from "react-icons/si";
import IsThisYou from "../webinar/Components/Points/IsThisYou";
import DiscoverSection from "../webinar/Components/Discover/DiscoverSection";
import AboutSpeaker from "../webinar/Components/Aboutspeaker/AboutSpeaker";
import LandingFaq from "../webinar/Components/LandingFaq/LandingFaq";
import ChoosePath from "../webinar/Components/Choosepath/ChoosePath";
import StressFreeParenting from "../webinar/Components/Parenting/StressFreeParenting";
import WebinarBlueprint from "../webinar/Components/Webinarblueprint/WebinarBlueprint";
import ParentsReviewsLanding from "@/components/home/components/parentsReviews/PranterReviewsLanding";
const WebinarLandingLayout = () => {
  const bubbleRef = useRef(null);
  const scrollRef = useRef();
  const { isMobile } = useMobile();
  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=919258159249", "_blank");
  };
  const handleScrollArrow = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const searchParams = new URLSearchParams(window.location.search);
  const utmSource = searchParams.get("utm_source");

  return (
    <div className="home-layout-container">
      <div>
        <>
          <div
            className="home-layout-allSection flex flex-col gap-12 md:gap-10"
            ref={bubbleRef}
          >
            <div className="z-50 ">
              <Banner />
            </div>
            <IsThisYou/>
            <ParentsReviewsLanding/>
            <DiscoverSection/>
            <TisByNumbers/>
            <WebinarBlueprint/>
            <Ranking/>
            {/* <ChoosePath/> */}
            <AboutSpeaker/>
            <LandingFaq/>
            <StressFreeParenting/>
            
          </div>
          <div
            style={{ fontFamily: "TT Chocolates" }}
            className="pb-14 md:pb-0 px-2 flex flex-col justify-center items-center g-[#b90124] w-full text-black"
          >
            <h4 className="text-center pt-2 md:py-2">
              Copyright © 2025 Tula's International School, Dehradun | All
              Rights Reserved
              <br />
              Designed and Managed By{" "}
              <a href="https://netpuppys.com" target="_blank">
                NetPuppys
              </a>
            </h4>
          </div>
        </>
      </div>
{/* {isMobile && (
  <div className="fixed bottom-0 z-50 w-full h-12 bg-[#60BAB1] flex items-center">
    <a
      href="https://us06web.zoom.us/webinar/register/WN_reHzH0eGRTW52N_wCUilAQ#/registration"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <button
        className="w-full h-12 text-white flex items-center justify-center font-[TTChocolatesBold]"
      >
        Register for Free Webinar
      </button>
    </a>
  </div>
)} */}
{isMobile && (
  <div
    className="fixed bottom-0 z-50 w-full bg-[#60BAB1] flex items-center"
    style={{
      paddingBottom: "env(safe-area-inset-bottom)",
      height: "calc(3rem + env(safe-area-inset-bottom))",
    }}
  >
    <a
      href="https://us06web.zoom.us/webinar/register/WN_reHzH0eGRTW52N_wCUilAQ#/registration"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <button
        className="w-full h-12 text-white flex items-center justify-center font-[TTChocolatesBold]"
      >
        Register For Free Webinar
      </button>
    </a>
  </div>
)}


      <div
  className="bg-[#25d366] flex justify-center items-center p-3 md:p-4 rounded-full fixed right-4 bottom-14 md:right-8 md:bottom-8 z-[999999] cursor-pointer"
  onClick={handleWhatsapp}
>
  <FaWhatsapp className="text-white text-[30px] md:text-[40px]" />
</div>

      <button
        onClick={handleScrollArrow}
        className="fixed hidden md:block md:left-8 md:bottom-8 z-30 cursor-pointer pointer-events-auto animate-scrollAnimation"
      >
        <Image src={scrollArrow} alt="" className="rotate-180" />
      </button>

      {/* <button
        onClick={handleScrollArrow}
        className="fixed hidden md:block z-50 bg-[#60BAB1] right-0 bottom-36 px-2 py-10 md:py-14 rounded-l-xl focus:outline-none text-black font-bold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways-right",
        }}
      >
        Enquire Now
      </button> */}
    </div>
  );
};

export default WebinarLandingLayout;
