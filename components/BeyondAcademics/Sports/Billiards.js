import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import BilliardsSports from "../../../public/pictures/billiards.png";
import BilliardsSportsMobile from "../../../public/pictures/billiardsMobile.png";
function Billiards() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={BilliardsSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Billiards & Snooker</h1>
          <p1 className="SportsMobileText">
            At Tula&apos;s International School, we offer top-notch facilities
            for snooker and billiards, providing students with the opportunity
            to engage in these classic cue sports. Playing snooker and billiards
            is not only a fun and relaxing pastime but also an excellent way for
            students to develop important skills such as strategic thinking,
            precision, and concentration. Our well-maintained tables and
            professional-grade equipment ensure a high-quality playing
            experience, whether students are beginners or advanced players.
            <br />
            <br />
            In addition to honing their skills on the table, students can also
            benefit from the social aspect of these sports, fostering
            camaraderie and sportsmanship. Our dedicated instructors are
            available to provide guidance and coaching, helping students to
            improve their techniques and understanding of the games.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={BilliardsSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Billiards & Snooker</h1>
              <p1 className="sports-text">
                At Tula&apos;s International School, we offer top-notch
                facilities for snooker and billiards, providing students with
                the opportunity to engage in these classic cue sports. Playing
                snooker and billiards is not only a fun and relaxing pastime but
                also an excellent way for students to develop important skills
                such as strategic thinking, precision, and concentration. Our
                well-maintained tables and professional-grade equipment ensure a
                high-quality playing experience, whether students are beginners
                or advanced players.
                <br />
                <br />
                In addition to honing their skills on the table, students can
                also benefit from the social aspect of these sports, fostering
                camaraderie and sportsmanship. Our dedicated instructors are
                available to provide guidance and coaching, helping students to
                improve their techniques and understanding of the games.
                <br />
                <br />
              </p1>
            </div>
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Billiards;
