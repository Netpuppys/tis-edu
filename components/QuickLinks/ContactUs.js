"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../globalComponents/Header/Header";
import HeaderContactImg from "../../public/Header/ContactUsHeader.png";
import "../../styles/QuickLinks/ContactStyle.css";

const ContactUs = () => {
  const serviceId = "service_2seepv9";
  const templateId = "template_z6cckyl";
  const publicKey = "cZ_xcJGz4SpnoKOE8";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, subject, message } = formData;

    const templateParams = {
      name,
      email,
      mobile,
      subject,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        // alert('Message sent successfully!');
        toast("Thank you for showing interest. We shall get in touch soon.");

        setFormData({
          name: "",
          mobile: "",
          subject: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);

        alert("Message failed to send.");
      });
  };
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

      <form onSubmit={handleSubmit} className="form-contact">
        <div className="grid-form">
          <div className="input-container">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Mobile No.</label>
            <input
              type="number"
              placeholder="Phone"
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="textarea-container">
          <label>Message</label>
          <textarea
            type="text"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="(Optional)"
            rows="3"
          />
        </div>
        <div className="button-div">
          <button
            type="submit"
            className="w-fit px-14 py-1 md:px-44 md:py-2 bg-white text-[#760135] rounded-3xl text-[24px] hover:bg-[#59032f] hover:text-white transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
