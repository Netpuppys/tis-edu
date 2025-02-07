"use client";
import React, { useContext, useEffect, useState } from "react";
import schoolLogo from "../../../../public/logos/schoolLogo.png";
import Image from "next/image";
import { UtmContext } from "@/components/globalComponents/utmParams";
function Page() {
  const [timer, setTimer] = useState(10);
  const { utmParams } = useContext(UtmContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          window.location.href = `/${utmParams}`;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className="bg-white w-full h-screen flex flex-col justify-center items-center overflow-hidden relative">
      <div className="bg-[#b90124] bg-opacity-10 h-[80vh] w-[80vh] absolute rounded-full"></div>
      <div className="bg-[#b90124] bg-opacity-10 h-[65vh] w-[65vh] absolute rounded-full"></div>
      <div className="bg-[#b90124] bg-opacity-10 h-[50vh] w-[50vh] absolute rounded-full"></div>
      <div className="bg-[#b90124] bg-opacity-10 h-[35vh] w-[35vh] absolute rounded-full"></div>

      <Image
        src={schoolLogo}
        alt=""
        className="w-28 z-[50] h-28 rounded-full"
      />

      <div
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="z-[50] px-8 mb-[2vh] pointer-events-auto flex flex-col justify-center items-center"
      >
        <h3 className="text-[#b90124] text-[clamp(10px,6.5vw,60px)] md:text-[clamp(10px,2.2vw,60px)] leading-tight font-[TTChocolatesBold] font-black">
          Thank You!
        </h3>
        <h5 className="text-center mb-[1vh] max-w-[600px] md:mb-[2vh] text-black italic text-[clamp(10px,4vw,45px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight">
          Our team will get in touch with you for the next steps. For questions
          or rush request, please email{" "}
          <a href="mailto:info@tis.edu.in" className="text-[#b90124]">
            {" "}
            info@tis.edu.in
          </a>
        </h5>
        <p className="text-center text-black text-[clamp(10px,4vw,45px)] md:text-[clamp(10px,1.1vw,45px)]">
          You will be redirected to Home Page in {timer} seconds.
        </p>
      </div>
      <button
        onClick={() => {
          window.location.href = `/${utmParams}`;
        }}
        className="text-center text-white font-[TTChocolatesBold] text-[clamp(10px,4vw,45px)] z-20 rounded-full py-2 px-20 bg-[#b90124] md:text-[clamp(10px,1.1vw,45px)] leading-tight"
      >
        Back To Home
      </button>
    </div>
  );
}

export default Page;
