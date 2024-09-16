import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import FootballSports from "../../../public/pictures/football-sports.png";
import FootballSportsMobile from "../../../public/pictures/football-sportsMobile.png";
function Football() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={FootballSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Football</h1>
          <p1 className="SportsMobileText">
            We, at TIS, want to help students’ play the beautiful game in the
            right spirit. We have an in-house football academy aided by a
            national level football field. This caters for all abilities, from
            beginners to more experienced players, and provides an opportunity
            for children to develop their technical, psychological, as well as
            physical skills.
            <br />
            <br />
            This is in line with professional coaching manuals. Students are
            trained by experienced coaching staff who are handpicked to help
            develop football skills among students. We proudly organize the
            prestigious state-level inter-school football tournament, known as
            the &quot;Shri S.D. Jain Memorial Football Tournament.&quot; This
            highly anticipated event brings together talented young athletes
            from various schools, fostering a spirit of healthy competition
            and sportsmanship.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Football</h1>
              <p1 className="sports-text">
                We, at TIS, want to help students’ play the beautiful game in
                the right spirit. We have an in-house football academy aided by
                a national level football field. This caters for all
                abilities, from beginners to more experienced players, and
                provides an opportunity for children to develop their technical,
                psychological, as well as physical skills.
                <br />
                <br />
                This is in line with professional coaching manuals. Students are
                trained by experienced coaching staff who are handpicked to help
                develop football skills among students. We proudly organize the
                prestigious state-level inter-school football tournament, known
                as the &quot;Shri S.D. Jain Memorial Football Tournament.&quot;
                This highly anticipated event brings together talented young
                athletes from various schools, fostering a spirit of healthy
                competition and sportsmanship.
                <br />
              </p1>
            </div>

            <Image src={FootballSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Football;
