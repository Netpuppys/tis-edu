"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import "../../styles/MandatoryDisclosure/MandatoryDisclosure.css";
import HeaderMandatoryImg from "../../public/Banner/mandatoryDisclosure.webp";
import HeaderMandatoryImgMobile from "../../public/Banner/mandatoryDisclosureMobile.webp";
import MandatoryDisclosureFile from "../../public/newpdf/Mandatory Disclosure Details _ SARAS 7.0.pdf";
import AffiliationExtension from "../../public/newpdf/Copies of Affiliation and Extension.pdf";
import TrustCopies from "../../public/newpdf/Copies of Trust.pdf";
import NOC from "../../public/newpdf/Copy of NOC.pdf";
import RecognitionCertificate from "../../public/newpdf/Copy of Recognition Certificate.pdf";
import BuildingSafetyCertificate from "../../public/newpdf/Copy of Valid Building Safety Certificate.pdf";
import FireSafetyCertificate from "../../public/newpdf/Copy of Fire Safety Certificate.pdf";
import WaterHealthSanitation from "../../public/newpdf/Copy of Water, Health, and Sanitation.pdf";
import FeeStructure from "../../public/newpdf/Fee Structure of the School.pdf";
import AnnualAcademicCalendar from "../../public/newpdf/Annual Academic Calender.pdf";
import SchoolManagementCommittee from "../../public/newpdf/List of School Management Committee.pdf";
import ParentsTeacherAssociation from "../../public/newpdf/List of parents Teacher Association.pdf";
import LastThreeYearResult from "../../public/newpdf/Last Three Year Result.pdf";
import { Download } from "@mui/icons-material";
import pdfIcon from "../../public/MandatoryPDF/PDFicon.png";
import Image from "next/image";
export default function MandatoryDisclosure() {
  const documents = [
    { name: "Mandatory Disclosure file", link: MandatoryDisclosureFile },
    { name: "Copies of Affiliation and Extension", link: AffiliationExtension },
    { name: "Copies of Trust", link: TrustCopies },
    { name: "Copy of NOC", link: NOC },
    { name: "Copy of Recognition Certificate", link: RecognitionCertificate },
    { name: "Copy of Valid Building Safety Certificate", link: BuildingSafetyCertificate },
    { name: "Copy of Fire Safety Certificate", link: FireSafetyCertificate },
    { name: "Copy of Water, Health, and Sanitation", link: WaterHealthSanitation },
    { name: "Fee Structure of the School", link: FeeStructure },
    { name: "Annual Academic Calender", link: AnnualAcademicCalendar },
    { name: "List of School Management Committee", link: SchoolManagementCommittee },
    { name: "List of parents Teacher Association", link: ParentsTeacherAssociation },
    { name: "Last Three Year Result", link: LastThreeYearResult },
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
