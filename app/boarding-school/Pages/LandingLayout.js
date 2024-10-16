"use client";

import React, { useRef } from "react";

import "../../../styles/home/HomeLayout.css";
import ActivityGrid from "@/components/home/components/activityGrid/ActivityGrid";
import Ranking from "@/components/home/components/Ranking/ranking";
import SixthSection from "@/components/home/components/sixthSection/sixthSection";
import AwardSection from "@/components/home/components/awardsSection/AwardSection";
import ParentsReviews from "@/components/home/components/parentsReviews/ParentsReviews";
import HeroLanding from "../admission-open/Components/Hero/HeroLanding";
import Banner from "../admission-open/Components/Banner/Banner";
import ExceptionalFacilties from "../admission-open/Components/Carousel/ExceptionalFacilties";
import GoogleReviews from "../admission-open/Components/Hero/components/GoogleReviews";

const LandingLayout = () => {
  const bubbleRef = useRef(null);

  return (
    <div className="home-layout-container">
      <div>
        <>
          <div
            className="home-layout-allSection flex flex-col gap-6 md:gap-10"
            ref={bubbleRef}
          >
            <Banner />
            <ExceptionalFacilties />
            <ActivityGrid />
            <Ranking />
          </div>
          <HeroLanding bubbleRef={bubbleRef} />
          <div
            className="home-layout-allSection flex flex-col mt-6 md:mt-10 gap-6 md:gap-10"
            ref={bubbleRef}
          >
            <SixthSection />
            <AwardSection />
            <ParentsReviews />
            <GoogleReviews/>
          </div>
        </>
      </div>
    </div>
  );
};

export default LandingLayout;
