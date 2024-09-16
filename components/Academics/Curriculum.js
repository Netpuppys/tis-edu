import React from "react";
import Image from "next/image";
import "../../styles/Academics/CBSEAffiliation.css";
import yellowLine from "../../public/pictures/lineImg.png";
import Header from "../globalComponents/Header/Header";
import HeaderCBSEAfiiliationImg from "../../public/Header/CBSEHeader.png";

export default function Curriculum() {
  const bannerText =
    "We have designed the most suitable syllabus which prioritises comprehensive learning.";

  return (
    <>
      <Header
        title={"Curriculum"}
        headerImg={HeaderCBSEAfiiliationImg}
        subtitle={bannerText}
      />
      <div className="main">
        <section className="cbse-container">
          <p className="content">
            Tula’s International School is a co-educational residential school
            from grade IV to XII in Dehradun, Uttarakhand. One of the top
            boarding schools in Dehradun, TIS is affiliated to CBSE (Central
            Board of Secondary Education), New Delhi.
          </p>

          <p className="curriculam">
            Curriculum{" "}
            <Image
              style={{ height: "auto" }}
              className="yellow-Linne"
              src={yellowLine}
              alt=""
            />
          </p>

          <p className="curriculam-text">
            Some of the finest academicians have developed Tula’s International
            School curriculum across some of Dehradun’s best boarding schools in
            India. We follow the CBSE course structure. The CBSE course
            structure is based on reasoning and analytical abilities and not
            memorising facts. This helps the students understand the subject
            better and gain objective knowledge. The syllabus is framed with the
            child’s development and learning needs. This aids the overall
            development and individual growth of a student.
            <br />
            The NEP 2023 that we follow promotes skill-based system to enhance
            inclusive education for all, providing equal opportunities for
            diverse background learners, stressing on 5+3+3+4 model of structure
            after 5 years of foundation phase, 3 years of preparatory phase, 3
            years intermediate phase and remaining 4 years in the secondary
            phase. Project based learning, art integrated learning, flip class
            session are stressed upon where students amalgamate art, performing
            art subjects to prepare projects, comparing their state with
            different states – Karnataka, Puducherry etc.
            <br />
            Educational Trips, inter school science quests, Seminars, Business
            Ideas Conclaves, we are the simulators fostering greater education
            and learning employing greater state of art technology. <br />
            At TIS Digital mode of learning, smart-classes, VR simulators for
            lunar landing gives a 3D real experience to our students.
          </p>

          <p className="academic">
            ACADEMIC CLASSES – <span>IV to XII</span>
            <Image
              style={{ height: "auto" }}
              className="yellow-Linne"
              src={yellowLine}
              alt=""
            />
          </p>

          <p className="curriculam-text">
            Digital classroom with smart board & extra marks package, all the
            students get assessments online. Each student has an Extra mark id
            and a Fedena id assigned on entry to the campus with flexible out of
            classroom studies in evening and during prep time. Assignments are
            given in online and offline mode and standardise evaluation is done
            in an offline mode. Olympiads at national level are conducted for
            English, Hindi, Mathematics, Science and Economics where students
            win various medals and certificates. However, Tis Has Collaboration
            With Aviral Classes For Preparing Students To Crack Iit-Jee/Neet
            (Beyond Academic Hours)
          </p>
        </section>
      </div>
    </>
  );
}
