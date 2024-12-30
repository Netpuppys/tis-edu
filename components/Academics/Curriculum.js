import React from "react";
import Image from "next/image";
import "../../styles/Academics/CBSEAffiliation.css";
import yellowLine from "../../public/pictures/lineImg.png";
import Header from "../globalComponents/Header/Header";
import HeaderCBSEAfiiliationImg from "../../public/Header/CBSEHeader.png";

export default function Curriculum() {
  const bannerText =
    "We have built a curriculum that understands and supports the journey of every child.";

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
            Welcome to Tula’s International School, Dehradun
            <br />
            <br />A premier co-educational residential school (Grade IV-XII)
            affiliated with CBSE, offering a blend of academic excellence and
            holistic development.
          </p>

          <p className="academic">
            Our <span>Curriculum</span>
            <Image
              style={{ height: "auto" }}
              className="yellow-Linne"
              src={yellowLine}
              alt=""
            />
          </p>

          <div className="curriculam-text">
            At TIS, we follow the CBSE course structure. This structure along
            with our curriculum, shaped by top academicians, prioritizes
            reasoning and analytical thinking over rote memorization. Aligned
            with the latest NEP 2023 framework, our syllabus emphasizes a
            skill-based, inclusive education that adapts to diverse learners’
            needs.
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
                immersive experiences, and online assessment tools enhance
                student engagement.
              </li>
              <li>
                Experiential Learning: Educational trips, inter-school science
                quests, seminars, and business conclaves foster practical
                knowledge.
              </li>
            </ul>
          </div>

          <p className="academic">
            ACADEMIC CLASSES – <span>IV to XII</span>
            <Image
              style={{ height: "auto" }}
              className="yellow-Linne"
              src={yellowLine}
              alt=""
            />
          </p>

          <div className="curriculam-text">
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
                robust training for aspiring engineers and medical
                professionals.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
