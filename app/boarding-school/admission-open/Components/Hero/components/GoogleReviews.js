import React, { useRef, useState } from "react";
import googleReviewsBackground from "../../../../../../public/LandingPage/googleReviewsBackground.png";
import Image from "next/image";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { SwiperSlide, Swiper } from "swiper/react";
import nisha from "../../../../../../public/LandingPage/nisha.png";
import adarsh from "../../../../../../public/LandingPage/adarsh.png";
import shuvam from "../../../../../../public/LandingPage/shuvam.png";
import Richi from "../../../../../../public/LandingPage/richi.png";
import akshat from "../../../../../../public/LandingPage/akshat.png";
import StarRatings from "react-star-ratings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
function GoogleReviews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { isMobile } = useMobile();

  const features = [
    {
      image: adarsh,
      rating: 5,
      name: "Adarsh Shrivastava",
      reviewBy: "PROUD PARENT",
      description:
        "The boarding facilities at Tula's International School are exceptional. My son feels at home and well-cared for. The staff are attentive and always available to help with any needs he may have.",
    },
    {
      image: nisha,
      rating: 5,
      name: "Nisha Giri",
      reviewBy: "PROUD PARENT",
      description:
        "I have been thoroughly impressed with Tula's International School since my daughter started attending three years ago. The teachers are knowledgeable and passionate about their subjects.",
    },
    {
      image: shuvam,
      rating: 5,
      name: "Shuvam Sahu",
      reviewBy: "PROUD PARENT",
      description:
        "Safety and security are of utmost importance at Tula's International School. The school maintains a strict security protocol, ensuring the well-being and protection of its students.",
    },
    {
      image: Richi,
      rating: 4.5,
      name: "Richi Sahu",
      reviewBy: "PROUD PARENT",
      description:
        "Tula's International School offers a wide range of academic programs and extracurricular opportunities that cater to the unique interests and aspirations of every student, encouraging their personal growth and exploration.",
    },
    {
      image: akshat,
      rating: 4.5,
      name: "AKSHAT GOYAL",
      reviewBy: "PROUD PARENT",
      description:
        "As a parent with 2 children who have gone through three different schools in Dehradun, I can honestly say I have been more impressed with Tula’s International School than any of the more traditional & schools.",
    },
  ];

  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (activeIndex < features.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="flex flex-col md:flex-row relative w-full">
      <div className="w-full py-8 md:py-14 relative md:w-[42%] flex bg-black flex-col justify-center items-center">
        <Image
          src={googleReviewsBackground}
          alt=""
          className="w-full h-full opacity-50 absolute object-cover"
        />
        <div className="text-white py-20 md:py-0 flex flex-col relative z-20 justify-center items-center px-8">
          <h3 className="font-[Mirador800] text-[clamp(10px,8vw,70px)] md:text-[clamp(10px,2.5vw,70px)] text-center">
            Google Reviews
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 268.317 14.075"
            className={`mainText-scribble w-[60%] max-w-[268px] ${
              inView ? "active" : ""
            }`}
            width="268.3169860839844"
            height="14.074999809265137"
          >
            <path
              id="mainTextScribble"
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
              transform="translate(-403.065 -1791.313)"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="svg-elem-1"
            />
          </svg>
          {/* <h2
            className="px-0 md:px-20 text-[clamp(10px,4.5vw,25px)] md:text-[clamp(10px,1.1vw,25px)]"
            style={{
              fontFamily: "TT Chocolates",
            }}
          >
            The school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. The
            school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. 
          </h2> */}
        </div>
      </div>
      <div className="w-full py-8 md:py-14 md:w-[58%] flex items-center justify-center backgroundGoogle">
        <div ref={ref} className="w-full overflow-hidden ">
          <div
            className={`pl-0 md:pl-12 flex ${
              inView ? "animate-translateRight opacity-100" : "opacity-0"
            }`}
          >
            <Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              ref={swiperRef}
              slidesPerView={isMobile ? 1.2 : 2.8}
              spaceBetween={30}
              centeredSlides={isMobile ? true : false}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-full rounded-xl w-full mx-auto flex flex-col justify-between px-6 py-4 bg-white overflow-hidden"
                    style={{ fontFamily: "TT Chocolates" }}
                  >
                    <div className="flex h-full justify-between mb-4 items-center">
                      <div className="w-fit flex flex-col text-[14px] gap-2 md:gap-4 justify-between">
                        <StarRatings
                          rating={feature.rating}
                          starRatedColor="#b90124"
                          numberOfStars={5}
                          starDimension="15px"
                          starSpacing="2px"
                          name="rating"
                        />
                        <h2 className="leading-none font-extrabold text-left text-[clamp(10px,4.5vw,45px)] md:text-[clamp(10px,1.6vw,45px)]">
                          {feature.name}
                        </h2>
                        {/* <h3 className="text-[clamp(10px,4vw,45px)] md:text-[clamp(8px,1vw,45px)] leading-none font-extrabold text-left ">
                          {feature.reviewBy}
                        </h3> */}
                      </div>
                      <Image
                        src={feature.image}
                        alt=""
                        className="w-[40%] aspect-square rounded-full h-fit object-cover"
                      />
                    </div>
                    <h2 className="text-left text-[clamp(10px,3vw,45px)] md:text-[clamp(10px,0.8vw,45px)]">
                      {feature.description}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex space-x-10 pt-8 justify-end pr-10">
            <button
              onClick={handlePrevClick}
              className={`pointer-events-auto shadow-2xl text-black h-[40px] w-[40px] bg-[#60bab1] flex items-center justify-center text-[30px] ${
                activeIndex === 0
                  ? "cursor-not-allowed opacity-50"
                  : "active:scale-90"
              }`}
              disabled={activeIndex === 0}
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNextClick}
              className={`pointer-events-auto shadow-2xl text-black h-[40px] w-[40px] bg-[#60bab1] flex items-center justify-center text-[30px] ${
                activeIndex === features.length - 1
                  ? "cursor-not-allowed opacity-50"
                  : "active:scale-90"
              }`}
              disabled={activeIndex === features.length - 1}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleReviews;
