"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import "../../styles/Academics/pedagogy.css";
import HeaderPedagogyImg from "../../public/Header/PedagogyHeader.png";
import yellowLine from "../../public/pictures/lineImg.png";
import { useMobile } from "../globalComponents/IsMobileContext";
import seeAllActivities from "../../public/icons/see-all-activities.png";
const Table = () => {
  const { isMobile } = useMobile();
  const data = [
    {
      name: "Schools Focus",
      description:
        "Tula's International School (TIS) is a premier co-ed boarding school providing the best international education.",
    },
    {
      name: "Learning Enviroment",
      description:
        "We make learning exciting and encourage facing challenges to maintain discipline, organisation, and overall success.",
    },
    {
      name: "Curriculum Areas",
      description:
        "TIS focuses on six main areas of learning, addressing physical, intellectual, emotional, and social development among others.",
    },
    {
      name: "Mind, Body, and Soul Approach",
      description:
        "We recognise the link between emotional well-being, academic success, fitness, empowerment, to increase focus with meditation.",
    },
    {
      name: "Athletics & Social Empowerment",
      description:
        "Athletics play an important role in boosting physical fitness and confidence for students' long-term success.",
    },
    {
      name: "Meditation Exercises",
      description:
        "We implement meditation exercises to improve students' focus in the classroom setting.",
    },
    {
      name: <>Global Initiatives - &quot;Girls Gotta Run&quot;</>,
      description: (
        <>
          In Ethiopia, many girls struggle to attend secondary school. However,
          programs like &quot;Girls Gotta Run&quot; provide hope. This
          initiative attracts talented girls with scholarships, combining
          running and education to improve their lives and communities.
        </>
      ),
    },
    {
      name: "Technology Integration",
      description:
        "TIS Uses technology to improve teaching. Thus, helping both educators and students adapt to modern learning techniques.",
    },
    {
      name: "Community Engagement",
      description:
        "We organise various school trips for students. So that they indulge in activities outside of school to make friends and gain a different view of life beyond academics.",
    },
    {
      name: "Universal Learning",
      description:
        "TIS takes an all rounded approach to education, focusing on the whole person. They blend physical, intellectual, emotional, and social aspects to shape balanced individuals.",
    },
    {
      name: "Democracy",
      description:
        "Encouraging active participation and understanding of democratic principles.",
    },
    {
      name: "Environmentalism",
      description:
        "Promoting environmental awareness and sustainable practices.",
    },
    {
      name: "Adventure",
      description:
        "Fostering a spirit of exploration and resilience through challenging experiences.",
    },
    {
      name: "Leadership",
      description:
        "Developing leadership skills and qualities in our students.",
    },
    {
      name: "Service",
      description:
        "Instilling a sense of responsibility and community service.",
    },
    {
      name: "Internationalism",
      description:
        "Fostering a global perspective and appreciation for cultural diversity.",
    },
  ];

  return (
    <table
      style={{
        fontFamily: "TT Chocolates",
      }}
    >
      <thead>
        <tr>
          <th className="text-[clamp(10px,6vw,50px)] w-[30%] border-b bg-[#b90124] border-white border-collapse p-4 text-center md:text-[clamp(10px,2.5vw,50px)] font-[Mirador800] text-white">
            ASPECTS
          </th>
          <th className="text-[clamp(10px,6vw,50px)] w-[70%] border-b border-[#b90124] border-collapse p-4 text-center md:text-[clamp(10px,2.5vw,50px)] font-[Mirador800] text-[#b90124]">
            DESCRIPTION
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td
              className={`text-[clamp(10px,4vw,30px)] ${
                index === data.length - 1 ? "border-none" : "border-b"
              } bg-[#b90124] border-white text-white border-collapse p-2 md:p-4 text-center font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight`}
            >
              {item.name}
            </td>
            <td
              className={`text-[clamp(10px,4vw,30px)] ${
                index === data.length - 1 ? "border-none" : "border-b"
              } border-[#b90124] border-collapse p-2 md:p-4 font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight`}
            >
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function Pedagogy() {
  const bannerText =
    "Pedagogy at TIS promotes universal development and critical thinking";

  return (
    <>
      <Header
        title={"Pedagogy"}
        subtitle={bannerText}
        headerImg={HeaderPedagogyImg}
        headerImgMobile={HeaderPedagogyImg}
      />
      <div className="py-8 md:py-14">
        <h2 className="text-[clamp(10px,6.5vw,50px)] px-4 w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Effective Teaching <span className="text-[#b90124]">Methods</span>
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
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight"
        >
          As a premier co-ed residential school, the focus of the curriculum
          development at TIS is to provide an inclusive educational environment
          to students inside and outside the class room whereby teachers
          adopting constructive, collaborative and inquiry-based learning
          increase the participation and productivity of its pupils. Apart from
          Curriculum content as per CBSE, various value-added activities are
          integrated to develop Leadership and analytical abilities in the
          students to make them understand, reflect and participate.
          Methodology, the syllabus content delivery, Textbooks, practically
          oriented classroom teaching with minimum learning objectives, academic
          parameters recognition for each student, frequent assessment in the
          form of poster making, plays, quiz and written test gives a 360°
          insight into the subject. In the field of performing arts, art &amp;
          crafts lesson is a regular feature.
          <br />
          <br />
          Exclusive Sports with professional coaches help the students to
          transition from amateur to professional category. Curricular
          activities, debates, quizzes, seminars and conference is well
          integrated into the academic calendar. Student Exchange Programs,
          Educational excursion, camping Trekking trips, organisation of
          exhibition empowers students to acquire 21 st century skills. With
          24x7 - medical Centre/ infirmary and clinical counselor in the campus
          the well- being of the student is The Core Priority. Various councils
          of students - library council, school council, mess committee,
          academic, sports, IT, Pastoral provide the real platform to voice
          their concerns and get the corrective measures implemented.
          <br />
          <br />
          Model United Nations (MUN) participation is encouraged to raise
          college profiles and global awareness while also acquiring important
          skills such as public speaking and diplomacy. This holistic strategy
          guarantees that students are adequately equipped for both academic and
          professional success.
        </h6>
      </div>
      <div className="mb-8 md:mb-14 w-[90%] md:w-[80%] mx-auto border md:border-2 rounded-xl overflow-scroll md:overflow-hidden border-[#b90124]">
        <Table />
      </div>
    </>
  );
}
