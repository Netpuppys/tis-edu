"use client";
import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import Header from "../../globalComponents/Header/Header";
import headerMissionImg from "../../../public/Banner/missionVision.webp";
import headerMissionMobileImg from "../../../public/Banner/missionVisionMobile.webp";
import missionVision from "../../../public/vision/visionDesktop.png";
import missionVision1 from "../../../public/pictures/image1.webp";
import missionVision2 from "../../../public/pictures/image2.webp";
import yellowLine from "../../../public/vision/yellowLine.png";
export default function Mission() {
  const { isMobile } = useMobile();
  const subTitle =
    "We aim to inspire purpose and guide students toward endless possibilities";
  const sections = [
    {
      title: "Our Vision",
      description: (
        <>
          To become a center of excellence and a leader among top educational
          institutions. At TIS, we aim to:
          <ul className="ml-5 list-disc">
            <li>
              Support personal growth and development to make a positive impact
              on society.
            </li>
            <li>
              Encourage curiosity and enthusiasm for learning, making TIS stand
              out.
            </li>
            <li>
              Prepare global citizens with strong character who uphold the
              values of our nation.
            </li>
          </ul>
        </>
      ),
      image: missionVision,
    },
    {
      title: "Our Mission",
      description: (
        <>
          Our mission is to help students excel academically and grow as
          individuals. TIS is dedicated to:
          <ul className="ml-5 list-disc">
            <li>Becoming a benchmark institution in education.</li>
            <li>
              Providing quality education and enriching learning experiences.
            </li>
            <li>
              Supporting students’ personal and social growth beyond academics.
            </li>
            <li>
              Preparing a future generation committed to serving humanity.
            </li>
          </ul>
        </>
      ),
      image: missionVision1,
    },
    {
      title: "Community Values",
      description: (
        <>
          <span className="w-full text-[#212121] font-normal font-[TTChocolatesBold] text-[clamp(10px,5vw,100px)] md:text-[clamp(10px,2vw,100px)]">
            Equity:
          </span>
          <br />
          TIS offers a supportive environment where students from all
          backgrounds can reach their potential. We believe every student can
          succeed with the right opportunities.
          <p className="py-1"></p>
          <span className="w-full text-[#212121] font-normal font-[TTChocolatesBold] text-[clamp(10px,5vw,100px)] md:text-[clamp(10px,2vw,100px)]">
            Engagement:
          </span>
          <br />
          We create a student-focused environment with a hands-on curriculum
          that encourages active learning. Our experienced faculty ensures
          students get the best guidance.
          <br /> At TIS, we blend tradition with modern trends, making us the
          top boarding school in Dehradun and a leader in holistic education.
        </>
      ),
      image: missionVision2,
    },
  ];
  return (
    <>
      <Header
        title={"Mission & Vision"}
        subtitle={subTitle}
        headerImg={headerMissionImg}
        headerImgMobile={headerMissionMobileImg}
      />
      <div className="py-8 md:py-14 w-[90%] md:w-[80%] mx-auto flex flex-col gap-[10vw] md:gap-[10vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex gap-[8vw] ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full group aspect-[1.5/0.8] overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src={section.image}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                />
                {/* Animated border */}
                <div className="absolute block bottom-5 md:bottom-10 left-5 md:left-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
                <div className="absolute block bottom-5 md:bottom-10 left-5 md:left-10 h-[1px] w-full bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center text-black">
              <h2 className="w-full text-[#212121] font-[Mirador800] text-[clamp(10px,7.5vw,60px)] md:text-[clamp(10px,2.5vw,100px)] leading-tight">
                {section.title}
              </h2>
              <h3
                className="w-full text-[#212121] font-normal text-[clamp(10px,4.5vw,40px)] md:text-[clamp(10px,1.3vw,40px)] leading-tight"
                style={{
                  fontFamily: "TT Chocolates",
                }}
              >
                {section.description}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60%] md:w-[40%] h-fit mt-4"
                viewBox="0 0 268.317 14.075"
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
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
