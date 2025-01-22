"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderWithdrawal from "../../public/Banner/withdrawalPolicy.webp";
import HeaderWithdrawalMobile from "../../public/Banner/withdrawalPolicyMobile.webp";
import yellowLine from "../../public/pictures/lineImg.png";
import Withdrawal from "../../public/MandatoryPDF/Withdrawal-Form.pdf";
import Image from "next/image";
export default function WidthrawalPolicy() {
  const data = [
    {
      name: "Registration Fee",
      before: "Non Refundable",
      after: "Non Refundable",
      withdrawal: "Non Refundable",
    },
    {
      name: "Admission Fee",
      before: "Non Refundable",
      after: "Non Refundable",
      withdrawal: "Non Refundable",
    },
    {
      name: "School fee (Recurring)Fee (IstTerm/ Installation )",
      before: "Refundable",
      after:
        "50% of the 1 st Term Fee shall be charged/forfeited in favour of the School",
      withdrawal:
        "If the student is withdrawn after 30th April, (irrespective of his/her date of joining i.e. before or after 30th April), the entire year fee shall be charged/ forfeited in favour of the School",
    },
    {
      name: "Recurring Fee (IIndTerm/ Installation )",
      before: "Refundable",
      after: "Refundable",
      withdrawal: "Non-Refundable",
    },
    {
      name: "Imprest Money",
      before: "Refundable after deduction of student personal expenses(if any)",
      after: "Refundable after deduction of student personal expenses(if any)",
      withdrawal:
        "Refundable after deduction of student personal expenses(if any)",
    },
    {
      name: "Security Deposit",
      before: "Refundable",
      after: "Refundable after adjustment of arrears if any",
      withdrawal: "Refundable after adjustment of arrears if any",
    },
  ];
  return (
    <>
      <Header
        title={"Withdrawal Policy"}
        subtitle={
          "TIS has a clear policy to guide parents on how to withdraw their child"
        }
        headerImg={HeaderWithdrawal}
        headerImgMobile={HeaderWithdrawalMobile}
      />
      <div className="pt-8 md:pt-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          New{" "}
          <span className="text-[#b90124]">
            Students
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
          className="w-[90%] md:w-[70%] mx-auto border-2 rounded-3xl mt-4 md:mt-8 p-8 md:p-14  border-[#b90124] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          Refund policy for new students. The withdrawal form in the prescribed
          format (available on the School website/PRO Office) should be filled
          only by the parent and be submitted to the PRO Office only. The
          receiving date at School of original copy of duly filled and signed
          withdrawal form, will be treated as the final date of withdrawal.
          Email the withdrawal form to{" "}
          <a
            style={{ color: "#B90124", cursor: "pointer" }}
            href="mailto:pro@tis.edu.in"
          >
            pro@tis.edu.in
          </a>
          ,{" "}
          <a
            style={{ color: "#B90124", cursor: "pointer" }}
            href="mailto:info@tis.edu.in"
          >
            info@tis.edu.in
          </a>
          . No verbal/telephonic intimation will be entertained.
          <br />
          <br />
          <div className="w-full md:w-[90%] mx-auto overflow-scroll">
            <table className="border border-black border-collapse  text-[clamp(14px,3vw,50px)] md:text-[clamp(10px,1.1vw,40px)] leading-normal">
              <thead>
                <tr>
                  <th className="p-3 border border-black">Particulars</th>
                  <th className="p-3 border border-black">
                    Before the beginning of the academic year i.e. 01st April
                  </th>
                  <th className="p-3 border border-black">
                    After the beginning of the academic year i.e. 01st April and
                    withdrawal before 30 th April
                  </th>
                  <th className="p-3 border border-black">
                    Withdrawal after 30 th April (irrespective of his/her date
                    of joining i.e. before or after 30th April)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="p-3 border border-black">{item.name}</td>
                    <td className="p-3  border border-black">{item.before}</td>
                    <td className="p-3  border border-black">{item.after}</td>
                    <td className="p-3  border border-black">
                      {item.withdrawal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </h2>
      </div>
      <div className="pt-8 md:pt-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Existing{" "}
          <span className="text-[#b90124]">
            Students
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
          className="w-[90%] md:w-[70%] mx-auto border-2 rounded-3xl mt-4 md:mt-8 p-8 md:p-14  border-[#b90124] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          <ul className="ml-5 list-disc">
            <li>
              Before withdrawing, it is mandatory to give us a minimum 3 months
              notice in writing (only on the prescribed format available on the
              School websites/PRO office) prior to the end of the academic year
              i.e. latest by 31st December.
            </li>
            <li>
              If the withdrawal notice is given after 31st December, three
              months fee (of the following academic year) shall be charged
              extra.
            </li>
            <li>
              In case of withdrawal any time after the commencement of the
              academic year i.e. 1st April, the fees for the full year shall be
              charged/forfeited in favour of the School.
            </li>
            <li>
              School Leaving Certificate (Transfer Certificate) will be issued
              only after clearance of dues and payment of amount in favour of
              the School.
            </li>
            <li>
              The withdrawal form in the prescribed format (available on the
              School website/PRO Office) should be filled only by the parent and
              be submitted to the PRO Office only. The receiving date at School
              of original copy of duly filled and signed withdrawal form, will
              be treated as the final date of withdrawal. No
              verbal/telephonic/e-mail intimation will be entertained. Email the
              withdrawal form to{" "}
              <a
                style={{ color: "#B90124", cursor: "pointer" }}
                href="mailto:pro@tis.edu.in"
              >
                pro@tis.edu.in
              </a>
              ,{" "}
              <a
                style={{ color: "#B90124", cursor: "pointer" }}
                href="mailto:info@tis.edu.in"
              >
                info@tis.edu.in
              </a>
            </li>
          </ul>
        </h2>
      </div>
      <div className="mt-8 md:mt-14 w-[90%] md:w-[70%] mx-auto border-[#b90124] border-2 rounded-3xl">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Note{" "}
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
          className=" p-8 md:p-14 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          <ul className="list-disc ml-5">
            <li>
              In case of withdrawal the refunds (if any) will be made after 6
              months from the date of withdrawal ( Including Security)
            </li>
            <li>The withdrawal form is available on school website.</li>
            <li>The security amount when refunded is interest free.</li>
            <li>
              School leaving certificate (Transfer Certificate) will be issued
              only after clearance of dues and payment of outstanding amount in
              favour of the school.
            </li>
            <li>
              Any arrears pertaining to fees, imprest, penalties, and other
              charges in the amount of the student shall be adjusted from the
              security deposit.
            </li>
            <li>
              The withdrawal form in the prescribed format should be filled only
              by the parent and be submitted to the P.R.O office only. The
              receiving at school of the original copy of duly filled and signed
              withdrawal form, will be treated as final date of withdrawal.
            </li>
          </ul>
        </h2>
      </div>
      <button
        onClick={() => window.open(Withdrawal, "_blank")}
        className=" bg-[#b90124] px-20 text-white py-2 w-fit mx-auto rounded-[4px] flex items-center justify-center text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates] my-8 md:my-20 self-center"
      >
        Withdrawal Form
      </button>
    </>
  );
}
