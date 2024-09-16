"use-client";
import React from "react";
import "../../../../styles/home/components/fifthSection/FifthSection.css";
import AtTis from "../../../../public/pictures/AtTIS.png";
import LearnMore from "../../../../public/icons/LearnMore.png";
import Image from "next/image";
function FifthSection() {
  const handleClickLearn = () => {
    window.location.href = "/about-tis/why-choose-us/";
  };
  return (
    <div className="at_Tis" id="6">
      <div className="image-tis">
        <Image className="at_TIS_img" src={AtTis} alt="" />
      </div>

      <div className="text-div-atTis">
        <p className="title">
          At Tula’s, we ask, “How can we make school better?”
        </p>
        <p className="AtTisdescription">
          Using the latest research on how girls learn best, we designed an
          innovative modular schedule, personalized for each student. Our girls
          are focused, not overwhelmed. “Girls Rule” isn’t just a saying here.
          Develop leadership skills, build compassion, gain responsibility, and
          prepare to change the world.
        </p>

        <Image
          onClick={handleClickLearn}
          alt=""
          className="learn_more_btn"
          src={LearnMore}
        />
      </div>
    </div>
  );
}

export default FifthSection;
