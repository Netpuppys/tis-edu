"use client";

import React, { useRef, useState } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import Hero from "./components/Hero/Hero";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ActivityGrid from "./components/activityGrid/ActivityGrid";
import FifthSection from "./components/fifthSection/FifthSection";
import SixthSection from "./components/sixthSection/sixthSection";
import Video from "./components/video/video";
import TisByNumbers from "./components/TisByNumbers/TisByNumbers";
import AwardSection from "./components/awardsSection/AwardSection";
import Ranking from "./components/Ranking/ranking";
import ParentsReviews from "./components/parentsReviews/ParentsReviews";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import scrollArrow from "../../public/icons/downArrowDoodle.svg";
import Image from "next/image";
import "../../styles/home/HomeLayout.css";
import GoogleReviews from "@/app/boarding-school/admission-open/Components/Hero/components/GoogleReviews";
import Form from "./components/form/form";

const maxSections = 13;

const HomeLayout = () => {
  const { isMobile } = useMobile();

  const bubbleRef = useRef(null);
  const [scrollToSection, setScrollToSection] = useState(1);

  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection((prev) => prev + 1);
    }

    if (scrollToSection < maxSections) {
      const element = document.getElementById(`${scrollToSection}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="home-layout-container">
      {!isMobile && (
        <div className="scroll-arrow-div">
          <button onClick={handleScrollArrow}>
            <Image
              src={scrollArrow}
              className="scroll-arrow-icon"
              alt="scroll"
            />
          </button>
        </div>
      )}

      <div>
        <>
          <Hero bubbleRef={bubbleRef} />
          <div ref={bubbleRef}>
            <Form />
            <div className="home-layout-allSection flex flex-col gap-6 md:gap-10">
              <SecondSection />
              <ThirdSection />
              <ActivityGrid />
              <Video />
              <FifthSection />
              <SixthSection />
              <TisByNumbers />
              <AwardSection />
              <Ranking />
              <ParentsReviews />
              <GoogleReviews />
              <FeaturesSection />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default HomeLayout;
