import React from "react";

import "../../../styles/globalComponents/Header/header.css";
import Image from "next/image";
// import logo from "../../../../public/logos/schoolLogo.png";
// import optionBtn from "../../../../public/icons/Button-Open-Menu.png";

export default function Header({
  title,
  subtitle,
  headerImg,
  headerImgMobile,
}) {
  return (
    <div className="h-full w-full">
      <div
        className="h-full md:min-h-[75vh] flex justify-center items-end relative"
        // style={{
        //   backgroundImage: `url(${headerImg.src})`,
        //   backgroundSize: "100% 100%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="hidden w-full h-full md:block">
          <Image
            src={headerImg}
            alt=""
            className="w-full h-[85vh] object-cover z-0"
          />
        </div>
        <div className="block w-full h-full md:hidden">
          <Image
            src={headerImgMobile}
            alt=""
            className="w-full h-full aspect-[430/560] object-cover z-0"
          />
        </div>
        <h1
          style={{
            textShadow: "0px 5px 16px rgba(0, 0, 0, 0.2)",
          }}
          className="px-4 md:px-0 font-[Mirador800] text-center absolute text-[clamp(10px,8vw,60px)] md:text-[clamp(10px,3.2vw,80px)] pb-4 leading-tight text-white z-10"
        >
          {title}
        </h1>
      </div>
      {subtitle && (
        <div className="flex h-full md:min-h-[15vh] bg-[#b90124] items-center justify-center">
          {/* <button className="counselling-btn"><p style={{fontSize:"12px",margin:"0"}}>More in</p>About TIS</button> */}
          <h2 className="py-4 text-[clamp(10px,4.5vw,60px)] w-[85%] md:w-[80%] mx-auto text-center text-white font-[Helvetica] md:text-[clamp(10px,1.9vw,60px)] tracking-wider">
            {subtitle}
            <br />
          </h2>
        </div>
      )}
    </div>
  );
}
