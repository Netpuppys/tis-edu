import Footer from "@/components/Footer/Footer";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Head from "next/head";
import sportsBannerImg from "../../../public/Banner/sportsBannerImg.webp";
import basketballIcon from "../../../public/sports-achievements/basketball.png";
import skatingIcon from "../../../public/sports-achievements/skating.png";
import skating from "../../../public/sports-achievements/skatingImage.jpg";
import swimmingIcon from "../../../public/sports-achievements/swimmingIcon.jpg";
import volleyballIcon from "../../../public/sports-achievements/volleyball.png";
import squashIcon from "../../../public/sports-achievements/squashIcon.png";
import cricketIcon from "../../../public/sports-achievements/cricket.png";
import badmintonIcon from "../../../public/sports-achievements/badmintonIcon.png";
import shootingIcon from "../../../public/sports-achievements/shootingIcon.png";
import chess from "../../../public/sports-achievements/chess.webp";
import chessIcon from "../../../public/sports-achievements/chessIcon.png";
import taekwandoIcon from "../../../public/sports-achievements/taekwondoIcon.png";
import tableTennisIcon from "../../../public/sports-achievements/tableTennisIcon.png";
import archeryIcon from "../../../public/sports-achievements/archeryIcon.png";
import hockeyIcon from "../../../public/sports-achievements/hockeyIcon.png";
import crossbowIcon from "../../../public/sports-achievements/crossbowIcon.png";
import footballIcon from "../../../public/sports-achievements/footballIcon.png";
import lawnTennisIcon from "../../../public/sports-achievements/lawnTennisIcon.png";
import crossbow from "../../../public/sports-achievements/crossbow.webp";
import archery from "../../../public/pictures/archery.png";
import hockey from "../../../public/pictures/hockey.png";
import swimming from "../../../public/pictures/swimming.png";
import taekwando from "../../../public/pictures/taekwando.png";
import football from "../../../public/pictures/football.png";
import shooting from "../../../public/pictures/shooting.png";
import squash from "../../../public/pictures/squash.png";
import volleyball from "../../../public/pictures/volleyball.png";
import basketball from "../../../public/pictures/basketball.png";
import cricket from "../../../public/pictures/Cricket.png";
import lawnTennis from "../../../public/pictures/lawnTennis.png";
import badminton from "../../../public/pictures/badminton.png";
import tableTennis from "../../../public/pictures/tableTennis.png";
import React from "react";
import Image from "next/image";

export default function SportsAchievements() {
  const data = [
    {
      title: "Basketball",
      icon: basketballIcon,
      image: basketball,
      description: (
        <>
          <strong>Ishan (XII)</strong>
          <ul className="ml-5 list-disc">
            <li>
              Selected for the Uttarakhand State Championship, Haridwar (2024).
            </li>
            <li>
              Under-18 District Basketball Championship: Quarter-finalists.
            </li>
            <li>
              Tula's Under-16 Team: Quarter-finalists in the District Basketball
              Championship.
            </li>
            <li>
              Under-14 Team: Winners of the 3-on-3 District Basketball
              Championship.
            </li>
            <li>
              Tula's Under-16 Team Participation: Represented in the All India
              Asian
            </li>
            <li>
              Challenge Championship at Corvus American Academy, Maharashtra.
            </li>
            <li>
              Under-18 Boys: Participated in the 3-on-3 District Basketball
              Championship.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Skating",
      icon: skatingIcon,
      image: skating,
      description: (
        <>
          Selected for the 62nd Roller Skating All India Nationals:
          <ul className="ml-5 list-disc">
            <li>
              <strong>Kaushal Shaw (Class VIII)</strong>
            </li>
            <li>
              <strong>Prateek Prasad (Class VIII)</strong>
            </li>
            <li>
              <strong>Yohansh Jain (Class VIII)</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Swimming",
      icon: swimmingIcon,
      image: swimming,
      description: (
        <>
          <strong>Heet Jain (VIII)</strong>
          <ul className="ml-5 list-disc">
            <li>Best Swimmer intra murals in junior category.</li>
          </ul>
          <strong>Mahin Surjay (X) </strong>
          <ul className="ml-5 list-disc">
            <li>Best Swimmer intra murals senior category.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Volleyball",
      icon: volleyballIcon,
      image: volleyball,
      description: (
        <>
          Reached semi-finals in the Sahodaya Interschool Championship.
          <br />
          <strong>Team Members:</strong>
          <br /> Shobhit Verma (IX), Amber Mishra (X), Tanmay Jangid (X), Sahil
          Raj (X), Krish Kumar (X), Aviral Shukla (XI), Devvrut Chauchan (XI),
          Ravindra Kuldeep Lamba (XI), Gourav Mallick Choudhury (XII), Rudraksh
          Singhal (XII), Sarthak Shukla (XII).
        </>
      ),
    },
    {
      title: "Squash",
      icon: squashIcon,
      image: squash,
      description: (
        <>
          <strong>Yuvraj Odedra (X)</strong>
          <ul className="ml-5 list-disc">
            <li>
              Participated in the Uttarakhand State Championship, Dehradun.
            </li>
            <li>
              Competed in the Dhunseri Sub-Junior & Junior Nationals
              Championship, Kolkata.
            </li>
          </ul>
          <strong>Harsh Jhawar (XI)</strong>
          <ul className="ml-5 list-disc">
            <li>
              Competed in the Dhunseri Sub-Junior & Junior Nationals
              Championship, Kolkata.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Cricket",
      icon: cricketIcon,
      image: cricket,
      description: (
        <>
          <ul className="ml-5 list-disc">
            <li>
              6th All India U-17 PC Batta Memorial Inter-School Cricket
              Tournament (2024): Semi-finalists.
              <br />
              <strong>Key Players:</strong>
              <br />
              Gaurav Chaudhary (Highest Wicket-Taker), Sahil Raj, Vashu
              Bhardwaj, Kartik Bhardwaj, Vansh Aggarwal.
            </li>
          </ul>
          <ul className="ml-5 list-disc">
            <li>
              1st Late Shri B.S. Rawat Memorial U-15 Inter-School Tournament
              (2024):
              <br />
              Participated with notable performances from Sahil Raj (X), Kartik
              Bhardwaj (IX), and others.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Badminton",
      icon: badmintonIcon,
      image: badminton,
      description: (
        <>
          Under-18 Overall Championship at Woodstock School, Mussoorie: Bronze
          Medal.
          <ul className="ml-5 list-disc">
            <li>
              <strong>Players:</strong>
              <br /> Ekaksha Gupta (X), Nabh Jain (X), Sahil Vats (X), Ujjwal
              Choure (X).
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Shooting",
      icon: shootingIcon,
      image: shooting,
      description: (
        <>
          Uttarakhand State Shooting Championship:
          <br />
          <strong>Gold Medals:</strong>
          <br /> Yash Raj (XI), Priyanshu Kumar (XI), Moksh Aggarwal (IX), Luhen
          (IX), Hitesh Chawla (X), Ishita Singh (VII), Anushka Singh (VI),
          Samridhi Tadyail (VI). Indian Team Trial <br />
          <strong>Qualification:</strong>
          <br /> Ishaan Singh (X), Priyanshu Kumar (XI).
        </>
      ),
    },
    {
      title: "Chess",
      icon: chessIcon,
      image: chess,
      description: (
        <>
          <strong>Inter-School Chess Tournament:</strong>
          <ul className="list-disc ml-5">
            <li>
              Overall Runner-UP across U-12, U-14, U-16, and U-18 categories.
            </li>
            <li>
              <strong>Team Members:</strong>
              <br />
              Justin Irom (IX), Hardik Jain (IX), Vivan Jain (VIII), and others.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Taekwondo",
      icon: taekwandoIcon,
      image: taekwando,
      description: (
        <ul className="list-disc ml-5">
          <li>
            <strong>Gold Medals:</strong>
            <br /> Riddhi Aggarwal (VII), Mohd. Tabish Sakib (IX), Vaibhav Lakra
            (IX), and others.
          </li>
          <li>
            <strong>National Participation:</strong>
            <br /> Vaibhav Lakra (IX).
          </li>
        </ul>
      ),
    },
    {
      title: "Table Tennis",
      icon: tableTennisIcon,
      image: tableTennis,
      description: (
        <ul className="list-disc ml-5">
          <li>
            Tula's Table Tennis players participated in District Table Tennis
            Championship at Cambrian Hall School and 2 players reached Quarter
            Final.
          </li>
          <li>
            Our 12 Table Tennis players participated in District Table Tennis
            Championship held at Cambrian Hall School and 4 players reached
            Quarter Final and 1 reached Semi Final.
          </li>
          <li>
            Ananya Singh of class XII Table Tennis participated in SFA Table
            Tennis Championship held at MP Hall, Parede ground, Dehradun.
          </li>
        </ul>
      ),
    },
    {
      title: "Archery",
      icon: archeryIcon,
      image: archery,
      description: (
        <ul className="list-disc ml-5">
          <li>
            CBSE National Archery Championship: Parth Tongiya (XI), Anushka
            Singh (VI), and others with remarkable performances.
          </li>
        </ul>
      ),
    },
    {
      title: "Hockey",
      icon: hockeyIcon,
      image: hockey,
      description: (
        <ul className="list-disc ml-5">
          <li>
            <strong>State-Level Players:</strong>
            <br /> Shuyash Bansl (XII), Parikshit Mandora (IX),
          </li>
          <li>
            <strong>Other Players:</strong>
            <br /> selected for the state level Parikshit Mandora (Class
            IX),Pratham Negi (Class XI) Partiyaksh Jain (Class VIII), Yogesh
            Kumar (Class XI)
          </li>
        </ul>
      ),
    },
    {
      title: "Crossbow",
      icon: crossbowIcon,
      image: crossbow,
      description: (
        <ul className="list-disc ml-5">
          <li>
            Our Crossbow players got Raking in 16th Europe Crossbow Cup (An
            International Online Crossbow Championship) held at Leelawati Public
            School, Pratap Vihar Ghaziabad, UP. Their rankings were as follows:-
            Chaitanya Dahyalal Thakkar got 14 Rank, Om Sameer Thakkar got 18
            Rank, Yash Raj got 17 Rank, Yash Saini got 22 Rank, Amreen Ansari
            got 20 Rank, Taniya Rai got 16 Rank and Khushi got 21 Rank.
          </li>
          <li>
            Winner of 5th Crossbow Championship held at Alurance, Pondha
            Dehradun. Priyanshu Kumar Won Gold Medal, Nidhi Singh Won Gold
            Medal, Vinayak Agarwal Won Gold Medal, Abhivantika Won Gold Medal,
            Akarsh Shaurya won Silver Medal and Yash Saini won Silver Medal in
            this tournament.
          </li>
        </ul>
      ),
    },
    {
      title: "Football",
      icon: footballIcon,
      image: football,
      description: (
        <ul className="list-disc ml-5">
          <li>
            4th National Garhwal Football Cup Dehradun Winner Team Saud Al
            Rashid Para (XI), Arshan Hussain (XI), Mangalsena Raj Kumar (XI),
            Annual Hasan (XI)
          </li>
          <li>
            5th Rural National Games Puducherry Uttarakhand Football Team Aryash
            Jaiswal (X), Aryan Mishra (X), Parthik Sharma (XII)
          </li>
        </ul>
      ),
    },
    {
      title: "Lawn Tennis",
      icon: lawnTennisIcon,
      image: lawnTennis,
      description: (
        <ul className="list-disc ml-5">
          <li>
            Overall Intra Mural competition: Titan House Winner, Runner-up:
            Spartan House
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apos;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>
      <Navbar />

      <Header
        title={"Sports Achievements"}
        subtitle={"Raising the Bar, One Win at a Time!"}
        headerImg={sportsBannerImg}
        headerImgMobile={sportsBannerImg}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        At Tula’s International School, sports aren’t just games—they’re a way
        of life! Our students continuously push their limits, excelling in
        basketball, skating, swimming, and more. Their achievements reflect our
        commitment to holistic growth, discipline, and excellence in every
        arena.
      </h6>
      <div className="flex flex-col items-center justify-center">
        {data.map((data, index) => (
          <div
            key={index}
            className={`flex w-full h-full items-center px-8 md:px-0 justify-center ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse bg-[#E8E8E8]"
            }`}
          >
            <div
              className={`w-full md:w-[37.5%] pt-8 md:py-14 ${
                index % 2 === 0 ? "md:pl-[12.5%]" : "md:pr-[12.5%]"
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-xl md:rounded-2xl`}
              />
            </div>
            <div
              className={`w-full md:w-[50%] py-8 md:py-14 h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2.5vw,50px)]">
                {data.title}
              </h2>
              <h2
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className={`text-[clamp(10px,4.5vw,30px)] pt-2 md:pt-4 md:text-[clamp(10px,1.3vw,45px)] leading-tight text-black font-normal`}
              >
                {data.description}
              </h2>
            </div>
            <div
              className={`w-[50%] -mb-[10%] md:mb-0 relative z-20 md:w-[12.5%] flex md:items-center md:justify-center ${
                index === 0 && "self-end"
              } ${index === 1 && "self-start"} ${index === 2 && "self-start"} ${
                index === 3 && "self-end"
              } ${index === 4 && "self-end"} ${index === 5 && "self-start"} ${
                index === 6 && "self-start"
              } ${index === 7 && "self-end"} ${index === 8 && "self-end"} ${
                index === 9 && "self-start"
              } ${index === 10 && "self-start"} ${index === 11 && "self-end"} ${
                index === 12 && "self-end"
              } ${index === 13 && "self-start"} ${
                index === 14 && "self-start"
              } ${index === 15 && "self-end"} ${index === 16 && "self-end"} ${
                index === 17 && "self-start"
              } ${index === 18 && "self-start"} ${index === 19 && "self-end"} ${
                index === 20 && "self-end"
              }`}
            >
              <Image
                src={data.icon}
                alt=""
                className={`w-full max-w-[174px] h-full
                              // index % 2 === 0 ? "pl-[12.5%]" : "mr-[12.5%]"
                            `}
              />
            </div>
          </div>
        ))}
      </div>
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        We at TIS focus on the overall development of the children and believe
        that sports are an essential part of a student's life. We have 17 Sports
        (Shooting, Taekwondo, Skating, Squash, Badminton, Archery, Basket Ball,
        Cricket, Football, Horse Riding, Volleyball, Table Tennis, Crossbow,
        Lawn Tennis, Hockey, Swimming & Chess) and 17 coaches come regularly to
        mentor the students in their respective sports. Tulaites also get an
        opportunity to interact with various National and International sports
        personalities on different events and tournaments to guide and motivate
        them. A separate sports time is allotted for Senior and Junior students.
      </h6>
      <Footer />
    </>
  );
}
