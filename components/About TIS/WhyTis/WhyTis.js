"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/About Tis/WhyTis.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import whyTisAbove from "../../../public/pictures/why-tis-above-img.png";
import tisImg from "../../../public/pictures/tis-img.png";
import WorldClass from "../../../public/whyTIS/worldClass.png";
import AllRound from "../../../public/whyTIS/allLearning.png";
import affiliated from "../../../public/whyTIS/affiliated.png";
import bus from "../../../public/whyTIS/bus.png";
import holisticEducation from "../../../public/whyTIS/holisticEducation.png";
import Learning24 from "../../../public/whyTIS/24-7lEARNING.png";
import fullyResidential from "../../../public/whyTIS/fullyResidential.png";
import HigherEducation from "../../../public/whyTIS/HigherEducation.png";
import whyTisAboveMobile from "../../../public/pictures/why-tis-above-img-mobile.png";
import tisImgMobile from "../../../public/pictures/tis-img-mobile.png";
export default function WhyTis() {
  const { isMobile } = useMobile();
  return (
    <div className="WhyTis-main">
      <div className="header-whyTIS">
        <div style={{ padding: "48% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/970407036?autoplay=1&loop=1&muted=1&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <h1 className="headingWhy">
          At TIS, you’ll <br />
          experience
        </h1>
      </div>

      <div className="WhyTis-main">
        <div className="above-text-div">
          <h1 className="unexpected-div">
            UNEXPECTED FACT #1
            <br />
          </h1>

          <p2 className="we-love">
            We love school!
            <br />
            (Yes, really!)
          </p2>

          <h4 className="what-makes">
            What makes Tis students jumps<br></br> out of bed in the morning?
          </h4>
        </div>

        <div style={{ padding: "50% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/970406957?autoplay=1&loop=1&muted=1&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="why-tis-img-text">
          At TIS, school is different. It <br />
          isn’t a chore or a competition – 
          <br />
          it&apos;s an opportunity.
          <br />
          And it’s yours 
          <br />
          for the taking.
        </div>

        {!isMobile && (
          <Image className="why-tis-above-img" src={whyTisAbove} alt="" />
        )}
        {isMobile && (
          <Image className="why-tis-above-img" src={whyTisAboveMobile} alt="" />
        )}

        <h4 className="here-are">
          Here are the reasons why <br />
          you should choose Tula’s <br />
          International School:
        </h4>

        {!isMobile && <Image className="tisImg" src={tisImg} alt="" />}
        {isMobile && <Image className="tisImg" src={tisImgMobile} alt="" />}
        {!isMobile && (
          <div className="container">
            <div className="left-div-content">
              <Image className="image" src={WorldClass} alt="" />
              <div className="headingWHY">
                <h2>All-round Learning and Education at One Place </h2>
                <div className="line"></div>
              </div>

              <p>
                Our main objective is to train students to realize their full
                potential and become independent learners who are fully aware of
                their social, moral, and cultural obligations towards
                themselves, others, and the nation at large. As one of
                Dehradun’s top boarding schools, we want to bring about a
                transformation in students not only in Academics but also in
                their mental, emotional, spiritual, and creative thinking
                processes.
              </p>
              <br />
              <Image className="image" src={affiliated} alt="" />
              <div className="headingWHY">
                <h2>Social Life </h2>
                <div className="line"></div>
              </div>

              <p>
                It takes a village to raise a child. Traditionally, the town
                constituted a big joint family and the surrounding community.
                There was no shortage of people with aunts, uncles, siblings,
                grandparents, and other members living together. In the modern
                world, with nuclear families, children are raised in an
                environment with fewer than four people in the house and
                sometimes a small group of peers in the neighborhood. In such a
                context, boarding schools offer a ‘village’ where children can
                grow up, study, and learn things while living in a great family
                setting of peers, elders, and juniors.
              </p>
              <br />
              <Image className="image" src={holisticEducation} alt="" />
              <div className="headingWHY">
                <h2>24/7 Learning </h2>
                <div className="line"></div>
              </div>

              <p>
                A child&apos;s versatile mind is always learning, whether in the
                classroom or via informal contact with peers, teachers, coaches,
                and instructors. This is where an excellent and high-quality
                boarding school gives the finest setting for learning academics,
                skills, and life lessons. Tula&apos;s International School
                recognizes the quick rate at which children may learn and
                develop their personalities and character. Our complete
                atmosphere fosters your child&apos;s physical, emotional, and
                cerebral development, ensuring they get both organised
                instruction and daily experiences.
              </p>
              <br />
              <Image className="image" src={fullyResidential} alt="" />

              <div className="headingWHY">
                <h2> Higher Education Opportunities </h2>
                <div className="line"></div>
              </div>
              <p>
                Tula&apos;s International School and Tula&apos;s Institute are
                one-stop destinations for your child&apos;s comprehensive
                education. Tula&apos;s Institute of Engineering and Management
                allows students to continue their study after completing their
                senior school examinations at TIS. Tula&apos;s Institute, one of
                Uttarakhand&apos;s best management colleges, guarantees that
                parents don&apos;t have to worry about their children&apos;s
                further education by ensuring a smooth transition from school to
                college.
              </p>
            </div>

            <div className="line-center"></div>
            <div className="right-div-content">
              <div className="headingWHY">
                <div className="line"></div>
                <h2>
                  {" "}
                  World-Class Teaching Tailored to make Students Future-Ready
                </h2>
              </div>
              <p>
                Driven by a PAN India curriculum and a common framework for
                education, Tula’s is affiliated with the CBSE which is a
                futuristic board and keeps pace with changing educational
                reforms and a rapidly evolving environment. The faculty of the
                school is one of its notable strengths. We have excellent
                teachers compared to the other top schools in Dehradun. Our
                teachers come from different parts of the country. They are
                trained regularly to identify each student’s skill sets and
                teach in a manner that enhances their use of multiple
                intelligences.
              </p>
              <br />
              <Image
                className="image"
                src={AllRound}
                alt=""
                style={{ marginBlockEnd: "10rem" }}
              />
              <div className="headingWHY">
                <div className="line"></div>
                <h2> Affiliated to CBSE New Delhi</h2>
              </div>

              <p>
                Our main objective is to train students to realize their full
                potential and become independent learners who are fully aware of
                their social, moral, and cultural obligations towards
                themselves, others, and the nation at large. As one of
                Dehradun’s top boarding schools, we want to bring about a
                transformation in students not only in Academics but also in
                their mental, emotional, spiritual, and creative thinking
                processes.
              </p>
              <br />
              <Image src={bus} alt="" className="busImg" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2> Holistic Education</h2>
              </div>

              <p>
                Tula&apos;s International School immerses your kid in a holistic
                learning environment, combining academics with enough leisure
                for athletics, arts, music, and other extracurricular
                activities. We continuously monitor and foster your child&apos;s
                natural interests and skills thanks to our committed teaching
                team. Our programs also include the Charity Program Society and
                the International Award for Young People (IAYP), which promote
                community service, leadership, and personal development.
              </p>
              <br />
              <Image
                className="image"
                src={Learning24}
                alt=""
                style={{ marginBlockEnd: "10rem" }}
              />
              <div className="headingWHY">
                <div className="line"></div>
                <h2> Fully Residential & Co-ed</h2>
              </div>

              <p>
                TIS is a fully residential co-ed school with excellent
                infrastructure and all modern amenities as befits the stature of
                one of Dehradun’s best co-ed CBSE boarding schools. We are
                located in Dehradun, which is considered the best site for
                school education. As a leading boarding school, we provide an
                unmatched experience through rigorous academics, intense sports
                and extracurricular activities, and strong bonds among peers,
                juniors, and seniors.
              </p>
              <Image
                className="image"
                src={HigherEducation}
                alt=""
                style={{ marginBlockEnd: "5rem" }}
              />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="container">
            <div className="line-center"></div>
            <div className="right-div-content">
              <div className="headingWHY">
                <div className="line"></div>
                <h2>
                  {" "}
                  World-Class Teaching Tailored to make Students Future-Ready
                </h2>
              </div>
              <p>
                Driven by a PAN India curriculum and a common framework for
                education, Tula’s is affiliated with the CBSE which is a
                futuristic board and keeps pace with changing educational
                reforms and a rapidly evolving environment. The faculty of the
                school is one of its notable strengths. We have excellent
                teachers compared to the other top schools in Dehradun. Our
                teachers come from different parts of the country. They are
                trained regularly to identify each student’s skill sets and
                teach in a manner that enhances their use of multiple
                intelligences.
              </p>
              <br />
              <Image className="image" src={WorldClass} alt="" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2>All-round Learning and Education at One Place </h2>
              </div>

              <p>
                Our main objective is to train students to realize their full
                potential and become independent learners who are fully aware of
                their social, moral, and cultural obligations towards
                themselves, others, and the nation at large. As one of
                Dehradun’s top boarding schools, we want to bring about a
                transformation in students not only in Academics but also in
                their mental, emotional, spiritual, and creative thinking
                processes.
              </p>
              <Image className="image" src={AllRound} alt="" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2> Affiliated to CBSE New Delhi</h2>
              </div>

              <p>
                Our main objective is to train students to realize their full
                potential and become independent learners who are fully aware of
                their social, moral, and cultural obligations towards
                themselves, others, and the nation at large. As one of
                Dehradun’s top boarding schools, we want to bring about a
                transformation in students not only in Academics but also in
                their mental, emotional, spiritual, and creative thinking
                processes.
              </p>
              <br />
              <Image className="image" src={affiliated} alt="" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2>Social Life </h2>
              </div>

              <p>
                It takes a village to raise a child. Traditionally, the town
                constituted a big joint family and the surrounding community.
                There was no shortage of people with aunts, uncles, siblings,
                grandparents, and other members living together. In the modern
                world, with nuclear families, children are raised in an
                environment with fewer than four people in the house and
                sometimes a small group of peers in the neighborhood. In such a
                context, boarding schools offer a ‘village’ where children can
                grow up, study, and learn things while living in a great family
                setting of peers, elders, and juniors.
              </p>
              <Image src={bus} alt="" className="busImg" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2> Holistic Education</h2>
              </div>

              <p>
                Tula&apos;s International School immerses your kid in a holistic
                learning environment, combining academics with enough leisure
                for athletics, arts, music, and other extracurricular
                activities. We continuously monitor and foster your child&apos;s
                natural interests and skills thanks to our committed teaching
                team. Our programs also include the Charity Program Society and
                the International Award for Young People (IAYP), which promote
                community service, leadership, and personal development.
              </p>
              <br />
              <Image className="image" src={holisticEducation} alt="" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2>24/7 Learning </h2>
              </div>
              <p>
                A child&apos;s versatile mind is always learning, whether in the
                classroom or via informal contact with peers, teachers, coaches,
                and instructors. This is where an excellent and high-quality
                boarding school gives the finest setting for learning academics,
                skills, and life lessons. Tula&apos;s International School
                recognizes the quick rate at which children may learn and
                develop their personalities and character. Our complete
                atmosphere fosters your child&apos;s physical, emotional, and
                cerebral development, ensuring they get both organised
                instruction and daily experiences.
              </p>
              <Image className="image" src={Learning24} alt="" />
              <div className="headingWHY">
                <div className="line"></div>
                <h2 style={{ marginLeft: "1rem" }}>
                  {" "}
                  Fully Residential & Co-ed
                </h2>
              </div>

              <p>
                TIS is a fully residential co-ed school with excellent
                infrastructure and all modern amenities as befits the stature of
                one of Dehradun’s best co-ed CBSE boarding schools. We are
                located in Dehradun, which is considered the best site for
                school education. As a leading boarding school, we provide an
                unmatched experience through rigorous academics, intense sports
                and extracurricular activities, and strong bonds among peers,
                juniors, and seniors.
              </p>
              <Image className="image" src={fullyResidential} alt="" />

              <div className="headingWHY">
                <div className="line"></div>
                <h2> Higher Education Opportunities </h2>
              </div>
              <p>
                Tula&apos;s International School and Tula&apos;s Institute are
                one-stop destinations for your child&apos;s comprehensive
                education. Tula&apos;s Institute of Engineering and Management
                allows students to continue their study after completing their
                senior school examinations at TIS. Tula&apos;s Institute, one of
                Uttarakhand&apos;s best management colleges, guarantees that
                parents don&apos;t have to worry about their children&apos;s
                further education by ensuring a smooth transition from school to
                college.
              </p>
              <Image className="image" src={HigherEducation} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
