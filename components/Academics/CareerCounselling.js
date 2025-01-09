import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderCareerImg from "../../public/Banner/careerCounselling.webp";
import HeaderCareerImgMobile from "../../public/Banner/careerCounsellingMobile.webp";
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
        headerImgMobile={HeaderCareerImgMobile}
      />
      <div className="main">
        <p className="text-above-career">
          Students often turn to their parents, teachers, friends, and their own
          academic performance for career advice. While these sources are
          valuable, they sometimes leave students grappling with tough decisions
          about their future.
          <br /> <br />
          At TIS, we step in to bridge this gap with a comprehensive career
          guidance program. Through a series of well-designed tests and exposure
          to a variety of career opportunities, we help students discover the
          paths that align with their interests and strengths..
          <br />
        </p>
        <div className="personal-career">
          <div className="personal">
            <div className="headingPersonal">Personal Counselling</div>
            <div className="textPersonal">
              Tula’s provides personal counseling through a dedicated center,
              ensuring students have a safe space to share their thoughts and
              challenges with trained professionals. Life skills and value-based
              education are integrated into the daily schedule, addressing
              teenage concerns and the unique experiences of boarding school
              life. Teachers are also trained to be sensitive to students’
              needs, creating a nurturing and supportive environment in this
              modern Gurukul.
            </div>
          </div>
        </div>
        <div className="career-heading">Career Counselling</div>
        <div className="text-above-career">
          Tula's International School's career counseling program is dedicated
          to helping students build fulfilling and successful careers. The
          program includes:
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Personalized Guidance: Individual tests and one-on-one counseling
              sessions to help students discover their interests, abilities, and
              aspirations.
            </li>
            <li>
              Career Insights: Detailed information about industries, job roles,
              and educational requirements to support informed decision-making.
            </li>
            <li>
              Skill Development: Assistance with resume writing, interview
              techniques, and networking strategies to prepare students for the
              professional world.
            </li>
            <li>
              Future Planning: A focus on both immediate achievements and
              long-term career goals to ensure a smooth transition from school
              to work life.
            </li>
          </ul>
          <br />
          This comprehensive approach ensures that students are well-prepared to
          navigate their career journeys with confidence.
        </div>
        {/* <div className="Counseller-and-Benifits">
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
        </div> */}
        <div className="personal-career">
          <div className="personal">
            <div className="headingPersonal">
              Why does your child need counselling?
            </div>
            <div className="textPersonal">
              Tula’s career counseling program helps students:
              <ul className="ml-5 list-disc">
                <li>
                  Build self-esteem and confidence to face challenges head-on.
                </li>
                <li>
                  Develop a lifelong love for learning and personal growth.
                </li>
                <li>Enhance communication and teamwork skills.</li>
                <li>
                  Strengthen critical thinking and decision-making abilities.
                </li>
                <li>
                  Resist harmful influences and peer pressure effectively.
                </li>
                <li>Explore career paths they’re passionate about.</li>
                <li>Understand their strengths and areas for improvement.</li>
                <li>
                  Embrace new opportunities with a proactive and positive
                  mindset.
                </li>
              </ul>
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
            With growing competition, entrance exams have become the standard
            for identifying top talent. Preparing for these exams requires a
            different approach than regular theory papers.
            <br />
            <br />
            At Tula’s International School, we ensure students start their
            entrance exam preparations early:
            <br />
            <ul className="ml-5 list-disc">
              <li>
                <strong className="font-black">IIT-JEE –</strong> Preparation
                starts from Class IX.
              </li>
              <li>
                <strong className="font-black">
                  Medical Entrance Exams (PMT) –
                </strong>{" "}
                Focused preparation begins in Class XI.
              </li>
              <li>
                <strong className="font-black">CA CPT –</strong> Tailored
                guidance from Class XI.
              </li>
              <li>
                <strong className="font-black">
                  National Law Entrance Exams –
                </strong>{" "}
                Dedicated coaching from Class XI.
              </li>
              <li>
                <strong className="font-black">
                  BBA, Hotel Management, Mass Communication –
                </strong>{" "}
                Primarily aptitude-based, with preparation from Class XI.
              </li>
            </ul>
            <br />
            Our program includes:
            <ul className="ml-5 list-disc">
              <li>Weekly competitive assignments.</li>
              <li>IIT/JEE/PMT-aligned syllabus.</li>
              <li>Regular mock tests and MCQ practice after each topic.</li>
              <li>Weekly remedial and doubt-solving sessions.</li>
              <li>Special guidance for IIM entrance exams.</li>
              <li>
                Winter camps to help students prepare for CBSE board exams.
              </li>
            </ul>
            <br />
          </h3>
        </div>
      </div>
    </>
  );
}
