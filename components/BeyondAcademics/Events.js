"use client";
import Header from "../globalComponents/Header/Header";
import Image from "next/image";
import HeaderCelebrationsImg from "../../public/Banner/celebrations.webp";
import HeaderCelebrationsImgMobile from "../../public/Banner/celebrationsMobile.webp";
import React from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import bookwormIcon from "../../public/Clubs/bookwormIcon.png";
import pootersWheelIcon from "../../public/Clubs/pootersWheelIcon.png";
import RagaRocksIcon from "../../public/Clubs/RagaRocksIcon.png";
import vibgyorIcon from "../../public/Clubs/vibgyorIcon.png";
import aashirwad from "../../public/Event/ashirwad.webp";
import dahiHandi from "../../public/Event/dahiHandi.webp";
import InterHouse from "../../public/Event/folkDance.webp";
import ChaiPeCharcha from "../../public/Event/chaiPeCharcha.webp";
import HouseFeast from "../../public/Event/houseFeast.webp";
import Dramatics from "../../public/Event/dramitics.webp";
import Chandaryaan from "../../public/Event/chandrayaan.webp";
import FacultySkill from "../../public/Event/facultySkillDev.webp";
import Gaushala from "../../public/Event/gauShalaVisit.webp";

export default function Events() {
  const { isMobile } = useMobile();
  const data = [
    {
      title: "Ashirwad Ceremony",
      icon: bookwormIcon,
      image: aashirwad,
      description: (
        <>
          The one who seeks blessings from Maa Saraswati and elders, is blessed
          with intelligence and knowledge. TIS solemnised Ashirwad Ceremony for
          classes 10th and 12th. The underlying aim of the ceremony was to seek
          blessings from the supreme for the forthcoming Board Examinations and
          to motivate the students to come up with flying colours. The ceremony
          commenced with the worship of Mata Saraswati followed by the prayer
          Humko Shakti Dena. The students were given the traditional Tilak,
          stationery kit and sweets as a mark of Good Luck. The programme
          concluded with the Chairman sir's address.
        </>
      ),
    },
    {
      title: "Dahi Handi Celebration",
      icon: pootersWheelIcon,
      image: dahiHandi,
      description: (
        <>
          The vibrant and lively festival of Janmashtami, celebrating the birth
          of Lord Shree Krishna, was marked with great fervour and enthusiasm at
          TIS, through the traditional Dahi Handi event. Students and staff came
          together to witness the thrilling event. The event lasted for an hour
          where students from all houses participated, showcasing their
          strength, coordination and teamwork.
          <p className="py-1"></p>
          The event was not only about competition but also about unity and
          camaraderie among the students. Throughout the event, the safety of
          all participants was of utmost importance. Mattresses were
          strategically placed around the formation to ensure the well-being of
          every participant, reflecting the school’s commitment to the welfare
          of students.
        </>
      ),
    },
    {
      title: "Inter-House Folk Dance Competition",
      icon: vibgyorIcon,
      image: InterHouse,
      description: (
        <>
          The Inter-House folk dance competition showcased dance forms from
          different parts and cultures of our country and they did it with
          immense dedication. The competition was held to highlight the diverse
          culture and traditions of rich country INDIA. It was judged by a panel
          of esteemed judges and choreographers, Mr, Naresh Shah, Ms. Isha
          Thakur and Mr. Michael John.
          <p className="py-1"></p>
          The students gave us outstanding performances and definitely made the
          choice for the judges difficult. Congratulations to the winners and
          participants. Music department keeps it up always.
        </>
      ),
    },
    {
      title: "Chai Pe Charcha",
      icon: RagaRocksIcon,
      image: ChaiPeCharcha,
      description: (
        <>
          The 34 cabinet members of Tula’s International School availed an
          opportunity to interact with director Mr Raunak Jain at semi formal
          platform to share their ideas and problems vis a vis academic session
          23-24. The Cabinet members exuded confidence and promised to fulfil
          their responsibilities under the guidance and protocol of school
          policies. The icing on the cake was the sumptuous snacks served with
          cold beverages. With the director’s inspiring words and all
          authorities in attendance, the high tea concluded with a big smile
          written large on students' faces.
        </>
      ),
    },
    {
      title: "House Feast",
      icon: bookwormIcon,
      image: HouseFeast,
      description: (
        <>
          The much awaited house fees took place at various venues. The event
          was a grand success and saw the participation of all the houses. The
          feast provided an opportunity for the members to come together to
          celebrate their achievements while also fostering the spirit of
          teamwork and cooperation. Highlights of the feast - Ribbon cutting
          ceremony, Tilak ceremony, HM Sir speech, Complements by juniors,
          games, music, stand up comedy, 12th batch students speech, food and
          cultural performances, etc. It was a vibrant evening and left many
          memorable moments.
        </>
      ),
    },
    {
      title: "Dramatics Competition",
      icon: pootersWheelIcon,
      image: Dramatics,
      description: (
        <>
          The inter house drama competition held brought the acting skills of
          our talented students to the LimeLight. The panel of judges included
          Mr. Ravi Shah and Mr. Mukesh Kumar, both renowned actors of the
          Garhwali film industry. Everyone witnessed the shared effort and
          dedication put into each and every play.
          <p className="py-1"></p>
          After all the participants presented their plethora of extraordinary
          talents, the results were announced to the audience full of
          anticipation. As the second runners up were the Spartans. The first
          runner up were the Titans. Finally the place was seized by the
          Athenas. Congratulations to all the actors.
        </>
      ),
    },
    {
      title: "Chandrayaan by VR.",
      icon: vibgyorIcon,
      image: Chandaryaan,
      description: (
        <>
          TIS heads of departments attended a pilot workshop presented by team
          of Mr. Lalit Chopra and Mr Priyank Agarwal, where practical virtual
          visit sessions were conducted in which teachers and students had a
          real virtual experience of landing of Chandrayaan 1 and 2 and also a
          physiology of human digestive system. The school is in the process of
          arranging a Virtual lab visit for its enthusiastic Science students in
          future.
        </>
      ),
    },
    {
      title: "Faculty Skill Development",
      image: FacultySkill,
      icon: RagaRocksIcon,
      description: (
        <>
          Basic Mountaineering course at NIMAS, Dirang, a journey that started
          as a course and ended as a lifetime experience! Imagine yourself in
          the middle of Huge mountains with a bunch of co-mountaineers under the
          guidance of highly experienced Army personnel to train you. One can
          understand the amount of discipline and tough life it would come with.
          For me it was a roller coaster ride of emotions, beginning with the
          mindset that it will be a piece of cake for me to finish the course
          and I will have fun there. I started my training very
          enthusiastically. Although it was tougher than I thought it would be,
          it was all achievable in the first preparatory week but as we moved up
          from the base camp and started with the actual training truth bombs
          hit hard. Once stamina, endurance and more importantly the will power!
          We were at 10500 feet high, trekking over 15 to 20 kgs rucksacks on
          our shoulders.
        </>
      ),
    },
    {
      title: "Gaushala Visit at Rispana",
      icon: bookwormIcon,
      image: Gaushala,
      description: (
        <>
          TIS organised a visit to Gaushala at Rispana, Dehradun for students
          under IAYP program. This set off after their Academic session at 11:30
          a.m., and reaching the intended destination at around 1:00 p.m. The
          place is home to 25 cows with generating proximity 60 litres of milk
          everyday. More than half of which goes to poor people who cannot
          afford such necessities. The students got to know about what type of
          water is said to the cows and how they are prepared. Students got the
          opportunity to feed the cattle freshly prepared for order and water.
          It was indeed an exciting hands-on experience for all.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Celebrations"}
        subtitle={
          "Unforgettable school events help in cultivating talent and building bonds."
        }
        headerImg={HeaderCelebrationsImg}
        headerImgMobile={HeaderCelebrationsImgMobile}
      />
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
              className={`w-full md:w-[37.5%] pt-8 md:py-20 ${
                index % 2 === 0 ? "md:pl-[12.5%]" : "md:pr-[12.5%]"
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-3xl `}
              />
            </div>
            <div
              className={`w-full md:w-[50%] py-8 md:py-20 h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)]">
                {data.title}
              </h2>
              <h2
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className={`text-[clamp(15px,4.5vw,30px)] pt-4 md:pt-8 md:text-[clamp(18px,1.3vw,45px)] text-black font-normal`}
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
              } ${index === 7 && "self-end"} ${index === 8 && "self-end"}`}
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
    </>
  );
}
