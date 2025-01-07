"use client";
import React from "react";
import "../../styles/QuickLinks/Newsletter.css";
import newsletter from "../../public/pictures/Newsletter.png";
import HeaderNewsLetterImg from "../../public/Header/NewsletterHeader.png";
import April2018 from "../../public/MandatoryPDF/April2018.pdf";
import Nov2018 from "../../public/MandatoryPDF/Nov2018.pdf";
import volume3 from "../../public/MandatoryPDF/volume3.pdf";
import volume2 from "../../public/MandatoryPDF/volume2.pdf";
import volume1 from "../../public/MandatoryPDF/Volume1.pdf";
import Image from "next/image";
const Newsletter = () => {
  return (
    <>
      <div className="w-full h-[80vh] md:h-screen relative flex flex-col items-center justify-end">
        <Image
          src={HeaderNewsLetterImg}
          alt="HeaderImg"
          className="h-full w-full object-cover absolute -z-10"
        />

        <h1 className="font-[Mirador800] text-white z-10 text-[clamp(15px,7.5vw,60px)] md:text-[clamp(20px,3.2vw,80px)]">
          Newsletter
        </h1>
        <br />
      </div>

      <div className="newsletter-main">
        <h2>
          Volume 3 <span>(2018 - 2019)</span>
        </h2>

        <div className="newsletter-card">
          <div className="newscard">
            <div className="newscard" style={{ background: "#B90124" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button
              className="newsletter-btn"
              onClick={() => window.open(April2018, "_blank")}
            >
              DOWNLOAD PDF
            </button>
          </div>
          <div className="newscard">
            <div className="newscard" style={{ background: "#FFFF" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button
              className="newsletter-btn"
              onClick={() => window.open(Nov2018, "_blank")}
            >
              DOWNLOAD PDF
            </button>
          </div>
          <div className="newscard">
            <div className="newscard" style={{ background: "#B90124" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button
              className="newsletter-btn"
              onClick={() => window.open(volume3, "_blank")}
            >
              DOWNLOAD PDF
            </button>
          </div>
        </div>

        <h2>
          Volume 2 <span>(2017)</span>{" "}
        </h2>
        <div className="newsletter-card" style={{ justifyContent: "center" }}>
          <div className="newscard">
            <div className="newscard" style={{ background: "#B90124" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button
              className="newsletter-btn"
              onClick={() => window.open(volume2, "_blank")}
            >
              DOWNLOAD PDF
            </button>
          </div>
        </div>
        <h2>
          Volume 1 <span>(2015)</span>
        </h2>
        <div className="newsletter-card" style={{ justifyContent: "center" }}>
          <div className="newscard">
            <div className="newscard" style={{ background: "#B90124" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button
              className="newsletter-btn"
              onClick={() => window.open(volume1, "_blank")}
            >
              DOWNLOAD PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
