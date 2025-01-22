"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderStreamsImg from "../../public/Banner/streamsOffered.webp";
import HeaderStreamsImgMobile from "../../public/Banner/streamsOfferedMobile.webp";
import streams from "../../public/pictures/streams.png";
import { useMobile } from "../../components/globalComponents/IsMobileContext";
import streamsMobile from "../../public/pictures/streamsMobile.png";
import "../../styles/Academics/StreamsOffered.css";

export default function StreamOffered() {
  const { isMobile } = useMobile();
  const bannerText =
    "Try different careers to find your passion and build a fulfilling career";

  return (
    <>
      <Header
        title={"Streams Offered"}
        subtitle={bannerText}
        headerImg={HeaderStreamsImg}
        headerImgMobile={HeaderStreamsImgMobile}
      />
      <div className="main-streams">
        <div className="text-stream">
          At TIS, we empower students to explore their passions and carve their
          future by offering three streams of study in Grade XI. Each stream is
          designed to cater to diverse interests and career aspirations. <br />
          <br />
          Streams Offered:
          <ul className="ml-5 list-disc">
            <li>Science</li>
            <li>Commerce</li>
            <li>Humanities</li>
          </ul>
          <br />
          Key Points:
          <ul className="ml-5 list-disc">
            <li>English is a compulsory subject for all students.</li>
            <li>Elective subjects are chosen based on the selected stream. </li>
            <li>
              TIS provides a diverse range of electives to match students'
              interests and career aspirations
            </li>
          </ul>
        </div>

        {!isMobile && <Image src={streams} alt="" className="streams" />}
        {isMobile && <Image src={streamsMobile} alt="" className="streams" />}
      </div>
    </>
  );
}
