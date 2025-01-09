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
        borderCollapse: "collapse",
        width: isMobile ? "" : "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <thead>
        <tr>
          <th style={{ width: isMobile ? "50%" : "30%" }}>ASPECTS</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {data.map((item, index) => (
          <tr key={index}>
            <td
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                padding: isMobile ? "8px" : "20px",
              }}
            >
              <p1
                style={{ alignItems: "flex-start", alignSelf: "center" }}
                className="title"
              >
                {item.name}
              </p1>
              <Image
                style={{
                  alignItems: "flex-end",
                  height: "auto",
                  alignSelf: "center",
                  marginLeft: isMobile ? "10px" : "20px",
                  width: isMobile ? "30px" : "40px",
                }}
                className="seeActivity"
                src={seeAllActivities}
                alt=""
              />
            </td>
            <td
              style={{
                textAlign: "left",
                padding: isMobile ? "8px" : "20px",
              }}
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
    "Pedagogy at Tula's International School promotes universal development, critical thinking, and lifelong learning skills.";

  return (
    <>
      <Header
        title={"Pedagogy"}
        subtitle={bannerText}
        headerImg={HeaderPedagogyImg}
        headerImgMobile={HeaderPedagogyImg}
      />
      <div className="main-pedagogy">
        <h1 className="main-text">
          Effective Teaching <span>Methods</span>
          <Image
            style={{ height: "auto" }}
            className="yellow-line-pedagogy"
            src={yellowLine}
            alt=""
          />
        </h1>
        <p className="text-div">
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
          crafts lesson is a regular feature. <br /> <br />
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
          their concerns and get the corrective measures implemented. <br />{" "}
          <br />
          Model United Nations (MUN) participation is encouraged to raise
          college profiles and global awareness while also acquiring important
          skills such as public speaking and diplomacy. This holistic strategy
          guarantees that students are adequately equipped for both academic and
          professional success.
        </p>
        <br /> <br />
        <div className="div1">
          <div2>
            <Table />
          </div2>
        </div>
      </div>
    </>
  );
}
