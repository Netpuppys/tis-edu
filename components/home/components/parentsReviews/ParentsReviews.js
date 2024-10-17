"use client";

import React, { useState } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import invCommaIcon from "../../../../public/icons/commas.svg";
import "../../../../styles/home/components/parentsReviews/ParentsReviews.css";
import previousIcon from "../../../../public/pictures/previous.png";
import nextIcon from "../../../../public/pictures/next.png";
import Link from "next/link";
import Image from "next/image";
import parent from "../../../../public/pictures/parents.png";
function ParentsReviews() {
  const { isMobile } = useMobile();
  const [selectedParent, setSelectedParent] = useState(0);

  const parents = [
    {
      id: 0,
      icon: previousIcon,
      video: {
        videoSrc: "",
      },
      path: "https://youtube.com/shorts/p85D6uf0HzU?feature=shared",
    },
    {
      id: 1,
      icon: nextIcon,
      video: {
        videoSrc:
          "https://www.youtube.com/embed/eEzD-Y97ges?si=uk7TgKroBChsckww",
      },
      path: "https://youtube.com/shorts/p85D6uf0HzU?feature=shared",
    },
  ];

  const reviews = [
    "What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.",
    "Review 2",
  ];

  const handleParentClick = (index) => {
    setSelectedParent(index);
  };

  // const getVideoSrc = (index) => {
  //   const videoSrc = parents[index].video.videoSrc;
  //   return videoSrc;
  // };

  return (
    <div className="parent-reviews-main-div" id="11">
      <div className="left-div">
        <h2 className="title">
          From The <br />
          <span>Parents</span>
        </h2>
        <div className="divider-div">
          <Image src={invCommaIcon} className="divider-comma" alt="icon" />
          <div className="divider"></div>
        </div>
        {!isMobile && (
          <p className="text">
            {selectedParent !== null && reviews[selectedParent]}
          </p>
        )}
      </div>

      {!isMobile && (
        <div className="right-div">
          {/* <Image
            className="previousIcon"
            src={previousIcon}
            onClick={() => handleParentClick(0)}
            alt="Previous"
          />
          <Image
            className="nextIcon"
            src={nextIcon}
            onClick={() => handleParentClick(1)}
            alt="Next"
          /> */}
          <div className="background">
            <a href={parents[selectedParent].path}>
              <Image src={parent} alt="" />
            </a>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="Mobile-div-video">
          <Image
            className="previousIcon"
            src={previousIcon}
            onClick={() => handleParentClick(0)}
            alt="Previous"
          />
          <Image
            className="nextIcon"
            src={nextIcon}
            onClick={() => handleParentClick(1)}
            alt="Next"
          />
          <div className="background-red-div">
            <Image src={parent} alt="" />
          </div>

          <p className="text">
            {selectedParent !== null && reviews[selectedParent]}
          </p>
        </div>
      )}
    </div>
  );
}

export default ParentsReviews;
