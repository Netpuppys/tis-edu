import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import ShutterbugSports from "../../../public/Clubs/Shutterbug.png";
import ShutterbugSportsMobile from "../../../public/Clubs/ShutterbugMobile.png";
import "../../../styles/BeyondAcademics/sports.css";
function Shutterbug() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <>
            <Image className="archiery" src={ShutterbugSportsMobile} alt="" />
            <h1 className="MobileSportsHeading">Shutterbug</h1>
            <p1 className="SportsMobileText">
              The great photographer Dorothea Lange once said, ‘’Photography
              takes an instant out of time, altering life by holding it still.’’
              To view the world through a camera gives a totally different
              perspective to life. The leaves, when viewed through a lens,
              become an art in itself and the hummingbirds seem to sing their
              own songs. Creativity, imagination and passion are the key that
              sets one apart from the crowd. Like a fingerprint, no two images
              are the same. It is for the viewer to interpret the captured image
              though the artist may have a different opinion. As one of
              Dehradun’s top schools, it lets students study and explore the
              colourful field of photography.
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
              <Image className="archiery" src={ShutterbugSports} alt="" />

              <div className="text-div-sports">
                <h1 className="headingSports">Shutterbug</h1>
                <p1 className="sports-text">
                  The great photographer Dorothea Lange once said, ‘’Photography
                  takes an instant out of time, altering life by holding it
                  still.’’ To view the world through a camera gives a totally
                  different perspective to life. The leaves, when viewed through
                  a lens, become an art in itself and the hummingbirds seem to
                  sing their own songs. Creativity, imagination and passion are
                  the key that sets one apart from the crowd. Like a
                  fingerprint, no two images are the same. It is for the viewer
                  to interpret the captured image though the artist may have a
                  different opinion. As one of Dehradun’s top schools, it lets
                  students study and explore the colourful field of photography.
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

export default Shutterbug;
