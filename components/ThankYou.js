"use client";
import React from "react";
import "../styles/ThankYou.css";
import { BsStars } from "react-icons/bs";
import { FaLessThan } from "react-icons/fa6";
import thankYou from "../public/thank-you.jpg";
import { FaRegSmile } from "react-icons/fa";
import "../app/globals.css";
import Image from "next/image";
export default function ThankYouPage() {
  return (
    <>
      <div className="thank-you-page">
        <h1 className="THank">
          Thank <span>You</span>
          <star>
            <BsStars />
          </star>
        </h1>
        <h3>Our Team will get in touch with you shortly...</h3>

        <button
          onClick={() => {
            window.location.href = "/";
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
