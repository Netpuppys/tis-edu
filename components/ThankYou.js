"use client";
import React, { useContext } from "react";
import "../styles/ThankYou.css";
import { BsStars } from "react-icons/bs";
import { FaLessThan } from "react-icons/fa6";
import thankYou from "../public/thank-you.jpg";
import { FaRegSmile } from "react-icons/fa";
import "../app/globals.css";
import Image from "next/image";
import { UtmContext } from "./globalComponents/utmParams";
export default function ThankYouPage() {
  const { utmParams } = useContext(UtmContext);
  return (
    <>
      <div className="thank-you-page">
        <h1 className="THank">
          Thank <span>You</span>
        </h1>
        <h2 className="star">
          <BsStars />
        </h2>
        <h3>Our Team will get in touch with you shortly...</h3>

        <button
          onClick={() => {
            window.location.href = `/${utmParams}`;
          }}
        >
          <FaLessThan style={{ alignSelf: "center" }} />
          Back to Home
        </button>
        <div className="black-div">
          <div className="content">
            <h2>TIS</h2>
            <p1>thank you for being with us</p1>
            <h2>TIS</h2>
            <p1>thank you for being with us</p1>
            <h2>TIS</h2>
            <p1>thank you for being with us</p1>
            <h2>TIS</h2>
            <p1>thank you for being with us</p1>
          </div>
        </div>
        <Image src={thankYou} alt="" />
      </div>
    </>
  );
}
