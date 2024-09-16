"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/BoardingLife/Facility.css";
import HeaderFacilityImg from "../../../public/Header/FacilitiesHeader.jpg";
import HeaderFacilityImgMobile from "../../../public/Header/FacilitiesHeaderMobile.jpg";
import yellowLineHeading from "../../../public/pictures/lineImg.png";
import Header from "../../globalComponents/Header/Header";
import { useMobile } from "../../globalComponents/IsMobileContext";
function Facility() {
  const { isMobile } = useMobile();
  const BannerText =
    "Tula's International School features modern classrooms, a well-stocked library, advanced labs, and extensive sports complexes.";

  return (
    <>
      <Header
        title={"Facilities"}
        headerImg={isMobile ? HeaderFacilityImgMobile : HeaderFacilityImg}
        subtitle={BannerText}
      />
      <div className="facility-main">
        <h1 className="heading-facility">
          LIBRARY
          <Image className="yelloLineHeading" src={yellowLineHeading} alt="" />
        </h1>

        <p className="text-facility">
          At Tula’s we have a state of art Library where all categories of
          books, encyclopedia, autobiography, news journals and magazines are
          stocked via ERP system Fedena. With equal emphasis on cognitive
          development reading is encouraged among students of Class IV to IX
          with their weekly instructional period on weekly basis. With seating
          capacity of 100 seats and well aerated, spacious corners senior
          students get the space to consult reference books for their academic
          growth.
        </p>

        <h2 className="heading-facility">
          LABORATORIES
          <Image className="yelloLineHeading" src={yellowLineHeading} alt="" />
        </h2>

        <p className="text-facility">
          Well-equipped Physics, Chemistry, Biology &amp; R&amp;D Labroratory, a
          stste of the art Computer Science and IT Labs are constantly buzzing
          with enthusiast students. Experiments, Practical and activities are
          the norm of the academics schedule of TIS students.
        </p>

        <h3 className="heading-facility">
          DIGITAL WORKSTATION
          <Image className="yelloLineHeading" src={yellowLineHeading} alt="" />
        </h3>

        <p className="text-facility">
          Well designed, technically advanced work stations for each subject to
          provide education as per NEP is insured round the clock. Teacher to
          Students ratio 1:20 is well maintain for minimum learning objectives
          for subjects to be achieve.
        </p>
      </div>
    </>
  );
}

export default Facility;
