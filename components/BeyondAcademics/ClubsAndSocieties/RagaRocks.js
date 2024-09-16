import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import ragaRocksSports from "../../../public/Clubs/RagaRocks.png";
import ragaRocksMobile from "../../../public/Clubs/RagaRocksMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function RagaRocks() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={ragaRocksMobile} alt="" />
            <h1 className="MobileSportsHeading">Raga Rocks</h1>
            <p1 className="SportsMobileText">
              At Tula’s, music is not regarded as a standalone subject but is
              incorporated into the curriculum itself. It forms an integral part
              of every student’s life. The school has qualified teachers who
              teach students to play a variety of musical instruments, such as
              the guitar, congo drums, violin, sitar, keyboards, drums,
              harmonium, table, and to sing as well. Students are exposed to
              western as well as Indian classical dance forms.
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
              <Image className="archiery" src={ragaRocksSports} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Raga Rocks</h1>
                <p1 className="sports-text">
                  At Tula’s, music is not regarded as a standalone subject but
                  is incorporated into the curriculum itself. It forms an
                  integral part of every student’s life. The school has
                  qualified teachers who teach students to play a variety of
                  musical instruments, such as the guitar, congo drums, violin,
                  sitar, keyboards, drums, harmonium, table, and to sing as
                  well. Students are exposed to western as well as Indian
                  classical dance forms.
                  <br />
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

export default RagaRocks;
