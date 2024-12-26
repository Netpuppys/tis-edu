"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import HeaderFoodImg from "../../../public/Header/FoodHeader.jpg";
import HeaderFoodMobileImg from "../../../public/Header/FoodHeaderMobile.jpg";
import "../../../styles/BoardingLife/FoodAndNutrition.css";
import YellowLineFood from "../../../public/pictures/lineImg.png";
import { useMobile } from "../../globalComponents/IsMobileContext";
export default function FoodAndNutrition() {
  const bannerText =
    "TIS ensures nutritious and wholesome meals, prioritising students' health and well-being in the dining experience.";
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Food and Nutrition"}
        subtitle={bannerText}
        headerImg={isMobile ? HeaderFoodMobileImg : HeaderFoodImg}
      />
      <div className="main-div-food">
        <p className="main-div-food-text">
          At Tula's, we know that great days start with great food! That’s why
          our dining hall is more than just a place to eat—it’s where students
          get the nutrition they need to conquer the day ahead.
          <br />
          <br />
          Forget bland and boring; our meals are packed with flavor, nutrients,
          and everything your child needs to stay energized and focused.
        </p>
        <h1 className="nutrition-Heading">
          What’s <span>Cooking?</span>
          <Image className="yellowLineFood" src={YellowLineFood} alt="" />
        </h1>
        <h2 className="text-nutrition">
          Every meal at Tula's is a carefully planned experience. Our expert
          dieticians design mouth-watering, nutritious vegetarian dishes that
          combine fresh, local ingredients. Think crispy veggies, vibrant
          fruits, and protein-packed goodness—all blended together in delicious
          dishes. It's food that not only tastes great but gives your child the
          fuel they need to shine.
          <br />
          <br />
          From the youngest to the oldest, every student at Tula’s gets
          perfectly balanced meals for their age and activity level. With a
          variety of flavors and nutrients, our menu is designed to keep kids
          full, satisfied, and ready to tackle whatever comes their way. No need
          to compromise on taste to stay healthy—our meals make it easy!
        </h2>
      </div>
    </>
  );
}
