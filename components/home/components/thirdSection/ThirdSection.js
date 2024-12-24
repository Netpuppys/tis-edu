"use-client";
import React from "react";
import ladyInPink from "../../../../public/pictures/ladyInPink.png";
import manInBlue from "../../../../public/pictures/manInBlue.png";
import madeForFuture from "../../../../public/pictures/madeForFuture.png";
import "../../../../styles/home/components/thirdSection/ThirdSection.css";
import Image from "next/image";
function ThirdSection() {
  const title1 =
    "“We feel supported in what we do and nudged further to do more”";
  const title2 =
    "“Tula’s helped me thrive and become the best version of myself”";

  const para1 =
    "At Tula's, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.";
  const para2 =
    "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tula’s International School, we see the potential in every student and help them bring it to life.";

  return (
    <div className="third-section-main-div" id="3">
      <div className="content-div">
        <div className="text-div" style={{ width: "90%" }}>
          <h2 className="title">{title1}</h2>
          <p className="text">{para1}</p>
        </div>

        <div className="image-div">
          <Image src={ladyInPink} className="image" alt="" />
        </div>
      </div>

      <div className="middle-div">
        <Image src={madeForFuture} className="image" alt="" />
      </div>

      <div className="content-div">
        <div className="image-div">
          <Image src={manInBlue} className="image" alt="" />
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
