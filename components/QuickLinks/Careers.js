import React from "react";
import Header from "../globalComponents/Header/Header";
import "../../styles/QuickLinks/Careers.css";
import HeaderCareerImg from "../../public/Banner/career.webp";
import HeaderCareerImgMobile from "../../public/Banner/careerMobile.webp";

export default function Careers() {
  return (
    <>
      <Header
        title={"Careers"}
        subtitle={
          "Explore exciting career opportunities at TIS for educators and professionals"
        }
        headerImg={HeaderCareerImg}
        headerImgMobile={HeaderCareerImgMobile}
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
          The Headmaster <br />
          Tula’s International School Dhoolkot, P.O – Selaqui, Chakrata Road,
          Dehradun-248011 (Uttarakhand)
        </p>
        <div className="career-current-opening">
          <h2>
            Current <span>Openings</span>
          </h2>
          <a
            target="_blank"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScv3l4HsHajZk-XUrKmgdf7ZDKp2noRUbSBffG47pjDG1bF6g/viewform"
            }
          >
            Faculty Positions
          </a>
          <a
            target="_blank"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScv3l4HsHajZk-XUrKmgdf7ZDKp2noRUbSBffG47pjDG1bF6g/viewform"
            }
          >
            Non-Faculty Positions
          </a>
          <a
            target="_blank"
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
