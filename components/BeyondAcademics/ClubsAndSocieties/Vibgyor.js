import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import vibgyor from "../../../public/Clubs/Vibgyor.png";
import vibgyorMobile from "../../../public/Clubs/VibgyorMobile.png";
function Vibgyor() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={vibgyorMobile} alt="" />
          <h1 className="MobileSportsHeading">Vibgyor</h1>
          <p1 className="SportsMobileText">
            As one of the reputed schools in Dehradun, Tula’s has the only Art &
            Craft workstation of its kind in Uttarakhand. Called ‘Vibgyor’, it
            continually strives to inspire its students to display their
            creativity under the capable guidance of art teachers. Students are
            exposed to different mediums for a wholesome education in the
            artistic sphere. Portrait painting, sketching, crafts, Madhubani
            painting, and creating sculptures are some of the creative pursuits
            that students enjoy doing during their art and craft classes.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Vibgyor</h1>
              <p1 className="sports-text">
                As one of the reputed schools in Dehradun, Tula’s has the only
                Art & Craft workstation of its kind in Uttarakhand. Called
                ‘Vibgyor’, it continually strives to inspire its students to
                display their creativity under the capable guidance of art
                teachers. Students are exposed to different mediums for a
                wholesome education in the artistic sphere. Portrait painting,
                sketching, crafts, Madhubani painting, and creating sculptures
                are some of the creative pursuits that students enjoy doing
                during their art and craft classes.
                <br />
                <br />
              </p1>
            </div>

            <Image src={vibgyor} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Vibgyor;
