"use-client";
import React, { useState } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import seeMoreIcon from "../../../../public/icons/see-more-text.png";
import archery from "../../../../public/pictures/archery.png";
import cycling from "../../../../public/pictures/cycling.png";
import hockey from "../../../../public/pictures/hockey.png";
import swimming from "../../../../public/pictures/swimming.jpeg";
import taekwando from "../../../../public/pictures/taekwando.jpg";
import football from "../../../../public/pictures/football.png";
import shooting from "../../../../public/pictures/shooting.png";
import horseRiding from "../../../../public/pictures/horseRiding.png";
import billiards from "../../../../public/pictures/billiards-single.png";
import squash from "../../../../public/pictures/squash.png";
import volleyball from "../../../../public/pictures/volleyball.png";
import basketball from "../../../../public/pictures/basketball.png";
import cricket from "../../../../public/pictures/Cricket.png";
import lawnTennis from "../../../../public/pictures/lawnTennis.png";
import badminton from "../../../../public/pictures/badminton.png";
import tableTennis from "../../../../public/pictures/tableTennis.png";
import throwball from "../../../../public/pictures/throwballSports.png";
import seeAllActivities from "../../../../public/icons/see-all-activities.png";
import seeAllActivityButton from "../../../../public/icons/see-all-activity-button.png";
import seeMoreMobile from "../../../../public/icons/see-more-mobile.png";
import { FaArrowsRotate } from "react-icons/fa6";
import Image from "next/image";
import "../../../../styles/home/components/activityGrid/ActivityGrid.css";

function FourthSection() {
  const { isMobile } = useMobile();
  const title =
    "Our commitment to all-round development shines in diverse extracurricular activities.";
  const subTitle = "( Our Students love that! )";

  const handleItemClick = (sectionName) => {
    window.location.href = `/beyond-academics/sports/#${sectionName}`;
  };
  const initialActivities = [
    {
      id: 0,
      image: archery,
      title: "Archery",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 1,
      image: cycling,
      title: "Cycling",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 2,
      image: hockey,
      title: "Hockey",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 3,
      image: swimming,
      title: "Swimming",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 4,
      image: taekwando,
      title: "Taekwando",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 5,
      image: football,
      title: "Football",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 6,
      image: shooting,
      title: "Shooting Range",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 7,
      image: horseRiding,
      title: "Horse Riding",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 8,
      image: billiards,
      title: "Billiards",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 9,
      image: squash,
      title: "Squash",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 10,
      image: volleyball,
      title: "Volleyball",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 11,
      image: basketball,
      title: "Basketball",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 12,
      image: cricket,
      title: "Cricket",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 13,
      image: lawnTennis,
      title: "Lawn Tennis",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 14,
      image: badminton,
      title: "Badminton",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 15,
      image: tableTennis,
      title: "Table Tennis",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
    {
      id: 16,
      image: throwball,
      title: "Throwball",
      description: "22 Acres, Pollution- Free, World-Class.",
    },
  ];

  const [activity, setActivity] = useState(initialActivities);

  const rearrangeActivities = () => {
    // Your logic to rearrange the activities array goes here
    // For example, you can shuffle the array randomly
    const shuffledActivities = [...activity].sort(() => Math.random() - 0.5);
    setActivity(shuffledActivities);
  };

  const handleMoreSports = () => {
    window.location.href = "/beyond-academics/sports/";
  };

  function getPositionClassName(index) {
    const positionClasses = ["topy", "lefty", "bottomy", "righty"]; // Example class names
    return positionClasses[index % positionClasses.length]; // Cycle through class names based on index
  }

  return (
    <div className="fourth-section-main-div" id="4">
      <div className="title-div">
        <p1 className="Sportstitle">Sports</p1>
        <br />
        <p1 className="title">{title}</p1>
        <br />
        <p2 className="sub-title">{subTitle}</p2>
      </div>
      <div className="activities-div">
        {activity.slice(0, 3).map((activityItem, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(activityItem.title)}
            className={`activity-div ${getPositionClassName(index)}`}
            style={{
              backgroundImage: `url(${activityItem.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="title-div-card">
              <p1
                className="card-description"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p1
                  style={{ alignItems: "flex-start", alignSelf: "center" }}
                  className="title"
                >
                  {activityItem.title}
                </p1>
                <Image
                  style={{ alignItems: "flex-end", alignSelf: "center" }}
                  className="seeActivity"
                  src={seeAllActivities}
                  alt=""
                />
              </p1>
            </div>
          </div>
        ))}
      </div>
      {!isMobile && (
        <>
          <div className="btn-div">
            <button className="see-more-btn" onClick={rearrangeActivities}>
              <Image src={seeMoreIcon} className="btn-img" alt="See More" />
              <div className="red-bg-btn">
                <FaArrowsRotate />
              </div>
            </button>
          </div>
          <Image
            style={{ height: "auto" }}
            onClick={handleMoreSports}
            src={seeAllActivityButton}
            className="see-all"
            alt="See All Activities"
          />
        </>
      )}

      <div className="see-more-mobile">
        <Image
          onClick={rearrangeActivities}
          src={seeMoreMobile}
          className="see-more-mobile"
          alt="See All Activities"
        />
        <Image
          onClick={handleMoreSports}
          src={seeAllActivityButton}
          className="see-all-mobile"
          alt="See All Activities"
        />
      </div>
    </div>
  );
}

export default FourthSection;
