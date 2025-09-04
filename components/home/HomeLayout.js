// "use client";

import React, { useRef, useState } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
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
import scrollArrow from "../../public/icons/downArrowDoodle.svg";
import Image from "next/image";
import "../../styles/home/HomeLayout.css";
import GoogleReviews from "@/app/boarding-school/admission-open/Components/Hero/components/GoogleReviews";
import Form from "./components/form/form";
import Stats from "./components/TisByNumbers/stats";
import NewStats from "./components/stats/stats";
import Famous from "./components/Famous";

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
              {/* SEO Text Block for Google */}
<section className="px-6 md:px-20 py-12 max-w-5xl mx-auto">
  <h1 className="text-3xl font-bold text-gray-900 mb-4">
    Welcome to The International School (TIS)
  </h1>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    The International School (TIS) is one of India’s leading institutions for
    academic excellence, innovation, and holistic development. With a strong
    focus on both academics and co-curricular activities, TIS empowers students
    to achieve success in a rapidly changing world. Our campus offers modern
    facilities, experienced faculty, and a nurturing environment that supports
    every learner's journey.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    As a top boarding and day school, we combine traditional values with modern
    learning practices. From sports and cultural activities to advanced
    technology integration, TIS ensures that students grow into confident,
    responsible, and globally-minded individuals. Our achievements in rankings
    and awards reflect our dedication to shaping future leaders.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    Explore our programs, admission process, and student life to see why TIS is
    the preferred choice for parents across India. Together, we build the
    foundation for lifelong success.
  </p>
</section>

            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default HomeLayout;
