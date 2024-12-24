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
          At Tula’s, we always ask, “What’s the secret to making school
          awesome?”
        </p>
        <p className="AtTisdescription">
          The secret to making one's school experience truly unforgettable? It’s
          all about making learning feel like an adventure—where curiosity
          leads, creativity thrives, and every day brings something new to
          discover. When students are inspired, they don’t just learn—they grow,
          explore, and shape their own futures.
          <br />
          <br />
          <p className="text-[#60bab1]">There, we cracked it!</p>
        </p>
      </div>
    </div>
  );
}

export default FifthSection;
