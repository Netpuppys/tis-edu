"use client";
import React from "react";
import Header from "../../globalComponents/Header/Header";
import HeaderInfirmaryImg from "../../../public/Banner/infirmary.webp";
import HeaderInfirmaryMobileImg from "../../../public/Banner/infirmaryMobile.webp";
import { useMobile } from "../../globalComponents/IsMobileContext";
import yellowLine from "../../../public/pictures/lineImg.png";
import Image from "next/image";
import background from "../../../public/mentor/background.webp";
import max from "../../../public/infirmary/max.png";
import gems from "../../../public/infirmary/gems.png";
import subharti from "../../../public/infirmary/subharti.png";
import image1 from "../../../public/infirmary/image1.png";
import image2 from "../../../public/infirmary/image2.png";
import image3 from "../../../public/infirmary/image3.png";
import kapil from "../../../public/infirmary/kapil.png";
import jyoti from "../../../public/infirmary/jyoti.png";
import pritam from "../../../public/infirmary/pritam.png";
import shanu from "../../../public/infirmary/shanu.png";
const Table = () => {
  const { isMobile } = useMobile();
  const data = [
    {
      name: "Dr. Kapil Arora",
      description: "MBBS",
    },
    {
      name: "Dr. Jyoti Chand Kalakoti",
      description: "MDS",
    },
    {
      name: "Pritam Singh",
      description: "NURSING HEAD",
    },
    {
      name: "Pooja Chauhan",
      description: "NURSING OFFICER",
    },
    {
      name: "Sapna Rawat",
      description: "NURSING OFFICER",
    },
    {
      name: "Dr. Shanu Panwar",
      description: "PHYSIOTHERAPIST",
    },
    {
      name: "Praveen Thapliyal",
      description: "WARDBOY",
    },
    {
      name: "Mohit",
      description: "WARDBOY",
    },
  ];

  return (
    <table
      style={{
        fontFamily: "TT Chocolates",
      }}
      className="w-full leading-tight"
    >
      <thead>
        <tr>
          <th className="text-[clamp(10px,5.5vw,50px)] w-[50%] border-b bg-[#b90124] border-white border-collapse p-3 text-center md:text-[clamp(10px,2vw,50px)] font-[Mirador800] text-white">
            Name Of Staff
          </th>
          <th className="text-[clamp(10px,5.5vw,50px)] w-[50%] border-b border-[#b90124] border-collapse p-3 text-center md:text-[clamp(10px,2vw,50px)] font-[Mirador800] text-[#b90124]">
            Designation
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td
              className={`text-[clamp(10px,4vw,30px)] ${
                index === data.length - 1 ? "border-none" : "border-b"
              } bg-[#b90124] border-white text-white border-collapse p-2 md:p-3 text-center font-normal md:text-[clamp(10px,1vw,45px)]`}
            >
              {item.name}
            </td>
            <td
              className={`text-[clamp(10px,4vw,30px)] w-full ${
                index === data.length - 1 ? "border-none" : "border-b"
              } border-[#b90124] text-[#b90124] border-collapse p-2 md:p-3 text-center font-bold md:text-[clamp(10px,1vw,45px)]`}
            >
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function Infirmary() {
  const { isMobile } = useMobile();
  const button = ["ECG", "PHYSIOTHERAPY", "DENTAL", "EYE CHECKUP", "BMI"];
  const logos = [
    { title: "Max Healthcare", logo: max },
    { title: "Graphics Era Institute Of Medical Sciences", logo: gems },
    { title: "Subharti Hospital", logo: subharti },
  ];
  const doctors = [
    {
      name: "Dr. Kapil Arora",
      title: "MBBS",
      description:
        "Consultant physician of prestigious organizations like Reserve Bank of India, Dehradun NABARD, Dehradun. TIS Dehradun, Eden senior living Dehradun. I was Associated as Consultant in Apollo hospital Dehradun from 2010 to 2017 and nephroplus hospital Dehradun from 2017 to 2023. I have over 14 years of clinical experience. I am also examiner in various medical universities and have been visiting as guest lecture is various medical and paramedical university.",
      image: kapil, // Replace with actual image URL
    },
    {
      name: "Dr. Jyoti Chand Kalakoti",
      title: "Dentist",
      description:
        "Completed both BDS and MDS from reputed colleges in India. She specializes in periodontology and oral implantology, and she has over 14 Year of clinical expertise where she has worked in multiple private, corporate and Gov.t institutions, she is currently serving as a dental officer in ECHS policlinic.",
      image: jyoti, // Replace with actual image URL
    },
    {
      name: "Pritam Singh",
      title: "Nursing Head",
      description:
        "A seasoned nursing professional with an illustrious career spanning 24 years in the Army Medical Corps. Worked at prestigious military hospitals including Army Hospital R&R, Military Hospital Shimla & Military Hospital Roorkee served in South Africa for 1 year under UN Mission worked in J&K area providing medical aid, operational deployments, Conducting evacuation and first-aid operations in hostile.",
      image: pritam, // Replace with actual image URL
    },
    {
      name: "Dr. Shanu Panwar",
      title: "Physiotherapist",
      description:
        "Physiotherapist at TIS for the past one and a half years. I completed my Bachelor of Physiotherapy from Doon Group of College, Dehradun, and did my internship at Fortis Hospital, Noida. During this period, I gained excellent knowledge and experience in Neuro rehab, Cardiopulmonary rehab, Sports rehab, musculoskeletal rehab, and Geriatric care.",
      image: shanu, // Replace with actual image URL
    },
  ];
  return (
    <>
      <Header
        title={"Wellness Infirmary "}
        subtitle={
          "At TIS, we handle all health emergencies swiftly, safely, and with care"
        }
        headerImgMobile={HeaderInfirmaryMobileImg}
        headerImg={HeaderInfirmaryImg}
      />
      <div className="py-8 md:py-[3%]">
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-center text-[clamp(15px,4.5vw,30px)] leading-tight md:text-[clamp(18px,1.3vw,45px)]"
        >
          At Tula’s, health and safety are at the heart of everything we do—it’s
          a shared responsibility we take seriously as parents and educators.
          <br />
          <br />
          Our Wellness Infirmary provides comprehensive care to ensure students
          feel their best, both physically and mentally. From routine check-ups
          to providing a comforting hand when needed, our team is here to
          support your child’s well-being with care and expertise.
          <br />
          <br />
          Should a situation arise that requires further medical attention,
          students are taken to the nearest hospital without delay, and parents
          are promptly informed. To help us provide personalized care, we
          encourage parents to share any specific health details about their
          child at the start of the school year.
          <br />
          <br />
          With Tula’s, you can rest assured that your child’s health is in
          caring and capable hands.
        </h2>
        <div className="py-8 md:py-[3%]">
          <h2 className="text-[30px] px-4 md:px-0 w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] leading-tight text-[#b90124] text-center font-[TTChocolates]">
            Hospital Collaborations
            <Image
              className="ml-auto w-fit max-w-[60%]"
              src={yellowLine}
              alt=""
            />
          </h2>
        </div>
        <div className="flex flex-col justify-center text-white rounded-lg overflow-hidden relative px-6 py-6 md:px-[2%] md:py-[2%] items-center w-[90%] md:w-[85%] mx-auto">
          <Image
            src={background}
            alt=""
            className="w-full absolute object-cover -z-10 h-full top-0"
          />
          <div className="flex justify-center items-center w-full gap-4 flex-wrap md:flex-nowrap">
            {button.map((button, index) => (
              <button
                key={index}
                className="py-1 rounded-full w-full md:w-[calc(20%-1rem)] px-4 text-[20px] md:text-[clamp(10px,1.5vw,50px)] leading-tight bg-white text-[#b90124] text-center font-[TTChocolates]"
              >
                {button}
              </button>
            ))}
          </div>
          <div className="flex pt-8 md:pt-[2%] justify-center items-start w-[80%] mx-auto gap-4 flex-wrap md:flex-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-[clamp(15px,4.5vw,30px)] text-center py-1 rounded-full w-full md:w-[calc(33.33%-1rem)] px-4 md:text-[clamp(10px,1.3vw,50px)] leading-tight font-[TTChocolates]"
              >
                <Image
                  src={logo.logo}
                  alt=""
                  className="w-fit mx-auto h-fit mb-2"
                />
                {logo.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex pt-8 md:pt-[3%] flex-col md:flex-row w-[90%] md:w-[85%] mx-auto justify-center items-center gap-4">
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image1}
            alt=""
          />
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image2}
            alt=""
          />
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image3}
            alt=""
          />
        </div>
        <div className="py-8 md:py-[3%]">
          <h2 className="text-[30px] px-4 md:px-0 w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] leading-tight text-[#b90124] text-center font-[TTChocolates]">
            Infirmary Staff
            <Image className="ml-auto w-[90%]" src={yellowLine} alt="" />
          </h2>
        </div>
        <div className="mx-auto w-[90%] md:w-[65%] pb-8 md:pb-[3%]">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="md:flex bg-[#EFEFEF] rounded-xl overflow-hidden mb-6"
            >
              <Image
                src={doctor.image}
                alt=""
                width={1000}
                height={1000}
                className="w-[70%] p-3 md:p-0 md:w-[20%] mx-auto rounded-full md:rounded-xl object-cover"
              />
              <div className="p-3 pt-0 md:p-[2%]">
                <h2 className="text-[clamp(10px,5vw,50px)] text-center md:text-[clamp(10px,1.3vw,50px)] leading-tight font-[TTChocolatesBold] rounded-full w-full md:w-fit p-2 md:px-[5%] md:py-[1%] bg-white font-bold text-[#b90124]">
                  {doctor.name}{" "}
                  <span className="font-[Mirador800]">- {doctor.title}</span>
                </h2>
                <p className="text-[#4C4C4C] text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,50px)] leading-tight mt-2">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] md:w-[65%] mx-auto border md:border-2 rounded-xl overflow-scroll md:overflow-hidden border-[#b90124]">
          <Table />
        </div>
      </div>
    </>
  );
}
