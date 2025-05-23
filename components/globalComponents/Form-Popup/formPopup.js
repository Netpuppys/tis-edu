"use client";
import React, { useContext, useEffect, useState } from "react";
import { state } from "../../home/components/form/data";
import axios from "axios";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { UtmContext } from "../utmParams";
import { ThreeDots } from "react-loader-spinner";
function FormEnquire({ formPopup }) {
  const { utmParams } = useContext(UtmContext);
  const [formData, setFormData] = useState({
    AuthToken: "tisd_24-08-2024",
    Source: "tisd",
    FirstName: "",
    Email: "",
    MobileNumber: "91",
    LeadSource: 116,
    LeadChannel: 20,
    Course: "",
    State: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
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

  useEffect(() => {
    if (isOtpSent || formPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOtpSent, formPopup]);

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
        LeadSource: utmParams ? utmSource || 132 : 116,
        LeadCampaign: utmParams
          ? utmCampaign || "Enquire Now Ads"
          : "Enquire Now Organic",
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
            LeadSource: 116,
            LeadChannel: 20,
            LeadCampaign: "",
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
      .post("https://otpapi.tulas.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        authkey: "428845Ai6NJKsbqd66c98932P1",
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.", // Replace with your SMS template
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
        .post("https://otpapi.tulas.edu.in/verify-otp", {
          mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
          authkey: "428845Ai6NJKsbqd66c98932P1",
          otp: otp,
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
      .post("https://otpapi.tulas.edu.in/retry-otp", {
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
      <form
        style={{
          fontFamily: "TT Chocolates",
          fontWeight: "500",
        }}
        onSubmit={handleSubmit}
        className="w-full h-fit px-4 md:px-6 py-6 flex flex-col justify-center items-center"
      >
        <h3 className="font-[TTChocolatesBold] mb-2 [text-shadow:_0px_0.347px_3.468px_rgba(0,0,0,0.40)] leading-none w-fit text-[#1C1C1C] text-[clamp(10px,7vw,55px)] md:text-[clamp(10px,1.8vw,55px)] text-center border-b border-[#B90124]">
          ADMISSIONS <span className="text-[#B90124]">OPEN 2025</span>
        </h3>
        <h3 className="font-[TTChocolatesBold] mb-2 [text-shadow:_0px_0.347px_3.468px_rgba(0,0,0,0.40)] leading-none w-fit text-[#1C1C1C] text-[clamp(10px,6vw,55px)] md:text-[clamp(10px,1.5vw,55px)] text-center border-b border-[#B90124]">
          Class <span className="text-[#B90124]">IV - XII</span>
        </h3>
        <div className="flex flex-col w-full items-center justify-center gap-2 pt-5">
          <input
            type="text"
            required
            value={formData.FirstName}
            onChange={(e) => handleChange("FirstName", e.target.value)}
            placeholder="Enter your Full Name...."
            className="py-2 px-4 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]"
          />
          <input
            type="Email"
            placeholder="Enter Email Id (Optional)"
            value={formData.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
            className="py-2 px-4 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-2 mt-2">
          <div className="flex w-full">
            <select
              value={countryCode}
              disabled={verified}
              onChange={handleCountryCodeChange}
              className="w-14 h-[42px] text-center focus:outline-none bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]"
            >
              <option value="91">{`+${getCountryCallingCode("IN")}`}</option>
              {getCountries()
                .filter((country) => country !== "IN") // Exclude India from the mapped options
                .map((country) => (
                  <option key={country} value={getCountryCallingCode(country)}>
                    {`(+${getCountryCallingCode(country)})`}
                  </option>
                ))}
            </select>
            <input
              type="tel"
              required
              disabled={verified}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your Mobile No...."
              className={`py-2 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B] disabled:opacity-100 disabled:cursor-not-allowed`}
            />
          </div>
          <button
            type="button"
            disabled={verified || !/^\d{6,15}$/.test(formData.MobileNumber)}
            onClick={sendOtp}
            className="min-w-[140px] w-full md:w-[40%] bg-black flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer disabled:opacity-100 disabled:cursor-not-allowed"
          >
            {verified ? "Verified" : "Send OTP"}
          </button>
        </div>
        {!verified && (
          <div className="w-full flex flex-col md:flex-row gap-2 mt-2">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className={`py-2 px-5 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]`}
            />
            <div className="w-full md:w-fit flex gap-3">
              <button
                type="button"
                onClick={verifyOtp}
                className="min-w-[140px] w-full md:w-[40%] bg-black flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer"
              >
                Verify OTP
              </button>

              {isOtpSent && (
                <button
                  type="button"
                  onClick={resendOtp}
                  className="min-w-[140px] w-full md:w-[40%] bg-black flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        )}

        <div className="flex w-full flex-col gap-2 mt-2">
          <select
            required
            placeholder=""
            value={formData.Course}
            onChange={(e) => handleCourseChange(e.target.value)}
            className="w-full h-10 px-4 focus:outline-none bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]"
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
        </div>

        <div className="flex w-full flex-col gap-2 mt-2">
          <select
            value={formData.State}
            onChange={handleStateChange}
            required
            className="w-full classic px-5 h-10 focus:outline-none bg-[#F4F4F4] border-b-2 border-[#FF607E] text-[#4B4B4B]"
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
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-2">
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
            className="flex text-[#4B4B4B] items-center cursor-pointer text-[13px]"
          >
            I Agree to receive information regarding my submitted application by
            signing up on Tula's International School, Dehradun
          </label>
        </div>
        <button
          type="submit"
          className={`w-full bg-[#B90124] text-xl text-[#FFFFFF] cursor-pointer py-2 font-semibold mt-4 md:mt-2 shadow-[0px_3.409px_11.847px_0px_rgba(0,_0,_0,_0.25)]`}
        >
          SUBMIT
        </button>
      </form>
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

export default FormEnquire;
