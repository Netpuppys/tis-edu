"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import HeaderHouseImg from "../../../public/Header/HouseHeader.jpg";
import HeaderHouseMobileImg from "../../../public/Header/HouseHeaderMobile.jpg";
import "../../../styles/BoardingLife/OurHouseSystem.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import house from "../../../public/pictures/house.png";
import houseMobile from "../../../public/pictures/houseMobile.png";
export default function OurHousesystem() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Our House System "}
        subtitle={
          "Tula's International School's house system fosters camaraderie, competition, and holistic development among students."
        }
        headerImg={isMobile ? HeaderHouseMobileImg : HeaderHouseImg}
      />
      <div className="house-main">
        <p className="house-main-text">
          <br />
          Tula’s International School has four houses-Olympian House, Spartan
          House, Trojan House and Titan House. These four houses have one aim in
          common: to keep the spirit of the school motto alive and to turn
          students into people of character and integrity who can make India
          realise its potential as the most powerful nation on earth. The houses
          take part in a variety of extracurricular and co-curricular
          activities. A spirit of friendly rivalry is maintained no matter how
          intense the competition.
        </p>
        <br />
        {isMobile && <Image src={houseMobile} alt="" className="house-photo" />}
        {!isMobile && <Image src={house} alt="" className="house-photo" />}
        <br />
        <p className="house-main-text">
          The house captains act as leaders, guiding their charges and sorting
          out their issues. They are mentors as well as mates, friendly and
          impartial. The houses act as Tula’s brand ambassadors wherever they
          represent their school. The immortal phrase, ‘’All for One and One for
          All’’, might easily be applied to the four houses at TIS! Tula’s has
          maintained its reputation as the best CBSE school in Dehradun, thanks
          to the sterling work done by its places.
        </p>
      </div>
    </>
  );
}
