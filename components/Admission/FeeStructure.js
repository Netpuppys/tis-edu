"use client";
import React from "react";
import Image from "next/image";
import yellowLine from "../../public/pictures/lineImg.png";
import Header from "../globalComponents/Header/Header";
import feesFlow from "../../public/pictures/fees-flow.png";
import HeaderFeesImg from "../../public/Banner/feeStructure.webp";
import HeaderFeesImgMobile from "../../public/Banner/feeStructureMobile.webp";
import feesIndia from "../../public/pictures/fee-structureIndia.png";
import feesForeign from "../../public/pictures/fee-structureForeign.png";
import FeesIndia from "../../public/MandatoryPDF/TIS-FEE-STRUCTURE-2024-25.pdf";
import FeesNRI from "../../public/MandatoryPDF/NRI-TIS-FEE-STRUCTURE.pdf";
import { useMobile } from "../globalComponents/IsMobileContext";

function FeeStructure() {
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
        headerImgMobile={HeaderFeesImgMobile}
        title={"Fee Structure"}
        subtitle={
          "Every parent dreams of the best for their child, and at Tula's International School we ensure that the dream is within reach with a fee structure that’s fair and transparent."
        }
      />

      <div className="w-[90%] md:w-[60%] pt-8 md:pt-14 mx-auto text-[clamp(20px,6.5vw,50px)] md:text-[clamp(20px,2.5vw,50px)] mt-4 text-center font-bold font-[Mirador800]">
        {heading}
        <Image
          className="w-fit ml-auto md:mr-20 max-w-[60%]"
          src={yellowLine}
          alt=""
        />
      </div>
      {/* <Image src={feesFlow} alt="" className="w-[90%] md:w-[80%] mx-auto" /> */}
      <div className="flex mx-auto w-[90%] md:w-[80%] flex-col md:flex-row items-center justify-center pt-8 gap-8">
        <div className="w-full">
          <Image
            onClick={() => window.open(FeesIndia, "_blank")}
            src={feesIndia}
            alt=""
          />
        </div>
        <div className="w-full">
          <Image
            onClick={() => window.open(FeesNRI, "_blank")}
            src={feesForeign}
            alt=""
          />
        </div>
      </div>

      <div className="py-8 md:py-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Mode of <span className="text-[#b90124]">Payment</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[60%] mx-auto rounded-3xl mt-4 md:mt-8 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          <ul className="ml-5 list-disc">
            <li>
              The parent can deposit the fee through Demand Draft in the favour
              of TULA’S INTERNATIONAL SCHOOL payable at Punjab National Bank,
              Dehradun. Please mention your ward’s name on the reverse of the
              Demand Draft.
            </li>
            <br />
            <li> The Fee can also be deposited by Cheque or Bank Transfer.</li>
          </ul>
        </h2>
      </div>
      <div className="py-8 md:py-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Bank Details
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[60%] text-center text-[#b90124] mx-auto rounded-3xl mt-4 md:mt-8 text-[clamp(15px,5vw,30px)] md:text-[clamp(18px,1.8vw,45px)]"
        >
          Bank Account Details to deposit the ‘School-Fee’
        </h2>
        <div
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="border-2 rounded-2xl flex md:items-center md:justify-center border-[#b90124] w-[90%] md:min-w-[60%] md:max-w-[900px] mx-auto overflow-scroll md:overflow-hidden mt-4 text-[15px] md:text-[clamp(18px,1.3vw,45px)]"
        >
          <div className="min-w-[180px] w-full md:min-w-[240px] md:w-[30%] shadow-[0px_4px_37.6px_0px_rgba(0,0,0,0.25)_inset] bg-[#b90124] text-white rounded-r-2xl">
            {data.map((data, index) => (
              <div
                key={index}
                className="p-2 md:p-4 border-b-2 border-[#b90124] last:border-0"
              >
                <div>{data.name}</div>
              </div>
            ))}
          </div>
          <div className="min-w-[370px] w-full md:w-[70%]">
            {data.map((data, index) => (
              <div
                key={index}
                className="p-2 md:p-4 border-b-2 border-[#b90124] last:border-0"
              >
                {data.amount}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeeStructure;
