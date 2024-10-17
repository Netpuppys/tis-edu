import React, { useEffect, useRef, useState } from "react";
import googleReviewsBackground from "../../../../../../public/LandingPage/googleReviewsBackground.png";
import Image from "next/image";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { SwiperSlide, Swiper } from "swiper/react";
import reviewsDummy from "../../../../../../public/LandingPage/reviewsDummy.png";
import StarRatings from "react-star-ratings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
function GoogleReviews() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { isMobile } = useMobile();

  const features = [
    {
      image: reviewsDummy,
      rating: 5,
      name: "Apurva Rai",
      reviewBy: "PROUD PARENT",
      description:
        "A school for my kid has to be the best in terms of everything. Being a prestigious institution focusing on overall development, Tula's sounded like the best option!",
    },
    {
      image: reviewsDummy,
      rating: 4.5,
      name: "Apurva Rai",
      reviewBy: "PROUD PARENT",
      description:
        "A school for my kid has to be the best in terms of everything. Being a prestigious institution focusing on overall development, Tula's sounded like the best option!",
    },
    {
      image: reviewsDummy,
      rating: 3.4,
      name: "Apurva Rai",
      reviewBy: "PROUD PARENT",
      description:
        "A school for my kid has to be the best in terms of everything. Being a prestigious institution focusing on overall development, Tula's sounded like the best option!",
    },
    {
      image: reviewsDummy,
      rating: 3.5,
      name: "Apurva Rai",
      reviewBy: "PROUD PARENT",
      description:
        "A school for my kid has to be the best in terms of everything. Being a prestigious institution focusing on overall development, Tula's sounded like the best option!",
    },
    {
      image: reviewsDummy,
      rating: 4.5,
      name: "Apurva Rai",
      reviewBy: "PROUD PARENT",
      description:
        "A school for my kid has to be the best in terms of everything. Being a prestigious institution focusing on overall development, Tula's sounded like the best option!",
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
    <div className="flex flex-col md:flex-row min-h-screen md:min-h-[75vh] relative w-full">
      <div className="w-full md:w-[42%]  relative flex bg-black flex-col justify-center items-center md:h-full">
        <Image
          src={googleReviewsBackground}
          alt=""
          className="w-full opacity-50 min-h-[50vh] md:min-h-[75vh] object-cover"
        />
        <div className="text-white absolute flex flex-col justify-center items-center px-8">
          <h3
            className="font-[Mirador] text-center"
            style={{ fontSize: "clamp(38px, 4vw, 70px)" }}
          >
            Google Reviews
          </h3>
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 268.317 14.075"
            className={`mainText-scribble mb-8 w-[60%] max-w-[268px] ${
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
          <p3
            className="px-8 md:px-20"
            style={{
              fontSize: "clamp(14px, 1.1vw, 25px)",
              fontFamily: "TT Chocolates",
            }}
          >
            The school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. The
            school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. 
          </p3>
        </div>
      </div>
      <div className="w-full md:w-[58%] relative min-h-[50vh] md:min-h-[75vh] backgroundGoogle">
        <div className="w-full h-fit absolute top-[50%] overflow-hidden -translate-y-1/2">
          <div
            className={` ${inView ? "animate-translateRight opacity-100" : "opacity-0"}`}
          >
            <Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              ref={swiperRef}
              slidesPerView={isMobile ? 1.2 : 2.3}
              centeredSlides={true}
              spaceBetween={30}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-full rounded-xl w-full px-6 py-4 bg-white overflow-hidden mx-auto"
                    style={{ fontFamily: "TT Chocolates" }}
                  >
                    <div className="flex justify-between mb-4 items-center">
                      <div className="w-fit flex flex-col text-[14px] gap-4 justify-between">
                        <StarRatings
                          rating={feature.rating}
                          starRatedColor="#b90124"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="5px"
                          name="rating"
                        />
                        <h2 className="text-[22px] md:text-[30px] leading-none font-extrabold text-left ">
                          {feature.name}
                        </h2>
                        <h3 className="text-[16px] md:text-[20px] leading-none font-extrabold text-left ">
                          {feature.reviewBy}
                        </h3>
                      </div>
                      <Image
                        src={feature.image}
                        alt=""
                        className="w-40 aspect-square rounded-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[16px] md:text-[20px]">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex space-x-10 pt-4 justify-end pr-10">
            <button
              onClick={handlePrevClick}
              className={`pointer-events-auto shadow-2xl text-white h-[60px] w-[60px] bg-[#b90124] flex items-center justify-center text-[40px] ${
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
              className={`pointer-events-auto shadow-2xl text-white h-[60px] w-[60px] bg-[#b90124] flex items-center justify-center text-[40px] ${
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
