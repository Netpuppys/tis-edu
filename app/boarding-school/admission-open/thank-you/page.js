"use client";
import React, { useEffect, useState } from "react";
import { TbMailOpenedFilled } from "react-icons/tb";
function Page() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          window.location.href = "/boarding-school/admission-open";
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
      <div className="bg-[#b90124] bg-opacity-75 text-black text-[10vh] mb-[1vh] md:mb-[2vh] h-fit w-fit aspect-square p-8 rounded-full">
        <TbMailOpenedFilled />
      </div>
      <div
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="z-[50] px-8 pointer-events-auto flex flex-col justify-center items-center"
      >
        <h3 className="text-balck text-[clamp(25px,1.9vw,45px)] font-[Helvetica]">
          Thank You for your trust!
        </h3>
        <h5 className="text-center mb-[1vh] max-w-[600px] md:mb-[2vh] text-balck italic text-[clamp(18px,1.1vw,45px)]">
          Our team will get in touch with you for the next steps. For questions
          or rush request, please email{" "}
          <a href="mailto:info@tis.edu.in" className="text-[#b90124]">
            {" "}
            info@tis.edu.in
          </a>
        </h5>
        <p className="text-center text-balck text-[clamp(18px,1.1vw,45px)]">
          You will be redirected to Home Page in {timer} seconds.
        </p>
      </div>
    </div>
  );
}

export default Page;
