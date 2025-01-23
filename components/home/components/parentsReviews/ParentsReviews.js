"use client";

import React, { useRef, useState, useEffect } from "react";
import invCommaIcon from "../../../../public/icons/commas.svg";
import "../../../../styles/home/components/parentsReviews/ParentsReviews.css";
import previousIcon from "../../../../public/pictures/previous.png";
import nextIcon from "../../../../public/pictures/next.png";
import Image from "next/image";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function ParentsReviews() {
  const { isMobile } = useMobile();
  const [activeIndex, setActiveIndex] = useState(1); // Set default index to 1

  const testimonials = [
    "https://assets.tulas.edu.in/tis/1VIDEO.mp4",
    "https://assets.tulas.edu.in/tis/2VIDEO-compressed.mp4",
    "https://assets.tulas.edu.in/tis/3VIDEO.mp4",
  ];

  const reviews = [
    "Tula's International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child's growth. We are grateful for the personalized attention and the care the school offers.",
    "We have seen a remarkable improvement in our child's confidence and skills since joining Tula's. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.",
    "Our experience at Tula's International School has been outstanding. The nurturing environment and the attention given to each student’s individual progress have made a world of difference in our child's learning journey. The school's commitment to excellence is evident.",
    // "The caring approach of the teachers at Tula's has been instrumental in our child's development. Their personalized teaching methods have helped our child excel academically and socially. We couldn't be happier with the school's dedication to each student's success.",
  ];

  const swiperRef = useRef([]);
  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Use `swiper` instance
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Use `swiper` instance
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center py-2 md:py-10"
      id="11"
    >
      <div className="w-full px-8 md:px-0 md:w-[75%] mx-auto">
        <div className="w-full flex h-full gap-2 items-start">
          <Image src={invCommaIcon} alt="" className="w-[20px] md:w-[30px]" />
          <h2 className="border-[#b90124] border-b leading-tight text-[clamp(15px,8vw,60px)] md:text-[clamp(20px,3vw,100px)] font-[900] font-[TTChocolatesBold]">
            From The{" "}
            <span className="text-[#b90124] font-[Mirador800]">Parents</span>
          </h2>
        </div>
        <h3
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full pt-2 md:pl-[38px] md:pt-10 text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
        >
          {reviews[activeIndex]}
        </h3>
      </div>
      <div className="relative w-full">
        <div className="w-full md:w-full mx-auto h-full flex items-center justify-center md:px-40 pt-8 md:pt-14 relative">
          {/* <Image
            src={previousIcon}
            onClick={handlePrevClick}
            className="w-[10%] h-full flex md:hidden bg-transparent z-50 relative left-4"
          /> */}
          <div className="w-[10%] h-full flex md:hidden bg-transparent z-50 relative left-4 rotate-180">
            <div onClick={handlePrevClick} className="arrow ">
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </div>
          </div>

          <div className="w-[70%] md:w-[80%] h-full flex items-center justify-center px-8 md:px-0 relative">
            {/* Swiper Carousel */}
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              slidesPerView={isMobile ? 1 : 3}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`transition-transform duration-500 h-fit w-full aspect-[9/16]`}
                  >
                    <video
                      src={testimonial}
                      width="100%"
                      height="100%"
                      className="h-fit w-full aspect-[9/16]"
                      controls={true}
                    />
                    {/* <iframe
                      src={testimonial}
                      className="h-fit w-full aspect-[9/16]"
                    /> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[10%] h-full md:hidden flex bg-transparent z-50 relative right-4">
            <div onClick={handleNextClick} className="arrow">
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </div>
          </div>
          {/* <Image
            src={nextIcon}
            onClick={handleNextClick}
            className="w-[10%] h-full flex md:hidden bg-transparent z-50 relative right-4"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ParentsReviews;
