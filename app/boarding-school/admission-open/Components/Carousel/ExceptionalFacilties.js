"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classroom from "../../../../../public/LandingPage/classrom.JPG";
import library from "../../../../../public/LandingPage/library.jpg";
import lab from "../../../../../public/LandingPage/lab.jpg";
import clubs from "../../../../../public/LandingPage/clubs.jpg";
import gymnasium from "../../../../../public/LandingPage/gymnasium.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
function ExceptionalFacilties() {
  const features = [
    {
      image: classroom,
      name: (
        <>
          Digital <span className="text-[#b90124]">Workstations</span>
        </>
      ),
      description: (
        <>
          Tula’s is the only CBSE school in North India that has well-designed,
          technically sound workstations for each subject to foster learning
          among students.
        </>
      ),
    },
    {
      image: lab,
      name: (
        <>
          Well-Equipped <span className="text-[#b90124]">Laboratories</span>
        </>
      ),

      description: (
        <>
          Well-equipped Biology, Physics and Chemistry Laboratories, a
          state-of-the-art Computer Department and IT Centre are constantly
          buzzing with activity.
        </>
      ),
    },
    {
      image: library,
      name: (
        <>
          Library with{" "}
          <span className="text-[#b90124]">around 20,000+ Books</span>
        </>
      ),
      description: (
        <>
          The LIBRARY at Tula’s is spacious, well-ventilated, and well-stocked.
          We have around 20,000+ books of various subjects, in different
          languages for all age groups of our students.
        </>
      ),
    },
    {
      image: clubs,
      name: (
        <>
          Multiple Clubs <span className="text-[#b90124]">& Societies</span>
        </>
      ),
      description: (
        <>
          The Clubs and Societies gives them a platform to discover their hidden
          talents, essential for all-round education.
        </>
      ),
    },
    {
      image: gymnasium,
      name: (
        <>
          Enriching Fitness{" "}
          <span className="text-[#b90124]">with 15+ Sports</span>
        </>
      ),
      description: (
        <>
          We offer the best sporting infrastructure with fully-fledged program
          to develop students .
        </>
      ),
    },
  ];

  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
      swiperRef.current.swiper.slideTo(
        activeIndex === features.length - 1 ? 0 : activeIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex, features.length]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-10">
        <h3 className="text-[#b90124] text-center font-[TTChocolatesBold] leading-tight text-[clamp(10px,7.5vw,60px)] md:text-[clamp(10px,2.5vw,50px)]">
          Exceptional Facilities At TIS
        </h3>
        <span ref={ref}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 268.317 14.075"
            height="14.074999809265137"
            className={`mainText-scribble w-[60%] mx-auto md:w-[268px] ${
              inView ? "active" : ""
            }`}
          >
            <path
              id="mainTextScribble"
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
              transform="translate(-403.065 -1791.313)"
              fill="none"
              stroke="#c09d59"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="svg-elem-1"
            />
          </svg>
        </span>
      </div>
      <div>
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row h-[380px] md:h-[250px] rounded-3xl w-[85%] border border-[#b90124] overflow-hidden mx-auto md:items-center md:justify-center">
                <Image
                  src={feature.image}
                  alt=""
                  className="w-full md:w-[50%] h-[200px] md:h-full object-cover"
                />
                <div
                  style={{ fontFamily: "TT Chocolates" }}
                  className="w-full h-[180px] md:h-full md:w-[50%] mx-auto flex flex-col justify-center px-3 md:px-[2vw] py-4 md:py-0"
                >
                  <div>
                    <h2 className="text-[clamp(10px,7vw,60px)] md:text-[clamp(10px,2vw,50px)] leading-tight font-extrabold text-left mb-4">
                      {feature.name}
                    </h2>
                  </div>
                  <p className="mb-4 text-[clamp(10px,4vw,60px)] md:text-[clamp(10px,1.1vw,60px)] leading-tight">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex z-30 justify-center items-center pt-10  gap-2">
          {features.map((_, index) => (
            <div key={index} onClick={() => handleDotClick(index)}>
              <div
                className={`w-[10px] h-[10px] md:w-[15px] z-10 md:h-[15px] rounded-full flex items-center justify-center cursor-pointer ${
                  index === activeIndex
                    ? " bg-[#b90124] scale-110"
                    : " bg-[#FFB9C6] blur-[0.6px] scale-75"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExceptionalFacilties;
