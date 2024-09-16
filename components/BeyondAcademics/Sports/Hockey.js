import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import HockeySports from "../../../public/pictures/hockey-sports.png";
import HockeySportsMobile from "../../../public/pictures/hockey-sportsMobile.png";
function Hockey() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={HockeySportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Hockey</h1>
          <p1 className="SportsMobileText">
            Field hockey at Tula’s International School represents an exciting
            opportunity for students to engage in a dynamic and competitive
            sport while fostering teamwork, discipline, and physical fitness. As
            one of the premier institute of Education in the region, Tula’s
            International School is committed to providing a well-rounded
            education that includes a diverse range of extracurricular
            activities, including sports like field hockey.
            <br />
            <br />
            Under the guidance of experienced coaches and staff, students at
            Tula’s International School have the chance to learn and develop
            their skills in field hockey, whether they are beginners or
            experienced players. The school offers state-of-the-art facilities,
            including well-maintained fields and equipment, to ensure that
            students have the resources they need to excel in the sport.
            <br />
            <br />
            Participation in field hockey at Tula’s International School goes
            beyond just physical exercise; it instills values such as
            sportsmanship, perseverance, and leadership. Students learn to work
            together as a team, supporting and encouraging one another both on
            and off the field.Furthermore, field hockey at Tula’s International
            School provides opportunities for students to compete in interschool
            tournaments and championships, allowing them to showcase their
            talents and represent their school with pride.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <Image src={HockeySports} alt="" className="archiery" />

            <div className="text-div-sports">
              <h1 className="headingSports">Hockey</h1>
              <p1 className="sports-text">
                Field hockey at Tula’s International School represents an
                exciting opportunity for students to engage in a dynamic and
                competitive sport while fostering teamwork, discipline, and
                physical fitness. As one of the premier institute of Education
                in the region, Tula’s International School is committed to
                providing a well-rounded education that includes a diverse range
                of extracurricular activities, including sports like field
                hockey.
                <br />
                <br />
                Under the guidance of experienced coaches and staff, students at
                Tula’s International School have the chance to learn and develop
                their skills in field hockey, whether they are beginners or
                experienced players. The school offers state-of-the-art
                facilities, including well-maintained fields and equipment, to
                ensure that students have the resources they need to excel in
                the sport.
                <br />
                <br />
                Participation in field hockey at Tula’s International School
                goes beyond just physical exercise; it instills values such as
                sportsmanship, perseverance, and leadership. Students learn to
                work together as a team, supporting and encouraging one another
                both on and off the field.Furthermore, field hockey at Tula’s
                International School provides opportunities for students to
                compete in interschool tournaments and championships, allowing
                them to showcase their talents and represent their school with
                pride.
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

export default Hockey;
