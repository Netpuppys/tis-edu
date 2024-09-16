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
        title={"Infirmary "}
        subtitle={
          "Health emergencies are addressed efficiently in a school infirmary setting."
        }
        headerImg={isMobile ? HeaderInfirmaryMobileImg : HeaderInfirmaryImg}
      />
      <div className="infirmary-main">
        <p className="infirmary-main-text">
          <br />
          It is our primary responsibility as parents and educators to ensure
          the health and safety of our children. <br />
          <br />
          Health comes first at Tula&apos;s. Due to this, the school offers
          comprehensive support services so that its students can thrive both
          physically and mentally. The school has a Wellness Infirmary equipped
          with everything that one may need to keep them healthy. Whether
          physical or mental, if it needs medical attention, there are the right
          people here who care about your well-being, so you do not have to
          worry about anything other than being comfortable here. <br />
          <br />
          All such cases are immediately taken to the closest hospital in an
          emergency, and the parents are notified. We strongly encourage all
          parents to inform the infirmary about their children&apos;s unique
          health concerns at the start of the school year.
        </p>

        <h className="heading-medical">
          Campus <span>Medical Center</span>{" "}
          <Image
            src={yellowLineInfirmary}
            alt=""
            className="yellowLineInfirmary"
          />
        </h>
        <p className="infirmary-main-text">
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
        </p>
        <br />
      </div>
    </>
  );
}
