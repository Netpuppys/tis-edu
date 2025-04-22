import React, { useContext, useEffect, useState } from "react";
import { state } from "./data";
import axios from "axios";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import Image from "next/image";
import schoolLogo from "../../../../public/logos/schoolLogo.png";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
import { UtmContext } from "@/components/globalComponents/utmParams";
// import en from "react-phone-number-input/locale/en.json";
import { ThreeDots } from "react-loader-spinner";
import { TbDeviceLandlinePhone } from "react-icons/tb";
function Form() {
  const { utmParams } = useContext(UtmContext);
  const [formData, setFormData] = useState({
    AuthToken: "tisd_24-08-2024",
    Source: "tisd",
    FirstName: "",
    Email: "",
    MobileNumber: "91",
    LeadSource: 81,
    LeadChannel: 20,
    Course: "",
    State: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isMobile } = useMobile();
  const [loading, setLoading] = useState(false);

  const handleCountryCodeChange = (e) => {
    const selectedCode = e.target.value;
    setCountryCode(selectedCode);
    setFormData({
      ...formData,
      MobileNumber: `${selectedCode}${phoneNumber}`,
    });
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    setFormData({
      ...formData,
      MobileNumber: `${countryCode}${number}`,
    });
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCourseChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      Course: Number(value),
    }));
  };

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      State: Number(selectedStateId),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verified) {
      setLoading(true);
      const searchParams = new URLSearchParams(window.location.search);
      const utmSource = searchParams.get("utm_source");
      const utmCampaign = searchParams.get("utm_campaign");
      const utmTerm = searchParams.get("utm_term");
      const searchQuery = searchParams.get("search_query");
      const updatedFormData = {
        ...formData,
        LeadChannel: utmParams ? 26 : 20,
        LeadSource: utmParams ? utmSource || 132 : 78,
        LeadCampaign: utmParams
          ? utmCampaign || "Home Page Form Ads"
          : "Home Page Form Organic",
        Field5: utmParams
          ? utmTerm || "No Term Found"
          : "Organic Lead Search Term not available",
        Field6: utmParams
          ? searchQuery || "No search Query Available"
          : "Organic Lead Search Query not available",
      };
      axios
        .post(
          "https://thirdpartyapi.extraaedge.com/api/SaveRequest",
          updatedFormData
        )
        .then(() => {
          setLoading(false);
          window.location.href = `/boarding-school/admission-open/thank-you${utmParams}`;
          setVerified(false);
          setFormData({
            AuthToken: "tisd_24-08-2024",
            Source: "tisd",
            FirstName: "",
            Email: "",
            MobileNumber: "91",
            LeadSource: 81,
            LeadChannel: 20,
            Course: "",
            State: "",
          });
          setOtp("");
        })
        .catch((error) => {
          setLoading(false);
          alert.error(error);
        });
    } else {
      alert("Please Verify your Mobile Number");
    }
  };

  const sendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otpapi.tis.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.", // Replace with your SMS template
        authkey: "428845Ai6NJKsbqd66c98932P1",
      })
      .then(() => {
        setLoading(false);
        setIsOtpSent(true);
      })
      .catch(() => {
        setLoading(false);
        alert("Error while Sending Otp");
      });
  };

  const verifyOtp = async () => {
    if (isOtpSent) {
      setLoading(true);
      axios
        .post("https://otpapi.tis.edu.in/verify-otp", {
          mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
          otp: otp,
          authkey: "428845Ai6NJKsbqd66c98932P1",
        })
        .then((response) => {
          setLoading(false);
          setVerified(true);
          setIsOtpSent(false);
          alert(response.data.message); // Corrected this to access response.data.message
        })
        .catch(() => {
          setLoading(false);
          alert("Wrong Otp Entered");
        });
    } else {
      alert("OTP not sent. Please click on Send OTP button to send your OTP");
    }
  };

  const resendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otpapi.tis.edu.in/retry-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        authkey: "428845Ai6NJKsbqd66c98932P1",
      })
      .then((response) => {
        setLoading(false);
        alert("OTP sent successfully!");
        alert(response.data.message); // Corrected this to access response.data.message
      })
      .catch((error) => {
        setLoading(false);
        alert(
          error.response ? error.response.data.message : "An error occurred"
        ); // Handle error message properly
      });
  };
  return (
    <>
      <div className="h-fit w-full py- md:bg-transparent px-4 py-4 relative md:absolute md:-translate-y-1/2 z-50">
        <div
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="flex pointer-events-auto bg-[#90CCD0] shadow-2xl shadow-black w-full  max-w-[1200px] rounded-3xl mx-auto z-30"
        >
          {!isMobile && (
            <div className="bg-white flex flex-col justify-between rounded-3xl px-7 py-7 pb-4 w-[50%] max-w-[410px]">
              <div className="w-full h-fit flex flex-col">
                <h3 className="text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] leading-tight font-[TTChocolatesBold] text-black">
                  Contact Us.
                </h3>
                <a
                  href="tel:+91-9837983791"
                  className="flex text-sm text-black items-center justify-start mt-4 gap-4"
                >
                  <IoCall color="#007A83" className="min-w-[20px] h-[20px]" />
                  Admission Helpline No. +91-98379 83791
                </a>
                <a
                  href="mailTo:info@tis.edu.in"
                  className="flex text-sm text-black items-center justify-start mt-4 gap-4"
                >
                  <IoMail color="#007A83" className="min-w-[20px] h-[20px]" />
                  info@tis.edu.in
                </a>
                <a
                  href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                  target="_blank"
                  className="flex text-sm text-black items-center justify-start mt-4 gap-4"
                >
                  <IoLocation
                    color="#007A83"
                    className="min-w-[20px] h-[20px]"
                  />
                  Tula’s International School Dhoolkot, P.O – Selaqui, Chakrata
                  Road, Dehradun-248011 (Uttarakhand)
                </a>
                <p className="flex text-sm text-black items-center justify-start mt-4 gap-4">
                  <TbDeviceLandlinePhone
                    color="#007A83"
                    className="min-w-[20px] h-[20px]"
                  />
                  <span>
                    <a href="tel:0135-2699444">Landline No. 0135-2699444</a>
                    {", "}
                    <a href="tel:0135-2699666">0135-2699666</a>
                  </span>
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Image src={schoolLogo} alt="" className="mt-4 max-w-[114px]" />
              </div>
            </div>
          )}
          <form
            style={{
              fontFamily: "TT Chocolates",
            }}
            onSubmit={handleSubmit}
            className="w-full px-4 md:px-10 py-6 flex flex-col justify-center items-center"
          >
            <h3 className="font-[TTChocolatesBold] w-fit text-[#1C1C1C] text-[clamp(10px,5vw,55px)] md:text-[clamp(10px,1.5vw,55px)] text-center border-b-2 border-[#1C1C1C]">
              Enquire Now!
            </h3>
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 pt-5">
              <input
                type="text"
                required
                value={formData.FirstName}
                onChange={(e) => handleChange("FirstName", e.target.value)}
                placeholder="Enter your Full Name...."
                className="py-2 px-4 focus:outline-none w-full rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
              />
              <input
                type="Email"
                placeholder="Enter Email Id (Optional)"
                value={formData.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
                className="py-2 px-4 focus:outline-none w-full rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
              />
            </div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 mt-3">
              <div className="w-full flex flex-col md:flex-row gap-3">
                <div className="flex gap-3 w-full">
                  <select
                    value={countryCode}
                    disabled={verified}
                    onChange={handleCountryCodeChange}
                    className="w-20 h-10 px-2 text-center focus:outline-none rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
                  >
                    <option value="91">{`+${getCountryCallingCode(
                      "IN"
                    )}`}</option>
                    {getCountries()
                      .filter((country) => country !== "IN") // Exclude India from the mapped options
                      .map((country) => (
                        <option
                          key={country}
                          value={getCountryCallingCode(country)}
                        >
                          {`(+${getCountryCallingCode(country)})`}
                        </option>
                      ))}
                  </select>
                  <input
                    type="text"
                    required
                    disabled={verified}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter your Mobile No...."
                    className={`py-2 px-4 focus:outline-none w-full rounded-md bg-[#BEE2E4] text-[#2D2D2D] disabled:opacity-100 disabled:cursor-not-allowed`}
                  />
                </div>
                <button
                  type="button"
                  disabled={
                    verified || !/^\d{6,15}$/.test(formData.MobileNumber)
                  }
                  onClick={sendOtp}
                  className="min-w-[140px] w-full md:w-[40%] bg-black rounded-md flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  {verified ? "Verified" : "Send OTP"}
                </button>
              </div>
            </div>
            {!verified && (
              <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
                <div className="w-full flex flex-col md:flex-row gap-3 ">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    disabled={verified}
                    placeholder="Enter OTP"
                    className={`py-2 px-4 focus:outline-none w-full rounded-md bg-[#BEE2E4] text-[#2D2D2D] disabled:opacity-100 disabled:cursor-not-allowed`}
                  />

                  <div className="w-full md:w-fit flex gap-3">
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="min-w-[140px] w-full md:w-[40%] bg-black rounded-md flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer disabled:opacity-100 disabled:cursor-not-allowed"
                    >
                      Verify OTP
                    </button>

                    {isOtpSent && (
                      <button
                        type="button"
                        onClick={resendOtp}
                        className="min-w-[140px] w-full md:w-[40%] bg-black rounded-md flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer disabled:opacity-100 disabled:cursor-not-allowed"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex w-full flex-col md:flex-row gap-3 mt-3">
              <select
                required
                placeholder=""
                value={formData.Course}
                onChange={(e) => handleCourseChange(e.target.value)}
                className="w-full md:w-1/2 h-10 px-4 focus:outline-none rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
              >
                <option value="">Select Class</option>
                <option value="1">Class IV</option>
                <option value="2">Class V</option>
                <option value="3">Class VI</option>
                <option value="4">Class VII</option>
                <option value="5">Class VIII</option>
                <option value="6">Class IX</option>
                <option value="7">Class X</option>
                <option value="8">Class XI</option>
                <option value="9">Class XII</option>
              </select>
              <select
                value={formData.State}
                onChange={handleStateChange}
                required
                className="w-full md:w-1/2 classic px-5 h-10 border-none focus:outline-none rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
              >
                <option value="">Select State</option>
                {state
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name)) // sort by name alphabetically
                  .map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 md:mt-3">
              <input
                id="consent1"
                type="checkbox"
                name="consent1"
                className=""
                value="no"
                required
              />
              <label
                for="consent1"
                className="flex text-[#2D2D2D] items-center cursor-pointer text-sm md:text-base"
              >
                I Agree to receive information regarding my submitted
                application by signing up on Tula's International School,
                Dehradun
              </label>
            </div>
            <button
              type="submit"
              className={`w-full min-w-[250px] md:w-[30%] mx-auto bg-black text-xl text-[#FFFFFF] cursor-pointer py-2 rounded-md disabled:opacity-100 disabled:cursor-not-allowed font-semibold mt-6 md:mt-3 shadow-[0px_3.409px_11.847px_0px_rgba(0,_0,_0,_0.25)]`}
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 z-[9999999] flex justify-center items-center">
          <div className="">
            <ThreeDots color="#FFF" />
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
