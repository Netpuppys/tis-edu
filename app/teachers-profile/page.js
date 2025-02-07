import Footer from "@/components/Footer/Footer";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import AakashdeepSinghRawat from "../../public/teachers/AakashdeepSinghRawat.webp";
import AbhishekKumar from "../../public/teachers/AbhishekKumar.webp";
import AnkitSemwal from "../../public/teachers/AnkitSemwal.webp";
import BhupenderSingh from "../../public/teachers/BhupenderSingh.webp";
import BijoyHalder from "../../public/teachers/BijoyHalder.webp";
import ChandiniNaithani from "../../public/teachers/ChandiniNaithani.webp";
import DebolinaDey from "../../public/teachers/DebolinaDey.webp";
import Deepak from "../../public/teachers/Deepak.webp";
import EnochMassey from "../../public/teachers/EnochMassey.webp";
import Jasvinder from "../../public/teachers/Jasvinder.webp";
import JoyMashi from "../../public/teachers/JoyMashi.webp";
import NeerajSharma from "../../public/teachers/NeerajSharma.webp";
import NehaJoshi from "../../public/teachers/NehaJoshi.webp";
import RavinderRaheja from "../../public/teachers/RavinderRaheja.webp";
import SandeepDutta from "../../public/teachers/SandeepDutta.webp";
import SanjaySharma from "../../public/teachers/SanjaySharma.webp";
import SiddharthSharma from "../../public/teachers/SiddharthSharma.webp";
import SwatiThapa from "../../public/teachers/SwatiThapa.webp";
import VirenderAnand from "../../public/teachers/VirenderAnand.webp";
import bannerImg from "../../public/Banner/teachers.webp";
import Image from "next/image";
import yellowLine from "../../public/pictures/lineImg.png";
import React from "react";

function TeachersProfile() {
  const teacherProfile = [
    {
      name: "Sandeep Dutta",
      image: SandeepDutta,
      designation: "Dean of Activity",
    },
    {
      name: "Sanjay Sharma",
      image: SanjaySharma,
      designation: "Head of Academics & HOD Humanities",
    },
    {
      name: "Jasvinder",
      image: Jasvinder,
      designation: "Dean of Publications & School Relations",
    },
    {
      name: "Ravinder Raheja",
      image: RavinderRaheja,
      designation: "PGT- English",
    },
    {
      name: "Bhupender Singh",
      image: BhupenderSingh,
      designation: "PGT Economics",
    },
    {
      name: "Debolina Dey",
      image: DebolinaDey,
      designation: "Middle School Head",
    },
    {
      name: "Virender Anand",
      image: VirenderAnand,
      designation: "PGT- Accountancy",
    },
    {
      name: "Neeraj Sharma",
      image: NeerajSharma,
      designation: "PGT- Geography",
    },
    {
      name: "Enoch Massey",
      image: EnochMassey,
      designation: "Music Teacher",
    },
    {
      name: "Abhishek Kumar",
      image: AbhishekKumar,
      designation: "Head of Boarding",
    },
    {
      name: "Neha Joshi",
      image: NehaJoshi,
      designation: "TGT- Hindi",
    },
    {
      name: "Chandni Naithani",
      image: ChandiniNaithani,
      designation: "TGT- Mathematics",
    },
    {
      name: "Joy Mashi",
      image: JoyMashi,
      designation: "Music Teacher",
    },
    {
      name: "Swati Thapa",
      image: SwatiThapa,
      designation: "PGT Psychology",
    },
    {
      name: "Ankit Semwal",
      image: AnkitSemwal,
      designation: "PGT- Physics",
    },
    {
      name: "Bijoy Halder",
      image: BijoyHalder,
      designation: "Visual Art Teacher",
    },
    {
      name: "Siddharth Sharma",
      image: SiddharthSharma,
      designation: "PGT Political Science",
    },
    {
      name: "Deepak Rawat",
      image: Deepak,
      designation: "PGT Physical Education",
    },
    {
      name: "Aakashdeep Rawat",
      image: AakashdeepSinghRawat,
      designation: "PGT- Informatics Practices",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header
        title={"Teachers Profile"}
        headerImg={bannerImg}
        headerImgMobile={bannerImg}
      />
      <div className="py-8 md:py-[3%]">
        <h2 className="text-[30px] px-4 md:px-0 w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] leading-tight text-[#b90124] text-center font-[TTChocolates]">
          Meet The Faculty Team
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-4 md:px-0 text-center mt-4 md:mt-8 text-[clamp(15px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          Meet our diverse team of World Class Professors
        </h2>
      </div>
      <div className="flex pb-8 md:pb-[3%] w-[calc(100%-8px)] md:w-[80%] mx-auto flex-wrap gap-2 md:gap-8 items-center justify-center">
        {teacherProfile.map((teachers, index) => (
          <div
            key={index}
            className="border-2 border-[#b90124] rounded-xl overflow-hidden w-[calc(50%-0.5rem)] md:w-[calc(25%-2rem)] relative"
          >
            <Image src={teachers.image} alt="" className="w-full" />
            <div
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="absolute z-20 bottom-[5%] p-2 md:p-[4%] rounded-lg bg-white border border-[#b90124] w-[80%] left-[10%]"
            >
              <h2 className="text-[clamp(8px,3.5vw,50px)] w-full md:text-[clamp(10px,1.3vw,50px)] leading-tight text-[#b90124] text-center font-[TTChocolates]">
                {teachers.name}
              </h2>
              <h2 className="text-[clamp(6px,3vw,50px)] md:text-[clamp(10px,1vw,50px)] leading-tight text-[#2F2F2F] text-center">
                {teachers.designation}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default TeachersProfile;
