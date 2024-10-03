"use-client";

import React, { useState, useEffect, useMemo } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import AOS from "aos";
import HeroText from "./components/HeroText";
import Bubble from "./components/Bubble";
import Image from "next/image";
import archery from "../../../../public/pictures/pot.webp";
import dance from "../../../../public/pictures/dance.webp";
import fitness from "../../../../public/pictures/Image 3.webp";
import karate from "../../../../public/pictures/karate.webp";
import polo from "../../../../public/pictures/polo.webp";
import shooting from "../../../../public/pictures/Image 2.webp";
import swimming from "../../../../public/pictures/swimming.webp";
import yoga from "../../../../public/pictures/Image 1.webp";
import yellowCircle from "../../../../public/doodles/yellowCircle7.svg";
import petal1 from "../../../../public/doodles/petal1.svg";
import petal2 from "../../../../public/doodles/petal-2.webp";
import petal3 from "../../../../public/doodles/petal-3.svg";
// import styling
import "../../../../styles/home/components/Hero/Hero.css";

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function Hero(props) {
  const { isMobile } = useMobile();
  const bubbleRef = props.bubbleRef;
  const paragraph1 =
    "Tula's International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through ";
  const circledText = "seamless opportunities.";
  // const paragraph2 =
  //   "Following the Modern Gurukul Concept, Tula's International is a Co-Ed Residential School with a quintessential example of a perfect amalgamation between the Old Gurukul System with a Modern Approach that aims to develop Mind, Body and Soul.";
  const filledText = true;

  const makeDivRelative = useIsInViewport(bubbleRef);

  const [position, setPosition] = useState({ x: 0, y: 0 });

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

  // increase mevementFactor to make bubbles move less or more.
  // highier the number lesser the movement on screen and visa versa
  const movementFactor = 15;
  const movementX =
    !isMobile && calculateMovement("x", 1, position.x / movementFactor);
  const movementY =
    !isMobile && calculateMovement("y", 1, position.y / movementFactor);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    AOS.init();
  }, []);
  return (
    <div className="hero-container-main">
      <div
        className={
          makeDivRelative ? "relative-text-div" : "base-text-div fade-out"
        }
      >
        <HeroText isFilledText={filledText} />
      </div>

      <div
        className={
          makeDivRelative ? "top-relative-text-div" : "top-text-div fade-out"
        }
      >
        <HeroText isFilledText={!filledText} />
      </div>

      <div className="main-site">
        {/* synatax for adding more bubble on screen: <Bubble image={"image.src"} title={"title.text"} />*/}
        <div
          style={{
            transform: `translate(${movementX}rem, ${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble shooting"
        >
          <Bubble image={shooting} title={"TIS"} />
        </div>
        <p></p>
        <div
          style={{
            transform: `translate(-${movementX}rem, -${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble polo"
        >
          <Bubble image={polo} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(-${movementX}rem, -${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble fitness"
        >
          <Bubble image={fitness} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(${movementX}rem, ${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble karate"
        >
          <Image src={petal3} className="petal" alt=" " />
          <Bubble image={karate} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(${movementX}rem, ${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble swimming"
        >
          <Image src={petal2} className="petal" alt=" " />
          <Bubble image={swimming} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(${movementX}rem, ${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble yoga"
        >
          <Bubble image={yoga} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(${movementX}rem, -${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble archery"
        >
          <Image src={petal1} className="petal" alt=" " />
          <Bubble image={archery} title={"TIS"} />
        </div>
        <div
          style={{
            transform: `translate(-${movementX}rem, ${movementY}rem)`,
            transition: "transform 0.2s",
          }}
          className="bubble dance"
        >
          <Bubble image={dance} title={"TIS"} />
        </div>
        <div className="text-div-container">
          <div className="text-div">
            <h1 className="text">
              {paragraph1}
              <span className="circled-text">
                {circledText}
                <Image
                  data-aos="flip-right"
                  data-aos-duration="11500"
                  src={yellowCircle}
                  className="yellow-circle"
                  alt="circle"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
