"use client";
import React, { useEffect } from "react";
import Header from "../globalComponents/Header/Header";
import HeaderContactImg from "../../public/Header/ContactUsHeader.png";
import "../../styles/QuickLinks/ContactStyle.css";
import { FaPhone } from "react-icons/fa6";
import { Email } from "@mui/icons-material";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  useEffect(() => {
    const loadScriptAndStyles = () => {
      window.ee_form_widget_baseurl =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

      if (!document.getElementById("__formWidgetCss")) {
        const linkElement = document.createElement("link");
        linkElement.id = "__formWidgetCss";
        linkElement.rel = "stylesheet";
        linkElement.href =
          window.ee_form_widget_baseurl + "css/stylesheet.min.css";
        linkElement.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(linkElement);
      }
      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src =
        window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
      scriptElement.onload = async function () {
        const _eeFormWidget = new eeFormWidget();
        await _eeFormWidget.init("tisd", "form-4", "ee-form-4");
      };

      document.getElementsByTagName("head")[0].appendChild(scriptElement);
    };

    loadScriptAndStyles();
  }, []);

  return (
    <>
      <Header
        title={"Contact Us"}
        headerImg={HeaderContactImg}
        subtitle={
          "It is where you find info to reach out to a school for help or questions."
        }
      />
      <br />

      <div>
        <div className="Contactheading">
          Lets <span>Talk</span>
        </div>
        <p className="text-letsTalk">
          Give Us A Shout-Out And Feel Free To Ask Anything That Interests
        </p>
      </div>
      <div className="h-fit z-50 w-fit mb-8 mx-auto p-2 bg-[#B90124] md:bg-transparent flex flex-col items-center gap-4 md:gap-0 md:flex-row">
        <div className="w-full md:w-[491px] h-fit  relative flex flex-col overflow-hidden justify-start gap-20 bg-transparent md:bg-[#B90124] rounded-xl p-5 md:p-10">
          <div className="w-fit z-20 mb-8 md:mb-0 h-fit">
            <h3 className="text-[25px] md:text-[35px] font-bold tracking-wide text-white">
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
              href="tel:+91-8108012525"
              className="text-white flex gap-6 items-center"
            >
              <FaPhone />
              +91-8108012525
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
                Vill.Dhoolkot, near Tula&apos;s Institute Selaqui near Mandir
                Dehradun, Uttarakhand, 248197
              </span>
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="relative">
              <div className="w-[138px] h-[138px] rounded-full bg-[#FF8686] bg-opacity-50 absolute bottom-14 z-10 right-14"></div>
              <div className="w-[269px] h-[269px] absolute -bottom-[100px] -right-[90px] rounded-full bg-[#DB002A]"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[491px]">
          <div id="ee-form-4"></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
