"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import yellowLineInfirmary from "../../../public/pictures/lineImg.png";
import HeaderInfirmaryImg from "../../../public/Header/InfirmaryHeader.jpg";
import HeaderInfirmaryMobileImg from "../../../public/Header/InfirmaryHeaderMobile.jpg";
import "../../../styles/BoardingLife/infirmary.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
export default function Infirmary() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Wellness Infirmary "}
        subtitle={
          "Health emergencies? We handle them swiftly, safely, and with care—right here in our school infirmary."
        }
        headerImg={isMobile ? HeaderInfirmaryMobileImg : HeaderInfirmaryImg}
      />
      <div className="infirmary-main">
        {/* <br />
        <br />
        <h className="heading-medical">
          Campus <span>Medical Center</span>{" "}
          <Image
            src={yellowLineInfirmary}
            alt=""
            className="yellowLineInfirmary"
          />
        </h> */}
        <p className="infirmary-main-text">
          At Tula’s, health and safety are at the heart of everything we do—it’s
          a shared responsibility we take seriously as parents and educators.
          <br />
          <br />
          Our Wellness Infirmary provides comprehensive care to ensure students
          feel their best, both physically and mentally. From routine check-ups
          to providing a comforting hand when needed, our team is here to
          support your child’s well-being with care and expertise.
          <br />
          <br />
          Should a situation arise that requires further medical attention,
          students are taken to the nearest hospital without delay, and parents
          are promptly informed. To help us provide personalized care, we
          encourage parents to share any specific health details about their
          child at the start of the school year.
          <br />
          <br />
          With Tula’s, you can rest assured that your child’s health is in
          caring and capable hands.
        </p>

        {/* <p className="infirmary-main-text">
          It is our primary responsibility as parents and educators to ensure
          the health and safety of our children.Health comes first at
          Tula&apos;s. Due to this, the school offers comprehensive support
          services so that its students can thrive both physically and mentally.
          The school has a Wellness Infirmary equipped with everything that one
          may need to keep them healthy. Whether physical or mental, if it needs
          medical attention, there are the right people here who care about your
          well-being, so you do not have to worry about anything other than
          being comfortable here.All such cases are immediately taken to the
          closest hospital in an emergency, and the parents are notified. We
          strongly encourage all parents to inform the infirmary about their
          children&apos;s unique health concerns at the start of the school
          year.
        </p> <br />*/}
      </div>
    </>
  );
}
