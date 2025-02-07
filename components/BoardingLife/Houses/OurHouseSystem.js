"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import HeaderHouseImg from "../../../public/Banner/houseSystem.webp";
import HeaderHouseMobileImg from "../../../public/Banner/houseSystemMobile.webp";
import HouseImg from "../../../public/Header/HouseHeader.jpg";
import HouseMobileImg from "../../../public/Header/HouseHeaderMobile.jpg";
import yellowLine from "../../../public/pictures/lineImg.png";
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
          "Our house system builds bonds, sparks competition, and drives growth"
        }
        headerImg={HeaderHouseImg}
        headerImgMobile={HeaderHouseMobileImg}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        There are seven houses - Olympian House, Spartan House, Trojan House,
        Titan House, Starks House, Valkyrie House, and Athena House.
      </h6>
      <div className="house-main">
        <div className="h-full md:hidden w-[90%] mx-auto">
          <Image
            src={HouseMobileImg}
            alt=""
            className="w-full rounded-2xl h-full"
          />
        </div>
        <div className="w-[80%] mx-auto h-full hidden md:block">
          {" "}
          <Image src={HouseImg} alt="" className="w-full rounded-2xl h-full" />
        </div>
      </div>
      <div className="py-8 md:py-14">
        <h2 className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Investiture <span className="text-[#b90124]">Ceremony</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
      </div>
      <div className="house-main">
        <div className="h-full md:hidden w-[90%] mx-auto">
          <Image src={houseMobile} alt="" className="w-full h-full" />
        </div>
        <div className="w-[80%] mx-auto h-full hidden md:block">
          {" "}
          <Image src={house} alt="" className="w-full h-full" />
        </div>
      </div>
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        The house captains act as leaders, guiding their charges and sorting out
        their issues. They are mentors as well as mates, friendly and impartial.
        The houses act as Tula’s brand ambassadors wherever they represent their
        school. The immortal phrase, ‘’All for One and One for All’’, might
        easily be applied to the seven houses at TIS! Tula’s has maintained its
        reputation as the best CBSE school in Dehradun, thanks to the sterling
        work done by its places.
      </h6>
    </>
  );
}
