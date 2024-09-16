import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import LawnTennisSports from "../../../public/pictures/lawn-sports.png";
import LawnTennisSportsMobile from "../../../public/pictures/lawn-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function LawnTennis() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={LawnTennisSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">
            Lawn Tennis <br />
            (Synthetic Court)
          </h1>
          <p1 className="SportsMobileText">
            Our International Tennis Federation (ITF) approved tennis courts
            have a special 8-layer cushioned synthetic flooring, which provides
            better grip and prevents injuries
            <br />
            <br />
            Our partner company who has designed the court is accredited with
            the International Tennis Federation, the Asian Tennis Federation and
            the American Sports Builders Association. The 8 layer flooring has
            the following benefits:
            <br />
            <br />
            &#x2022; Outstanding shock absorption – Efficient joint and
            cartilage protection
            <br />
            &#x2022; Optimal vertical deformation – Advanced comfort, reduces
            risk of physical injuries
            <br />
            &#x2022; Optimal traction coefficient – A perfectly balanced grip
            and slip, reduces the risk of slips and trips
            <br />
            &#x2022; Environment friendly – free of solvents and heavy metals
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">
                Lawn Tennis <br />
                (Synthetic Court)
              </h1>
              <p1 className="sports-text">
                Our International Tennis Federation (ITF) approved tennis courts
                have a special 8-layer cushioned synthetic flooring, which
                provides better grip and prevents injuries
                <br />
                <br />
                Our partner company who has designed the court is accredited
                with the International Tennis Federation, the Asian Tennis
                Federation and the American Sports Builders Association. The 8
                layer flooring has the following benefits:
                <br />
                <br />
                &#x2022; Outstanding shock absorption – Efficient joint and
                cartilage protection
                <br />
                &#x2022; Optimal vertical deformation – Advanced comfort,
                reduces risk of physical injuries
                <br />
                &#x2022; Optimal traction coefficient – A perfectly balanced
                grip and slip, reduces the risk of slips and trips
                <br />
                &#x2022; Environment friendly – free of solvents and heavy
                metals
                <br />
              </p1>
            </div>

            <Image src={LawnTennisSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default LawnTennis;
