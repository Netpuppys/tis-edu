"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderScholarShipImg from "../../public/Banner/scholarship.webp";
import HeaderScholarShipImgMobile from "../../public/Banner/scholarshipMobile.webp";
import yellowLine from "../../public/pictures/lineImg.png";
import "../../styles/Admission/Tution.css";
import Image from "next/image";
import megha from "../../public/pictures/magha.png";
import shubham from "../../public/pictures/shubham.png";
import kushi from "../../public/pictures/kushi.png";
import nihal from "../../public/pictures/nihal.png";
import petal1 from "../../public/pictures/petal.png";
import { useMobile } from "../globalComponents/IsMobileContext";

function TutionAndFianance() {
  const data = [
    {
      image: megha,
      title: "MEGHA SARKAR",
      description: (
        <>
          The objective of Leelavati Memorial Scholarship is to provide
          financial assistance to promote girl child education in India. These
          scholarships for girls are intended to encourage girl students to not
          only attend school, but to succeed thereafter. Transferred from
          Tripura to Dehradun on the basis of academic performance, Megha Sarkar
          proved the school’s decision right and scored 10 CGPA in her 10th
          class CBSE board exams.
        </>
      ),
    },
    {
      image: shubham,
      title: "SHUBHAM",
      description: (
        <>
          When you focus on problems you will have more problems, when you focus
          on possibilities you will have more opportunities. Master Shubham was
          searching for the same kind of the opportunity where he could get a
          platform to prove himself. He had a face to face interaction with the
          Director and with his excellent skills, he availed a scholarship. He
          was an excellent football player and also changed his discipline from
          CIE to CBSE and we supported him in his decision by giving him a high
          amount of scholarship for the coming two years. Making the decision
          right he emerged as the torch bearer of the school, becoming the Head
          Boy and proudly performing his duties.
        </>
      ),
    },
    {
      image: kushi,
      title: "KUSHI SINGHANIA",
      description: (
        <>
          On the basis of good academic performance in her previous school in
          Kathmandu, Nepal, she became eligible for a scholarship and was
          admitted to the school.
        </>
      ),
    },
    {
      image: nihal,
      title: "NIHAL JAISWAL",
      description: (
        <>
          As a single parent, paying for school can be really difficult. Single
          parent scholarships are especially beneficial for single mothers who
          sometimes have to give up on their and their child’s academic dreams
          because of the financial constraints. Master Nihal Jaiswal is one of
          the students who got this chance and was given a healthy scholarship
          from the management. We brought a smile on his and his mother’s face
          which shows the school’s commitment to the society.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Scholarship Programs"}
        headerImg={HeaderScholarShipImg}
        headerImgMobile={HeaderScholarShipImgMobile}
        subtitle={
          "At Tula’s International School, scholarships are more than financial aid—they’re our commitment to recognizing the dedication and ambition of students with the potential to excel."
        }
      />
      <div className="pt-8 md:pt-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Scholarship &{" "}
          <span className="text-[#b90124]">
            Concession Policy
            <Image
              className="ml-auto w-fit max-w-[60%]"
              src={yellowLine}
              alt=""
            />
          </span>
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[60%] mx-auto mt-4 md:mt-8 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          At Tula’s, our scholarship selection process is focused on recognizing
          excellence in academics, sports, and the creative & performing arts.
          We also award scholarships to students who go beyond their
          achievements, demonstrating exceptional character, integrity,
          leadership, and a strong alignment with the values that define our
          school community.
        </h2>
      </div>
      <div className="pt-8 md:pt-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Tula’s Scholarship Assessment{" "}
          <span className="text-[#b90124]">
            (T.S.A.)
            <Image
              className="ml-auto w-fit max-w-[60%]"
              src={yellowLine}
              alt=""
            />
          </span>
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[60%] mx-auto mt-4 md:mt-8 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          TIS provides various scholarship programs for Academic & Sports based
          student.  All candidates with exceptional Academic or Sports records
          can apply for this scholarship.
          <br />
          <br />
          <strong className="font-[TTChocolatesBold]">Eligibility:-</strong>
          <br />
          <br />
          <ol className="ml-5 list-decimal mb-5">
            <li>
              2 years of academic report card / Sports certificates (State &
              National)
            </li>
            <li>
              Need to qualify for Tula’s Scholarship Assessment (T.S.A.) with
              95% and Interview for an academic scholarship.
            </li>
            <li>
              Candidate applying for Sports Scholarship has to obtain 75%
              in S.A.
            </li>
            <li>
              Interview with Academic Supervisor/ Dean of Admission /Head of
              Sports
            </li>
          </ol>
          <table className="scholarship-table">
            <thead>
              <tr>
                <th>Scholarship</th>
                <th style={{ borderRight: "none" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Academic Scholarship *</td>
                <td style={{ borderRight: "none" }}>Upto Rs. 1,00,000</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "none" }}>Sports Scholarship *</td>
                <td style={{ borderRight: "none", borderBottom: "none" }}>
                  Upto Rs. 1,00,000
                </td>
              </tr>
            </tbody>
          </table>
        </h2>
      </div>
      <div className="pt-8 md:pt-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Tula’s Concession{" "}
          <span className="text-[#b90124]">
            Policy
            <Image
              className="ml-auto w-fit max-w-[60%]"
              src={yellowLine}
              alt=""
            />
          </span>
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[60%] mx-auto border-2 rounded-3xl mt-4 md:mt-8 p-8 md:p-14  border-[#b90124] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          <table className="scholarship-table">
            <thead>
              <tr>
                <th>Concession</th>
                <th style={{ borderRight: "none" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sibling Concession *</td>
                <td style={{ borderRight: "none" }}>Rs 60,000</td>
              </tr>
              <tr>
                <td>Serving Defense Person *</td>
                <td style={{ borderRight: "none" }}>Rs 60,000</td>
              </tr>
              <tr>
                <td>Single Parent *</td>
                <td style={{ borderRight: "none" }}>Rs 60,000</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "none" }}>
                  Alumni & Alumni Reference *
                </td>
                <td style={{ borderRight: "none", borderBottom: "none" }}>
                  Rs 60,000
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <strong className="font-[TTChocolatesBold]">
            Alumna & Alumni Reference:
          </strong>{" "}
          <br />
          <br /> Tula’s International School welcomes all family members
          referred by our proud Alumna & Alumni. To avail concession, kindly
          email an admission request with Name & Batch Year of our Alumni &
          Alumna. Email at{" "}
          <a
            style={{ color: "#B90124" }}
            href={"mailto:robin.chhetri@tis.edu.in"}
          >
            robin.chhetri@tis.edu.in
          </a>
          <br />
          <br />
          <strong className="font-[TTChocolatesBold]">*Note - </strong>
          <br />
          <br />
          <ol className="list-decimal ml-5">
            <li>
              Limited seats are available for approval by the School Management
              for each category of fee concession& Scholarship.
            </li>
            <li>
              Fee Concession is subjected to fee concession policy which can be
              made available on request to the school management (available only
              after joining).
            </li>
            <li>Only one concession could be availed at any given time.</li>
            <li>
              After above eligibility, School Management holds all decision for
              scholarship program with limited seat for 20 Students.
            </li>
            <li>
              {" "}
              Parent’s need to email Dean of Admissions{" "}
              <a
                style={{ color: "#B90124" }}
                href={"mailto:robin.chhetri@tis.edu.in"}
              >
                (robin.chhetri@tis.edu.in)
              </a>{" "}
              to avail Tula’s Concession policy.
            </li>
            <li>Child need to qualify for</li>
            <li>The scholarship will be provided from One Time Fees.</li>
          </ol>
          <br />
          Few of the scholarships offered in the previous years.
        </h2>
      </div>
      <div className="flex w-[40%] items-center justify-center mx-auto py-6 md:py-14">
        <div className="w-2 h-2 bg-[#b90124] aspect-square rounded-full"></div>
        <div className="h-[2px] w-full bg-[#b90124]"></div>
        <div className="w-2 h-2 bg-[#b90124] aspect-square rounded-full"></div>
      </div>
      <h2
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-[90%] md:w-[60%] mx-auto text-center text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
      >
        WE ARE PROUD THAT WE COULD MAKE A DIFFERENCE TO THE LIVES OF THESE
        CHILDREN AND THEIR PARENTS AND WILL CONTINUE TO DO SO IN THE UPCOMING
        YEARS
      </h2>
      <div
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full md:w-[70%] mx-auto py-6 md:py-14"
      >
        {data.map((data, index) => (
          <div
            key={index}
            className={`flex items-center justify-center pb-10 gap-8 ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }`}
          >
            <div className="flex items-end w-fit">
              <Image src={petal1} className="w-[30%]" alt=" " />
              <Image src={data.image} alt="" className="rounded-full w-fit" />
            </div>
            <h2 className="w-[90%] md:w-full mx-auto text-[clamp(15px,4vw,30px)] md:text-[clamp(14px,1.1vw,45px)]">
              {data.description}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
//

export default TutionAndFianance;
