"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import HeaderFoodImg from "../../../public/Header/FoodHeader.jpg";
import HeaderFoodMobileImg from "../../../public/Header/FoodHeaderMobile.jpg";
import "../../../styles/BoardingLife/FoodAndNutrition.css";
import yellowLine from "../../../public/pictures/lineImg.png";
import { useMobile } from "../../globalComponents/IsMobileContext";
export default function FoodAndNutrition() {
  const bannerText =
    "We provide tasty meals packed with nutrients for students' best health!";
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Food and Nutrition"}
        subtitle={bannerText}
        headerImg={HeaderFoodImg}
        headerImgMobile={HeaderFoodMobileImg}
      />
      <h2
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full py-8 md:py-[3%] px-8 md:px-0 md:w-[75%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
      >
       At Tulas International School, we understand that great learning begins with great nutrition. Our dining hall is not just a place to eat—it is a carefully curated environment where students receive wholesome, balanced meals to energize their day.
        <br />
        <br />
        We serve meals that are both wholesome and flavorful, ensuring every student gets the nutrients necessary for optimal growth, focus, and well-being.
      </h2>
      <h2 className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
        What’s <span className="text-[#b90124]">Cooking?</span>
        <Image className="ml-auto w-fit max-w-[60%]" src={yellowLine} alt="" />
      </h2>
      <h2
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full py-8 md:py-[3%] px-8 md:px-0 md:w-[75%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
      >
        Every meal at Tulas is carefully planned to nourish both body and mind. Our expert dieticians prepare wholesome, vegetarian dishes using fresh, locally sourced ingredients. From crisp vegetables and vibrant fruits to protein-rich delicacies, each plate is a thoughtful combination of taste and nutrition—designed to energize and inspire.
        <br />
        <br />
        Catering to students of all ages, our menus are carefully balanced to meet their unique nutritional needs and activity levels. With a wide variety of flavors and nutrients, every meal keeps students satisfied, focused, and ready to embrace the day ahead—showing that healthy eating can always be delicious.
      </h2>
    </>
  );
}
