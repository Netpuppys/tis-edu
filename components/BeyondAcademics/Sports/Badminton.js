import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import BadmintonSports from "../../../public/pictures/badminton-sports.png";
import BadmintonSportsMobile from "../../../public/pictures/badminton-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Badminton() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={BadmintonSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Badminton</h1>
          <p1 className="SportsMobileText">
            All students at TIS have the opportunity to play badminton during
            the course of each school year. We also provide a coaching club for
            boys and girls who wish to refine their badminton skills. At TIS, we
            believe it is our duty to provide students with world-class
            badminton infrastructure.
            <br />
            <br />
            For us it is a matter of pride that our badminton court has been
            approved by the Badminton World Federation (BWF). It helps provide
            the following benefits to our students:
            <br />
            <br />
            &#x2022; Outstanding shock absorption – Efficient joint and
            cartilage protection
            <br />
            &#x2022; Optimal vertical deformation – Advanced comfort, reduces
            risk of physical injuries
            <br />
            &#x2022; Optimal traction coefficient – helps reduces the risk of
            slips and trips
            <br />
            &#x2022; Environment friendly – free of solvents and heavy metals.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={BadmintonSports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Badminton</h1>
              <p1 className="sports-text">
                All students at TIS have the opportunity to play badminton
                during the course of each school year. We also provide a
                coaching club for boys and girls who wish to refine their
                badminton skills. At TIS, we believe it is our duty to provide
                students with world-class badminton infrastructure.
                <br />
                <br />
                For us it is a matter of pride that our badminton court has been
                approved by the Badminton World Federation (BWF). It helps
                provide the following benefits to our students:
                <br />
                <br />
                &#x2022; Outstanding shock absorption – Efficient joint and
                cartilage protection
                <br />
                &#x2022; Optimal vertical deformation – Advanced comfort,
                reduces risk of physical injuries
                <br />
                &#x2022; Optimal traction coefficient – helps reduces the risk
                of slips and trips
                <br />
                &#x2022; Environment friendly – free of solvents and heavy
                metals.
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

export default Badminton;
