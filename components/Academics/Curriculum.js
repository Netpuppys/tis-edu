"use client";
import React from "react";
import Image from "next/image";
import "../../styles/Academics/CBSEAffiliation.css";
import yellowLine from "../../public/pictures/lineImg.png";
import Header from "../globalComponents/Header/Header";
import HeaderCBSEAfiiliationImg from "../../public/Header/CBSEHeader.png";
import HeaderCBSEAfiiliationImgMobile from "../../public/Header/CBSEHeaderMobile.png";
import { useMobile } from "../globalComponents/IsMobileContext";

export default function Curriculum() {
  const { isMobile } = useMobile();
  const bannerText =
    "Our curriculum understands and supports the journey of every child";

  return (
    <>
      <Header
        title={"Curriculum"}
        headerImg={HeaderCBSEAfiiliationImg}
        headerImgMobile={HeaderCBSEAfiiliationImgMobile}
        subtitle={bannerText}
      />
      <div className="pt-8 md:pt-14">
        <h6
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight"
        >
          Welcome to Tula’s International School, Dehradun
          <br />
          <br />A premier co-educational residential school (Grade IV-XII)
          affiliated with CBSE, offering a blend of academic excellence and
          holistic development.
        </h6>
      </div>
      <div className="py-8 md:py-14">
        <h2 className="text-[clamp(10px,6.5vw,50px)] px-4 w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Our <span className="text-[#b90124]">Curriculum</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h6
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-justify md:text-start text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight"
        >
          At TIS, we follow the CBSE course structure. This structure along with
          our curriculum, shaped by top academicians, prioritizes reasoning and
          analytical thinking over rote memorization. Aligned with the latest
          NEP 2023 framework, our syllabus emphasizes a skill-based, inclusive
          education that adapts to diverse learners’ needs.
          <br />
          <br />
          Key Highlights:
          <ul className="ml-5 list-disc">
            <li>
              NEP 2023 Structure: 5+3+3+4 model ensuring a progressive
              transition through foundational, preparatory, intermediate, and
              secondary phases.
            </li>
            <li>
              Innovative Learning: Project-based and art-integrated
              methodologies promote creativity and critical thinking.
            </li>
            <li>
              Advanced Technology: Digital classrooms, VR simulators for
              immersive experiences, and online assessment tools enhance student
              engagement.
            </li>
            <li>
              Experiential Learning: Educational trips, inter-school science
              quests, seminars, and business conclaves foster practical
              knowledge.
            </li>
          </ul>
        </h6>
      </div>
      <div className="pb-8 md:pb-14">
        <h2 className="text-[clamp(10px,6.5vw,50px)] px-4 w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          ACADEMIC CLASSES – <span className="text-[#b90124]">IV to XII</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h6
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-justify md:text-start text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight"
        >
          <ul className="ml-5 list-disc">
            <li>
              Digital Advantage: Every student receives unique digital IDs
              (Extra Marks & Fedena) for personalized online and offline
              learning.
            </li>
            <li>
              Competitive Edge: Olympiads in English, Hindi, Mathematics,
              Science, and Economics bring laurels to our students.
            </li>
            <li>
              IIT-JEE/NEET Prep: Collaborations with Aviral Classes provide
              robust training for aspiring engineers and medical professionals.
            </li>
          </ul>
        </h6>
      </div>
    </>
  );
}
