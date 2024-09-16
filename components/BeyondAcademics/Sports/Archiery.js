import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import ArchierySports from "../../../public/pictures/archery-sports.png";
import ArchierySportsMobile from "../../../public/pictures/archery-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Archiery() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={ArchierySportsMobile} alt="" />
            <h1 className="MobileSportsHeading">Archery</h1>
            <p1 className="SportsMobileText">
              We at Tula’s offers comprehensive archery programs in a safe and
              fun environment. Tula’s International School has a state of the
              art archery ground with many different target lanes spread out
              over natural terrain of our campus. 
              <br />
              <br />
              Participation in archery not only engages them in a sport but it
              also improves leadership skills, adds confidence, fosters respect,
              and develops honorable and competent adults.
              <br />
              <br />
              It will benefit them physically as well as mentally and make them
              ready to tackle real-time problems in their life. Under the
              supervision of our expert coaches, archery training is imparted to
              make them professional archers.
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
              <Image className="archiery" src={ArchierySports} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Archery</h1>
                <p1 className="sports-text">
                  We at Tula’s offers comprehensive archery programs in a safe
                  and fun environment. Tula’s International School has a state
                  of the art archery ground with many different target lanes
                  spread out over natural terrain of our campus. 
                  <br />
                  <br />
                  Participation in archery not only engages them in a sport but
                  it also improves leadership skills, adds confidence, fosters
                  respect, and develops honorable and competent adults.
                  <br />
                  <br />
                  It will benefit them physically as well as mentally and make
                  them ready to tackle real-time problems in their life. Under
                  the supervision of our expert coaches, archery training is
                  imparted to make them professional archers.
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

export default Archiery;
