"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderClubsImg from "../../public/Header/ClubsHeader.png";
import "../../styles/BeyondAcademics/sports.css";
import PottersWheel from "./ClubsAndSocieties/PottersWheel";
import RagaRocks from "./ClubsAndSocieties/RagaRocks";
import TheCircuit from "./ClubsAndSocieties/TheCircuit";
import KhanaKhazana from "./ClubsAndSocieties/KhanaKhazana";
import Vibgyor from "./ClubsAndSocieties/Vibgyor";
import Shutterbug from "./ClubsAndSocieties/Shutterbug";
import Gulmohar from "./ClubsAndSocieties/Gulmohar";
import Flamingo from "./ClubsAndSocieties/Flamingo";
import Bookworm from "./ClubsAndSocieties/Bookworm";
export default function ClubAndSocieties() {
  return (
    <>
      <Header
        title={"Clubs And Societies"}
        subtitle={
          "Clubs and societies enrich the students with skills & a passion for friendships."
        }
        headerImg={HeaderClubsImg}
      />
      <p className="sports-paragraph">
        The Tula’s International family strives to create a positive environment
        where all students are challenged and inspired to achieve their
        potential. Academics and activities form the backbone of TIS. As a
        result, the school has been ranked among the top boarding schools in
        Dehradun.
        <br />
        <br />
        We believe for the Clubs to function effectively, student participation
        is a must. The more students form and manage the various committees and
        clubs the better it bodes for their overall development. These Clubs and
        Committees gives them a platform to discover and bring to the fore their
        hidden talents, so essential for an all-round education.
      </p>

      <Bookworm />
      <PottersWheel />
      <RagaRocks />
      <TheCircuit />
      <KhanaKhazana />
      <Vibgyor />
      <Shutterbug />
      <Gulmohar />
      <Flamingo />
    </>
  );
}
