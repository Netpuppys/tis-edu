import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import CricketSports from "../../../public/pictures/cricket-sports.png";
import CricketSportsMobile from "../../../public/pictures/cricket-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Cricket() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={CricketSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Cricket with Practice Net</h1>
          <p1 className="SportsMobileText">
            Tula’s International school offers turf & cemented practicing net
            for cricket which is according to the international standards along
            with the night vision facility so that students can improve their
            skills because “Practice Makes a Man Perfect’’.
            <br />
            <br />
            The cricket training programme at TIS is being facilitated by
            professional coaches. We have a state-of –the-art stadium with a
            seating capacity of more than 1000 people who can watch students’
            execute those perfect straight drives!
            <br />
            <br />
            Our coaching is about developing better people, no matter what age
            or ability, not just better cricketers. We aim to adopt an
            ‘athlete-centred’ approach where the needs of each individual comes
            first. Sports is a team game and this is reflected in our style of
            grooming youngsters where each student puts his teammate before
            himself.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={CricketSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Cricket with Practice Net</h1>
              <p1 className="sports-text">
                Tula’s International school offers turf & cemented practicing
                net for cricket which is according to the international
                standards along with the night vision facility so that students
                can improve their skills because “Practice Makes a Man
                Perfect’’.
                <br />
                <br />
                The cricket training programme at TIS is being facilitated by
                professional coaches. We have a state-of –the-art stadium with a
                seating capacity of more than 1000 people who can watch
                students’ execute those perfect straight drives!
                <br />
                <br />
                Our coaching is about developing better people, no matter what
                age or ability, not just better cricketers. We aim to adopt an
                ‘athlete-centred’ approach where the needs of each individual
                comes first. Sports is a team game and this is reflected in our
                style of grooming youngsters where each student puts his
                teammate before himself.
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

export default Cricket;
