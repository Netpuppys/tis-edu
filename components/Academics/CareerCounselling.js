import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderCareerImg from "../../public/Header/careerHeader.png";
import "../../styles/Academics/CareerCounselling.css";
import yellowLine from "../../public/pictures/lineImg.png";
export default function CareerCounselling() {
  return (
    <>
      <Header
        title={"Career Counselling"}
        subtitle={
          "Guiding Stars: Empowering Students through Comprehensive Career Counselling Services at TIS"
        }
        headerImg={HeaderCareerImg}
      />
      <div className="main">
        <p className="text-above-career">
          Research shows that students generally rely on their parents,
          teachers, friends and most often their academic performance for
          guidelines and suggestions regarding their career choice.
          <br /> <br />
          Due to this, students are often faced with the dilemma of choosing the
          right career. TIS organizes various tests and exposes children to the
          opportunities available to help them make the right subject choices.
          An effective career guidance program is designed for students to
          enable them to make effective decisions relating to their future. The
          students and parents are educated about admission procedures at
          various education institutions in India and abroad for higher studies.
          This helps students choose the right careers for themselves for a
          bright future.
          <br />
        </p>
        <div className="personal-career">
          <div className="personal">
            <div className="headingPersonal">Personal Counselling</div>
            <div className="textPersonal">
              Tula&apos;s concern for its students reflects that it has a
              separate counselling centre. Life skill and value-based education
              classes are a part of the residential school timetable covering
              most of the issues concerning teenagers and the challenges of
              living in a boarding school in Dehradun. These sessions allow
              students to share their hopes, insecurities and problems with
              trained counsellors who deal with their issues effectively. At
              this modern Gurukul school in Dehradun, all teachers have been
              trained to be sensitive to the students&apos; needs besides
              carrying out their academic duties.
            </div>
          </div>
        </div>
        <div className="career-heading">Career Counselling</div>
        <p className="text-above-career">
          Tula&apos;s International School&apos;s career counseling program is
          geared to supporting students achieve happy and successful careers.
          Our comprehensive curriculum, which includes individualized tests and
          one-on-one counseling sessions, assists students in identifying their
          interests, abilities and beliefs. By giving thorough industry
          insights, job description definitions, and educational prerequisite
          information, we enable students to make educated career selections.
          <br />
          <br />
          Furthermore, we provide extensive assistance with resume development,
          interview preparation, and networking methods to ensure that our
          students are well-prepared to join the professional world. Tula&apos;s
          International School equips pupils for a smooth transition from school
          to a successful job by emphasizing both short-term accomplishments and
          long-term career objectives.
        </p>
        <div className="Counseller-and-Benifits">
          <div className="Counseller">
            <div className="text-part">
              <h2>Counselor at School :</h2>
              <p1>
                Tula&apos;s International School has come up with a career
                program that helps in providing the students with career
                guidance information on the school premises.
                <ul>
                  1. Guide students to make career decisions
                  <br />
                  2. Creating awareness about several career options in Science,
                  Commerce and Arts.
                  <br />
                  3. Providing detailed information on various careers to
                  students on demand.
                  <br />
                  4. Administer Career Assessments tests- Aptitude - Interest -
                  Personality.
                  <br />
                  5. Providing counselling to students.
                  <br />
                </ul>
              </p1>
            </div>
          </div>
          <div className="Benifits">
            <div className="text-part">
              <h2>Benefits of Career Counseling :</h2>
              <p1>
                It will help students in:
                <ul>
                  <li> Increasing Self-esteem and Confidence</li>
                  <li>Developing a lifetime enthusiasm for learning</li>
                  <li>Developing positive communication and social skills</li>
                  <li>
                    Developing critical thinking and decision-making skills -
                    Working with peers and in teams
                  </li>
                  <li>
                    Training them to protect themselves from harmful influences
                    and peer pressure
                  </li>
                  <li>
                    Empowering them to plan their careers and choose a
                    profession they will enjoy
                  </li>
                  <li>
                    Getting a better understanding of their strengths and
                    weakness
                  </li>
                  <li>
                    Giving them the confidence to take up challenging tasks
                    without inhibition of performance-related issues
                  </li>{" "}
                </ul>
              </p1>
            </div>
          </div>
        </div>

        <div className="preparation">
          <h1 className="heading-preparation">
            Preparation for Competitive Exams
            <Image
              src={yellowLine}
              className="preparation-yellow-line"
              alt=""
            />
          </h1>

          <h3 className="text-preparation">
            With increasing competition among students, entrance examinations
            have become a transparent and dependable method to admit the creme
            de la creme of the lot. A competitive exam is very different from
            preparing for a regular subjective or a theory paper.
            <br />
            <br />
            <br />
            At Tula’s International School, we make the students start preparing
            for an entrance exam early. The IIT-JEE, considered one of the
            toughest, has students beginning as early as class IX. Students
            create their preparations from Class XI for the medical entrance, CA
            CPT, and the various national law entrance exams. BBA, hotel
            management, mass communication and some of the other such entrance
            exams are mostly aptitude based and thus, students are well prepared
            for them.
            <br />
            <ul>
              <li>
                Delivering competitive assignments every Saturday to the
                students.
              </li>
              <li>
                Syllabus is designed per the syllabus of the IIT/JEE/PMT exams.{" "}
              </li>
              <li> Conducting regular mock tests for the students.</li>
              <li> Practice MCQs after completion of every topic/subject.</li>
              <li>
                Conduction of special remedial classes or doubt sessions every
                week.
              </li>
              <li> We also provide on-point guidance for IIM&apos;s.</li>
              <li>
                Winter camp is organised to prepare students for CBSE
                board examination.
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </>
  );
}
