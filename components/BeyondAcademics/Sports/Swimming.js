import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import SwimmingSports from "../../../public/pictures/swimming-sports.png";
import SwimmingSportsMobile from "../../../public/pictures/swimming-sportsMobile.png";
function Swimming() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={SwimmingSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Swimming</h1>
          <p1 className="SportsMobileText">
            Most hotels, health clubs, fitness centre and private clubs have
            swimming centre now which have given rise to the trend of swimming
            and made it an essential skill. Tula’s International School realises
            the importance of keeping up with the fast paced world and now
            boasts of an added sports facility, a swimming centre.
            <br />
            <br />
            Given its high standard of sports facilities, Tula’s now also offers
            swimming to the students who have a desire to learn swimming as well
            as to those who are passionate for swimming as a sport
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Swimming</h1>
              <p1 className="sports-text">
                Most hotels, health clubs, fitness centre and private clubs have
                swimming centre now which have given rise to the trend of
                swimming and made it an essential skill. Tula’s International
                School realises the importance of keeping up with the fast paced
                world and now boasts of an added sports facility, a swimming
                centre.
                <br />
                <br />
                Given its high standard of sports facilities, Tula’s now also
                offers swimming to the students who have a desire to learn
                swimming as well as to those who are passionate for swimming as
                a sport
                <br />
              </p1>
            </div>

            <Image src={SwimmingSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Swimming;
