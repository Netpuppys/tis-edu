"use client"

import image from "../../../../public/icons/360.png";
import "../../../../styles/home/components/tisByNumbers/TisByNumbers.css";
import Image from "next/image";
import Stats from "./stats";
import background from "../../../../public/backgrounds/schoolTopView.webp";
import { UtmContext } from "@/components/globalComponents/utmParams";
import { useContext } from "react";
function TisByNumbers() {
  const { utmParams } = useContext(UtmContext);
  const handleVirtualTourClick = () => {
    window.location.href = `/virtual-tour${utmParams}`;
  };
  return (
    <div id="11">
      {/* <div className="Tis_By_Numbers_main_div" onClick={handleVirtualTourClick}>
        <Image className="image360" src={image} alt="" />
        <p className="title">DIVINE INTO OUR...</p>
        <p className="title_2">VIRTUAL TOUR</p>
      </div>*/}
      {/* <div className="-mt-[40px] md:-mt-[120px]">
        <Stats />
      </div> */}
      <div className="w-full flex flex-col justify-center items-center py-2 md:py-10">
        <div
          onClick={handleVirtualTourClick}
          className="py-8 md:py-12 w-[90%] rounded-xl md:rounded-[20px] md:w-[75%] cursor-pointer bg-cover"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${background.src}) lightgray -0.111px -373.974px / 100.015% 399.867%`,
          }}
        >
          <div className="relative z-20 flex gap-4 md:gap-10 items-center justify-center">
            <Image className="w-[20%] md:w-[80px]" src={image} alt="" />
            <div className="flex flex-col justify-center items-end">
              <h2 className="text-white font-[TTChocolates] leading-none text-[clamp(10px,6vw,60px)] md:text-[clamp(10px,2.5vw,100px)]">
                DIVE INTO OUR...
              </h2>
              <h2 className="text-white font-[TTChocolates] leading-none text-[clamp(10px,6vw,60px)] md:text-[clamp(10px,2.5vw,100px)]">
                VIRTUAL TOUR
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TisByNumbers;
