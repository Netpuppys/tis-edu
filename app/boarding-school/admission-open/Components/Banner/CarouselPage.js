"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import ranked from "../../../../../public/LandingPage/ranked.png";

import Banner1 from "../../../../../public/LandingPage/Banner.webp";
import Banner2 from "../../../../../public/LandingPage/gymnasium.jpg";
import Banner3 from "../../../../../public/LandingPage/lab.jpg";

import BannerM1 from "../../../../../public/LandingPage/Banner.webp";
import BannerM2 from "../../../../../public/LandingPage/gymnasium.jpg";
import BannerM3 from "../../../../../public/LandingPage/lab.jpg";


import { useMobile } from "@/components/globalComponents/IsMobileContext";
import FormEnquire from "@/components/globalComponents/Form-Popup/formPopup";

const DESKTOP_BANNERS = [Banner1, Banner2, Banner3];
const MOBILE_BANNERS = [BannerM1, BannerM2 , BannerM3];

function CarouselPage() {
  const { isMobile } = useMobile();
  const banners = isMobile ? MOBILE_BANNERS : DESKTOP_BANNERS;

  const [current, setCurrent] = useState(0);
  const startX = useRef(null);

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const utmSource = searchParams?.get("utm_source");

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  /* ---------- SWIPE HANDLERS ---------- */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % banners.length);
    } else if (diff < -50) {
      setCurrent((prev) =>
        prev === 0 ? banners.length - 1 : prev - 1
      );
    }

    startX.current = null;
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-end relative bg-transparent md:bg-[#b90124] overflow-hidden
  pt-[75px] md:pt-[98px]
">

      {/* HEADER */}
      <div className="fixed top-0 left-0 z-40 px-6 md:px-8 py-3 md:py-4 flex items-center justify-between w-full
  bg-gradient-to-b from-[#2b1a14]/80 to-[#2b1a14]/40
  backdrop-blur-md
  border-b border-white/20
">

        <a
          href={`tel:+91-${
            utmSource === "MetaADS" ? "8069204014" : "8069204029"
          }`}
          className="w-20 md:w-18 bg-[#60BAB1] p-6 md:p-5 rounded-full"
        >
          <Image src={phoneCallGif} alt="Call Now" />
        </a>

        <Image src={schoolLogo} className="w-20 md:w-18" alt="school" />
      </div>

      {/* FORM */}
     <div className="z-30
  mt-[14vh] sm:mt-[18vh] md:mt-0
  mb-8 sm:mb-12 md:mb-0
  w-[95%] md:w-full max-w-[440px]
  mx-auto relative md:mr-[10vw]
">

        <Image src={ranked} alt="" className="w-[40%] mx-auto -mb-14" />
        <div className="bg-white md:bg-white/70 pt-14 shadow-2xl rounded-2xl">
          <FormEnquire heading="Admissions Open 2026" formPopup={false} />
        </div>
      </div>

      {/* BACKGROUND SLIDER */}
      <div
        className="absolute inset-0 z-0"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {banners.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}

export default CarouselPage;
