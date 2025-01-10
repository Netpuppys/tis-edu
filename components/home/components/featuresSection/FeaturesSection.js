"use-client";

import React, { useEffect, useRef, useState } from "react";
import Asian from "../../../../public/pictures/asian.png";
import TheInternational from "../../../../public/pictures/International_Award_for_Young_People_logo.jpg";
import Lions from "../../../../public/pictures/lions.png";
import UniversityLogo from "../../../../public/pictures/universityLogo.jpg";
import UniversityOf from "../../../../public/pictures/University.png";
import Inseec from "../../../../public/pictures/inseec.png";
import Trinty from "../../../../public/pictures/Trinty.png";
import Universitat from "../../../../public/pictures/Universitat.jpg";
import Cpi6 from "../../../../public/pictures/Cpi6.jpg";
import yhnbepc from "../../../../public/pictures/yhnbepcntet.jpg";
import InseecU from "../../../../public/pictures/inseecU.png";
import Universidad from "../../../../public/pictures/Universidad.png";
import Universitas from "../../../../public/pictures/Universitas.png";
import "../../../../styles/home/components/featuresSection/FeaturesSection.css";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function FeaturesSection() {
  const crouselImages = [
    [Universidad, yhnbepc, Universitat, Cpi6, Inseec, Trinty],
    [
      UniversityOf,
      TheInternational,
      Lions,
      InseecU,
      Universitas,
      UniversityLogo,
    ],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); // Ref for swiper instance

  // Change index manually every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % crouselImages.length; // Cycle through the slides
      setCurrentIndex(nextIndex);

      // Move to the next slide using swiper instance
      if (swiperRef.current && swiperRef.current.slideToLoop) {
        swiperRef.current.slideToLoop(nextIndex); // Use slideToLoop for infinite looping
      }
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, crouselImages.length]);
  return (
    <div className="pt-2 md:pt-10 pb-8 md:pb-20" id="12">
      <div className="w-fit mx-auto">
        <h3 className="text-[#B90124] text-center font-[Mirador800] text-[clamp(15px,7.5vw,60px)] md:text-[clamp(20px,2.5vw,100px)]">
          COLLABORATIONS
        </h3>
        <h2 className="w-fit ml-auto leading-none text-center  text-[clamp(15px,5vw,60px)] md:text-[clamp(20px,1.8vw,100px)]">
          <span className="font-[TTChocolates] font-black text-[#B90124]">
            12+{" "}
          </span>
          <span
            style={{
              fontFamily: "TT Chocolates",
            }}
            className="text-[clamp(15px,4vw,60px)] text-[#000] md:text-[clamp(20px,1.3vw,100px)]"
          >
            Collaborations
          </span>
        </h2>
      </div>
      <div className="w-full h-full pt-14">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Track active slide
          slidesPerView={1} // Display one group of images at a time
          spaceBetween={0}
          loop={true} // Infinite looping
          className="w-full"
        >
          {crouselImages.map((group, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center w-fit mx-auto flex-wrap"
            >
              <div className="flex flex-wrap gap-10 md:gap-16 justify-center items-center">
                {group.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt="Top Recruiter"
                    className="w-[30%] md:w-[10%] h-fit object-cover"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom dots for carousel */}
        <div className="flex w-fit mx-auto z-10 gap-2 pt-8 items-center">
          {crouselImages.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentIndex(index); // Update state
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(index); // Navigate to the clicked slide
                }
              }}
              className={`w-[10px] cursor-pointer h-[10px] bg-[#36091F80] bg-opacity-50 rounded-full ${
                index === currentIndex ? "w-[16px] h-[16px]" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
