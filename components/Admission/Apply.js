"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../globalComponents/Header/Header";
import HeaderApplyImg from "../../public/Header/HowToApplyHEader.png";
import icon1 from "../../public/pictures/application.png";
import icon2 from "../../public/pictures/supporting.png";
import icon3 from "../../public/pictures/assessment.png";
import icon4 from "../../public/pictures/enrollment.png";
import yellowLine from "../../public/pictures/lineImg.png";
import Image from "next/image";
import { useMobile } from "../globalComponents/IsMobileContext";
import FormPopup from "../globalComponents/Form-Popup/form";
import { UtmContext } from "../globalComponents/utmParams";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRefs = useRef([]);
  const [formPopup, setFormPopup] = useState(false);
  const { utmParams } = useContext(UtmContext);
  const handleStepClick = (index) => {
    setCurrentStep(index);
    scrollRefs.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const { isMobile } = useMobile();
  const steps = [
    {
      id: 1,
      title: "Application & Registration",
      icon: icon1,
      label: (
        <>
          Application & <br /> Registration
        </>
      ),
      description: (
        <ul className="ml-5 list-disc">
          <li>
            <strong className="font-[TTChocolatesBold]">When to Apply: </strong>
            Registrations open from September for Classes IV–IX and XI.
          </li>
          <br />
          <li>
            <strong className="font-[TTChocolatesBold]">How to Apply:</strong>
            <br />
            <ul className="ml-5 list-disc">
              <li className="cursor-pointer" onClick={() => setFormPopup(true)}>
                Fill the{" "}
                <span className="text-[#b90124]">registration form</span> from
                the school admission office or fill the{" "}
                <span className="text-[#b90124]">application form online.</span>
              </li>
              <li>
                Complete the registration form and submit it along with a
                registration fee of Rs. 10,000 (non-refundable)
              </li>
              <li>
                Write the Demand Draft in favor of Tula’s International School,
                payable at Dehradun.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <strong className="font-[TTChocolatesBold]">
              Last date of application:
            </strong>{" "}
            All registration forms must reach the school by March 31st of the
            admission year.
          </li>
          <br />
          <span className="text-[#b90124]">
            Note: Admissions are granted on a first-come, first-served basis.
            Seats may fill up before March 31st. We recommend applying at the
            earliest to secure your spot.
          </span>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Supporting Documents",
      icon: icon2,
      label: (
        <>
          Supporting <br /> Documents
        </>
      ),
      description: (
        <ul className="ml-5 list-disc">
          <li>
            <strong className="font-[TTChocolatesBold]">
              Required Documents{" "}
            </strong>
            (to be submitted along with the application form):
          </li>
          <br />

          <ol className="ml-5 list-[lower-alpha]">
            <li>Attested photocopy of Mark-Sheet/Report Card</li>
            <li>Attested photocopy of Birth Certificate</li>
            <li>Passport (Mandatory)</li>
            <li>Photocopy of Address & Identity Proof</li>
            <li>5 Recent Passport-Sized Photographs of the Child</li>
            <li>1 Passport-Sized Photograph of Father and Mother</li>
            <li>
              1 Passport-Sized Photograph of Local Guardian (if applicable)
            </li>
          </ol>
        </ul>
      ),
    },
    {
      id: 3,
      icon: icon3,
      title: "Assessments & Evaluation",
      label: (
        <>
          Assessments & <br /> Evaluation
        </>
      ),
      description: (
        <ul className="ml-5 list-disc">
          <li>
            <strong className="font-[TTChocolatesBold]">
              Tula’s Common Aptitude Assessment (T.C.A.A.):
            </strong>
            <br />
            <ul className="ml-5 list-disc mt-5">
              <li>
                After registration, candidates will go through the assessment
                process as outlined below
              </li>
              <li>MCQ-based assessment (25 marks per subject).</li>
              <li>
                In case of poor performance, an interview-based re-test will be
                conducted within 5 days.
              </li>
              <li> Results are declared within 3 days of the assessment.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong className="font-[TTChocolatesBold]">Interview: </strong>
            <br />
            <ul className="ml-5 list-disc mt-5">
              <li>
                Face-to-face interviews will be conducted for candidates who
                clear T.C.A.A.
              </li>
              <li>
                This interview helps evaluate the child’s overall suitability
                for admission.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <strong className="font-[TTChocolatesBold]">Evaluation:</strong>
            <br />
            <ul className="ml-5 list-disc mt-5">
              <li>
                Based on the performance in the T.C.A.A. and a face-to-face
                interview admission will be granted based on seat availability
                and evaluation outcomes.
              </li>
              <li>
                Admission results will be declared within 3 days (Granted / Not
                Granted).
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      icon: icon4,
      title: "Enrollment & Confirmation",
      label: (
        <>
          Enrollment & <br /> Confirmation
        </>
      ),
      description: (
        <ul className="ml-5 list-disc">
          <li>
            <strong className="font-[TTChocolatesBold]">
              Confirmation Fee:
            </strong>
            Once the admission letter is granted, parents must pay the
            confirmation fee within 10 days to secure the child's seat.
          </li>
          <br />
          <li>
            <strong className="font-[TTChocolatesBold]">
              Final Enrollment:
            </strong>
            After the confirmation fee is received, a confirmation letter will
            be emailed to finalize enrollment.
          </li>
        </ul>
      ),
    },
  ];
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
        title={"Admission Procedure"}
        subtitle={
          "The admission procedure at Tula's International School is straightforward and transparent, designed to ensure a seamless enrollment experience."
        }
        headerImg={HeaderApplyImg}
        headerImgMobile={HeaderApplyImg}
      />
      <div
        ref={scrollRefs}
        className="w-[90%] relative md:w-[80%] pt-8 md:pt-14 mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-center w-full">
          {steps.map((step, index) => (
            <div key={step.id} className="w-full md:w-1/4 ">
              <div
                className={`flex items-center text-center ${
                  index <= currentStep
                    ? "text-[#b90124] font-bold"
                    : "text-[#D9D9D9]"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`p-2 flex items-center text-[clamp(20px,2.2vw,50px)] border-2 border-white relative z-20 !aspect-square w-20 h-20 font-[Mirador800] justify-center rounded-full bg-[#D9D9D9] ${
                    index === currentStep ? "text-[#b90124]" : "text-[#574444]"
                  }`}
                >
                  {step.id}
                </div>
                <div
                  style={{
                    fontFamily: "TT Chocolates",
                  }}
                  className={`w-full h-16 text-xl -ml-8 md:-mr-8 flex justify-center border-y-2 border-[#b90124] hover:border-transparent items-center
                    ${
                      index === currentStep
                        ? "text-[#FFFFFF] bg-[#b90124] font-bold"
                        : "text-[#b90124] hover:text-[#FFFFFF]"
                    }`}
                >
                  <button className="material-bubble relative w-full h-full">
                    {step.label}
                  </button>
                </div>
              </div>
              {index === currentStep && isMobile && (
                <div className="w-[100%] mx-auto pt-8 md:pt-14">
                  <Image
                    className="mx-auto w-[25%]"
                    src={steps[currentStep].icon}
                    alt=""
                  />
                  <h2 className="text-[clamp(20px,6.5vw,50px)] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] mt-4 text-center font-bold font-[Mirador800]">
                    {steps[currentStep].title}
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
                    className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] py-8 md:py-14"
                  >
                    {steps[currentStep].description}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
        {!isMobile && (
          <div className="w-[80%] mx-auto pt-8 md:pt-14">
            <Image
              className="mx-auto w-fit"
              src={steps[currentStep].icon}
              alt=""
            />
            <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] mt-4 text-center font-bold font-[Mirador800]">
              {steps[currentStep].title}
              <Image className="ml-auto w-fit" src={yellowLine} alt="" />
            </h2>
            <h2
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] pt-8 md:pt-14"
            >
              {steps[currentStep].description}
            </h2>
          </div>
        )}
      </div>
      <div className="py-8 md:py-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          How to <span className="text-[#b90124]">Apply</span>
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
          className="w-[90%] md:w-[60%] mx-auto border-2 rounded-3xl mt-4 md:mt-8 p-8 md:p-14  border-[#b90124] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
        >
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
        </h2>
      </div>
      <div className="py-8 md:py-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Registration <span className="text-[#b90124]">Form</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-[90%] md:w-[80%] mx-auto gap-8 md:gap-[10%]">
          <h2
            style={{
              fontFamily: "TT Chocolates",
            }}
            className="w-full mx-auto border-2 rounded-3xl mt-4 md:mt-8 p-8 md:p-14  border-[#b90124] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]"
          >
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
              className="text-[#b90124]"
            >
              click here
            </a>{" "}
            for Bank Account Details.
          </h2>
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
      </div>
      {formPopup && (
        <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />
      )}
    </>
  );
};

export default Apply;
