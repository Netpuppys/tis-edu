"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import seeMoreIcon from "../../../../public/icons/see-more-text.png";
import archery from "../../../../public/pictures/archery.png";
import cycling from "../../../../public/pictures/cycling.png";
import hockey from "../../../../public/pictures/hockey.png";
import swimming from "../../../../public/pictures/swimming.png";
import taekwando from "../../../../public/pictures/taekwando.png";
import football from "../../../../public/pictures/football.png";
import shooting from "../../../../public/pictures/shooting.png";
import horseRiding from "../../../../public/pictures/horseRiding.png";
import billiards from "../../../../public/pictures/billiards-single.png";
import squash from "../../../../public/pictures/squash.png";
import volleyball from "../../../../public/pictures/volleyball.png";
import basketball from "../../../../public/pictures/basketball.png";
import cricket from "../../../../public/pictures/Cricket.png";
import lawnTennis from "../../../../public/pictures/lawnTennis.png";
import badminton from "../../../../public/pictures/badminton.png";
import tableTennis from "../../../../public/pictures/tableTennis.png";
import throwball from "../../../../public/pictures/throwballSports.png";
import Image from "next/image";
import "../../../../styles/home/components/activityGrid/ActivityGrid.css";
import { useInView } from "react-intersection-observer";
import { UtmContext } from "@/components/globalComponents/utmParams";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function FourthSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const title = (
    <>
      It’s not just a <span className="text-[#60bab1]">facility.</span> At
      Tula’s it’s the <span className="text-[#60bab1]">foundation!</span>
      <br />
      <span
        ref={ref}
        className="circled-text-sports relative text-[clamp(10px,7vw,100px)] md:text-[clamp(10px,2.5vw,100px)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="4.58 2.97 61.39 54.41">
          <path
            d="M49.723 17.074C28.65-5.127 2.833 3.604 6.413 30.787S51.984 68.54 62.944 34.34s-40.681-21.04-40.681-21.04"
            fill="none"
            stroke="#c09d59"
            stroke-linecap="round"
            stroke-width="3"
            className={`svg-circle ${inView ? "active" : ""}`}
          ></path>
        </svg>
        16+{" "}
      </span>
      sports curated to bring joy and discipline to your life.
    </>
  );

  const initialActivities = [
    [
      {
        id: 0,
        image: archery,
        title: "Archery",
      },
      {
        id: 1,
        image: cycling,
        title: "Cycling",
      },
      {
        id: 2,
        image: hockey,
        title: "Hockey",
      },
      {
        id: 3,
        image: swimming,
        title: "Swimming",
      },
      {
        id: 4,
        image: taekwando,
        title: "Taekwando",
      },
      {
        id: 5,
        image: football,
        title: "Football",
      },
      {
        id: 6,
        image: shooting,
        title: "Shooting Range",
      },
      {
        id: 7,
        image: horseRiding,
        title: "Horse Riding",
      },
    ],
    [
      {
        id: 8,
        image: billiards,
        title: "Billiards",
      },
      {
        id: 9,
        image: squash,
        title: "Squash",
      },
      {
        id: 10,
        image: volleyball,
        title: "Volleyball",
      },
      {
        id: 11,
        image: basketball,
        title: "Basketball",
      },
      {
        id: 12,
        image: cricket,
        title: "Cricket",
      },
      {
        id: 13,
        image: lawnTennis,
        title: "Lawn Tennis",
      },
      {
        id: 14,
        image: badminton,
        title: "Badminton",
      },
      {
        id: 15,
        image: tableTennis,
        title: "Table Tennis",
      },
      // {
      //   id: 16,
      //   image: throwball,
      //   title: "Throwball",
      // },
    ],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); // Ref for swiper instance
  const handleBackClick = () => {
    if (swiperRef.current) {
      const prevIndex =
        currentIndex === 0 ? initialActivities.length - 1 : currentIndex - 1;
      swiperRef.current.slideTo(prevIndex); // Navigate to the previous slide
      setCurrentIndex(prevIndex); // Update state
    }
  };

  // Function to handle the "Forward" button click
  const handleForwardClick = () => {
    if (swiperRef.current) {
      const nextIndex =
        currentIndex === initialActivities.length - 1 ? 0 : currentIndex + 1;
      swiperRef.current.slideTo(nextIndex); // Navigate to the next slide
      setCurrentIndex(nextIndex); // Update state
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center py-2 md:py-10"
      id="4"
    >
      <div className="w-full px-3 md:px-0 h-full">
        <p className="w-full text-center font-[Mirador800] text-[#b90124] text-[clamp(10px,12vw,100px)] md:text-[clamp(10px,3.5vw,100px)]">
          Sports ?
        </p>
        <p className="w-full text-center font-[Mirador800] text-[clamp(10px,6vw,100px)] md:text-[clamp(10px,2vw,100px)] leading-tight">
          {title}
        </p>
      </div>
      <div className="w-full px-3 md:px-0 md:w-[90%] mx-auto h-full pt-6 md:pt-14">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Track active slide
          slidesPerView={1} // Display one group of images at a time
          spaceBetween={0}
          loop={true} // Infinite looping
          className="w-full"
        >
          {initialActivities.map((group, index) => (
            <SwiperSlide
              key={index}
              className="flex w-full h-full justify-center mx-auto flex-wrap"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
                {group.map((image, imgIndex) => (
                  <div key={imgIndex} className="w-full">
                    <div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                      <Image
                        src={image.image}
                        alt=""
                        className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "
                      />
                    </div>
                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">
                      {image.title}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom dots for carousel */}
        <div className="w-full h-full flex gap-[10%] justify-center pt-8 items-center">
          <button
            onClick={handleBackClick}
            className="bg-[#b90124] w-fit text-white text-2xl rounded-full p-3 aspect-square"
          >
            <IoChevronBackOutline />
          </button>
          <div className="flex w-fit z-10 gap-2  items-center">
            {initialActivities.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index); // Update state
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index); // Navigate to the clicked slide
                  }
                }}
                className={`w-[10px] cursor-pointer h-[10px]  rounded-full ${
                  index === currentIndex
                    ? "w-[16px] h-[16px] bg-[#B90124]"
                    : " bg-[#FFC9D3]"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleForwardClick}
            className="bg-[#b90124] w-fit text-white text-2xl rounded-full p-3 aspect-square"
          >
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
