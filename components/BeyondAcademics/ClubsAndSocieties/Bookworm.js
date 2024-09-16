import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import bookworm from "../../../public/Clubs/Bookworm.png";
import bookwormMobile from "../../../public/Clubs/BookwormMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Bookworm() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={bookwormMobile} alt="" />
            <h1 className="MobileSportsHeading">Bookworm</h1>
            <p1 className="SportsMobileText">
              &quot;Reading is to the mind what exercise is to the
              body&quot;-with this motto in mind, the students at one of
              Dehradun&apos;s best schools, TIS, strut about the campus with
              their proud literary possessions- Harry Potter and the
              Philosopher&apos;s Stone, Life of Pi, Malgudi Days, The Da Vinci
              Code, and many more. The book lovers also get to interact with
              authors, such as Chetan Bhagat, Ruskin Bond, Ranjit Lal and Bhavna
              Arora, among others.
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
              <Image className="archiery" src={bookworm} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Bookworm</h1>
                <p1 className="sports-text">
                  &quot;Reading is to the mind what exercise is to the
                  body&quot;-with this motto in mind, the students at one of
                  Dehradun&apos;s best schools, TIS, strut about the campus with
                  their proud literary possessions- Harry Potter and the
                  Philosopher&apos;s Stone, Life of Pi, Malgudi Days, The Da
                  Vinci Code, and many more. The book lovers also get to
                  interact with authors, such as Chetan Bhagat, Ruskin Bond,
                  Ranjit Lal and Bhavna Arora, among others.
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

export default Bookworm;
