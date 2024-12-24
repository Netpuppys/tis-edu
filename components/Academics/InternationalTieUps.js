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
          "International Collaborations for Enriched Learning and Cross-Cultural Engagement."
        }
        headerImg={isMobile ? HeaderTieUpsMobileImg : HeaderTieUpsImg}
      />
      <div className="main-international">
        {isMobile && <Image className="tieUps" src={tieUps1Mobile} alt="" />}
        {!isMobile && <Image className="tieUps" src={tieUps1} alt="" />}
        <div className="div-text-international">
          <p className="text-international">
            Academic collaborations open doors to numerous benefits for
            students. A tie-up with international universities or schools brings
            incredible opportunities for growth.
            <br />
            <br />
            Exchange programs offer exposure to different educational systems
            and cultures, helping the students become well-rounded global
            citizens. At Tula’s the exchange programs offer valuable
            opportunities, including:
            <br />
            <ul className="list-disc ml-5">
              <li>Cultural immersion and broadened perspectives</li>
              <li>
                Development of essential skills like communication and
                adaptability
              </li>
              <li>Building global connections for future opportunities</li>
              <li>Enhanced independence, resilience, and global awareness</li>
            </ul>
            <br />
            Moreover, when foreign students and teachers visit domestic schools,
            they bring valuable insights, boosting the school’s global
            reputation. Such partnerships also make future admissions smoother
            by fostering connections with international institutions.
          </p>
        </div>
        {isMobile && <Image className="tieUps" src={tieUps2Mobile} alt="" />}
        {!isMobile && <Image className="tieUps" src={tieUps2} alt="" />}
      </div>
    </>
  );
}
