import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import pottersWheel from "../../../public/Clubs/pottersWheel.png";
import pottersWheelMobile from "../../../public/Clubs/pottersWheelMobile.png";
function PottersWheel() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={pottersWheelMobile} alt="" />
          <h1 className="MobileSportsHeading">Potters Wheel</h1>
          <p1 className="SportsMobileText">
            Clay modeling may look a simple process but when practiced leads to
            unexpected and even crooked shapes, depending upon the skill of the
            potters’s hand. Yet this work allows one to think and give shape to
            one’s imaginations working with shapes of clay. The students work
            for hours on end with infinite patience to bring out their creative
            talents. Their hands might get dirt but it is a learning process
            unlike any other.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Potters Wheel</h1>
              <p1 className="sports-text">
                Clay modeling may look a simple process but when practiced leads
                to unexpected and even crooked shapes, depending upon the skill
                of the potters’s hand. Yet this work allows one to think and
                give shape to one’s imaginations working with shapes of clay.
                The students work for hours on end with infinite patience to
                bring out their creative talents. Their hands might get dirt but
                it is a learning process unlike any other.
                <br />
                <br />
              </p1>
            </div>

            <Image src={pottersWheel} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default PottersWheel;
