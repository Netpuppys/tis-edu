import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import VolleyballSports from "../../../public/pictures/volleyball-sports.png";
import VolleyballSportsMobile from "../../../public/pictures/volleyball-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Volleyball() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={VolleyballSportsMobile} alt="" />
            <h1 className="MobileSportsHeading">Volleyball</h1>
            <p1 className="SportsMobileText">
              Volleyball is a popular sport that is played professionally as
              well in schools, backyards and beaches.  This simple game can be
              enjoyed anywhere all you have to do is to set up a net. A typical
              volleyball game uses six players on each side.
              <br />
              <br />
              Among the best international Dehradun schools, Tula’s provides its
              students a world-class volleyball court where they can perfect
              their game. It has built-in lateral forgiveness which reduces
              stress on knees and joints.
              <br />
              <br />
              It has the added advantage of being easily installed over hard,
              flat surfaces. No wonder students at TIS are showing renewed
              interest in this gentle game!
              <br />
              <br />
            </p1>
          </>
        </>
      )}
      {!isMobile && (
        <>
          <>
            <div style={{ display: "flex" }}>
              <Image src={VolleyballSports} alt="" className="archiery" />

              <div className="text-div-sports">
                <h1 className="headingSports">Volleyball</h1>
                <p1 className="sports-text">
                  Volleyball is a popular sport that is played professionally as
                  well in schools, backyards and beaches.  This simple game can
                  be enjoyed anywhere all you have to do is to set up a net. A
                  typical volleyball game uses six players on each side.
                  <br />
                  <br />
                  Among the best international Dehradun schools, Tula’s provides
                  its students a world-class volleyball court where they can
                  perfect their game. It has built-in lateral forgiveness which
                  reduces stress on knees and joints.
                  <br />
                  <br />
                  It has the added advantage of being easily installed over
                  hard, flat surfaces. No wonder students at TIS are showing
                  renewed interest in this gentle game!
                  <br />
                </p1>
              </div>
            </div>
            <div className="sports-line"></div>
          </>
        </>
      )}
    </>
  );
}

export default Volleyball;
