import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import GulmoharSports from "../../../public/Clubs/Gulmohar.png";
import GulmoharSportsMobile from "../../../public/Clubs/GulmoharMobile.png";
function Gulmohar() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={GulmoharSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Gulmohar</h1>
          <p1 className="SportsMobileText">
            Gardening is an art in itself. The students at TIS work hard to see
            that plants and trees in the campus are well protected. Tula’s
            International School students have pledged their loyalty towards
            Mother Earth and contribute in every possible way to spread
            awareness about environmental issues.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Gulmohar</h1>
              <p1 className="sports-text">
                Gardening is an art in itself. The students at TIS work hard to
                see that plants and trees in the campus are well protected.
                Tula’s International School students have pledged their loyalty
                towards Mother Earth and contribute in every possible way to
                spread awareness about environmental issues.
                <br />
                <br />
              </p1>
            </div>

            <Image src={GulmoharSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Gulmohar;
