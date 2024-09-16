import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import TaekwondoSports from "../../../public/pictures/taekwando-sports.png";
import TaekwondoSportsMobile from "../../../public/pictures/taekwando-sportsMobile.png";
function Taekwando() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={TaekwondoSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Tae-kwon-do</h1>
          <p1 className="SportsMobileText">
            Tae-kwon-do is a Korean martial art with a heavy emphasis on kicks.
            Tae-kwon-do is characterised by its emphasis on head-height kicks,
            jumping and spinning kicks, and fast kicking techniques. Quick
            reaction, concentration, equilibrium, breath control, correct body
            mass and terrific speed makes one a champion in this sport.
            <br />
            <br />
            Our dedicated coach imparts the students to learn this martial art
            and perfect it. Tula’s is a member of Uttarakhand State Tae-kwon-do
            Association. We are also proud winners of the National Karate
            Championship held last year.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={TaekwondoSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Tae-kwon-do</h1>
              <p1 className="sports-text">
                Tae-kwon-do is a Korean martial art with a heavy emphasis
                on kicks. Tae-kwon-do is characterised by its emphasis on
                head-height kicks, jumping and spinning kicks, and fast kicking
                techniques. Quick reaction, concentration, equilibrium, breath
                control, correct body mass and terrific speed makes one a
                champion in this sport.
                <br />
                <br />
                Our dedicated coach imparts the students to learn this martial
                art and perfect it. Tula’s is a member of Uttarakhand State
                Tae-kwon-do Association. We are also proud winners of the
                National Karate Championship held last year.
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

export default Taekwando;
