import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import HorseRidingSports from "../../../public/pictures/horseRiding-sports.png";
import HorseRidingSportsMobile from "../../../public/pictures/horseRiding-sportsMobile.png";
function HorseRiding() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={HorseRidingSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Horse Riding</h1>
          <p1 className="SportsMobileText">
            Horse riding is also known as equestrianism. There are different
            types of horse riding competitions all over the world, such as
            thoroughbred horse racing, steeple chasing, endurance riding, etc.
            <br />
            <br />
            As one of the top residential schools in Dehradun, Tula’s has begun
            offering horse riding lessons to its students at all levels. We
            offer riding lessons for beginners as well as the experienced. Our
            expert coaches also train the more experienced students in dressage,
            show jumping and eventing. We have a fine selection of horses and
            ponies. We have a stable and a small paddock which can hold up to 10
            horses.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Horse Riding</h1>
              <p1 className="sports-text">
                Horse riding is also known as equestrianism. There are different
                types of horse riding competitions all over the world, such as
                thoroughbred horse racing, steeple chasing, endurance riding,
                etc.
                <br />
                <br />
                As one of the top residential schools in Dehradun, Tula’s has
                begun offering horse riding lessons to its students at all
                levels. We offer riding lessons for beginners as well as the
                experienced. Our expert coaches also train the more experienced
                students in dressage, show jumping and eventing. We have a fine
                selection of horses and ponies. We have a stable and a small
                paddock which can hold up to 10 horses.
                <br />
              </p1>
            </div>

            <Image src={HorseRidingSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default HorseRiding;
