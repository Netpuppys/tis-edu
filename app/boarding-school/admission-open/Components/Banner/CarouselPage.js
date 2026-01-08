"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import schoolLogo from "../../../../../public/logos/schoolLogo.png";
import phoneCallGif from "../../../../../public/phone_ringing.gif";
import ranked from "../../../../../public/LandingPage/ranked.png";

import Banner1 from "../../../../../public/LandingPage/admission/5.jpg";
import Banner2 from "../../../../../public/LandingPage/admission/4.jpg";
import Banner3 from "../../../../../public/LandingPage/admission/3.jpg";
import Banner4 from "../../../../../public/LandingPage/admission/2.jpg";
import Banner6 from "../../../../../public/LandingPage/admission/6.jpg";

import BannerM1 from "../../../../../public/LandingPage/admission/5md.jpg";
import BannerM2 from "../../../../../public/LandingPage/admission/4md.jpg";
import BannerM3 from "../../../../../public/LandingPage/admission/3md.jpg";
import BannerM4 from "../../../../../public/LandingPage/admission/2md.jpg";
import BannerM6 from "../../../../../public/LandingPage/admission/6md.jpg";

import { useMobile } from "@/components/globalComponents/IsMobileContext";
import FormEnquire from "@/components/globalComponents/Form-Popup/formPopup";

const DESKTOP_BANNERS = [Banner1, Banner2, Banner3, Banner4, Banner6];
const MOBILE_BANNERS = [BannerM1, BannerM2, BannerM3, BannerM4, BannerM6];

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

  /* ---------- CONTROLS ---------- */
  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  /* ---------- SWIPE ---------- */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!startX.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
    startX.current = null;
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-end relative
      bg-transparent md:bg-[#b90124] overflow-hidden
      pt-[75px] md:pt-[98px]"
    >
      {/* HEADER */}
      <div className="fixed top-0 left-0 z-40 px-6 md:px-8 flex items-center justify-between w-full bg-[#b90124] h-14">
        <div className="relative top-6 z-50">
          <Image src={schoolLogo} className="w-16 md:w-20" alt="school" />
        </div>

        <a
          href={`tel:+91-${utmSource === "MetaADS" ? "8069204014" : "8069204029"}`}
          className="relative top-6 w-16 md:w-20 bg-[#60BAB1]
                     p-4 md:p-5 rounded-full z-50 shadow-lg"
        >
          <Image src={phoneCallGif} alt="Call Now" />
        </a>
      </div>

      {/* FORM */}
      <div
        className="z-30
        mt-[42vh] sm:mt-[46vh] md:mt-0
        mb-10 sm:mb-12 md:mb-0
        w-[92%] md:w-full max-w-[440px]
        mx-auto relative md:mr-[10vw]"
      >
        <Image src={ranked} alt="" className="w-[40%] mx-auto -mb-14" />
        <div className="bg-white md:bg-white/70 pt-14 shadow-2xl rounded-2xl ring-1 ring-black/5">
          <FormEnquire heading="Admissions Open 2026" formPopup={false} />
        </div>
      </div>

      {/* BACKGROUND SLIDER */}
      <div
        className="absolute top-0 left-0 w-full
                   h-[72vh] md:h-full
                   z-0"
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

        {/* LEFT ARROW */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2
                     z-40
                     w-10 h-10 md:w-12 md:h-12
                     rounded-full bg-black/40 hover:bg-black/60
                     text-white text-2xl flex items-center justify-center"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2
                     z-40
                     w-10 h-10 md:w-12 md:h-12
                     rounded-full bg-black/40 hover:bg-black/60
                     text-white text-2xl flex items-center justify-center"
        >
          ›
        </button>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
    </div>
  );
}

export default CarouselPage;
