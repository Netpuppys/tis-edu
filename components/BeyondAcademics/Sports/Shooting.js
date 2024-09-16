import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import ShootingSports from "../../../public/pictures/shooting-sports.png";
import ShootingSportsMobile from "../../../public/pictures/shooting-sportsMobile.png";
function Shooting() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={ShootingSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Shooting Range</h1>
          <p1 className="SportsMobileText">
            Tula’s International School has a state of the art shooting range
            with quality equipment that aims to hone the talent of the budding
            shooters. Students can use the 7-lane indoor shooting range for 10M
            pistol and rifle shooting. They can practice under the skilled
            guidance of Mr. Amar Singh, an international level shooter.The
            shooting range is accessible to students 24/7, allowing 7 shooters
            to practice at one time. 
            <br />
            <br />
            The school is a member of the Uttarakhand State Rifle Association
            and awaits membership confirmation from International Shooting
            Sports Federation (ISSF) and National Rifle Association of India as
            well.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={ShootingSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Shooting Range</h1>
              <p1 className="sports-text">
                Tula’s International School has a state of the art shooting
                range with quality equipment that aims to hone the talent of the
                budding shooters. Students can use the 7-lane indoor shooting
                range for 10M pistol and rifle shooting. They can practice under
                the skilled guidance of Mr. Amar Singh, an international level
                shooter.The shooting range is accessible to students 24/7,
                allowing 7 shooters to practice at one time. 
                <br />
                <br />
                The school is a member of the Uttarakhand State Rifle
                Association and awaits membership confirmation from
                International Shooting Sports Federation (ISSF) and National
                Rifle Association of India as well.
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

export default Shooting;
