import React from "react";
import Header from "../globalComponents/Header/Header";
import "../../styles/QuickLinks/Careers.css";
import HeaderCareerImg from "../../public/Header/careerHeader.png";
import Link from "next/link";

export default function Careers() {
  return (
    <>
      <Header
        title={"Career"}
        subtitle={
          "Tula's International School offers rewarding career opportunities for dedicated educators and professionals."
        }
        headerImg={HeaderCareerImg}
      />
      <div className="careers-main">
        <p>
          <br />
          <br />
          Tula’s International School is a futuristic institution that
          endeavours to provide a better and brighter future to the younger
          generation. We ensure a learning experience for everyone who becomes a
          part of our team, be it a student or a staff member. We aim to create
          an ambience that promotes all-inclusive development. We believe in
          nurturing the young minds towards excellence and reshaping the field
          of education. We follow a Mind, Body and Soul approach. We bring
          together the values of Gurukul system and blend them with the
          progressive system of education. We work hard to strengthen the basic
          educational concepts of the children, who will lay the foundation of
          the future. The entire team of Tula’s International School perseveres
          to follow and spread the beliefs of the institution. We work towards
          setting a benchmark for boarding schools and leave no stone unturned
          in fulfil it. Join the Tula’s team to serve the society for a better
          tomorrow.
          <br />
          <br />
          <br />
        </p>
        <div className="bellow-line"></div>
        <h2>
          Employment <span>Opportunities</span>
        </h2>
        <p className="apply-text">
          To apply and become a part of the Tula’s team, download and complete
          the attached personal data form and post it to: <br />
          <br />
          The Director <br />
          Tula’s International School Dhoolkot, P.O – Selaqui, Chakrata Road,
          Dehradun (248011), Uttarakhand, India
        </p>
        <div className="career-current-opening">
          <h2>
            Current <span>Openings</span>
          </h2>
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScv3l4HsHajZk-XUrKmgdf7ZDKp2noRUbSBffG47pjDG1bF6g/viewform"
            }
          >
            Faculty Positions
          </a>
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScv3l4HsHajZk-XUrKmgdf7ZDKp2noRUbSBffG47pjDG1bF6g/viewform"
            }
          >
            Non-Faculty Positions
          </a>
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScv3l4HsHajZk-XUrKmgdf7ZDKp2noRUbSBffG47pjDG1bF6g/viewform"
            }
          >
            Faculty - General Inquiries
          </a>
          <br />
        </div>
      </div>
    </>
  );
}
