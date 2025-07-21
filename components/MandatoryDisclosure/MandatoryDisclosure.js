"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import "../../styles/MandatoryDisclosure/MandatoryDisclosure.css";
import HeaderMandatoryImg from "../../public/Banner/mandatoryDisclosure.webp";
import HeaderMandatoryImgMobile from "../../public/Banner/mandatoryDisclosureMobile.webp";
import Affiliation from "../../public/MandatoryPDF/Affiliation-ana-Extention.pdf";
import Building from "../../public/MandatoryPDF/building-safety-certificate.pdf";
import FeesStructure from "../../public/MandatoryPDF/Fee-Structure.pdf";
import TrustRegistration from "../../public/MandatoryPDF/Trust-Registration.pdf";
import NOC from "../../public/MandatoryPDF/NOC-by-State-Govt.pdf";
import SchoolManagingCommittee from "../../public/MandatoryPDF/School-Managing-Committee.pdf";
import SchoolCalendar from "../../public/MandatoryPDF/school-calendar.pdf";
import MandatoryDisclosurePDF from "../../public/MandatoryPDF/Mandatory-Public-Disclosure-1.pdf";
import ParentsTeacher from "../../public/MandatoryPDF/Parents-Teachers-Association.pdf";
import DeoCertificate from "../../public/MandatoryPDF/DEO-Certificate.pdf";
import LastThree from "../../public/MandatoryPDF/Last-Three-Year-Result.pdf";
import FireSafety from "../../public/MandatoryPDF/Fire-Safety.pdf";
import Water from "../../public/MandatoryPDF/Water-Healty-and-Sanitation-Certificate.pdf";
import RTE from "../../public/MandatoryPDF/RTE-Letter.pdf";
import Teaching from "../../public/MandatoryPDF/teaching-staff-list.pdf";
import { Download } from "@mui/icons-material";
import pdfIcon from "../../public/MandatoryPDF/PDFicon.png";
import Image from "next/image";
export default function MandatoryDisclosure() {
  const documents = [
    { name: "Affiliation and Extension", link: Affiliation },
    { name: "Building Safety Certificate", link: Building },
    { name: "Fee Structure", link: FeesStructure },
    { name: "Trust Registration", link: TrustRegistration },
    { name: "NOC by State Govt", link: NOC },
    { name: "School Managing Committee", link: SchoolManagingCommittee },
    { name: "School Calendar", link: SchoolCalendar },
    { name: "Mandatory Disclosure", link: MandatoryDisclosurePDF },
    { name: "Parents Teachers Association", link: ParentsTeacher },
    { name: "DEO Certificate", link: DeoCertificate },
    { name: "Last Three Year Result", link: LastThree },
    { name: "Fire Safety", link: FireSafety },
    { name: "Water, Health and Sanitation Certificate", link: Water },
    { name: "RTE Letter", link: RTE },
    { name: "Teaching Staff", link: Teaching },
  ];

  return (
    <>
      <Header
        title={"Mandatory Disclosure"}
        subtitle={
          "TIS sparks journey of the mind that guide students throughout their lives"
        }
        headerImg={HeaderMandatoryImg}
        headerImgMobile={HeaderMandatoryImgMobile}
      />
      <div className="container-mandatory">
        <div className="grid">
          {documents.map((document) => (
            <div className="card-mandatory " key={document.name}>
              <div className="card-content">
                <Image src={pdfIcon} alt="PDF icon" />
                <h3>{document.name}</h3>
                <button
                  onClick={() => window.open(document.link, "_blank")}
                  className="download-button"
                >
                  <Download />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
