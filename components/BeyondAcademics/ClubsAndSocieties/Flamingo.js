import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import FlamingoSports from "../../../public/Clubs/Flamingo.png";
import FlamingoSportsMobile from "../../../public/Clubs/FlamingoMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Flamingo() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={FlamingoSportsMobile} alt="" />
            <h1 className="MobileSportsHeading">Flamingo</h1>
            <p1 className="SportsMobileText">
              Dance is one of humankind’s great creative expressions. A
              performing art which has sublime aesthetic and symbolic value,
              dance involves the dancer to surrender himself utterly before the
              audience and give away something of himself. At Tula’s, all forms
              of dance, whether classical or Western, are encouraged by the
              school’s trained dance instructors. The aim is to free students of
              their inhibitions and let them sway to the rhythm of their chosen
              dance form.
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
              <Image className="archiery" src={FlamingoSports} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Flamingo</h1>
                <p1 className="sports-text">
                  Dance is one of humankind’s great creative expressions. A
                  performing art which has sublime aesthetic and symbolic value,
                  dance involves the dancer to surrender himself utterly before
                  the audience and give away something of himself. At Tula’s,
                  all forms of dance, whether classical or Western, are
                  encouraged by the school’s trained dance instructors. The aim
                  is to free students of their inhibitions and let them sway to
                  the rhythm of their chosen dance form.
                  <br />
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

export default Flamingo;
