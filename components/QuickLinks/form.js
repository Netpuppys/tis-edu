import React, { useContext, useState } from "react";
import axios from "axios";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { UtmContext } from "../globalComponents/utmParams";
import { ThreeDots } from "react-loader-spinner";
function ContactForm() {
  const { utmParams } = useContext(UtmContext);
  const [formData, setFormData] = useState({
    AuthToken: "tisd_24-08-2024",
    Source: "tisd",
    FirstName: "",
    Email: "",
    MobileNumber: "91",
    Field4: "",
    Remarks: "",
    LeadSource: 115,
    LeadCampaign: "",
    LeadChannel: 20,
  });
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameFst, setNameFst] = useState("");
  const [nameLst, setNameLst] = useState("");
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
  const handleNameChange = (e) => {
    const nameFirst = e.target.value;
    setNameFst(nameFirst);
    setFormData({
      ...formData,
      FirstName: `${nameFirst} ${nameLst}`,
    });
  };
  const handleFullNameChange = (e) => {
    const nameLast = e.target.value;
    setNameLst(nameLast);
    setFormData({
      ...formData,
      FirstName: `${nameFst} ${nameLst}`,
    });
  };
  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      Field4: value,
    }));
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmTerm = searchParams.get("utm_term");
    const updatedFormData = {
      ...formData,
      LeadChannel: utmParams ? 26 : 20,
      LeadSource: utmParams ? utmSource || 88 : 115,
      LeadCampaign: utmParams
        ? utmCampaign || "Contact Us Form Ads"
        : "Contact Us Form Organic",
      LeadTerm: utmParams
        ? utmTerm || "No Term Found"
        : "Organic Lead Search Term not available",
    };

    axios
      .post(
        "https://thirdpartyapi.extraaedge.com/api/SaveRequest",
        updatedFormData
      )
      .then(() => {
        setLoading(false);
        setFormData({
          AuthToken: "tisd_24-08-2024",
          Source: "tisd",
          FirstName: "",
          Email: "",
          MobileNumber: "91",
          LeadSource: 115,
          LeadChannel: 20,
          Field4: "",
          Remarks: "",
        });
        window.location.href = `/boarding-school/admission-open/thank-you${utmParams}`;
      })
      .catch((error) => {
        setLoading(false);
        alert.error(error);
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
        className="w-full h-fit bg-white px-4 md:px-12 py-6 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 pt-5">
          <div className="w-full group">
            <label className="text-[#565656] group-focus-within:text-[#B90124]">
              First Name
            </label>
            <input
              type="text"
              required
              value={nameFst}
              onChange={handleNameChange}
              className="py-2 focus:outline-none w-full border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B]"
            />
          </div>
          <div className="w-full group">
            <label className="text-[#565656] group-focus-within:text-[#B90124]">
              Last Name
            </label>
            <input
              type="text"
              required
              value={nameLst}
              onChange={handleFullNameChange}
              className="py-2 focus:outline-none w-full border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-3 mt-6">
          <div className="w-full group">
            <label className="text-[#565656] group-focus-within:text-[#B90124]">
              Email
            </label>
            <input
              type="Email"
              value={formData.Email}
              onChange={(e) => handleChange("Email", e.target.value)}
              required
              className="py-2 focus:outline-none w-full border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B]"
            />
          </div>
          <div className="w-full group">
            <label className="text-[#565656] group-focus-within:text-[#B90124]">
              Phone Number
            </label>
            <div className="flex w-full">
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                className="w-14 h-[41px] text-center focus:outline-none border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B]"
              >
                <option value="91">{`+${getCountryCallingCode("IN")}`}</option>
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
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={`py-2 focus:outline-none w-full border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B] disabled:opacity-100 disabled:cursor-not-allowed`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 mt-6">
          <div className="w-full group flex flex-col gap-3 md:gap-6">
            <label className="text-[#565656]">Select Subject?</label>
            <div className="flex items-center justify-start w-full gap-4 md:gap-8 flex-wrap">
              {["Admission", "Career", "Hostel & Information", "Others"].map(
                (label, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-center gap-1 w-full md:w-fit"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={label}
                      className="hidden peer"
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    <span className="min-w-4 max-w-4 min-h-4 max-h-4 w-4 h-4 border-2 rounded-full flex items-center justify-center border-[#565656] peer-checked:border-[#B90124] peer-checked:bg-[#B90124]">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="w-full peer-checked:font-medium text-sm peer-checked:text-[#B90124] text-[#565656]">
                      {label}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 mt-6">
          <div className="w-full group">
            <label
              htmlFor="Message"
              className="text-[#565656] group-focus-within:text-[#B90124]"
            >
              Message
            </label>
            <input
              type="text"
              required
              value={formData.Remarks}
              placeholder="Write your message.."
              onChange={(e) => handleChange("Remarks", e.target.value)}
              className="py-2 focus:outline-none w-full border-b border-[#565656] group-focus-within:border-[#b90124] text-[#4B4B4B]"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full ml-auto md:w-[214px] bg-[#B90124] text-xl text-[#FFFFFF] cursor-pointer py-2 disabled:opacity-100 disabled:cursor-not-allowed mt-12 shadow-[0px_3.409px_11.847px_0px_rgba(0,_0,_0,_0.25)]`}
        >
          Send Message
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

export default ContactForm;
