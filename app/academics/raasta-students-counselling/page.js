"use client";
import RaastaBannerImg from "../../../public/Banner/RaastaBannerImg.webp";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Head from "next/head";
import Header from "@/components/globalComponents/Header/Header";
import Image from "next/image";
import image1 from "../../../public/raasta-students/image1.webp";
import image2 from "../../../public/raasta-students/image2.webp";
import nikhil from "../../../public/raasta-students/nikhil.webp";
import abhinav from "../../../public/raasta-students/abhinav.webp";
import { useRef, useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CareerCounsellingPage() {
  const data = [
    {
      name: "Nikhil Raj Sharma",
      image: nikhil,
      points:
        "Nikhil Raj Sharma is a certified life coach, mentor, and trainer with over 20 years of experience in personal and professional development. Renowned for his impactful workshops and coaching sessions, he has helped countless individuals and organisations unlock their potential. His achievements include transforming leadership strategies, boosting emotional intelligence, and guiding teams to success.",
    },
    {
      name: "Abhinay",
      image: abhinav,
      points:
        "Abhinay, a distinguished life coach, drama therapist, and philanthropist from Uttarakhand, has an impressive theatrical career spanning over 50 plays, films, and documentaries. A graduate of the National School of Drama, he shares his expertise through transformative drama therapy workshops. As the founder of Aaina, he mentors aspiring performers, guiding them through the complexities of stagecraft and production. Abhinav's influence extends far beyond the stage, inspiring and shaping lives through his dedication, both on and off the spotlight.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleExpand = (index) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    } // Toggle the expanded state
  };
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      swiperRef.current.swiper.slidePrev();
      setExpandedIndex(activeIndex - 1); // Set expandedIndex to the new slide index
    }
  };

  const handleNextClick = () => {
    if (activeIndex < data.length - 1) {
      swiperRef.current.swiper.slideNext();
      setExpandedIndex(activeIndex + 1); // Set expandedIndex to the new slide index
    }
  };
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apos;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>
      <Navbar />
      <Header
        title={"Raasta Students Counselling"}
        subtitle={
          "At TIS, we empower students through Comprehensive Career Counselling Services"
        }
        headerImg={RaastaBannerImg}
        headerImgMobile={RaastaBannerImg}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        The Raasta Programme is the brainchild of the Vice Chairman, Mr. Raunak
        Jain. Designed with a student-first approach, this programme enables
        students to prove their potential, improve their skills, and achieve a
        higher level of excellence.
        <br />
        <br />
        Led by a highly skilled team comprising Mr. Nikhil Sharma and Mr.
        Abhinay Goyal, Raasta is an ongoing initiative offered year-round,
        catering to students from Classes IV to XII. This comprehensive
        programme equips students with essential life skills that are crucial
        for both personal and professional growth.
      </h6>
      <div className="flex pb-4 flex-col md:flex-row w-[90%] md:w-[85%] mx-auto gap-4">
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image1}
          alt=""
        />
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image2}
          alt=""
        />
      </div>
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        Raasta focuses on transformative skills that leave a lasting impact,
        empowering students to navigate life with confidence and resilience. The
        programme emphasises goal-setting, teamwork, innovation,
        self-reflection, curiosity, introspection, critical thinking, research,
        and strategic planning. It also fosters cooperation, compromise,
        effective communication, decision-making, time management, and emotional
        intelligence.
        <br />
        <br />
        By developing these core abilities, students emerge as self-aware,
        emotionally intelligent, and adaptable individuals, ready to face the
        challenges of the future. Parents can be assured that the school’s
        commitment to Raasta nurtures well-rounded individuals, preparing
        students for both academic success and life beyond the classroom.
        <br />
        <br />
        The Raasta Programme provides a stimulating and supportive environment
        where students can continuously hone their life skills, fostering growth
        in an engaging and enriching atmosphere.
      </h6>

      <div className="py-8 md:py-[3%] w-full">
        <div className="hidden w-full h-full md:block">
          <div className="w-[90%] xl:w-[75%] mx-auto gap-6 flex justify-center overflow-scroll md:overflow-auto">
            {data.map((data, index) => (
              <div key={index} className="w-[60%] md:w-[25%]">
                <div
                  onClick={() => handleExpand(index)}
                  className={`flex w-full cursor-pointer relative flex-col justify-end rounded-t-xl ${
                    expandedIndex !== index
                      ? "rounded-es-xl rounded-br-[32.5px]"
                      : ""
                  } overflow-hidden shadow-[0px_14px_12.7px_0px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)70.53%,#000_93.09%)]`}
                >
                  <Image
                    src={data.image}
                    alt=""
                    className="w-full h-full object-cover -z-10"
                  />
                  <div className="flex absolute text-white items-end justify-between w-full">
                    <div className="flex flex-col justify-center px-4 items-start">
                      <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(10px,5vw,30px)] md:text-[clamp(10px,1.8vw,50px)]">
                        {data.name}
                      </h3>
                      {expandedIndex !== index && (
                        <h2 className="text-[#9A9A9A] text-xl font-[TTChocolates]">
                          Read More
                        </h2>
                      )}
                    </div>
                    {expandedIndex !== index && (
                      <button className="border-4 font-black bg-white rounded-full text-[#b90124] text-[26px] border-[#b90124] min-w-[65px] min-h-[65px] max-w-[65px] max-h-[65px] flex justify-center items-center">
                        <RxDoubleArrowDown />
                      </button>
                    )}
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className="pt-[10%] w-full bg-[#FFE4E4]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="block w-full h-full md:hidden">
          <div className="flex px-8 gap-4 justify-end pb-8">
            <button
              onClick={handlePrevClick}
              className="text-white bg-[#b90124] active:scale-90 w-[40px] flex items-center justify-center rounded-full h-[40px] text-[20px]"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="text-white bg-[#b90124] w-[40px] active:scale-90 flex items-center justify-center rounded-full h-[40px] text-[20px]"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="w-[75%] mx-auto flex overflow-scroll">
            <Swiper
              spaceBetween={24}
              className="mySwiper"
              slidesPerView={1.3}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setExpandedIndex(swiper.activeIndex);
              }}
              ref={swiperRef}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className={`flex`}>
                  <div
                    onClick={() => handleExpand(index)}
                    className={`flex w-full cursor-pointer relative flex-col aspect-[303/470] justify-end rounded-t-xl overflow-hidden shadow-[0px_14px_12.7px_0px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)70.53%,#000_93.09%)]`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover -z-10"
                    />
                    <div className="flex absolute text-white items-end justify-between w-full">
                      <div className="flex flex-col justify-center px-4 items-start">
                        <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(10px,5vw,30px)] md:text-[clamp(10px,1.8vw,50px)]">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <div className="pt-[20%] w-full bg-[#FFE4E4]"></div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full text-black transition-all duration-500">
          <div className="flex w-full justify-center items-center">
            <button
              onClick={handlePrevClick}
              className="text-[#b90124] md:hidden active:scale-90 w-[40px] flex items-center justify-center rounded-full h-[40px] text-[20px]"
            >
              <FaChevronLeft />
            </button>

            <div
              className={`bg-[#FFE4E4] w-[85%] md:w-[90%] xl:w-[75%] mx-auto rounded-xl  px-8 md:px-[3%] py-8`}
            >
              <h3 className="text-[#B90124] text-[clamp(10px,7vw,60px)] leading-tight pb-4 font-[NeueHaasDisplayBold] tracking-wide md:tracking-wider md:text-[clamp(10px,2.2vw,50px)]">
                {data[expandedIndex].name}
              </h3>
              <h4
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className="text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] leading-tight"
              >
                {data[expandedIndex].points}
              </h4>
            </div>
            <button
              onClick={handleNextClick}
              className="text-[#b90124] md:hidden w-[40px] active:scale-90 flex items-center justify-center rounded-full h-[40px] text-[20px]"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
