"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/About Tis/Mission.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import Header from "../../globalComponents/Header/Header";
import headerMissionImg from "../../../public/Header/VisionHeader.jpg";
import headerMissionMobileImg from "../../../public/Header/VisionHeaderMobile.jpg";
import missionVision from "../../../public/vision/visionDesktop.png";
import yellowLine from "../../../public/vision/yellowLine.png";
export default function Mission() {
  const { isMobile } = useMobile();
  const subTitle =
    "At TIS, our mission inspires purpose, and our bold vision charts the path to limitless possibilities for every student";
  return (
    <>
      <Header
        title={"Mission & Vision"}
        subtitle={subTitle}
        headerImg={isMobile ? headerMissionMobileImg : headerMissionImg}
      />
      <div className="mission-desc">
        <p className="mission-desc-p">
          TIS stands out as the best boarding school in India where students
          discover their educational aspirations independently from home. We
          consistently top the list of not just the top 10 boarding schools in
          Dehradun but also the top CBSE schools in Dehradun.
        </p>

        <div className="below-content">
          {!isMobile && <Image src={missionVision} alt="" />}
          <div className="content-vision">
            <div>
              <h2>Our Vision</h2>
              To become a center of excellence and a leader among top
              educational institutions. At TIS, we aim to:
              <br />
              <ul className="ml-5 list-disc">
                <li>
                  Support personal growth and development to make a positive
                  impact on society.
                </li>
                <li>
                  Encourage curiosity and enthusiasm for learning, making TIS
                  stand out.
                </li>
                <li>
                  Prepare global citizens with strong character who uphold the
                  values of our nation.
                </li>
              </ul>
            </div>
            <Image className="yellowLinee" src={yellowLine} alt="" />
            <div>
              <h2>Our Mission</h2>
              Our mission is to help students excel academically and grow as
              individuals. TIS is dedicated to:
              <ul className="ml-5 list-disc">
                <li>Becoming a benchmark institution in education.</li>
                <li>
                  Providing quality education and enriching learning
                  experiences.
                </li>
                <li>
                  Supporting students’ personal and social growth beyond
                  academics.
                </li>
                <li>
                  Preparing a future generation committed to serving humanity.
                </li>
              </ul>
            </div>
            <Image className="yellowLinee" src={yellowLine} alt="" />
            <div>
              <h2>Community Values</h2>
              <h3>Equity:</h3>
              TIS offers a supportive environment where students from all
              backgrounds can reach their potential. We believe every student
              can succeed with the right opportunities.
              <br />
              <br />
              <h3>Engagement:</h3>
              We create a student-focused environment with a hands-on curriculum
              that encourages active learning. Our experienced faculty ensures
              students get the best guidance.
              <br />
              <br />
              At TIS, we blend tradition with modern trends, making us the top
              boarding school in Dehradun and a leader in holistic education.
            </div>
            <Image className="yellowLinee" src={yellowLine} alt="" />
          </div>
          {isMobile && (
            <Image src={missionVision} alt="" className="missionVision" />
          )}
        </div>
      </div>
    </>
  );
}
