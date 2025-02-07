"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import React, { useState } from "react";
import { data } from "./data";
import background from "../../public/tc/background.webp";
import Image from "next/image";

function TransferCertificate() {
  const [selectedSession, setSelectedSession] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [DOB, setDOB] = useState("");

  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const parseDate = (formattedDate) => {
    const [day, month, year] = formattedDate.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const formattedValue = e.target.value; // yyyy-mm-dd
    setDOB(formatDate(formattedValue)); // Format to dd/mm/yyyy
  };

  const handleSearch = () => {
    if (!selectedSession || !admissionNo || !DOB) {
      setMessage("Please Enter all required Details");
    }
    const session = data.find((item) => item.sessions === selectedSession);
    if (session) {
      const student = session.sessionData.find(
        (s) => s.admissionNo === admissionNo && s.DOB === DOB
      );
      if (student) {
        setResult(student);
      } else {
        setResult(null);
        setMessage("No Record Found");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="h-screen min-h-[850px] w-full bg-black bg-opacity-80 flex flex-col justify-center items-center"
      >
        <Image
          src={background}
          alt=""
          className="w-full h-screen min-h-[850px] top-0 left-0 object-cover absolute -z-10"
        />
        <div className="w-full">
          <div className="py-2 md:py-5">
            <h2 className="text-[clamp(10px,7vw,50px)] text-white w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
              Transfer <span className="text-[#b90124]">Certificate</span>
            </h2>
          </div>
          <div className="w-[90%] md:w-fit p-6 bg-[#b90124] rounded-md bg-opacity-60 text-white mx-auto flex flex-col gap-[1.75rem]">
            <div className="w-full md:min-w-[400px] mx-auto flex flex-col">
              <label>
                Select Session:<span className="text-[#b90124]">*</span>
              </label>
              <select
                className={`bg-transparent border-b focus:outline-none w-full h-10 px-6 text-white font-medium`}
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
              >
                <option className="bg-[#b90124]" value="">
                  Select Session
                </option>
                {data.map((item, index) => (
                  <option
                    className="bg-[#b90124]"
                    key={index}
                    value={item.sessions}
                  >
                    {item.sessions}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:max-w-[400px] mx-auto flex flex-col">
              <label>
                Admission Number:<span className="text-[#b90124]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Admission Number"
                className="bg-transparent border-b focus:outline-none w-full h-10 px-6 text-white placeholder:text-white font-medium"
                value={admissionNo}
                onChange={(e) => setAdmissionNo(e.target.value)}
              />
            </div>

            <div className="w-full md:max-w-[400px] mx-auto flex flex-col">
              <label>
                Date of Birth:<span className="text-[#b90124]">*</span>
              </label>
              <input
                type="date"
                className="bg-transparent border-b focus:outline-none w-full h-10 px-6 text-white font-medium"
                value={DOB ? parseDate(DOB) : ""}
                max={new Date().toISOString().split("T")[0]} // Ensure max date is today
                onChange={handleChange}
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full max-w-[300px] mx-auto text-white font-[TTChocolatesBold] text-[1.5rem] font-semibold h-10 rounded-lg bg-[#000] flex items-center justify-center"
            >
              Search
            </button>
          </div>
          <p className="text-[#b90124] mt-[1.75rem]">{message}</p>
          {result && (
            <div className="w-[90%] bg-white text-black md:w-[80%] mx-auto overflow-auto mt-[1.75rem]">
              <table className="border w-full border-black border-collapse ">
                <thead>
                  <tr>
                    <th className="border border-black border-collapse p-2">
                      Name of Student
                    </th>
                    <th className="border border-black border-collapse p-2">
                      Father's Name
                    </th>
                    <th className="border border-black border-collapse p-2">
                      Admission No
                    </th>
                    <th className="border border-black border-collapse p-2">
                      Date of Birth
                    </th>
                    <th className="border border-black border-collapse p-2">
                      Transfer Certificate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black border-collapse p-2">
                      {result.name}
                    </td>
                    <td className="border border-black border-collapse p-2">
                      {result.fathersName}
                    </td>
                    <td className="border border-black border-collapse p-2">
                      {result.admissionNo}
                    </td>
                    <td className="border border-black border-collapse p-2">
                      {result.DOB}
                    </td>
                    <td className="border border-black border-collapse text-center p-2">
                      <a
                        download
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          const link = document.createElement("a");
                          link.href = result.tc;
                          link.download = `${result.name}_${result.admissionNo}.pdf`;
                          document.body.appendChild(link);
                          link.click();
                          link.remove();
                          // // Open the file in a new tab
                          // window.open(result.tc, "_blank");
                        }}
                        onMouseOver={(e) => {
                          e.preventDefault();
                          return false; // Prevent showing the link in the browser status bar
                        }}
                        className="text-[#0677F9]  underline"
                        style={{ cursor: "pointer" }} // Customize the cursor
                      >
                        Download Transfer Certificate
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransferCertificate;
