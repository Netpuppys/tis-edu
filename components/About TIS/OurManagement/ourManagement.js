"use client";
import React from "react";
import Image from "next/image";
import { useMobile } from "../../globalComponents/IsMobileContext";
import Header from "../../globalComponents/Header/Header";
import HeaderManagementIMg from "../../../public/Header/managementHeader.jpg";
import HeaderManagementMobileIMg from "../../../public/Header/managementHeaderMobile.jpg";
import sunil from "../../../public/ourMangement/sunailjain.png";
import Raunak from "../../../public/ourMangement/raunkjain.png";
import silky from "../../../public/ourMangement/silky.jpg";
import raghav from "../../../public/ourMangement/ragavgarg.png";
import "../../../styles/About Tis/managementStyle.css";
export default function OurManagement() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Our Management"}
        subtitle={
          "A strong school management provides the best learning environment for students."
        }
        headerImg={isMobile ? HeaderManagementMobileIMg : HeaderManagementIMg}
      />

      {!isMobile && (
        <>
          <div className="management">
            <div className="left-div-content-management">
              <Image src={sunil} alt="" style={{ marginTop: "10em" }} />
              <div
                className="red-div"
                style={{
                  marginBlockEnd: "15em",
                  padding: "2rem 0rem 2rem 0.9rem",
                }}
              >
                <ul className="ml-5 list-disc">
                  <li>Dr APJ Kalam Award - 2016</li>
                  <li>
                    Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar - 2015
                  </li>
                  <li>
                    Edupreneurs award 2013 for valuable contribution in
                    engineering education in India
                  </li>
                  <li> Rajeev Gandhi Shiromani Award - 2010</li>
                  <li> Recipient of Indira Gandhi Sadbhavna Award - 2008</li>
                </ul>
              </div>
              <div className="headingName">
                <h4>
                  Mr. Raunak Jain
                  <br />
                  (Vice Chairman)
                </h4>
              </div>
              <p>
                The Director of Tula&apos;s, Mr Raunak Jain, is a high achiever.
                Topping through his college and post-graduation (from the Royal
                Holloway University of London), Mr Jain has made winning a
                habit. Owing to this habit, he aspires to make Tula&apos;s
                International one of the best and most dependable schools. He
                understands that he can achieve this ambition only through the
                success of every student of Tula&apos;s, for he believes in -
                Together we rise, together we touch the skies.
                <br />
                <br />
                Mr Jain, as the Director and as the youngest member of the Tulas
                Family, has all his interests invested in the school to make it
                a perfect setting for a student&apos;s holistic development with
                emphasis on creating a balanced persona. Compromising at no
                point, Tula&apos;s provides world-class amenities for your
                child, whether in education, athletics, the arts, or
                entertainment. We were guided through expert advice.
                <br />
              </p>
              <Image src={silky} alt="" />
              <div
                className="red-div"
                style={{
                  marginBlockEnd: "15em",
                  padding: "2rem 0rem 2rem 0.9rem",
                }}
              >
                <ul className="ml-5 list-disc">
                  <li>Alumnus - Symbiosis Institute of Design, Pune</li>
                  <li>
                    Awarded as an Inspiring Women Eduleader for the year 2014 by
                    Engineering Watch
                  </li>
                  <li>Awarded as Education Evangelist 2015 by Skill tree</li>
                  <li>
                    {" "}
                    Awarded Certification in Leadership from Harvard University,
                    USA 2017
                  </li>
                  <li> Awarded with Today&apos;s Woman Award by I-next 2017</li>
                </ul>
              </div>
              <div className="headingName">
                <h4>
                  Dr. Raghav Garg
                  <br />
                  (Vice President Technology)
                </h4>
              </div>
              <p>
                As the name suggests, Tula&apos;s creates a balance and strives
                to develop and unearth the intrinsic potential and capability of
                the students, thereby preparing them to take on global
                challenges.
                <br />
                <br />
                Our vision is to make Tula a centre of excellence in learning,
                innovation, technology, agriculture, and management. Every
                student is nurtured holistically. The result is young
                entrepreneurs who are ready for the workforce. Students at
                Tula&apos;s envision becoming employers and creating jobs for
                others. The entire education process at Tula&apos;s is designed
                from the very first day onward, from making the student feel at
                home to equipping the student to be productive in industry and
                society. Our Institute has good relations with leading
                Universities of the world, giving Tulaites an edge over other
                students elsewhere. Tula&apos;s is recognised for having state
                of the art infrastructure.
              </p>
            </div>
            <div className="line-management"></div>
            <div className="right-div-content-management">
              <div className="headingName">
                <h4>
                  Mr. Sunil Kumar Jain
                  <br />
                  (Chairman)
                </h4>
              </div>
              <p>
                It brings me immense pride and satisfaction to extend my
                heartiest congratulations to the Management, dedicated Staff,
                and the vibrant Student body of Tula&apos;s International School
                on the publication of its Second edition of the Year Book. This
                publication serves as a chronicle of our collective journey
                towards educational excellence, and it is with great
                anticipation that I share my thoughts with you today.
                <br />
                <br />
                Tula&apos;s International School combines - respect for
                tradition with a progressive application of modern sciences,
                academic rigour with a caring heart, and individual appreciation
                with the warmth of a school community.
                <br />
                <br />
                In today&apos;s world, where society is increasingly divided
                into smaller segments, Tula remains a community rich in
                integrity. Honesty, humour, and hard work form the basis of an
                educational process that results in learning for a lifetime.
                <br />
                <br />
                Our dedicated faculty is at the heart of our endeavour to build
                an intellectual community. Our teachers love to teach.
                <br />
                <br />
                Passionate toward the success of their students, the faculty
                serves as teachers, coaches, advisors, mentors, and friends. In
                every area of school life, the faculty seeks to challenge and
                inspire students to reach new levels of enquiry and
                understanding.
                <br />
                <br /> I invite you to join Tula&apos;s in this journey of an
                enriching educational experience for our students.
              </p>
              <Image src={Raunak} alt="" />
              <div
                className="red-div"
                style={{
                  marginBlockEnd: "10em",
                  padding: "2rem 0.5rem 2rem",
                }}
              >
                <ul className="ml-5 list-disc">
                  <li>Alumnus - M.Sc. International Management from RHUL</li>
                  <li>(Royal Holloway University of London)</li>
                  <li>Vice president (Welfare) National Taekwondo Committe</li>
                  <li>Member - Cricket Association of Uttarakhand</li>
                </ul>
              </div>
              <div className="headingName">
                <h4>
                  Mrs. Silky Jain Marwah
                  <br />
                  (Executive Director)
                </h4>
              </div>
              <p>
                Alumnus, Symbiosis Institute of Design, Pune; awarded as an
                inspiring Women Eduleader&apos;for the year 2014 by Engineering
                Watch and &apos;Skilltree Education Evangelist 2015&apos; by
                Skill Tree, Silky Jain is an inspiration for many. The
                &apos;care-India youth icon from 2011 till date, Ms Jain is a
                self-starter and an achiever. Currently handling the Engineering
                College and the Management College (Tula&apos;s Institute), she
                has a good understanding of the operations of Educational
                Institutions.
                <br />
                <br />
                Apart from catering to her duties as an Executive Director, she
                would be helping Tula&apos;s students to make career choices and
                hand-holding them through their transitions post
                their schooling.
              </p>
              <Image src={raghav} alt="" />
              <div
                className="red-div"
                style={{
                  marginBlockEnd: "10em",
                  padding: "2rem 0.5rem 2rem ",
                }}
              >
                <ul className="ml-5 list-disc">
                  <li>B.Tech CS (VIT, Vellore)</li>
                  <li>M.S. (University of Texas at Dallas)</li>
                  <li>Ph.D (Banasthali University)</li>
                  <li>MBA (IIMK)</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="management">
          <Image
            src={sunil}
            alt=""
            style={{
              marginLeft: "20%",
            }}
          />
          <div className="headingName">
            <h4>
              Mr. Sunil Kumar Jain
              <br />
              (Chairman)
            </h4>
          </div>
          <div
            className="red-div"
            style={{
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            <ul style={{ width: "85%" }} className="ml-5 list-disc">
              <li>Dr APJ Kalam Award - 2016</li>
              <li>Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar - 2015</li>
              <li>
                Edupreneurs award 2013 for valuable contribution in engineering
                education in India
              </li>
              <li> Rajeev Gandhi Shiromani Award - 2010</li>
              <li> Recipient of Indira Gandhi Sadbhavna Award - 2008</li>
            </ul>
          </div>

          <p>
            It brings me immense pride and satisfaction to extend my heartiest
            congratulations to the Management, dedicated Staff, and the vibrant
            Student body of Tula&apos;s International School on the publication
            of its Second edition of the Year Book. This publication serves as a
            chronicle of our collective journey towards educational excellence,
            and it is with great anticipation that I share my thoughts with you
            today.
            <br />
            <br />
            Tula&apos;s International School combines - respect for tradition
            with a progressive application of modern sciences, academic rigour
            with a caring heart, and individual appreciation with the warmth of
            a school community.
            <br />
            <br />
            In today&apos;s world, where society is increasingly divided into
            smaller segments, Tula remains a community rich in integrity.
            Honesty, humour, and hard work form the basis of an educational
            process that results in learning for a lifetime.
            <br />
            <br />
            Our dedicated faculty is at the heart of our endeavour to build an
            intellectual community. Our teachers love to teach.
            <br />
            <br />
            Passionate toward the success of their students, the faculty serves
            as teachers, coaches, advisors, mentors, and friends. In every area
            of school life, the faculty seeks to challenge and inspire students
            to reach new levels of enquiry and understanding.
            <br />
            <br /> I invite you to join Tula&apos;s in this journey of an
            enriching educational experience for our students.
          </p>
          <Image
            src={Raunak}
            alt=""
            style={{
              marginLeft: "-20%",
            }}
          />
          <div className="headingName">
            <h4>
              Mr. Raunak Jain
              <br />
              (Vice Chairman)
            </h4>
          </div>
          <div
            className="red-div"
            style={{
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            <ul style={{ width: "85%" }} className="ml-5 list-disc">
              <li>Alumnus - M.Sc. International Management from RHUL</li>
              <li>(Royal Holloway University of London)</li>
              <li>Vice president (Welfare) National Taekwondo Committe</li>
              <li>Member - Cricket Association of Uttarakhand</li>
            </ul>
          </div>
          <p>
            The Director of Tula&apos;s, Mr Raunak Jain, is a high achiever.
            Topping through his college and post-graduation (from the Royal
            Holloway University of London), Mr Jain has made winning a habit.
            Owing to this habit, he aspires to make Tula&apos;s International
            one of the best and most dependable schools. He understands that he
            can achieve this ambition only through the success of every student
            of Tula&apos;s, for he believes in - Together we rise, together we
            touch the skies.
            <br />
            <br />
            Mr Jain, as the Director and as the youngest member of the Tulas
            Family, has all his interests invested in the school to make it a
            perfect setting for a student&apos;s holistic development with
            emphasis on creating a balanced persona. Compromising at no point,
            Tula&apos;s provides world-class amenities for your child, whether
            in education, athletics, the arts, or entertainment. We were guided
            through expert advice.
            <br />
          </p>
          <Image
            src={silky}
            alt=""
            style={{
              marginLeft: "20%",
            }}
          />
          <div className="headingName">
            <h4>
              Mrs. Silky Jain Marwah
              <br />
              (Executive Director)
            </h4>
          </div>

          <div
            className="red-div"
            style={{
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            <ul style={{ width: "85%" }} className="ml-5 list-disc">
              <li>Alumnus - Symbiosis Institute of Design, Pune</li>
              <li>
                Awarded as an Inspiring Women Eduleader for the year 2014 by
                Engineering Watch
              </li>
              <li>Awarded as Education Evangelist 2015 by Skill tree</li>
              <li>
                {" "}
                Awarded Certification in Leadership from Harvard University, USA
                2017
              </li>
              <li> Awarded with Today&apos;s Woman Award by I-next 2017</li>
            </ul>
          </div>
          <p>
            Alumnus, Symbiosis Institute of Design, Pune; awarded as an
            inspiring Women Eduleader&apos;for the year 2014 by Engineering
            Watch and &apos;Skilltree Education Evangelist 2015&apos; by Skill
            Tree, Silky Jain is an inspiration for many. The &apos;care-India
            youth icon from 2011 till date, Ms Jain is a self-starter and an
            achiever. Currently handling the Engineering College and the
            Management College (Tula&apos;s Institute), she has a good
            understanding of the operations of Educational Institutions.
            <br />
            <br />
            Apart from catering to her duties as an Executive Director, she
            would be helping Tula&apos;s students to make career choices and
            hand-holding them through their transitions post their schooling.
          </p>
          <Image
            src={raghav}
            alt=""
            style={{
              marginLeft: "-20%",
            }}
          />
          <div className="headingName">
            <h4>
              Dr. Raghav Garg
              <br />
              (Vice President Technology)
            </h4>
          </div>
          <div
            className="red-div"
            style={{
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            <ul style={{ width: "85%" }} className="ml-5 list-disc">
              <li>B.Tech CS (VIT, Vellore)</li>
              <li>M.S. (University of Texas at Dallas)</li>
              <li>Ph.D (Banasthali University)</li>
              <li>MBA (IIMK)</li>
            </ul>
          </div>
          <p>
            As the name suggests, Tula&apos;s creates a balance and strives to
            develop and unearth the intrinsic potential and capability of the
            students, thereby preparing them to take on global challenges.
            <br />
            <br />
            Our vision is to make Tula a centre of excellence in learning,
            innovation, technology, agriculture, and management. Every student
            is nurtured holistically. The result is young entrepreneurs who are
            ready for the workforce. Students at Tula&apos;s envision becoming
            employers and creating jobs for others. The entire education process
            at Tula&apos;s is designed from the very first day onward, from
            making the student feel at home to equipping the student to be
            productive in industry and society. Our Institute has good relations
            with leading Universities of the world, giving Tulaites an edge over
            other students elsewhere. Tula&apos;s is recognised for having state
            of the art infrastructure.
          </p>
        </div>
      )}
    </>
  );
}
