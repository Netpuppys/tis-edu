"use client";
import React from "react";
import Image from "next/image";
import yellowLine from "../../public/pictures/lineImg.png";
import Header from "../globalComponents/Header/Header";
import HeaderFeesImg from "../../public/Header/FeesStructureHeader.png";
import "../../styles/Admission/FeeStructure.css";
import feesIndia from "../../public/pictures/fee-structureIndia.png";
import feesForeign from "../../public/pictures/fee-structureForeign.png";
import { useMobile } from "../globalComponents/IsMobileContext";
import FeesIndia from "../../public/MandatoryPDF/TIS-FEE-STRUCTURE-2024-25.pdf";
import FeesNRI from "../../public/MandatoryPDF/NRI-TIS-FEE-STRUCTURE.pdf";
import yellowlineHeading from "../../public/YellowLineHeading.svg";
const Table = () => {
  const data = [
    { name: "Bank Name-", amount: "PUNJAB NATIONAL BANK" },
    {
      name: "Bank Address:",
      amount: "NEHRU COLONY, DEHRADUN, UTTARAKHAND, INDIA",
    },
    { name: "Account Name:", amount: "TULA’S INTERNATIONAL SCHOOL, DEHRADUN" },
    { name: "Current Account Number:", amount: "51881131003528" },
    { name: "IFSC Code:", amount: "PUNB0518810" },
    { name: "MICR Code:", amount: "248024059" },
    { name: "SWIFT Code:", amount: "PUNBINBBDPR" },
  ];
  const { isMobile } = useMobile();

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: isMobile ? "100%" : "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <thead>
        <tr></tr>
      </thead>
      <tbody
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {data.map((item, index) => (
          <tr key={index}>
            <td
              style={{
                textAlign: "left",
                padding: isMobile ? "8px" : "20px",
                color: "#b90124",
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                textAlign: "left",
                padding: isMobile ? "8px" : "20px",
                color: "#000",
              }}
            >
              {item.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
function FeeStructure() {
  const { isMobile } = useMobile();

  const heading = (
    <>
      Fee Structure of Boarding School in Dehradun for the{" "}
      <span>Academic year 2024 - 25</span>
    </>
  );
  return (
    <>
      <Header
        headerImg={HeaderFeesImg}
        title={"Fee Structure"}
        subtitle={
          "Tula's International School offers a clear and comprehensive fee structure, ensuring transparency for all families."
        }
      />

      <div className="fees">
        {heading}
        <Image className="yellow-line-heading" src={yellowLine} alt="" />
      </div>
      <br />
      {!isMobile && <br />}
      <br />
      <p className="fees-text">
        The fees include school fee, imprest money, one-time fee and a security
        deposit. The school fee includes boarding & lodging, tuition, textbooks,
        extracurricular fee and basic laundry.
      </p>
      {!isMobile && <br />}
      {!isMobile && <br />}
      {!isMobile && <br />}
      <div className="fees-structure">
        <Image
          onClick={() => window.open(FeesIndia, "_blank")}
          className="fee-India"
          src={feesIndia}
          alt=""
        />
        <Image
          onClick={() => window.open(FeesNRI, "_blank")}
          className="fee-Foreign"
          src={feesForeign}
          alt=""
        />
      </div>
      <div className="feeee">
        <h2>
          Mode of{" "}
          <span>
            Payment
            <Image src={yellowlineHeading} alt="" />
          </span>
        </h2>
        <div className="redbox">
          <ul>
            <li>
              The parent can deposit the fee through Demand Draft in the favour
              of TULA’S INTERNATIONAL SCHOOL payable at Punjab National Bank,
              Dehradun. Please mention your ward’s name on the reverse of the
              Demand Draft.
            </li>
            <br />
            <li> The Fee can also be deposited by Cheque or Bank Transfer.</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="feeee">
        <h2>
          Bank Details
          <Image src={yellowlineHeading} alt="" />
        </h2>
        <div className="redboxBank">
          <span>Bank Account Details to deposit the ‘School-Fee’</span>
          <br />
          <br />

          <Table />
        </div>
      </div>
    </>
  );
}

export default FeeStructure;
