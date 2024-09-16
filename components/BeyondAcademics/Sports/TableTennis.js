import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import TableTennisSports from "../../../public/pictures/table-sports.png";
import TableTennisSportsMobile from "../../../public/pictures/table-sportsMobile.png";
function TableTennis() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={TableTennisSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Table Tennis</h1>
          <p1 className="SportsMobileText">
            Indoor games are not as popular with students as outdoor games. To
            develop students interest towards indoor games we offer a specific
            sports arena that houses an area dedicated to table tennis.
            <br />
            <br />
            The TT tables are procured from the best sports houses of India. The
            table tennis arena has special sports flooring approved by sports
            commission for better and save play. 
            <br />
            <br />
            Being an indoor game, the sports arena has been arranged with ample
            amount of light, making it suitable for playing in the nights as
            well.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Table Tennis</h1>
              <p1 className="sports-text">
                Indoor games are not as popular with students as outdoor games.
                To develop students interest towards indoor games we offer a
                specific sports arena that houses an area dedicated to table
                tennis.
                <br />
                <br />
                The TT tables are procured from the best sports houses of India.
                The table tennis arena has special sports flooring approved by
                sports commission for better and save play. 
                <br />
                <br />
                Being an indoor game, the sports arena has been arranged with
                ample amount of light, making it suitable for playing in the
                nights as well.
                <br />
              </p1>
            </div>

            <Image src={TableTennisSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default TableTennis;
