import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import khanaKhazana from "../../../public/Clubs/KhanaKhazana.png";
import khanaKhazanaMobile from "../../../public/Clubs/KhanaKhazanaMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function KhanaKhazana() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={khanaKhazanaMobile} alt="" />
            <h1 className="MobileSportsHeading">Khana Khazana</h1>
            <p1 className="SportsMobileText">
              Food is the magic key that can open many doors, as the saying
              goes. The Cookery Club at Tula’s, one of the best co-ed boarding
              school in Dehradun, is not about nutrients and calories. It’s
              about sharing. It’s about honesty. It’s about identity. At the
              Tula’s Cookery Club, students experiment with different recipes
              and create new and varied dishes. The challenge lies in creating
              dishes that cater to different palates. Cooking is such a vast and
              creative field. This is one club loved by students of both sexes.
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
              <Image className="archiery" src={khanaKhazana} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Khana Khazana</h1>
                <p1 className="sports-text">
                  Food is the magic key that can open many doors, as the saying
                  goes. The Cookery Club at Tula’s, one of the best co-ed
                  boarding school in Dehradun, is not about nutrients and
                  calories. It’s about sharing. It’s about honesty. It’s about
                  identity. At the Tula’s Cookery Club, students experiment with
                  different recipes and create new and varied dishes. The
                  challenge lies in creating dishes that cater to different
                  palates. Cooking is such a vast and creative field. This is
                  one club loved by students of both sexes.
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

export default KhanaKhazana;
