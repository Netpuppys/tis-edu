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
import Banner from "../admission-open/Components/Banner/Banner";
import ExceptionalFacilties from "../admission-open/Components/Carousel/ExceptionalFacilties";
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
const LandingLayout = () => {
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
            <div ref={scrollRef} className="z-50 ">
              <Banner />
            </div>

            <ExceptionalFacilties />
            <ActivityGrid />
            <Ranking />
          </div>
          <HeroLanding bubbleRef={bubbleRef} />
          <div
            className="home-layout-allSection flex flex-col mt-12 md:mt-10 gap-12 md:gap-10"
            ref={bubbleRef}
          >
            <NewStats />
            <TisByNumbers />
            <AwardSection />
            <ParentsReviews />
            <GoogleReviews />
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
        <div className="fixed bottom-0 flex z-50 justify-between w-full h-12 bg-[#b90124]">
          <button
            onClick={handleScrollArrow}
            className="w-1/2 text-white flex justify-center items-center font-[TTChocolatesBold] border-r border-white"
          >
            Enquire Now
          </button>
          <div className="flex w-1/2 justify-center items-center">
            <a className="flex w-full justify-center items-center gap-3 text-white font-[TTChocolatesBold]">
              <FaPhone /> +91-
            </a>
          </div>
        </div>
      )} */}
      {isMobile && (
        <div
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="fixed md:hidden bg-[#60BAB1] flex w-full h-fit z-[99999] bottom-0"
        >
          <button
            onClick={handleScrollArrow}
            className="flex justify-center gap-2 h-12 items-center text-black w-full"
          >
            <SiGoogleforms />
            Enquire Now
          </button>

          <a
            className="flex justify-center gap-2 h-12 items-center text-black w-full"
            href={`tel:+91-${
              utmSource === "MetaADS" ? "8069204014" : "8069204029"
            }`}
          >
            <FaPhone />
            +91-{utmSource === "MetaADS" ? "8069204014" : "8069204029"}
          </a>
        </div>
      )}
      <div
        className="bg-[#25d366] flex justify-center items-center p-3 md:p-4 rounded-full fixed right-[50%] translate-x-1/2 md:translate-x-0 md:right-8 bottom-0 md:bottom-8 z-[999999] cursor-pointer"
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

      <button
        onClick={handleScrollArrow}
        className="fixed hidden md:block z-50 bg-[#60BAB1] right-0 bottom-36 px-2 py-10 md:py-14 rounded-l-xl focus:outline-none text-black font-bold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways-right",
        }}
      >
        Enquire Now
      </button>
    </div>
  );
};

export default LandingLayout;
