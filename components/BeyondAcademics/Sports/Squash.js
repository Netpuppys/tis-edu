import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import SquashSports from "../../../public/pictures/squash-sports.png";
import SquashSportsMobile from "../../../public/pictures/squash-sportsMobile.png";
function Squash() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={SquashSportsMobile} alt="" />
          <h1 className="MobileSportsHeading">Squash (Indoor)</h1>
          <p1 className="SportsMobileText">
            Squash is a great way to get fit, compete, or just have fun. The
            sport is becoming more and more popular across the country. One of
            the top boarding schools in Dehradun, TIS has two squash courts
            which have been approved by the World Squash Federation. These have
            optimum lighting and ventilation. Our special flooring provides
            accurate ball bounce, provides resilience and grip and prevents
            player fatigue.
            <br />
            <br />
            Tula’s Squash Centre offers a variety of programs for juniors from
            elementary school through high school. The programs are aimed at all
            levels: from beginners to expert players, all play in their own
            styles, as they move through high school with the help of
            professional coaching staff.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">Squash (Indoor)</h1>
              <p1 className="sports-text">
                Squash is a great way to get fit, compete, or just have fun. The
                sport is becoming more and more popular across the country. One
                of the top boarding schools in Dehradun, TIS has two squash
                courts which have been approved by the World Squash
                Federation. These have optimum lighting and ventilation. Our
                special flooring provides accurate ball bounce, provides
                resilience and grip and prevents player fatigue.
                <br />
                <br />
                Tula’s Squash Centre offers a variety of programs for juniors
                from elementary school through high school. The programs are
                aimed at all levels: from beginners to expert players, all play
                in their own styles, as they move through high school with the
                help of professional coaching staff.
                <br />
              </p1>
            </div>

            <Image src={SquashSports} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default Squash;
