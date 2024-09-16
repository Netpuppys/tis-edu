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
          TIS ensures that every meal is nutritious and wholesome. Students at
          our school are served healthy vegetarian meals in the school&apos;s
          central dining hall.
          <br />
          <br />
          Tula&apos;s International School is proud of its beautiful dining
          area. Dieticians have carefully planned the food that is served at the
          school each day so that it offers a variety of proteins, grains,
          fruits, and vegetables in delectable vegetarian dishes.
          <br />
          <br />
          Each item on the daily menu is carefully selected from multiple
          wholesome sources to provide delicious, nutritious dishes for everyone
          in your family.
        </p>
        <h1 className="nutrition-Heading">
          Nutritional Dining <span>Experience</span>{" "}
          <Image className="yellowLineFood" src={YellowLineFood} alt="" />
        </h1>
        <h2 className="text-nutrition">
          <ul>
            <li>Nutritious vegetarian meals daily </li>{" "}
            <li>Carefully planned menu by dieticians </li>{" "}
            <li>Variety of proteins, grains, fruits </li>{" "}
            <li>Delicious and wholesome vegetarian dishes </li>{" "}
            <li>Beautiful, pride-worthy school dining area </li>{" "}
            <li>Thoughtfully selected items from multiple sources </li>{" "}
            <li>Balanced meals for all ages </li>{" "}
            <li>Dedicated to the student’s nutritional well-being</li>
          </ul>
        </h2>
      </div>
    </>
  );
}
