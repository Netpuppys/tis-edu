"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderScholarShipImg from "../../public/Header/ScholarshipHeader.png";
import yellowLine from "../../public/YellowLineTitle.png";
import "../../styles/Admission/Tution.css";
import megha from "../../public/pictures/magha.png";
import Image from "next/image";
import shubham from "../../public/pictures/shubham.png";
import kushi from "../../public/pictures/kushi.png";
import nihal from "../../public/pictures/nihal.png";
import { useMobile } from "../globalComponents/IsMobileContext";
import Link from "next/link";
function TutionAndFianance() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Scholarship Programs"}
        headerImg={HeaderScholarShipImg}
        subtitle={
          "Tula's International School provides various scholarship programs to support and recognize student excellence."
        }
      />
      <div className="ScholarshipPolicy">
        <div className="main-title">
          <br />
          Scholarship &{" "}
          <span>
            Concession Policy
            <Image className="yellow-line-title" alt="" src={yellowLine} />
          </span>
        </div>
        <div className="text-box">
          <p className="text">
            ”Our selection process is designed to recognize meritorious students
            in the field of Academic, Sports, Creative & Performing Arts. 
            Tula’s also offers “Scholarship” – to top students who exhibit
            additional qualities such as exemplary character, integrity,
            leadership and will share the values of our school community.” –
            Robin Kumar Chhetri (Dean of Admissions)
          </p>
        </div>
      </div>
      <div className="ScholarshipPolicy">
        <div className="main-title">
          <br />
          Tula’s Scholarship Assessment{" "}
          <span>
            (T.S.A.)
            <Image className="yellow-line-title" alt="" src={yellowLine} />
          </span>
        </div>
        <div className="text-box">
          <p className="text">
            TIS provides various scholarship programs for Academic & Sports
            oriented students.  All candidates with exceptional Academic or
            Sports records can apply for this scholarship.
            <br />
            <br />
            <span>Eligibility:-</span>
            <br />
            <br />
            1. 2 years of academic report card / Sports certificates (State &
            National)
            <br /> 2. Need to qualify for Tula’s Scholarship Assessment
            (T.S.A.) with 95% and Interview for an academic scholarship.
            <br />
            3. Candidate applying for Sports Scholarship has to obtain 75%
            in S.A.
            <br />
            4. Interview with Academic Supervisor/ Dean of Admission /Head of
            Sports
          </p>
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
        </div>
      </div>
      <div className="ScholarshipPolicy">
        <div className="main-title">
          <br />
          Tula’s Concession{" "}
          <span>
            Policy
            <Image className="yellow-line-title" alt="" src={yellowLine} />
          </span>
        </div>
        <div className="text-box">
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

          <p className="text">
            <span>Alumna & Alumni Reference:</span> <br />
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
            <span>*Note - </span>
            <br />
            <br />
            1. Limited seats are available for approval by the School Management
            for each category of fee concession& Scholarship.
            <br />
            2. Fee Concession is subjected to fee concession policy which can be
            made available on request to the school management (available only
            after joining).
            <br />
            3. Only one concession could be availed at any given time.
            <br />
            4. After above eligibility, School Management holds all decision for
            scholarship program with limited seat for 20 Students.
            <br />
            5. Parent’s need to email Dean of Admissions{" "}
            <a
              style={{ color: "#B90124" }}
              href={"mailto:robin.chhetri@tis.edu.in"}
            >
              (robin.chhetri@tis.edu.in)
            </a>{" "}
            to avail Tula’s Concession policy.
            <br />
            6. Child need to qualify for
            <br />
            7. The scholarship will be provided from One Time Fees.
            <br />
            <br />
            Few of the scholarships offered in the previous years.
          </p>

          <br />
        </div>
      </div>
      {!isMobile && (
        <div className="lineScholar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="431"
            height="12"
            viewBox="0 0 431 12"
            fill="none"
          >
            <path
              d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM420.167 6C420.167 8.94552 422.554 11.3333 425.5 11.3333C428.446 11.3333 430.833 8.94552 430.833 6C430.833 3.05448 428.446 0.666667 425.5 0.666667C422.554 0.666667 420.167 3.05448 420.167 6ZM6 7H425.5V5H6V7Z"
              fill="#B90124"
            />
          </svg>
        </div>
      )}
      <div className="main-heading-text">
        WE ARE PROUD THAT WE COULD MAKE A DIFFERENCE TO THE LIVES OF THESE
        CHILDREN AND THEIR PARENTS AND WILL CONTINUE TO DO SO IN THE UPCOMING
        YEARS
      </div>
      <Image className="imgStudent" alt="" src={megha} />
      <Image className="imgStudent" alt="" src={shubham} />
      <Image className="imgStudent" alt="" src={kushi} />
      <Image className="imgStudent" alt="" src={nihal} />
    </>
  );
}
//

export default TutionAndFianance;
