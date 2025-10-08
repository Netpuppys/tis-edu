import React from "react";
import Hero from "./components/Hero/Hero";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ActivityGrid from "./components/activityGrid/ActivityGrid";
import FifthSection from "./components/fifthSection/FifthSection";
import Video from "./components/video/video";
import TisByNumbers from "./components/TisByNumbers/TisByNumbers";
import AwardSection from "./components/awardsSection/AwardSection";
import Ranking from "./components/Ranking/ranking";
import ParentsReviews from "./components/parentsReviews/ParentsReviews";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import "../../styles/home/HomeLayout.css";
import GoogleReviews from "@/app/boarding-school/admission-open/Components/Hero/components/GoogleReviews";
import NewStats from "./components/stats/stats";
import Famous from "./components/Famous";
import MockHero from "./MockHero";

const HomeLayout = () => {
  return (
    <div className="home-layout-container">
      {/* <Hero /> */}
      <MockHero/>
      <div className="w-full bg-[#b90124] md:h-60"></div>
      <SecondSection />
      <div className="home-layout-allSection flex flex-col gap-6 md:gap-[2%]">
        <ThirdSection />
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
  );
};

export default HomeLayout;
