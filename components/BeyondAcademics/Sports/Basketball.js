import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import BasketballSports from "../../../public/pictures/basketball-sports.png";
import BasketballSportsMobile from "../../../public/pictures/basketball-sportsMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Basketball() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={BasketballSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">
            Basketball <br />
            (Synthetic Court)
          </h1>
          <p1 className="SportsMobileText">
            Students at Tula’s International are coached by professional
            trainers to teach them the intricacies of basketball. Our outdoor
            basketball synthetic 8-layered court has been approved by the
            International Basketball Association (IBA) and provides the
            following benefits to our students:
            <br />
            <br />
            Outstanding shock absorption – Efficient joint and cartilage
            protection
            <br />
            Optimal vertical deformation – Advanced comfort, reduces risk of
            physical injuries
            <br />
            Optimal traction coefficient – helps reduces the risk of slips and
            trips
            <br />
            Environment friendly – free of solvents and heavy metals
            <br />
            <br />
            We have a rigorous training system that challenges players to
            maximize their abilities through comprehensive basketball-specific
            strength, flexibility, movement, agility, and speed training while
            seamlessly integrating on-court basketball skill instruction.
            <br />
            <br />
            We, at TIS, provide a unique opportunity for the student-athlete to
            become part of an environment of elite athletic training. Our
            programs enable students to have a great school experience while
            they continue to train like a professional with world class
            infrastructure which has been approved by IBA.
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
                Basketball
                <br /> (Synthetic Court)
              </h1>
              <p1 className="sports-text">
                Students at Tula’s International are coached by professional
                trainers to teach them the intricacies of basketball. Our
                outdoor basketball synthetic 8-layered court has been approved
                by the International Basketball Association (IBA) and provides
                the following benefits to our students:
                <br />
                <br />
                Outstanding shock absorption – Efficient joint and cartilage
                protection
                <br />
                Optimal vertical deformation – Advanced comfort, reduces risk of
                physical injuries
                <br />
                Optimal traction coefficient – helps reduces the risk of slips
                and trips
                <br />
                Environment friendly – free of solvents and heavy metals
                <br />
                <br />
                We have a rigorous training system that challenges players to
                maximize their abilities through comprehensive
                basketball-specific strength, flexibility, movement, agility,
                and speed training while seamlessly integrating on-court
                basketball skill instruction.
                <br />
                <br />
                We, at TIS, provide a unique opportunity for the student-athlete
                to become part of an environment of elite athletic training. Our
                programs enable students to have a great school experience while
                they continue to train like a professional with world class
                infrastructure which has been approved by IBA.
                <br />
              </p1>
            </div>

            <Image src={BasketballSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Basketball;
