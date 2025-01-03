import React, { useContext, useEffect, useState } from "react";
import { cities, state } from "./data";
import axios from "axios";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import OTPInput from "react-otp-input";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import Image from "next/image";
import schoolLogo from "../../../../public/logos/schoolLogo.png";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
import { UtmContext } from "@/components/globalComponents/utmParams";
// import en from "react-phone-number-input/locale/en.json";

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
    City: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isMobile } = useMobile();

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
  const [timer, setTimer] = useState(30); // Timer for the Resend OTP button

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
  const handleCityChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      City: Number(value),
    }));
  };

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      State: Number(selectedStateId),
      City: "", // Reset City if State changes
    }));
  };

  const handleChangeNumber = () => {
    setFormData((prev) => ({
      ...prev,
      MobileNumber: "91",
    }));
    setIsOtpSent(false);
  };

  useEffect(() => {
    if (isOtpSent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOtpSent]);

  const startTimer = () => {
    setTimer(30); // Reset the timer to 30 seconds
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown); // Stop the timer when it reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (isOtpSent && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown); // Stop the timer when it reaches 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown); // Clean up the interval on unmount
    }
  }, [isOtpSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");
    const updatedFormData = {
      ...formData,
      LeadChannel: utmParams ? 26 : 20,
      LeadSource: utmParams ? utmSource || 88 : 78,
      LeadCampaign: utmParams ? utmCampaign || "Home Page Form Ads" : "Home Page Form Organic",
    };
    axios
      .post(
        "https://thirdpartyapi.extraaedge.com/api/SaveRequest",
        updatedFormData
      )
      .then(() => {
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
          City: "",
        });
        setOtp("");
        window.location.href = `/boarding-school/admission-open/thank-you${utmParams}`;
      })
      .catch((error) => {
        alert.error(error);
      });
  };

  const sendOtp = async () => {
    axios
      .post("https://otp.tulas.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.", // Replace with your SMS template
      })
      .then(() => {
        setIsOtpSent(true);
        startTimer();
      })
      .catch((error) => {
        alert("Error while Sending Otp");
      });
  };

  const verifyOtp = async () => {
    axios
      .post("https://otp.tulas.edu.in/verify-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        otp: otp,
      })
      .then((response) => {
        setVerified(true);
        setIsOtpSent(false);
        alert(response.data.message); // Corrected this to access response.data.message
      })
      .catch((error) => {
        setMessage("Wrong Otp Entered");
      });
  };

  const resendOtp = async () => {
    axios
      .post("https://otp.tulas.edu.in/retry-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
      })
      .then((response) => {
        startTimer();
        setMessage("OTP sent successfully!");
        alert(response.data.message); // Corrected this to access response.data.message
      })
      .catch((error) => {
        alert(
          error.response ? error.response.data.message : "An error occurred"
        ); // Handle error message properly
      });
  };
  return (
    <>
      {isOtpSent && (
        <div className="fixed w-screen h-screen top-0 left-0 z-[999999] flex items-center justify-center flex-col">
          <div
            className="w-full h-screen bg-black bg-opacity-50 pointer-events-auto z-10 absolute"
            onClick={() => setIsOtpSent(false)}
          ></div>
          <div className="p-8 rounded-2xl bg-white pointer-events-auto z-20 overflow-hidden relative">
            <h3 className="text-black z-20 text-2xl font-[TTChocolatesBold] font-bold mb-1">
              Verify Mobile Number
            </h3>
            <h4 className="max-w-[415px] text-[15px] font-[TTChocolatesBold] ">
              OTP has been sent to you on your mobile number, Please enter it
              below{" "}
              <button
                onClick={handleChangeNumber}
                className="bg-[#b90124] text-white mx-2 py-1 px-2"
              >
                Change Number
              </button>
            </h4>
            <div className="flex flex-col items-center justify-center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                disabled={verified}
                placeholder="XXXX"
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0.8rem 0.5rem 0rem 0.5rem",
                  fontSize: "1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  textAlign: "center",
                  color: "black",
                  outline: "none",
                }}
                containerStyle={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
              {message && <p className="text-[#b90124]">{message}</p>}
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="bg-[#b90124] text-white disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed text-[15px] font-[TTChocolatesBold] px-4 py-1 my-2"
                onClick={resendOtp}
                disabled={timer !== 0} // Disable resend if cooldown is active
              >
                Resend OTP
              </button>
              {timer > 0 && <p className="text-[15px]">{`${timer} Seconds`}</p>}
            </div>
            <button
              onClick={verifyOtp}
              className="text-white bg-[#b90124] w-full rounded-md text-2xl font-[TTChocolatesBold] py-1"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <div className="h-fit w-full bg-[#b90124] md:bg-transparent relative md:absolute md:-translate-y-1/2 z-50">
        <div
          style={{
            boxShadow: "0px -7px 69.127px 0px rgba(0, 0, 0, 0.25)",
            fontFamily: "TT Chocolates",
          }}
          className="flex pointer-events-auto bg-[#90CCD0] w-[95%] max-w-[1200px] rounded-3xl overflow-hidden mx-auto z-30"
        >
          {!isMobile && (
            <div className="bg-white flex flex-col rounded-r-3xl px-7 py-7 pb-4 w-[50%] max-w-[410px]">
              <h3 className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolatesBold] text-black">
                Contact Us.
              </h3>
              <p className="text-sm text-black">
                Subscribe to be notified about our latest endeavours, and your
                IT horizons.
              </p>
              <a
                href="tel:+91-9837983791"
                className="flex text-sm text-black items-center justify-start mt-4 gap-4"
              >
                <IoCall color="#007A83" className="min-w-[20px] h-[20px]" />
                +91-98379 83791
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
                <IoLocation color="#007A83" className="min-w-[20px] h-[20px]" />
                Tula's International School Vill.Dhoolkot, near Tula's Institute
                Selaqui near Mandir Dehradun, Uttarakhand, 248197
              </a>
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
            <h3 className="font-[TTChocolatesBold] w-fit text-[#1C1C1C] text-[clamp(20px,1.5vw,55px)] text-center border-b-2 border-[#1C1C1C]">
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
                placeholder="Enter Email Id*"
                value={formData.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
                required
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
            <div className="flex w-full flex-col md:flex-row gap-3 mt-3">
              <select
                required
                placeholder=""
                value={formData.Course}
                onChange={(e) => handleCourseChange(e.target.value)}
                className="w-full h-10 px-4 focus:outline-none rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
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

            <div className="flex w-full flex-col md:flex-row gap-3 mt-3">
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
              <select
                value={formData.City}
                onChange={(e) => handleCityChange(e.target.value)}
                required
                className="w-full md:w-1/2 classic px-5  h-10 border-none focus:outline-none rounded-md bg-[#BEE2E4] text-[#2D2D2D]"
                disabled={!formData.State}
              >
                <option value="">Select City</option>
                {formData.State &&
                  cities[formData.State]
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((city, index) => (
                      <option key={index} value={city.id}>
                        {city.name}
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
              disabled={!verified}
              title={verified ? "" : "Please Verify Mobile Number"}
              className={`w-full min-w-[250px] md:w-[30%] mx-auto bg-[#B90124] text-xl text-[#FFFFFF] cursor-pointer py-2 rounded-md disabled:opacity-100 disabled:cursor-not-allowed font-semibold mt-6 md:mt-3 shadow-[0px_3.409px_11.847px_0px_rgba(0,_0,_0,_0.25)]`}
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
