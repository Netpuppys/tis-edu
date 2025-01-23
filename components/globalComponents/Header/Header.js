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
    <div className="h-full w-full md:min-h-screen">
      <div
        className="h-full md:min-h-[75vh] flex justify-center items-end bg-black relative"
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
            className="w-full h-[85vh] object-cover opacity-80 z-0"
          />
        </div>
        <div className="block w-full h-full md:hidden">
          <Image
            src={headerImgMobile}
            alt=""
            className="w-full h-full aspect-[430/560] object-cover opacity-80 z-0"
          />
        </div>
        <h1
          style={{
            textShadow: "0px 5px 16px rgba(0, 0, 0, 0.2)",
          }}
          className="font-[Mirador800] text-center absolute text-[clamp(20px,8vw,60px)] md:text-[clamp(20px,3.2vw,80px)] pb-8 text-white z-10"
        >
          {title}
        </h1>
      </div>
      <div className="flex h-full md:min-h-[15vh] bg-[#b90124] items-center justify-center">
        {/* <button className="counselling-btn"><p style={{fontSize:"12px",margin:"0"}}>More in</p>About TIS</button> */}
        <h2 className="py-4 text-[clamp(15px,4.5vw,60px)] w-[85%] md:w-[80%] mx-auto text-center text-white font-[Helvetica] md:text-[clamp(15px,1.9vw,60px)] tracking-wider">
          {subtitle}
          <br />
        </h2>
      </div>
    </div>
  );
}
