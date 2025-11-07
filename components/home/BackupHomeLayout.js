"use client";

import React, { useRef, useState } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import dynamic from "next/dynamic";
import scrollArrow from "../../public/icons/downArrowDoodle.svg";
import Image from "next/image";
import "../../styles/home/HomeLayout.css";
import ThirdSection from "./components/thirdSection/ThirdSection";

const HeroBackup = dynamic(() => import("./components/Hero/HeroBackup"), {
  ssr: false,
  loading: () => <section><h2>Hero section loading...</h2></section>,
});
const SecondSection = dynamic(() => import("./components/secondSection/SecondSection"), { ssr: false });
const ActivityGrid = dynamic(() => import("./components/activityGrid/ActivityGrid"), { ssr: false });
const FifthSection = dynamic(() => import("./components/fifthSection/FifthSection"), { ssr: false });
const Video = dynamic(() => import("./components/video/video"), { ssr: false });
const TisByNumbers = dynamic(() => import("./components/TisByNumbers/TisByNumbers"), { ssr: false });
const AwardSection = dynamic(() => import("./components/awardsSection/AwardSection"), { ssr: false });
const Ranking = dynamic(() => import("./components/Ranking/ranking"), { ssr: false });
const ParentsReviews = dynamic(() => import("./components/parentsReviews/ParentsReviews"), { ssr: false });
const FeaturesSection = dynamic(() => import("./components/featuresSection/FeaturesSection"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/app/boarding-school/admission-open/Components/Hero/components/GoogleReviews"), { ssr: false });
// const Form = dynamic(() => import("./components/form/form"), { ssr: false });
// const Stats = dynamic(() => import("./components/TisByNumbers/stats"), { ssr: false });
const NewStats = dynamic(() => import("./components/stats/stats"), { ssr: false });
const Famous = dynamic(() => import("./components/Famous"), { ssr: false });

const maxSections = 13;

const BackupHomeLayout = () => {
  const { isMobile } = useMobile();
  const bubbleRef = useRef(null);
  const [scrollToSection, setScrollToSection] = useState(1);
  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection(prev => prev + 1);
      const element = document.getElementById(`${scrollToSection}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-layout-container">
      {!isMobile && (
        <div className="scroll-arrow-div">
          <button onClick={handleScrollArrow}>
            <Image src={scrollArrow} className="scroll-arrow-icon" alt="scroll" />
          </button>
        </div>
      )}

      <div>
        <>
          <HeroBackup bubbleRef={bubbleRef} />
          <div ref={bubbleRef}>
            <div className="w-full bg-[#b90124] md:h-60"></div>
            <SecondSection />
            <div className="home-layout-allSection flex flex-col gap-6 md:gap-[2%]">
              <ThirdSection/>
              <ActivityGrid />
              <Video />
              <FifthSection />
              <NewStats />
              <Ranking />
              <Famous />
              <AwardSection />
              <TisByNumbers />
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

export default BackupHomeLayout;
