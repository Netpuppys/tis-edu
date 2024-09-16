"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderWithdrawal from "../../public/Header/WithdrawalHeader.png";
import yellowLine from "../../public/YellowLineTitle.png";
import "../../styles/Admission/Widthrawal.css";
import Withdrawal from "../../public/MandatoryPDF/Withdrawal-Form.pdf";
import Image from "next/image";
export default function WidthrawalPolicy() {
  return (
    <>
      <Header
        title={"Withdrawal Policy"}
        headerImg={HeaderWithdrawal}
        subtitle={
          "Tula's International School has a clear and detailed withdrawal policy to guide parents through the process."
        }
      />
      <div className="WidthdrawalPolicy">
        <div className="main-title-widthdrawal">
          <br />
          New{" "}
          <span>
            Students
            <Image className="YellowLine" alt="" src={yellowLine} />
          </span>
        </div>
        <div className="text-box-widthdrawal">
          <p className="text-widthdrawal">
            If a child is withdrawn after admission is granted, the admission
            fee, registration fee and one term fees excluding the security and
            imprest(credit balance) shall be forfeited in favour of the school.
          </p>
        </div>
      </div>
      <div className="WidthdrawalPolicy">
        <div className="main-title-widthdrawal">
          Existing{" "}
          <span>
            Students
            <Image className="YellowLine" alt="" src={yellowLine} />
          </span>
        </div>
        <div className="text-box-widthdrawal">
          <p1 className="text-widthdrawal">
            <ul>
              <li>
                If the child is withdrawn in between any term (Irrespective of
                his/her date of joining), full term school fee shall be
                charged/forfeited in favour of the school.  <br />
              </li>{" "}
              <li>
                If the child is to be withdrawn in the month of March, a prior 3
                months notice is to be given in writing i.e. latest by 31st
                December. If the notice is given after the said date, the
                security money of the child shall be forfeited.
              </li>
            </ul>
          </p1>
        </div>
      </div>
      <div className="WidthdrawalPolicy">
        <div className="text-box-widthdrawal-note">
          <p1 className="text-widthdrawal">
            <span>Note</span>

            <ul>
              <li>
                In case of withdrawal the refunds (if any) will be made after 6
                months from the date of withdrawal ( Including Security)
              </li>
              <li>The withdrawal form is available on school website.</li>
              <li>The security amount when refunded is interest free.</li>
              <li>
                School leaving certificate (Transfer Certificate) will be issued
                only after clearance of dues and payment of outstanding amount
                in favour of the school.
              </li>
              <li>
                The withdrawal form in the prescribed format should be filled
                only by the parent and be submitted to the P.R.O office only.
                The receiving at school of the original copy of duly filled and
                signed withdrawal form, will be treated as final date of
                withdrawal.
              </li>
            </ul>
          </p1>
        </div>
      </div>
      <div
        onClick={() => window.open(Withdrawal, "_blank")}
        className="widthdrawal-policy-button"
      >
        Withdrawal Form
      </div>
    </>
  );
}
