import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import CyclingSports from "../../../public/pictures/cycling-sports.png";
import CyclingSportsMobile from "../../../public/pictures/cycling-sportsMobile.png";
function Cycling() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={CyclingSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Cycling</h1>
          <p1 className="SportsMobileText">
            Tula’s, one of Dehradun’s best schools, has installed a velodrome
            where cycling enthusiasts can practice to their heart’s content
            after school hours. TIS is the first school in Dehradun to have a
            cycling track specially installed to produce top cyclists who can
            represent India in foreign tournaments.
            <br />
            <br />
            To increase interest among students in this competitive sport, we
            have a dedicated coach who trains students in the nuances of
            cycling. Cycling lessons are conducted after school is over. It is
            every cyclist’s ambition to win the Tour de France. At Tulas’ we
            have taken a small step in the hope that one day a Tulaite will
            triumph at cycling’s most hallowed event.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Cycling</h1>
              <p1 className="sports-text">
                Tula’s, one of Dehradun’s best schools, has installed a
                velodrome where cycling enthusiasts can practice to their
                heart’s content after school hours. TIS is the first school in
                Dehradun to have a cycling track specially installed to produce
                top cyclists who can represent India in foreign tournaments.
                <br />
                <br />
                To increase interest among students in this competitive sport,
                we have a dedicated coach who trains students in the nuances of
                cycling. Cycling lessons are conducted after school is over. It
                is every cyclist’s ambition to win the Tour de France. At Tulas’
                we have taken a small step in the hope that one day a Tulaite
                will triumph at cycling’s most hallowed event.
                <br />
              </p1>
            </div>

            <Image src={CyclingSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Cycling;
