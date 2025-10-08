"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useAnimation } from "framer-motion";
import schoolBg from "../../../../public/backgrounds/schoolTopView.webp";
import schoolIcon from "../../../../public/icons/schoolIcon.png";
import athleticsIcon from "../../../../public/icons/athleticsIcon.png";
import boardingSchoolIcon from "../../../../public/icons/boardingSchoolIcon.png";
import socialIcon from "../../../../public/icons/socialIcon.png";
import schoolLifeBg from "../../../../public/backgrounds/schoolLifeBg.png";
import athleticsBg from "../../../../public/backgrounds/athleticsBg.png";
import boardingSchoolBg from "../../../../public/backgrounds/boardingSchoolBg.png";
import socailBg from "../../../../public/backgrounds/socailBg.png";
import "../../../../styles/home/components/secondSection/SecondSection.css";
// ... (unchanged imports)
import Image from "next/image";
import Form from "../form/form";

function SecondSection() {
  const controls = useAnimation();

  const [scrollCount, setScrollCount] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setScrollCount((prev) => {
      const scrollIncrement = currentScrollY > prevScrollY ? 1 : -1;
      return prev + scrollIncrement;
    });

    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  const handleMouseMove = useCallback((event) => {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    setScrollCount((prev) => prev + mouseX * 10);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        setIsVisible(false);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (typeof window !== "undefined" && sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleScroll, handleMouseMove, sectionRef]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ width: `${scrollCount}rem` });
    }
  }, [scrollCount, isVisible, controls]);

  const cardData = [
    {
      id: "school",
      title: "School Life",
      subTitle: "Overall in Here",
      bgImage: schoolLifeBg,
      icon: schoolIcon,
    },
    {
      id: "boarding",
      title: "Boarding School",
      subTitle: "Getting Diploma",
      bgImage: boardingSchoolBg,
      icon: boardingSchoolIcon,
    },
    {
      id: "athletics",
      title: "Athletics",
      subTitle: "Sports Club",
      bgImage: athleticsBg,
      icon: athleticsIcon,
    },
    {
      id: "social",
      title: "Social",
      subTitle: "Overall in Here",
      bgImage: socailBg,
      icon: socialIcon,
    },
  ];

  return (
    <div className="relative" id="2">
      <div className="w-full bg-[#b90124] md:h-[2rem] absolute z-[50] rounded-b-[60px]"></div>
      <Form />
      <div className="second-main-section" >
        <div className="content">
          <div className="background"></div>
          {/* <div className="cards-div-second">
          {cardData.map((item) => (
            <div key={item.id} className="card">
              <Image src={item.bgImage} className="card-bg" alt={item.title} />
              <>
                <Image src={item.icon} className="icon" alt="icon" />
                <h2 className="title">{item.title}</h2>
                <h3 className="sub-title">{item.subTitle}</h3> 
              </>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
