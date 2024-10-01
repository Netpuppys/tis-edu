"use-client";
import React from "react";
import ladyInPink from "../../../../public/pictures/ladyInPink.png";
import manInBlue from "../../../../public/pictures/manInBlue.png";
import madeForFuture from "../../../../public/pictures/madeForFuture.png";
import "../../../../styles/home/components/thirdSection/ThirdSection.css";
import Image from "next/image";
function ThirdSection() {
  const title1 = "We are Supported and Inspired";
  const title2 = "Prepared to thrive!";

  const para1 =
    "Whether it's academics, music, art, or drama, Tula's is best at unlocking the potential of students. We help our students to bring out their creative sides. We are more than just a school. Instead, TIS is a canvas of opportunities.";
  const para2 =
    "Choosing Tula’s International School, we realised it's been a transformative experience. It's not just about education. It's about becoming the best version of ourselves.";

  return (
    <div className="third-section-main-div" id="3">
      <div className="content-div">
        <div className="text-div" style={{ width: "90%" }}>
          <h2 className="title">{title1}</h2>
          <p className="text">{para1}</p>
        </div>

        <div className="image-div">
          <Image src={ladyInPink} className="image" alt="ladyInPink" />
        </div>
      </div>

      <div className="middle-div">
        <Image src={madeForFuture} className="image" alt="Made For Future" />
      </div>

      <div className="content-div">
        <div className="image-div">
          <Image src={manInBlue} className="image" alt="man in blue" />
        </div>
        <div className="text-div" style={{ width: "90%" }}>
          <h2 className="title">{title2}</h2>
          <p className="text">{para2}</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
