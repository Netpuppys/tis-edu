"use client";
import React from "react";
import Image from "next/image";
import HeaderFacilityImg from "../../../public/Header/FacilitiesHeader.jpg";
import HeaderFacilityImgMobile from "../../../public/Header/FacilitiesHeaderMobile.jpg";
import ambulance from "../../../public/boardingLife/ambulance.png";
import safety from "../../../public/boardingLife/safety.png";
import sports from "../../../public/boardingLife/sports.png";
import clubs from "../../../public/boardingLife/clubs.png";
import classroom from "../../../public/boardingLife/classroom.png";
import healthy from "../../../public/boardingLife/healthy.png";
import technically from "../../../public/boardingLife/technically.png";
import unisex from "../../../public/boardingLife/unisex.png";
import career from "../../../public/boardingLife/career.png";
import personal from "../../../public/boardingLife/personal.png";
import lab from "../../../public/boardingLife/lab.png";
import library from "../../../public/boardingLife/library.png";
import hostel from "../../../public/boardingLife/hostel.png";
import isolation from "../../../public/boardingLife/isolation.png";
import digital from "../../../public/boardingLife/digital.png";
import composite from "../../../public/boardingLife/composite.png";
import Header from "../../globalComponents/Header/Header";
import { useMobile } from "../../globalComponents/IsMobileContext";
function Facility() {
  const { isMobile } = useMobile();
  const BannerText =
    "At Tula's, students experience a safe, supportive, and dynamic environment that encourages both academic and personal development. The campus is equipped with everything needed to ensure their overall well-being and success.";
  const cards = [
    {
      icon: ambulance,
      title: "24/7 Ambulance Service",
      description: "Available on campus for emergencies.",
    },
    {
      icon: safety,
      title: "Safety & Security",
      description: "24/7 CCTV surveillance placed strategically.",
    },
    {
      icon: sports,
      title: "Sports Activities",
      description: "16+ world-class indoor and outdoor sports on campus.",
    },
    {
      icon: clubs,
      title: "Clubs & Societies",
      description: "Platform to discover and nurture hidden talents.",
    },
    {
      icon: classroom,
      title: "Modern Classrooms",
      description: "Well-equipped with ventilated, comfortable furniture.",
    },
    {
      icon: healthy,
      title: "Healthy Multi-Cuisine Mess",
      description: "Nutritious vegetarian meals available.",
    },
    {
      icon: technically,
      title: "Technically Sound Workstations",
      description: "High-tech workstations for each subject.",
    },
    {
      icon: unisex,
      title: "Unisex Salon",
      description: "Exclusive salon services for students.",
    },
    {
      icon: career,
      title: "Career Counseling",
      description: "Career guidance and counseling services.",
    },
    {
      icon: personal,
      title: "Personal Counseling",
      description: "Addressing teenage issues and boarding school challenges.",
    },
    {
      icon: lab,
      title: "Laboratories",
      description: "Well-equipped Biology, Physics, Chemistry, and IT labs.",
    },
    {
      icon: library,
      title: "Library",
      description:
        "A spacious library with 20,000+ books and seating for over 100 students.",
    },
    {
      icon: hostel,
      title: "Hostel",
      description:
        "Separate, well-equipped boys' and girls' hostel facilities.",
    },
    {
      icon: isolation,
      title: "In-house Isolation Room",
      description: "With quarantine facilities for health issues.",
    },
    {
      icon: digital,
      title: "Digital Workstations",
      description:
        "State-of-the-art interactive workstations for every subject.",
    },
    {
      icon: composite,
      title: "Composite Lab (Einstein Lab)",
      description: "Integrated classroom and laboratory for practical learning",
    },
  ];

  return (
    <>
      <Header
        title={"Facilities"}
        headerImg={HeaderFacilityImg}
        headerImgMobile={HeaderFacilityImgMobile}
        subtitle={BannerText}
      />
      <div className="py-8 md:py-20 w-[90%] md:w-[80%] mx-auto flex flex-wrap gap-4 justify-center">
        {cards.map((cards, index) => (
          <div
            key={index}
            className="w-full group relative md:w-[calc(33.33%-16px)] aspect-[1.5/1] flex flex-col gap-2 cardsFacilities items-center px-[2%] overflow-hidden rounded-xl"
          >
            <div className="absolute z-10 bg-[#b90124] w-full h-full transition-all ease-in duration-300 translate-y-full group-hover:translate-y-0"></div>
            <div className="absolute z-20 transition-all ease-in duration-300 bottom-10 group-hover:top-10">
              <Image
                src={cards.icon}
                alt=""
                className="w-[95px] h-fit mx-auto"
              />
              <h3 className="font-[TTChocolatesBold] w-fit mx-auto text-[clamp(20px,1.3vw,50px)] text-white text-center border-b border-white">
                {cards.title}
              </h3>
              <h3
                className="hidden group-hover:flex w-fit px-4 mx-auto text-[clamp(16px,1.2vw,50px)] text-white text-center"
                style={{
                  fontFamily: "TT Chocolates",
                }}
              >
                {cards.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Facility;
