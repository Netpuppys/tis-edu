"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../globalComponents/Header/Header";
import HeaderSportsImg from "../../public/Header/SportsHeader.png";
import "../../styles/BeyondAcademics/sports.css";
import Archiery from "./Sports/Archiery";
import Cycling from "./Sports/Cycling";
import Hockey from "./Sports/Hockey";
import Swimming from "./Sports/Swimming";
import Taekwondo from "./Sports/Taekwondo";
import Football from "./Sports/Football";
import Shooting from "./Sports/Shooting";
import HorseRiding from "./Sports/HorseRiding";
import Billiards from "./Sports/Billiards";
import Squash from "./Sports/Squash";
import Volleyball from "./Sports/Volleyball";
import Basketball from "./Sports/Basketball";
import Cricket from "./Sports/Cricket";
import LawnTennis from "./Sports/LawnTennis";
import Badminton from "./Sports/Badminton";
import TableTennis from "./Sports/TableTennis";
import Throwball from "./Sports/Throwball";

function Sport() {
  const searchParams = useSearchParams(); // Get search parameters (for hash)
  const locationHash = searchParams.get("#");
  const archieryRef = useRef(null);
  const cyclingRef = useRef(null);
  const hockeyRef = useRef(null);
  const swimmingRef = useRef(null);
  const taekwondoRef = useRef(null);
  const footballRef = useRef(null);
  const shootingRef = useRef(null);
  const horseRidingRef = useRef(null);
  const billiardsRef = useRef(null);
  const squashRef = useRef(null);
  const volleyballRef = useRef(null);
  const basketballRef = useRef(null);
  const cricketRef = useRef(null);
  const lawnTennisRef = useRef(null);
  const badmintonRef = useRef(null);
  const tableTennisRef = useRef(null);
  const throwballRef = useRef(null);

  const refs = useMemo(
    () => ({
      Archery: archieryRef,
      Cycling: cyclingRef,
      Hockey: hockeyRef,
      Swimming: swimmingRef,
      Taekwondo: taekwondoRef,
      Football: footballRef,
      "Shooting Range": shootingRef,
      "Horse Riding": horseRidingRef,
      Billiards: billiardsRef,
      Squash: squashRef,
      Volleyball: volleyballRef,
      Basketball: basketballRef,
      Cricket: cricketRef,
      "Lawn Tennis": lawnTennisRef,
      Badminton: badmintonRef,
      "Table Tennis": tableTennisRef,
      Throwball: throwballRef,
    }),
    []
  );

  useEffect(() => {
    if (locationHash && refs[locationHash]) {
      refs[locationHash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationHash, refs]);

  return (
    <>
      <Header
        title={"Sports"}
        subtitle={
          "Sports instill discipline, teamwork, and well-being in students' lives."
        }
        headerImg={HeaderSportsImg}
      />
      <div className="sports-main">
        <p className="sports-paragraph">
          As a Sports Boarding school in Dehradun, Tula’s offers its students
          the best sporting infrastructure of any educational institution in
          Dehradun. It has a fully fledged program to develop students into
          professional athletes who can make their mark in sporting events
          across the globe. Among the most sought-after sports at TIS are
          volleyball, cycling and horse riding.
        </p>
        <div ref={archieryRef}>
          <Archiery />
        </div>
        <div ref={cyclingRef}>
          <Cycling />
        </div>
        <div ref={hockeyRef}>
          <Hockey />
        </div>
        <div ref={swimmingRef}>
          <Swimming />
        </div>
        <div ref={taekwondoRef}>
          <Taekwondo />
        </div>
        <div ref={footballRef}>
          <Football />
        </div>
        <div ref={shootingRef}>
          <Shooting />
        </div>
        <div ref={horseRidingRef}>
          <HorseRiding />
        </div>
        <div ref={billiardsRef}>
          <Billiards />
        </div>
        <div ref={squashRef}>
          <Squash />
        </div>
        <div ref={volleyballRef}>
          <Volleyball />
        </div>
        <div ref={basketballRef}>
          <Basketball />
        </div>
        <div ref={cricketRef}>
          <Cricket />
        </div>
        <div ref={lawnTennisRef}>
          <LawnTennis />
        </div>
        <div ref={badmintonRef}>
          <Badminton />
        </div>
        <div ref={tableTennisRef}>
          <TableTennis />
        </div>
        <div ref={throwballRef}>
          <Throwball />
        </div>
      </div>
    </>
  );
}

export default Sport;
