"use client";
import React, { useContext, useEffect } from "react";
import Header from "../globalComponents/Header/Header";
import Image from "next/image";
import "../../styles/Admission/Apply.css";
import HeaderRegistrationImg from "../../public/Header/RegistrationHeader.png";
import yellowLine from "../../public/pictures/lineImg.png";
import { UtmContext } from "../globalComponents/utmParams";
export default function RegistrationForm() {
  const { utmParams } = useContext(UtmContext);
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
        await _eeFormWidget.init("tisd", "form-3", "ee-form-3");
      };

      document.getElementsByTagName("head")[0].appendChild(scriptElement);
    };

    loadScriptAndStyles();
  }, []);

  return (
    <>
      <Header
        headerImg={HeaderRegistrationImg}
        title={"Registration Process"}
        subtitle={
          "The registration process at Tula's International School is straightforward and user-friendly, ensuring ease for all applicants."
        }
      />
      <p style={{ marginTop: "2rem" }} className="Admission">
        How to{" "}
        <span>
          Apply
          <Image className="yellow-line-heading" src={yellowLine} alt="" />
        </span>
      </p>
      <div className="enquiry-main">
        <p className="text-enquiry" style={{ textAlign: "left" }}>
          <br />
          Registration is open for grades IV–IX and XI. The school academic
          session starts in the first week of April every year and ends on March
          31st of the subsequent year. Hence registration application should
          reach the school before 31st March in the year that admission is
          sought. Admission would be finalized after a counselling session with
          the child and on the availability of seats.
          <br />
          <br />
          It is desirable that all admission formalities are completed well
          before the end of March. However, limited vacancies may exist in the
          middle of academic year. Information on mid-year vacancies may be
          obtained by e-mailing the school admission office. However, it is best
          to apply early.
        </p>
        <br />
      </div>
      <p className="Admission">
        Registration{" "}
        <span>
          Form
          <Image className="yellow-line-heading" src={yellowLine} alt="" />
        </span>
      </p>
      <div className="registration-div">
        <div className="enquiry-main">
          <p className="text-enquiry" style={{ textAlign: "left" }}>
            <br />
            Kindly provide the below details true and correct. If the child is
            selected for admission, he/she has to fully abide by the Rules &
            Regulations of the School. The Registration of the child does not
            guarantee his/her admission into the school. The Parent can deposit
            the Registration Fee (which is neither transferable nor refundable)
            through Demand Draft for Rs. 10,000 in favor of Tula’s International
            School, payable at Dehradun.
            <br />
            <br />
            School Fees can be deposited by Cash or Bank Transfer,{" "}
            <a
              href={`/admission-procedure/fee-structure/${utmParams}`}
              style={{ color: "#B90124" }}
            >
              click here
            </a>{" "}
            for Bank Account Details.
          </p>
          <br />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "450px",
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
          }}
        >
          <div id="ee-form-3"></div>
        </div>
      </div>
    </>
  );
}
