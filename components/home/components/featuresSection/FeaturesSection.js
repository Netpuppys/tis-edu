"use-client";

import React from "react";
import Asian from "../../../../public/pictures/asian.png";
import TheInternational from "../../../../public/pictures/International_Award_for_Young_People_logo.jpg";
import Lions from "../../../../public/pictures/lions.png";
import UniversityLogo from "../../../../public/pictures/universityLogo.jpg";
import UniversityOf from "../../../../public/pictures/University.png";
import Inseec from "../../../../public/pictures/inseec.png";
import Trinty from "../../../../public/pictures/Trinty.png";
import Universitat from "../../../../public/pictures/Universitat.jpg";
import Cpi6 from "../../../../public/pictures/Cpi6.jpg";
import yhnbepc from "../../../../public/pictures/yhnbepcntet.jpg";
import InseecU from "../../../../public/pictures/inseecU.png";
import Universidad from "../../../../public/pictures/Universidad.png";
import Universitas from "../../../../public/pictures/Universitas.png";
import collaborations from "../../../../public/pictures/collaborations.png";
import "../../../../styles/home/components/featuresSection/FeaturesSection.css";
import Image from "next/image";
function FeaturesSection() {
  return (
    <div className="features-section-main-div" id="12">
      <div className="collaborations">
        <Image className="collaborations_img" src={collaborations} alt="" />

        <div className="logos">
          <div className="slider1">
            <Image className="image" src={Universidad} alt="" />
            <Image className="image" src={yhnbepc} alt="" />
            <Image className="image" src={Universitat} alt="" />
            <Image className="image" src={Cpi6} alt="" />
            <Image className="image" src={Inseec} alt="" />
            <Image className="image" src={Trinty} alt="" />
            <Image className="image" src={UniversityOf} alt="" />
          </div>
          <div className="slider2">
            <Image className="image" src={TheInternational} alt="" />
            <Image className="image" src={Lions} alt="" />
            <Image className="image" src={InseecU} alt="" />
            <Image className="image" src={Universitas} alt="" />
            <Image className="image" src={UniversityLogo} alt="" />
            <Image className="image" src={Asian} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
