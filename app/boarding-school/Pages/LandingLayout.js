"use client";

import React, { useRef } from "react";

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

const LandingLayout = () => {
  const bubbleRef = useRef(null);
  const scrollRef = useRef();
  const { isMobile } = useMobile();
  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=919458311000", "_blank");
  };
  const handleScrollArrow = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-layout-container">
      <div>
        <>
          <div
            className="home-layout-allSection flex flex-col gap-12 md:gap-10"
            ref={bubbleRef}
          >
            <div ref={scrollRef}>
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
            <SixthSection />
            <Stats />
            <AwardSection />
            <ParentsReviews />
            <GoogleReviews />
          </div>
          <div className="pb-14 md:pb-0 px-2 flex flex-col justify-center items-center bg-[#b90124] w-full text-white">
            <h4 className="text-center pt-2 md:py-2">
              Copyright © 2024 Tula's International School, Dehradun | All
              Rights Reserved
              <br />
              Designed and Managed By{" "}
              <a href="https://netpuppys.com">NetPuppys</a>
            </h4>
          </div>
        </>
      </div>
      {isMobile && (
        <div className="fixed bottom-0 flex z-50 justify-between w-full h-12 bg-[#b90124]">
          <div className="flex w-full justify-center items-center">
            <a
              className="flex w-full justify-center items-center gap-3 text-white font-[TTChocolatesBold]"
              href="tel:+91-9837983791"
            >
              <FaPhone /> Admission Helpline No. +91-9837983791
            </a>
          </div>
        </div>
      )}
      <div
        className="bg-[#25d366] flex justify-center items-center p-3 md:p-4 rounded-full fixed right-4 md:right-8 bottom-16 md:bottom-8 z-[9999] cursor-pointer"
        onClick={handleWhatsapp}
      >
        <FaWhatsapp className="text-white text-[30px] md:text-[40px]" />
      </div>

      <button
        onClick={handleScrollArrow}
        className="fixed hidden md:block md:left-8 md:bottom-8 z-[9999] cursor-pointer pointer-events-auto animate-scrollAnimation"
      >
        <Image src={scrollArrow} alt="" className="rotate-180" />
      </button>
    </div>
  );
};

export default LandingLayout;
