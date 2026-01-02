"use client";
import React, { useContext, useEffect, useState } from "react";
import { state, cities } from "../../home/components/form/data";
import axios from "axios";
import { getCountryCallingCode } from "react-phone-number-input/input";
import { UtmContext } from "../utmParams";
import { ThreeDots } from "react-loader-spinner";

function WebinarNewFormEnquire({ webinarformPopup }) {
  const { utmParams } = useContext(UtmContext);

  const [formData, setFormData] = useState({
    AuthToken: "tisd_24-08-2024",
    Source: "tisd",
    FirstName: "",
    Email: "",
    MobileNumber: "91",
    State: "",
    City: "",
    LeadSource: 161,
    LeadChannel: 26,
    LeadCampaign: "Zoom Webinar",
  });

  // Keep only Child Age separately
  const [childAge, setChildAge] = useState("");

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN"));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({
      ...prev,
      State: Number(selectedState),
      City: "",
    }));
  };

  const handleCountryCodeChange = (e) => {
    const selectedCode = e.target.value;
    setCountryCode(selectedCode);
    setFormData((prev) => ({
      ...prev,
      MobileNumber: `${selectedCode}${phoneNumber}`,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    setFormData((prev) => ({
      ...prev,
      MobileNumber: `${countryCode}${number}`,
    }));
  };

  useEffect(() => {
    document.body.style.overflow =
      isOtpSent || webinarformPopup ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOtpSent, webinarformPopup]);

  // --- SUBMIT FORM ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified) return alert("Please Verify your Mobile Number");

    setLoading(true);

    const payload = {
      ...formData,

      LeadSource: 161,
      LeadChannel: 26,
      LeadCampaign: "Zoom Webinar",

      // Child Age mapped correctly
      Textb9: childAge,
    };

    axios
      .post("https://thirdpartyapi.extraaedge.com/api/SaveRequest", payload)
      .then(() => {
        setLoading(false);
        window.location.href = `/boarding-school/webinar/thank-you`;
      })
      .catch(() => setLoading(false));
  };

  // --- SEND OTP ---
  const sendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber,
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.",
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

  // --- VERIFY OTP ---
  const verifyOtp = () => {
    if (!isOtpSent) return alert("OTP not sent.");

    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/verify-otp", {
        mobileNumber: formData.MobileNumber,
        authkey: "428845Ai6NJKsbqd66c98932P1",
        otp,
      })
      .then(() => {
        setVerified(true);
        setIsOtpSent(false);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Wrong OTP");
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full h-fit px-4 md:px-6 py-6 flex flex-col justify-center items-center"
        style={{ fontFamily: "TT Chocolates", fontWeight: "500" }}
      >
        <h3 className="font-[TTChocolatesBold] mb-2 text-center border-b border-[#B90124] text-[clamp(10px,7vw,55px)] md:text-[clamp(10px,1.8vw,55px)] text-[#1C1C1C]">
          Webinar <span className="text-[#B90124]">Registration</span>
        </h3>

        {/* Name */}
        <input
          type="text"
          required
          placeholder="Parent Name*"
          value={formData.FirstName}
          onChange={(e) => handleChange("FirstName", e.target.value)}
          className="py-2 px-4 bg-[#F4F4F4] border-b-2 border-[#FF607E] w-full"
        />

        {/* Email */}
        <input
          type="email"
          required
          placeholder="Parent Email Address*"
          value={formData.Email}
          onChange={(e) => handleChange("Email", e.target.value)}
          className="py-2 px-4 bg-[#F4F4F4] border-b-2 border-[#FF607E] w-full mt-2"
        />

        {/* Phone + OTP */}
        <div className="w-full flex gap-2 mt-2">
          <select
            value={countryCode}
            disabled={verified}
            onChange={handleCountryCodeChange}
            className="w-14 h-[42px] text-center bg-[#F4F4F4] border-b-2 border-[#FF607E]"
          >
            <option value="91">+{getCountryCallingCode("IN")}</option>
          </select>

          <input
            type="tel"
            maxLength={10}
            required
            disabled={verified}
            placeholder="Parent Mobile Number*"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="py-2 w-full bg-[#F4F4F4] border-b-2 border-[#FF607E]"
          />

          <button
            type="button"
            onClick={sendOtp}
            disabled={verified}
            className="min-w-[120px] bg-[#C75A5A] text-white rounded-full"
          >
            {verified ? "Verified" : "Send OTP"}
          </button>
        </div>

        {/* OTP */}
        {!verified && isOtpSent && (
          <div className="w-full flex gap-2 mt-2">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="py-2 w-full bg-[#F4F4F4] border-b-2 border-[#FF607E]"
            />

            <button
              type="button"
              onClick={verifyOtp}
              className="min-w-[120px] bg-black text-white"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* State */}
        <select
          required
          value={formData.State}
          onChange={handleStateChange}
          className="w-full h-10 px-4 bg-[#F4F4F4] border-b-2 border-[#FF607E] mt-3"
        >
          <option value="">Select State*</option>
          {state
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((st) => (
              <option key={st.id} value={st.id}>
                {st.name}
              </option>
            ))}
        </select>

        {/* City */}
        <select
          required
          value={formData.City}
          onChange={(e) => handleChange("City", e.target.value)}
          className="w-full h-10 px-4 bg-[#F4F4F4] border-b-2 border-[#FF607E] mt-2"
        >
          <option value="">Select City*</option>
          {formData.State &&
            cities[formData.State]?.map((ct) => (
              <option key={ct.id} value={ct.name}>
                {ct.name}
              </option>
            ))}
        </select>

        {/* Child Age */}
        <input
          type="number"
          required
          placeholder="Child Age*"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          className="py-2 px-4 bg-[#F4F4F4] border-b-2 border-[#FF607E] w-full mt-2"
        />

        {/* Consent */}
        <div className="flex items-center gap-3 mt-3">
          <input type="checkbox" required />
          <label className="text-[13px] text-[#4B4B4B]">
            I agree to receive information regarding my submitted applications by
            signing up on Tula's International School, Dehradun.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#B90124] text-xl text-white py-2 font-semibold mt-4 shadow-lg"
        >
          Submit
        </button>
      </form>

      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[999999]">
          <ThreeDots color="#fff" />
        </div>
      )}
    </>
  );
}

export default WebinarNewFormEnquire;
