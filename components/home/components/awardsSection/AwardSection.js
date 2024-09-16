import React, { useState } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import seeMoreIcon from "../../../../public/icons/see-more-text.png";
import topBoarding from "../../../../public/Home/Awards/TopBoarding.jpg";
import bestResidential from "../../../../public/Home/Awards/BestResidential.jpg";
import internationalSchool from "../../../../public/Home/Awards/internationalSchool.png";
import seeAllAwards from "../../../../public/icons/see-all-awards.png";
import { FaArrowsRotate } from "react-icons/fa6";
import Image from "next/image";
import seeMoreMobile from "../../../../public/icons/see-more-mobile.png";
import "../../../../styles/home/components/awardSection/AwardSection.css";
import UttrakhandIcon from "../../../../public/Home/Awards/UTTARAKHAND.jpg";
import Educational from "../../../../public/Home/Awards/EDUCATIONAL.jpg";
import TheTop from "../../../../public/Home/Awards/TheTop.jpg";
import Higher from "../../../../public/Home/Awards/HIGHER.jpg";
function AwardSection() {
  const { isMobile } = useMobile();
  const title =
    "Awards and achievements, gleaming in sight, Honor efforts and perseverance in flight.";
  const subTitle = "(Everybody Loves that)";

  const initialActivities = [
    {
      id: 0,
      image: topBoarding,
      title: "Top Boarding School in Uttarakhand, India",
    },
    {
      id: 1,
      image: bestResidential,
      title: "Best Residential School in Uttarakhand, India",
    },

    {
      id: 2,
      image: UttrakhandIcon,
      title: "Uttrakhand Icon Award",
    },
    {
      id: 3,
      image: Educational,
      title: "Educational Reformer of the Year",
    },
    {
      id: 4,
      image: TheTop,
      title: "The Top School Educator Award",
    },
    {
      id: 5,
      image: Higher,
      title: "Higher Education Leader of ther Year",
    },
    {
      id: 6,
      image: internationalSchool,
      title: "International School Award, India 2019",
    },
  ];

  const [activity, setActivity] = useState(initialActivities);

  const rearrangeActivities = () => {
    const shuffledActivities = [...activity].sort(() => Math.random() - 0.5);
    setActivity(shuffledActivities);
  };

  const handleMoreAwards = () => {
    window.location.href = "/about-tis/awards-achievements/";
  };

  function getPositionClassName(index) {
    const positionClasses = ["topy", "lefty", "bottomy", "righty"];
    return positionClasses[index % positionClasses.length];
  }

  return (
    <div className="Award-section-main-div" id="9">
      <div className="title-div">
        <p1 className="Awardstitle">
          Awards <br />
        </p1>
        <p1 className="title">{title}</p1> <br />
        <p2 className="sub-title">{subTitle}</p2>
      </div>
      <div className="activities-div">
        {activity.slice(0, 3).map((activityItem, index) => (
          <div
            key={activityItem.id}
            className={`activity-div ${getPositionClassName(index)}`}
            style={{
              backgroundImage: `url(${activityItem.image.src})`, // Use the src attribute of the image
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
            onClick={handleMoreAwards}
            src={seeAllAwards}
            className="see-all"
            alt="See All Awards"
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
          onClick={handleMoreAwards}
          src={seeAllAwards}
          className="see-all-mobile"
          alt="See All Activities"
        />
      </div>
    </div>
  );
}

export default AwardSection;
