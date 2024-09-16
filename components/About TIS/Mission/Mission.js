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
    "Making students ready for success—our mission. A world-class education, our vision for excellence.";
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
              <ul>
                <li>
                  To become a centre of excellence and emerge as a leader among
                  the best educational institutions.
                </li>
                <li>
                  To foster personal growth and development of the individual to
                  transform the society through service.
                </li>
                <li>
                  To create and disseminate knowledge by developing the
                  intellect of our students with enthusiasm and excellence,
                  setting TIS apart from the rest of the institutions.
                </li>
                <li>
                  To create future-ready global citizens with great character
                  who will be dedicated to uphold the values that define our
                  great country.
                </li>
              </ul>
            </div>
            <Image className="yellowLinee" src={yellowLine} alt="" />
            <div>
              <h2>Our Mission</h2>
              <ul>
                <li>
                  Our mission is to train new generations in order to produce
                  who will excel in academics.{" "}
                </li>
                <li>
                  To develop as a benchmark institution in Education sector.{" "}
                </li>
                <li>
                  To offer well-rounded academic excellence through quality
                  education and learning experience to our students.{" "}
                </li>
                <li>We believe in nurturing students beyond academics. </li>
                <li>
                  To create a future generation which is dedicated to serving
                  humanity.
                </li>
              </ul>
            </div>
            <Image className="yellowLinee" src={yellowLine} alt="" />
            <div>
              <h2>Community Values</h2>
              <h3>Equity:</h3>
              <ul>
                TIS campus provides a learning environment in which our students
                from diverse places can achieve their highest potential. We
                believe that every student has the capability to learn provided
                they are given the chance to do so.
              </ul>
              <h3>Engagement:</h3>
              <ul>
                We believe that students learn when they are engaged in a
                student-centric environment and have a well-designed curriculum
                which emphasizes hands-on learning.
                <br />
                We have highly qualified and experienced faculty to provide the
                best knowledge to our students Among other schools, Tula’s is
                the only top boarding school in Dehradun that pays equal
                attention to civilizational heritage while keeping pace with
                modern trends in the age of the Internet.
              </ul>
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
