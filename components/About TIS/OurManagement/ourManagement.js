"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import Header from "../../globalComponents/Header/Header";
import HeaderManagementIMg from "../../../public/Header/managementHeader.webp";
import HeaderManagementMobileIMg from "../../../public/Header/managementHeaderMobile.webp";
import sunil from "../../../public/ourMangement/sunilJain.webp";
import Raunak from "../../../public/ourMangement/Raunak.webp";
import silky from "../../../public/ourMangement/silky.webp";
import raghav from "../../../public/ourMangement/raghav.webp";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function OurManagement() {
  const { isMobile } = useMobile();
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

  const data = [
    {
      name: "Mr. Sunil Kumar Jain",
      position: "(Chairman)",
      image: sunil,
      points: (
        <ul className="ml-8 list-image-green">
          <li>Dr APJ Kalam Award - 2016</li>
          <li>Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar - 2015</li>
          <li>
            Edupreneurs award 2013 for valuable contribution in engineering
            education in India
          </li>
          <li>Rajeev Gandhi Shiromani Award - 2010</li>
          <li>Recipient of Indira Gandhi Sadbhavna Award - 2008</li>
        </ul>
      ),
      description: (
        <>
          It brings me immense pride and satisfaction to extend my heartiest
          congratulations to the Management, dedicated Staff, and the vibrant
          Student body of Tula's International School on the publication of its
          Second edition of the Year Book. This publication serves as a
          chronicle of our collective journey towards educational excellence,
          and it is with great anticipation that I share my thoughts with you
          today.
          <p className="py-1"></p>
          Tula's International School combines - respect for tradition with a
          progressive application of modern sciences, academic rigour with a
          caring heart, and individual appreciation with the warmth of a school
          community.
          <p className="py-1"></p>
          In today's world, where society is increasingly divided into smaller
          segments, Tula remains a community rich in integrity. Honesty, humour,
          and hard work form the basis of an educational process that results in
          learning for a lifetime.
          <p className="py-1"></p>
          Our dedicated faculty is at the heart of our endeavour to build an
          intellectual community. Our teachers love to teach.
          <p className="py-1"></p>
          Passionate toward the success of their students, the faculty serves as
          teachers, coaches, advisors, mentors, and friends. In every area of
          school life, the faculty seeks to challenge and inspire students to
          reach new levels of enquiry and understanding.
          <br />
          <br />
          <span className="text-[#b90124]">
            I invite you to join Tula's in this journey of an enriching
            educational experience for our students.
          </span>
        </>
      ),
    },
    {
      name: "Mr. Raunak Jain",
      image: Raunak,
      position: "(Vice Chairman)",
      points: (
        <ul className="ml-8 list-image-green">
          <li>Alumnus - M.Sc. International Management from RHUL</li>
          <li>(Royal Holloway University of London)</li>
          <li>Vice president (Welfare) National Taekwondo Committe</li>
          <li>Member - Cricket Association of Uttarakhand</li>
        </ul>
      ),
      description: (
        <>
          The Director of Tula's, Mr Raunak Jain, is a high achiever. Topping
          through his college and post-graduation (from the Royal Holloway
          University of London), Mr Jain has made winning a habit. Owing to this
          habit, he aspires to make Tula's International one of the best and
          most dependable schools. He understands that he can achieve this
          ambition only through the success of every student of Tula's, for he
          believes in - Together we rise, together we touch the skies.
          <p className="py-1"></p>
          Mr Jain, as the Director and as the youngest member of the Tulas
          Family, has all his interests invested in the school to make it a
          perfect setting for a student's holistic development with emphasis on
          creating a balanced persona. Compromising at no point, Tula's provides
          world-class amenities for your child, whether in education, athletics,
          the arts, or entertainment. We were guided through expert advice.
        </>
      ),
    },
    {
      name: "Mrs. Silky Jain Marwah",
      image: silky,
      position: "(Executive Director)",
      points: (
        <ul className="ml-8 list-image-green">
          <li>Alumnus - Symbiosis Institute of Design, Pune</li>
          <li>
            Awarded as an Inspiring Women Eduleader for the year 2014 by
            Engineering Watch
          </li>
          <li>Awarded as Education Evangelist 2015 by Skill tree</li>
          <li>
            Awarded Certification in Leadership from Harvard University, USA
            2017
          </li>
          <li>Awarded with Today's Woman Award by I-next 2017</li>
        </ul>
      ),
      description: (
        <>
          Alumnus, Symbiosis Institute of Design, Pune; awarded as an inspiring
          Women Eduleader'for the year 2014 by Engineering Watch and 'Skilltree
          Education Evangelist 2015' by Skill Tree, Silky Jain is an inspiration
          for many. The 'care-India youth icon from 2011 till date, Ms Jain is a
          self-starter and an achiever. Currently handling the Engineering
          College and the Management College (Tula's Institute), she has a good
          understanding of the operations of Educational Institutions.
          <p className="py-1"></p>
          Apart from catering to her duties as an Executive Director, she would
          be helping Tula's students to make career choices and hand-holding
          them through their transitions post their schooling.
        </>
      ),
    },
    {
      name: "Dr. Raghav Garg",
      position: "(Vice President Technology)",
      image: raghav,
      points: (
        <ul className="ml-8 list-image-green">
          <li>B.Tech CS (VIT, Vellore)</li>
          <li>M.S. (University of Texas at Dallas)</li>
          <li>Ph.D (Banasthali University)</li>
          <li>MBA (IIMK)</li>
        </ul>
      ),
      description: (
        <>
          As the name suggests, Tula's creates a balance and strives to develop
          and unearth the intrinsic potential and capability of the students,
          thereby preparing them to take on global challenges.
          <p className="py-1"></p>
          Our vision is to make Tula a centre of excellence in learning,
          innovation, technology, agriculture, and management. Every student is
          nurtured holistically. The result is young entrepreneurs who are ready
          for the workforce. Students at Tula's envision becoming employers and
          creating jobs for others. The entire education process at Tula's is
          designed from the very first day onward, from making the student feel
          at home to equipping the student to be productive in industry and
          society. Our Institute has good relations with leading Universities of
          the world, giving Tulaites an edge over other students elsewhere.
          Tula's is recognised for having state of the art infrastructure.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Our Management"}
        subtitle={
          "A strong school management provides the best learning environment for students."
        }
        headerImg={HeaderManagementIMg}
        headerImgMobile={HeaderManagementMobileIMg}
      />

      {/* <div className="py-8 w-[85%] md:w-[75%] mx-auto md:py-14 flex flex-col justify-center items-center">
        <h3
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="text-[#B90124] w-fit font-semibold  text-center text-[clamp(15px,7.5vw,60px)] md:text-[clamp(20px,2.5vw,50px)]"
        >
          Meet our school’s Management
          <Image
            src={lineImg}
            alt=""
            className="mx-auto md:ml-auto md:mr-0 w-[50%] md:w-fit"
          />
        </h3> 
      </div> */}
      <div className="hidden w-full h-full md:block">
        <div className="w-[90%] xl:w-[75%] pt-10 mx-auto gap-6 flex overflow-scroll md:overflow-auto">
          {data.map((data, index) => (
            <div key={index}>
              <div
                onClick={() => handleExpand(index)}
                className={`flex min-w-[307px] md:min-w-fit cursor-pointer relative flex-col aspect-[303/470] justify-end rounded-t-xl ${
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
                    <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(15px,5vw,30px)] md:text-[clamp(20px,1.8vw,50px)]">
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
                <div className="pt-[20%] w-full bg-[#FFE4E4]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="block w-full h-full md:hidden">
        <div className="flex px-8 pt-6 gap-4 justify-end pb-8">
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
                      <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(15px,5vw,30px)] md:text-[clamp(20px,1.8vw,50px)]">
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
            className={`bg-[#FFE4E4] w-[85%] md:w-[90%] xl:w-[75%] mx-auto rounded-xl  px-8 md:px-14 py-8 ${
              expandedIndex === 0 && "md:rounded-ss-none"
            } ${expandedIndex === 3 && "md:rounded-se-none"}`}
          >
            <h3 className="text-[#B90124] text-[clamp(15px,7vw,60px)] leading-tight pb-4 font-[NeueHaasDisplayBold] tracking-wide md:tracking-wider md:text-[clamp(20px,2.5vw,50px)]">
              {data[expandedIndex].name} {data[expandedIndex].position}
            </h3>
            <h4
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
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
        <h4
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[85%] md:w-[90%] xl:w-[75%] mx-auto text-[clamp(15px,4.5vw,30px)] py-8 md:py-14 md:text-[clamp(18px,1.3vw,45px)]"
        >
          {data[expandedIndex].description}
        </h4>
      </div>
    </>
  );
}
