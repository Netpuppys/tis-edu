import React, { useState, useEffect, useMemo, useRef } from "react";
import { useMobile } from "../../../../../components/globalComponents/IsMobileContext";
import AOS from "aos";
import HeroText from "./components/HeroTextLanding";
import Bubble from "./components/BubbleLanding";
import Image from "next/image";
import archery from "../../../../../public/pictures/pot.webp";
import dance from "../../../../../public/pictures/dance.webp";
import fitness from "../../../../../public/pictures/Image 3.webp";
import karate from "../../../../../public/pictures/karate.webp";
import polo from "../../../../../public/pictures/polo.webp";
import shooting from "../../../../../public/pictures/Image 2.webp";
import swimming from "../../../../../public/pictures/swimming.webp";
import yoga from "../../../../../public/pictures/Image 1.webp";
import petal1 from "../../../../../public/doodles/petal1.svg";
import petal2 from "../../../../../public/doodles/petal-2.webp";
import petal3 from "../../../../../public/doodles/petal-3.svg";
import "../../../../../styles/home/components/Hero/Hero.css";
const TextBanner = ({ filledText }) => {
  return (
    <div className="w-screen overflow-hidden h-screen flex flex-col items-center justify-center bg-transparent">
      <p
        style={
          filledText
            ? {
                color: "#ffffff",
                textShadow: "0px 0.83px 8.295px rgba(0, 0, 0, 0.40)",
              }
            : {
                color: "transparent",
                WebkitTextStrokeColor: "#fff",
                WebkitTextStrokeWidth: "0.3px",
              }
        }
        className="font-[TTChocolatesBold] flex flex-col text-center text-[3.5rem] md:text-[6rem] font-black tracking-[0.10369rem] leading-tight"
      >
        IMAGE
        <span className="text-[4.5rem] font-[Mirador800] md:text-[7rem]">
          Gallery
        </span>
        <div className="relative h-fit w-fit">
          {filledText && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.317 14.075"
              width="368.3169860839844"
              className="absolute"
              height="14.074999809265137"
            >
              <path
                id="mainTextScribble"
                d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
                transform="translate(-403.065 -1791.313)"
                fill="none"
                stroke="#c09d59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className=""
              />
            </svg>
          )}
        </div>
      </p>
    </div>
  );
};

function HeroLanding() {
  const parentRef = useRef(null);
  const contactRef = useRef(null);

  const { isMobile } = useMobile();

  const [isInView, setIsInView] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  function mouseMove(event) {
    const newX = Math.floor((event.clientX * 100) / window.innerWidth);
    const newY = Math.floor((event.clientY * 100) / window.innerHeight);
    setPosition({ x: newX, y: newY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const calculateMovement = (axis, direction, distance) => {
    return axis === "x" ? direction * distance : direction * distance;
  };

  const movementFactor = 15;

  const movementX =
    !isMobile && calculateMovement("x", 1, position.x / movementFactor);

  const movementY =
    !isMobile && calculateMovement("y", 1, position.y / movementFactor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // uses viewport as root
        threshold: 0, // adjust as needed
      }
    );

    if (typeof window !== "undefined" && contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (typeof window !== "undefined" && contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-fit pointer-events-none overflow-x-hidden bg-[#b90124]"
      ref={parentRef}
    >
      <div className="relative overflow-hidden min-h-screen h-fit">
        <div
          ref={contactRef}
          className="w-full absolute top-[100vh] h-[calc(100%-200vh)] opacity-0"
        ></div>

        <div className={`${isInView ? "fixed" : "absolute"} top-0 z-10`}>
          <TextBanner filledText={true} />
        </div>
        {/* <div className={`${isInView ? "fixed" : "absolute"} `}>
          
        </div> */}

        <div className={`${isInView ? "fixed" : "absolute"} top-0 z-50`}>
          <TextBanner filledText={false} />
        </div>

        {!isInView && (
          <div className={`${isInView ? "fixed" : "absolute"} bottom-0 z-10`}>
            <TextBanner filledText={true} />
          </div>
        )}

        {!isInView && (
          <div className={`${isInView ? "fixed" : "absolute"} bottom-0 z-50`}>
            <TextBanner filledText={false} />
          </div>
        )}

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-y-20 z-[30] relative">
          <div className="w-full mx-auto relative flex items-center justify-start md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX}rem, ${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full bg-transparent w-1/2 ml-5 mr-auto md:mx-auto aspect-square "
            >
              <Image src={shooting} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full mx-auto relative flex items-center justify-end md:justify-center">
            <div
              style={{
                transform: `translate(${movementX}rem, ${movementY + 2}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full bg-transparent w-1/2 mr-5 ml-auto md:mx-auto aspect-square "
            >
              <Image src={polo} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-start md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX}rem, ${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full bg-transparent w-1/2 mx-auto aspect-square "
            >
              <Image src={fitness} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-end md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX}rem, -${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full flex bg-transparent items-center justify-center w-1/2 ml-auto aspect-square "
            >
              <Image src={karate} className="w-full h-fit" alt="" />
              <Image src={petal3} className="w-full h-fit" alt="" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-start md:justify-center">
            <div
              style={{
                transform: `translate(${movementX + 1}rem, ${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full flex items-center justify-center bg-transparent w-1/2 mr-auto aspect-square "
            >
              <Image src={petal2} className="w-full h-fit" alt=" " />
              <Image src={swimming} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-end md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX}rem, ${movementY - 1}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full bg-transparent w-1/2 ml-auto aspect-square "
            >
              <Image src={yoga} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-start md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX}rem, -${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full flex bg-transparent w-1/2 md:ml-auto aspect-square "
            >
              <Image src={petal1} className="petal" alt=" " />
              <Image src={archery} className="w-full h-fit" alt="bubble" />
            </div>
          </div>

          <div className="w-full relative flex items-center justify-end md:justify-center">
            <div
              style={{
                transform: `translate(-${movementX - 2}rem, ${movementY}rem)`,
                transition: "transform 0.2s",
              }}
              className="rounded-full bg-transparent w-1/2 ml-auto aspect-square "
            >
              <Image src={dance} className="w-full h-fit" alt="bubble" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;
