"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderTieUpsImg from "../../public/Header/InternationalHeader.jpg";
import HeaderTieUpsMobileImg from "../../public/Header/InternationalHeaderMobile.jpg";
import tieUps1 from "../../public/pictures/tieUps1.png";
import tieUps1Mobile from "../../public/pictures/tieUps1Mobile.png";
import { useMobile } from "../../components/globalComponents/IsMobileContext";
import tieUps2 from "../../public/pictures/tieUps2.png";
import tieUps2Mobile from "../../public/pictures/tieUps2Mobile.png";
import "../../styles/Academics/InternationalTieUps.css";

export default function InternationaltieUps() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"International Tie Up"}
        subtitle={
          "Global Academic Consortium for School Collaborative Endeavors and Cross-Cultural Integration."
        }
        headerImg={isMobile ? HeaderTieUpsMobileImg : HeaderTieUpsImg}
      />
      <div className="main-international">
        {isMobile && <Image className="tieUps" src={tieUps1Mobile} alt="" />}
        {!isMobile && <Image className="tieUps" src={tieUps1} alt="" />}
        <div className="div-text-international">
          <p className="text-international">
            Academic Collaborations provide additional benefits to every
            institution. It is an advantage tie-up with another school or
            university, especially international, both for the students as well
            as the teachers. The students can gain a lot of knowledge from the
            student exchange programs that come as a part of the collaboration.
            Students get exposure and experience about the education and culture
            of the other country. Such an experience is very valuable as it adds
            on a lot of value for the student. The students get to travel, work
            and study internationally. This helps them get prepared for a better
            future globally, be it on the domestic or international level. The
            teachers can also benefit from these kinds of tie-ups. There are
            exchange programs for teachers in which teachers also go to other
            universities/schools.The teachers teach there and they also explore
            the different teaching methods of that place. Additionally, students
            and teachers who come to the domestic school also take back a lot of
            knowledge and information. This helps the domestic school gain
            recognition and appreciation on the global level. Apart from this,
            working together with different universities in foreign countries
            and embracing the global culture helps smoothen the admission
            process for the students in the future.
          </p>
        </div>
        {isMobile && <Image className="tieUps" src={tieUps2Mobile} alt="" />}
        {!isMobile && <Image className="tieUps" src={tieUps2} alt="" />}
      </div>
    </>
  );
}
