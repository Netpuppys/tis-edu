import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import ThrowballSports from "../../../public/pictures/throwball.png";
import ThrowballSportsMobile from "../../../public/pictures/throwballMobile.png";
function Throwball() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={ThrowballSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Throwball</h1>
          <p1 className="SportsMobileText">
            Throw ball is a physically demanding sport that takes skill and
            focusing ability. Tula’s International school has individual Throw
            ball playground which is accessible for each and every student. 
            <br /> <br />
            They can exhibit true sportsman spirit through various sports
            events. They learn to reign over the field and rein their strong
            emotion and utilize their potential. Young minds are trained under
            talented individuals to excel at national and international level
            sports competitions. 
            <br /> <br />
            Through the sports facilities, we strive to create various factors
            such as leadership, teamwork in our students which benefit them life
            long.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={ThrowballSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Throwball</h1>
              <p1 className="sports-text">
                Throw ball is a physically demanding sport that takes skill and
                focusing ability. Tula’s International school has individual
                Throw ball playground which is accessible for each and every
                student. 
                <br /> <br />
                They can exhibit true sportsman spirit through various sports
                events. They learn to reign over the field and rein their strong
                emotion and utilize their potential. Young minds are trained
                under talented individuals to excel at national and
                international level sports competitions. 
                <br /> <br />
                Through the sports facilities, we strive to create various
                factors such as leadership, teamwork in our students which
                benefit them life long.
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

export default Throwball;
