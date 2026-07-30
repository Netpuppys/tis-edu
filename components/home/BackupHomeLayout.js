"use client";

import React, { useRef, useState } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import dynamic from "next/dynamic";
import scrollArrow from "../../public/icons/downArrowDoodle.svg";
import Image from "next/image";
import "../../styles/home/HomeLayout.css";
import ThirdSection from "./components/thirdSection/ThirdSection";

// Note: these were previously forced client-only (`ssr: false`), which meant
// none of the homepage's real content (hero copy, stats, awards, rankings,
// testimonials, etc.) was present in the server-rendered HTML — search
// engine crawlers only ever saw a "Hero section loading..." placeholder and
// empty containers. Removing `ssr: false` restores server-side rendering
// (Next.js default) while keeping the code-splitting benefit of dynamic().
const HeroBackup = dynamic(() => import("./components/Hero/HeroBackup"));
const SecondSection = dynamic(() => import("./components/secondSection/SecondSection"));
const ActivityGrid = dynamic(() => import("./components/activityGrid/ActivityGrid"));
const FifthSection = dynamic(() => import("./components/fifthSection/FifthSection"));
const Video = dynamic(() => import("./components/video/video"));
const TisByNumbers = dynamic(() => import("./components/TisByNumbers/TisByNumbers"));
const AwardSection = dynamic(() => import("./components/awardsSection/AwardSection"));
const Ranking = dynamic(() => import("./components/Ranking/ranking"));
const ParentsReviews = dynamic(() => import("./components/parentsReviews/ParentsReviews"));
const FeaturesSection = dynamic(() => import("./components/featuresSection/FeaturesSection"));
const GoogleReviews = dynamic(() => import("@/app/boarding-school/admission-open/Components/Hero/components/GoogleReviews"));
// const Form = dynamic(() => import("./components/form/form"), { ssr: false });
// const Stats = dynamic(() => import("./components/TisByNumbers/stats"), { ssr: false });
const NewStats = dynamic(() => import("./components/stats/stats"));
const Famous = dynamic(() => import("./components/Famous"));

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
