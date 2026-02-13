"use client"
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
import amit from "../../../../../../public/LandingPage/amit.png";
import ashu from "../../../../../../public/LandingPage/ashu.png";
import gulabdas from "../../../../../../public/LandingPage/gulabdas.png";
import namita from "../../../../../../public/LandingPage/namita.png";
import pinky from "../../../../../../public/LandingPage/pinky.png";
import salendra from "../../../../../../public/LandingPage/salendra.png";
import sandeep from "../../../../../../public/LandingPage/sandeep.png";
import suresh from "../../../../../../public/LandingPage/suresh.png";
import tashi from "../../../../../../public/LandingPage/tashi.png";
import urja from "../../../../../../public/LandingPage/urja.png";
import StarRatings from "react-star-ratings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
function GoogleReviews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { isMobile } = useMobile();

  // const features = [
  //   {
  //     image: adarsh,
  //     rating: 5,
  //     name: "Adarsh Shrivastava",
  //     reviewBy: "PROUD PARENT",
  //     description:
  //       "The boarding facilities at Tula's International School are exceptional. My son feels at home and well-cared for. The staff are attentive and always available to help with any needs he may have.",
  //   },
  //   {
  //     image: nisha,
  //     rating: 5,
  //     name: "Nisha Giri",
  //     reviewBy: "PROUD PARENT",
  //     description:
  //       "I have been thoroughly impressed with Tula's International School since my daughter started attending three years ago. The teachers are knowledgeable and passionate about their subjects.",
  //   },
  //   {
  //     image: shuvam,
  //     rating: 5,
  //     name: "Shuvam Sahu",
  //     reviewBy: "PROUD PARENT",
  //     description:
  //       "Safety and security are of utmost importance at Tula's International School. The school maintains a strict security protocol, ensuring the well-being and protection of its students.",
  //   },
  //   {
  //     image: Richi,
  //     rating: 4.5,
  //     name: "Richi Sahu",
  //     reviewBy: "PROUD PARENT",
  //     description:
  //       "Tula's International School offers a wide range of academic programs and extracurricular opportunities that cater to the unique interests and aspirations of every student, encouraging their personal growth and exploration.",
  //   },
  //   {
  //     image: akshat,
  //     rating: 4.5,
  //     name: "AKSHAT GOYAL",
  //     reviewBy: "PROUD PARENT",
  //     description:
  //       "As a parent with 2 children who have gone through three different schools in Dehradun, I can honestly say I have been more impressed with Tula’s International School than any of the more traditional & schools.",
  //   },
  // ];
  const features = [
    {
      image: namita,
      name: "Namita Agarwal",
      reviewBy: "M/O Krishna Agarwal",
      classCity: "Class VIII, Jaipur, Rajasthan",
      rating: 5,
      description:
        "Tula’s gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    },
    {
      image: tashi,
      name: "Tashi Tsering",
      reviewBy: "F/O Jigmet Skaldon",
      classCity: "Class VIII, Leh, Ladakh",
      rating: 4.5,
      description:
        "I would like to convey a big thanks to the Management and Teachers of Tula’s International School for taking good care of my son.",
    },
    {
      image: sandeep,
      name: "Sandeep Kumar",
      reviewBy: "F/O Aryan",
      classCity: "Class XI, Sonipat, Haryana",
      rating: 5,
      description:
        "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    },
    {
      image: suresh,
      name: "Suresh Kumar",
      reviewBy: "F/O Aditya Kumar",
      classCity: "Class VIII, Greater Noida West, Uttar Pradesh",
      rating: 4,
      description:
        "Tula’s International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.",
    },
    {
      image: amit,
      name: "Amit Agrawal",
      reviewBy: "F/O Samruddhi Agrawal",
      classCity: "Class XI, Mumbai, Maharashtra",
      rating: 4.5,
      description:
        "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.",
    },
    {
      image: pinky,
      name: "Pinky Sharma",
      reviewBy: "M/O Swastik Sharma",
      classCity: "Class XII, Patna Bihar",
      rating: 5,
      description:
        "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.",
    },
    {
      image: gulabdas,
      name: "Gulabdas Gupta",
      reviewBy: "F/O Annika Gulabdas Gupta",
      classCity: "Class VIII, Delhi",
      rating: 4.5,
      description:
        "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tula’s. She is very much satisfied with the facilities offered at Tula’s related to education, extra-curricular activities, recreation & hygiene. ",
    },
    {
      image: urja,
      name: "Mrs Urja Bhayani",
      reviewBy: "M/O Shikha & Samarth Bhayani",
      classCity: "Class XI, Dubai, UAE",
      rating: 5,
      description:
        "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.",
    },
    // {
    //   name: "Manaya Mena",
    //   reviewBy: "M/O Chahsha Ekhoney Mow",
    //   rating: 5,
    //   classCity: "Class XI, Itanagar, Arunachal Pradesh",
    //   description:
    //     "TIS is the kind of school for those parents who long for a complete holistic education for their children. It’s routine is in fact a training phase for the young adolescents to understand the importance of time, on being healthy and self reliant. TIS does emphasize on discipline and I believe “Discipline achieves what ambition seeks.”",
    // },
    {
      image: salendra,
      name: "Selendra K. Ajmera",
      reviewBy: "F/O Aman Ajmera",
      classCity: "Class XII, Dimapur, Nagaland",
      rating: 3.8,
      description:
        "Hi Tula’s! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.",
    },
    {
      image: ashu,
      name: "Ashu Arora",
      reviewBy: "M/O Manisha Changrani",
      classCity: "Class VII, Gurgaon, Haryana",
      rating: 4.5,
      description:
        "It has been a fantastic journey for my daughter in Tula’s International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
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
    <div id="13" className="flex flex-col md:flex-row relative w-full">
      <div className="w-full py-8 md:py-14 relative md:w-[42%] flex bg-black flex-col justify-center items-center">
        <Image
          src={googleReviewsBackground}
          alt=""
          className="w-full h-full opacity-50 absolute object-cover"
        />
        <div className="text-white py-20 md:py-0 flex flex-col relative z-20 justify-center items-center px-8">
          <h3 className="font-[Mirador800] text-[clamp(10px,8vw,70px)] md:text-[clamp(10px,2.5vw,70px)] text-center leading-tight">
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
                    className="h-full rounded-xl w-full mx-auto flex flex-col gap-2 px-6 py-4 bg-white overflow-hidden"
                    style={{ fontFamily: "TT Chocolates" }}
                  >
                    <Image
                      src={feature.image}
                      alt=""
                      className="w-[40%] mx-auto aspect-square rounded-full h-fit object-cover"
                    />
                    <div className="w-full flex flex-col gap-1 leading-tight text-[clamp(10px,3.5vw,45px)] md:text-[clamp(10px,1vw,45px)]">
                      <h2 className="leading-none font-extrabold text-center text-[clamp(10px,4.5vw,45px)] md:text-[clamp(10px,1.6vw,45px)]">
                        {feature.name}
                      </h2>
                      {/* <StarRatings
                          rating={feature.rating}
                          starRatedColor="#b90124"
                          numberOfStars={5}
                          starDimension="15px"
                          starSpacing="2px"
                          name="rating"
                        /> */}
                      <h2 className="leading-tight font-extrabold text-center text-[clamp(10px,3.5vw,45px)] md:text-[clamp(10px,1vw,45px)]">
                        {feature.reviewBy}
                      </h2>
                      {/* <h2 className="text-center text-[clamp(10px,3.5vw,45px)] font-extrabold md:text-[clamp(10px,1vw,45px)] leading-tight">
                          {feature.classCity}
                        </h2> */}
                    </div>
                    <h2 className="text-left text-[clamp(10px,3vw,45px)] line-clamp-5 md:text-[clamp(10px,0.8vw,45px)] leading-tight">
                      {feature.description}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex space-x-4 md:space-x-10 pt-8 justify-end pr-10">
            <button
              onClick={handlePrevClick}
              className={`pointer-events-auto shadow-2xl p-3 md:p-[0.5%] text-black h-fit w-fit bg-[#60bab1] flex items-center justify-center text-[clamp(10px,5vw,45px)] md:text-[clamp(10px,1.6vw,45px)] leading-none ${
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
              className={`pointer-events-auto shadow-2xl p-3 md:p-[0.5%] text-black h-fit w-fit bg-[#60bab1] flex items-center justify-center text-[clamp(10px,5vw,45px)] md:text-[clamp(10px,1.6vw,45px)] leading-none ${
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
