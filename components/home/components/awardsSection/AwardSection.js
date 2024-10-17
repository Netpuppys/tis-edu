import React, { useEffect, useState } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import seeMoreIcon from "../../../../public/icons/see-more-text.png";
import topBoarding from "../../../../public/Home/Awards/TopBoarding.jpg";
import bestResidential from "../../../../public/Home/Awards/BestResidential.jpg";
import internationalSchool from "../../../../public/Home/Awards/internationalSchool.png";
import seeAllAwards from "../../../../public/icons/see-all-awards.png";
import { FaArrowsRotate } from "react-icons/fa6";
import Image from "next/image";
import "../../../../styles/home/components/awardSection/AwardSection.css";
import UttrakhandIcon from "../../../../public/Home/Awards/UTTARAKHAND.jpg";
import Educational from "../../../../public/Home/Awards/EDUCATIONAL.jpg";
import TheTop from "../../../../public/Home/Awards/TheTop.jpg";
import Higher from "../../../../public/Home/Awards/HIGHER.jpg";
function AwardSection() {
  const { isMobile } = useMobile();
  const title =
    "We believe in celebrating the hard work and perseverance of the best!";
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
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(rearrangeActivities, 5000); // Rearrange every 5 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isMobile, activity]);

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
        <p className="Awardstitle">Awards</p>

        <p className="title">{title}</p>

        <p className="sub-title">{subTitle}</p>
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
              <div
                className="card-description"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p
                  style={{ alignItems: "flex-start", alignSelf: "center" }}
                  className="title"
                >
                  {activityItem.title}
                </p>
              </div>
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
        <button
          onClick={handleMoreAwards}
          className="see-more-mobile-button"
          alt=""
        >
          See All Awards
        </button>
      </div>
    </div>
  );
}

export default AwardSection;
