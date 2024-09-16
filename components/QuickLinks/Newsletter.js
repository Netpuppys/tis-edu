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
  const openPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <>
      <div>
        <Image
          src={HeaderNewsLetterImg}
          alt="HeaderImg"
          className="headerImgNewsletter"
        />

        <h1 className="headingNewsletter">Newsletter</h1>
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
              onClick={() => openPdf(April2018)}
            >
              DOWNLOAD PDF
            </button>
          </div>
          <div className="newscard">
            <div className="newscard" style={{ background: "#FFFF" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button className="newsletter-btn" onClick={() => openPdf(Nov2018)}>
              DOWNLOAD PDF
            </button>
          </div>
          <div className="newscard">
            <div className="newscard" style={{ background: "#B90124" }}>
              <Image src={newsletter} alt="newsletter" />
            </div>
            <button className="newsletter-btn" onClick={() => openPdf(volume3)}>
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
            <button className="newsletter-btn" onClick={() => openPdf(volume2)}>
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
            <button className="newsletter-btn" onClick={() => openPdf(volume1)}>
              DOWNLOAD PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
