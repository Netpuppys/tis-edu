"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderContactImg from "../../public/Banner/contactUs.webp";
import HeaderContactImgMobile from "../../public/Banner/contactUsMobile.webp";
import "../../styles/QuickLinks/ContactStyle.css";
import { FaPhone } from "react-icons/fa6";
import { Email } from "@mui/icons-material";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "./form";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const ContactUs = () => {
  return (
    <>
      <Header
        title={"Contact Us"}
        headerImg={HeaderContactImg}
        headerImgMobile={HeaderContactImgMobile}
        subtitle={
          "It is where you find info to reach out to a school for help or questions."
        }
      />

      <div className="w-[90%] mx-auto py-8 md:py-16">
        <h2 className="text-[30px] pb-4 md:pb-8 w-fit md:ml-[25%] md:text-[clamp(20px,2.5vw,50px)] font-bold font-[Mirador800]">
          Lets <span className="text-[#b90124]">Talk</span>
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="text-center text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
          Give Us A Shout-Out And Feel Free To Ask Anything That Interests
        </h2>
      </div>
      <div className="h-fit md:h-[600px] z-50 w-fit shadow-[7px_7px_4px_rgba(0,0,0,0.25)] md:rounded-xl mb-8 mx-4 md:mx-auto  bg-[#B90124] md:bg-transparent flex flex-col md:flex-row">
        <div className="w-full md:max-w-[490px] h-full  relative flex flex-col overflow-hidden justify-start gap-10 bg-transparent md:bg-[#B90124] rounded-xl p-5 md:p-10">
          <div className="w-fit z-20 h-fit">
            <h3 className="text-[25px] md:text-[35px] font-[TTChocolatesbold] tracking-wide text-white">
              Contact Information
            </h3>
            <h4
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="text-white tracking-normal text-[18px] md:text-[28px]"
            >
              Say something to start a live chat!
            </h4>
          </div>
          <div
            className="w-fit z-20 h-fit text-[14px] md:text-[18px] relative"
            style={{ fontFamily: "TT Chocolates" }}
          >
            <a
              href="tel:+91-9837983791"
              className="text-white flex gap-6 items-center"
            >
              <FaPhone />
              Admission Helpline No. +91-9837983791
            </a>
            <br />
            <a
              href="mailto:info@tis.edu.in"
              className="text-white flex gap-6 items-center"
            >
              <Email />
              info@tis.edu.in
            </a>
            <br />
            <a
              href="https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2a8f6621db6d:0xb5df8a7bd77caf7d!8m2!3d30.3430336!4d77.8891652!16s%2Fm%2F0121_pmh?entry=ttu"
              className="text-white flex gap-6 items-start"
            >
              <IoLocationSharp className="w-[24px] h-[24px]" />
              <span className="w-fit h-fit">
                Tula’s International School Dhoolkot, P.O – Selaqui, Chakrata
                Road, Dehradun-248011 (Uttarakhand)
              </span>
            </a>
            <br />
            <h2 className="text-white flex gap-6 items-start">
              <TbDeviceLandlinePhone className="w-[24px] h-[24px]" />
              <span className="w-fit h-fit">
                <a href="tel:0135-2699444">Landline No. 0135-2699444</a>
                {", "}
                <a href="tel:0135-2699666">0135-2699666</a>
              </span>
            </h2>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="relative">
              <div className="w-[138px] h-[138px] rounded-full bg-[#FF8686] bg-opacity-50 absolute bottom-14 z-10 right-14"></div>
              <div className="w-[269px] h-[269px] absolute -bottom-[100px] -right-[90px] rounded-full bg-[#DB002A]"></div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 pb-4 md:px-0 md:pb-0 md:max-w-[650px]">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
