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
        At Tula's, we know that great days start with great food! That’s why our
        dining hall is more than just a place to eat—it’s where students get the
        nutrition they need to conquer the day ahead.
        <br />
        <br />
        Forget bland and boring; our meals are packed with flavor, nutrients,
        and everything your child needs to stay energized and focused.
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
        Every meal at Tula's is a carefully planned experience. Our expert
        dieticians design mouth-watering, nutritious vegetarian dishes that
        combine fresh, local ingredients. Think crispy veggies, vibrant fruits,
        and protein-packed goodness—all blended together in delicious dishes.
        It's food that not only tastes great but gives your child the fuel they
        need to shine.
        <br />
        <br />
        From the youngest to the oldest, every student at Tula’s gets perfectly
        balanced meals for their age and activity level. With a variety of
        flavors and nutrients, our menu is designed to keep kids full,
        satisfied, and ready to tackle whatever comes their way. No need to
        compromise on taste to stay healthy—our meals make it easy!
      </h2>
    </>
  );
}
