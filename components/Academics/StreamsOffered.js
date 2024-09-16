"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderStreamsImg from "../../public/Header/StreamsHeader.png";
import streams from "../../public/pictures/streams.png";
import { useMobile } from "../../components/globalComponents/IsMobileContext";
import streamsMobile from "../../public/pictures/streamsMobile.png";
import "../../styles/Academics/StreamsOffered.css";

export default function StreamOffered() {
  const { isMobile } = useMobile();
  const bannerText =
    "Explore various career paths to discover your passion and shape a fulfilling professional journey.";

  return (
    <>
      <Header
        title={"Streams Offered"}
        subtitle={bannerText}
        headerImg={HeaderStreamsImg}
      />
      <div className="main-streams">
        <p className="text-stream">
          Students must choose one of the three streams
          <br />
          - Science, Commerce or Humanities. English is the compulsory subject
          while other subjects are elective.
          <br />
          <br />
          The students are required to select elective subjects as per the
          stream. TIS provides a wide range of options for the
          students of grade XI.
        </p>

        {!isMobile && <Image src={streams} alt="" className="streams" />}
        {isMobile && <Image src={streamsMobile} alt="" className="streams" />}
      </div>
    </>
  );
}
