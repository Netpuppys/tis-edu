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
import campusAerial from "../../../public/backgrounds/schoolTopView.webp";
import Image from "next/image";
import NewStats from "@/components/home/components/stats/stats";
import TisByNumbers from "@/components/home/components/TisByNumbers/TisByNumbers";
import { SiGoogleforms } from "react-icons/si";
import CarouselPage from "../admission-open/Components/Banner/CarouselPage";
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
            className="home-layout-allSection flex flex-col gap-16 md:gap-16"
            ref={bubbleRef}
          >
            <div ref={scrollRef} className="z-50 ">
              {/* <Banner /> */}
              <CarouselPage />
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="w-[90%] md:w-[75%] mx-auto text-center leading-tight font-[Mirador800] text-[clamp(10px,6vw,60px)] md:text-[clamp(10px,2.5vw,100px)]">
                More Than a School. <br />
                <span className="text-[#b90124] font-[Mirador800]">
                  A Complete Boarding Experience.
                </span>
              </h2>
              <NewStats />
            </div>

            <Ranking />
            <ExceptionalFacilties />
            <ActivityGrid />
          </div>
          {/* <HeroLanding bubbleRef={bubbleRef} /> */}
          <div
            className="home-layout-allSection flex flex-col mt-16 md:mt-16 gap-16 md:gap-16"
            ref={bubbleRef}
          >
            <TisByNumbers />
            <AwardSection />
            <ParentsReviews />
            <GoogleReviews />

            <section className="w-[92%] md:w-[80%] mx-auto mb-10 md:mb-16">
              <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] shadow-2xl">
                <Image
                  src={campusAerial}
                  alt="Tulas International School campus"
                  fill
                  sizes="(max-width: 768px) 92vw, 80vw"
                  className="object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#b90124]/95 via-[#8f011c]/85 to-black/70" />
                <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 rounded-full border-[28px] md:border-[40px] border-white/10" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#60BAB1]/25 blur-2xl" />

                <div className="relative z-10 flex flex-col items-center text-center gap-5 md:gap-7 px-6 py-14 md:py-24">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-white font-[TTChocolatesBold] tracking-[0.2em] text-[clamp(9px,2.8vw,13px)] md:text-[clamp(10px,0.8vw,15px)]">
                    <span className="w-2 h-2 rounded-full bg-[#60BAB1] animate-pulse" />
                    ADMISSIONS OPEN 2027
                  </span>
                  <h2 className="font-[Mirador800] text-white leading-tight text-[clamp(10px,8vw,64px)] md:text-[clamp(10px,3.5vw,110px)]">
                    Ready To Explore TIS?
                  </h2>
                  <div className="w-16 md:w-24 h-[3px] bg-[#60BAB1] rounded-full" />
                  <p className="font-[TTChocolates] text-white/90 max-w-2xl text-[clamp(10px,4.2vw,24px)] md:text-[clamp(10px,1.4vw,30px)]">
                    Admissions for Classes IV–XII are now open for 2027.
                  </p>
                  <button
                    onClick={handleScrollArrow}
                    className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white text-[#b90124] font-[TTChocolatesBold] px-8 py-3 md:px-12 md:py-4 shadow-lg transition-all duration-300 hover:bg-[#60BAB1] hover:text-black hover:-translate-y-0.5 hover:shadow-2xl text-[clamp(10px,4.2vw,20px)] md:text-[clamp(10px,1.1vw,24px)]"
                  >
                    Apply Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div
            style={{ fontFamily: "TT Chocolates" }}
            className="pb-14 md:pb-0 px-2 flex flex-col justify-center items-center g-[#b90124] w-full text-black"
          >
            <h4 className="text-center pt-2 md:py-2">
              Copyright © 2026 Tulas International School, Dehradun | All Rights
              Reserved
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
