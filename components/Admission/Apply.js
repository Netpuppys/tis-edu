import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderApplyImg from "../../public/Header/HowToApplyHEader.png";
import "../../styles/Admission/Apply.css";
import yellowLine from "../../public/pictures/lineImg.png";
import Image from "next/image";

const Apply = () => {
  return (
    <>
      <Header
        title={"Admission Procedure"}
        subtitle={
          "The admission procedure at Tula's International School is straightforward and transparent, designed to ensure a seamless enrollment experience."
        }
        headerImg={HeaderApplyImg}
      />
      <div className="main-Apply">
        <p className="apply-above-text">
          Tula’s International School session commences in April for all the
          classes and ends on March 31st of the subsequent year. Prospectus &
          Registration Form can be purchased from the school admission office
          after registration or you can request it online and the prospectus
          will be couriered. The school has opened registrations from classes IV
          to IX and XI for the academic session 2024. A child seeking admission
          to class IV must have reached the age of 8 or above on or before March
          31st of the year in which admission is sought. The decision of the
          school authorities is final and binding. Any false or incorrect
          information furnished may jeopardize selection and enrollment.
        </p>
        <Image
          className="apply-img"
          src={HeaderApplyImg}
          alt="Admission Procedure"
        />
        <p className="Admission">
          Admission{" "}
          <span>
            Enquiry
            <Image
              className="yellow-line-heading"
              src={yellowLine}
              alt="Yellow Line"
            />
          </span>
        </p>
        <div className="enquiry-main">
          <p className="text-enquiry">
            Submit the online Enquiry Form given on website or visit the school
            admission office. After filling the form, we will get back to you to
            answer any of your queries.
          </p>
          <button id="extraedge-popup3" className="enquiry-button">
            Enquiry Form
          </button>
        </div>
        <p className="Admission">
          Registration
          <Image
            className="yellow-line-heading"
            src={yellowLine}
            alt="Yellow Line"
          />
        </p>
        <div className="enquiry-main">
          <p1 className="text-enquiry" style={{ textAlign: "left" }}>
            Registration and admission start for grades IV–IX and XI in the
            month of September. School academic session starts in the month of
            April every year. Hence registration application should reach the
            school before 31st March in the year that admission is sought.
            Filing and submitting of application form does not guarantee
            admission to the school. Admission would be finalized after a
            counseling session with the child and on the availability of seats.
            <br />
            <br />
            Limited vacancies may exist in the middle of the academic year.
            Information on mid-year vacancies may be obtained by emailing the
            school admission office. However, it is desirable that all admission
            formalities are completed well before the end of March.
            <br />
            <br />
            <button
              style={{ color: "#B90124", cursor: "pointer" }}
              id="extraedge-popup4"
              className="registration-for-all-class"
            >
              Click here
            </button>{" "}
            to register for All Classes.
            <br />
            <br />
            The registration form along with the school prospectus is available
            in the school office or you can apply online also. Complete
            registration form along with the registration fees should be
            submitted in favor of Tula’s International School, Dehradun.
            Registration Fees once paid is neither refundable nor transferable
            under any circumstances.
          </p1>
        </div>
        <p className="Admission">
          Tula’s Common <span>Aptitude </span>
          Assesment
          <Image
            className="yellow-line-heading"
            src={yellowLine}
            alt="Yellow Line"
          />
        </p>
        <div className="enquiry-main">
          <p1 className="text-enquiry" style={{ textAlign: "left" }}>
            Tula’s International School offers admission through Online &
            Offline “Tula’s Common Aptitude Assessment”. After T.C.A.A admission
            letter (Granted / Not Granted) is emailed within 3 days depending on
            the performance of the Student.
            <br />
            <br />
            <button
              style={{
                color: "#B90124",
                cursor: "pointer",
              }}
              id="extraedge-popup5"
              className="registration-button"
            >
              Click here
            </button>{" "}
            for Registration
            <br />
            <br />
            Parents have to pay the Confirmation fee within 10 days of admission
            letter to avoid cancelation of seat. Confirmation letter will be
            emailed thereafter.
            <br />
            <br />
            Criteria for T.C.A.A.
            <br />
            <br />
            1. Each subject is 25 marks.
            <br />
            2. The question paper is MCQ based.
            <br />
            3. In case of poor performance, we will conduct an interview test of
            the child within 5 days
            <br />
            4. Two years of grade cards should be submitted before the
            Interview.
            <br />
          </p1>
        </div>
      </div>
      <p className="Admission">
        Documents{" "}
        <span>
          Required
          <Image
            className="yellow-line-heading"
            src={yellowLine}
            alt="Yellow Line"
          />
        </span>
      </p>
      <div className="enquiry-main-documents">
        <p1 className="text-enquiry" style={{ textAlign: "left" }}>
          Once the admission is confirmed you have to pay the applicable fees
          along with the below-mentioned documents: <br />
          <br />
          <span>
            <ul>
              <li>Attested photocopy of Mark-Sheet/ Report Card</li>
              <li>Attested photocopy of Birth Certificate</li>
              <li>Original Transfer Certificate</li>
              <li>Passport is Mandatory </li>
              <li>Photocopy of Address & Identity proof </li>
              <li>5 Recent passport size photographs of the child </li>
              <li>1 Passport size photograph of father and mother </li>
              <li>1 Passport size photograph of local guardian (if any)</li>
            </ul>
          </span>
        </p1>
      </div>
      <p className="Admission">
        Final
        <Image
          className="yellow-line-heading"
          src={yellowLine}
          alt="Yellow Line"
        />
      </p>
      <div className="enquiry-main">
        <p className="text-enquiry" style={{ textAlign: "left" }}>
          Admission is confirmed only after receiving the amount of the fee.
          Students are admitted on a First Come First Serve basis, depending on
          the availability of seats in the particular class.
        </p>
      </div>
    </>
  );
};

export default Apply;
