"use client";

import React, { useContext } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import FooterLinks from "./footerLinks/FooterLinks";
import footerLogo from "../../public/logos/footer-logo.png";
import footerLogoMobile from "../../public/logos/footer-logo-mobile.png";
import markerIcon from "../../public/icons/marker.svg";
import phoneIcon from "../../public/icons/phone.svg";
import facebookLogo from "../../public/facebook.svg";
import twitterLogo from "../../public/twitter.svg";
import instagramLogo from "../../public/instagram.svg";
import linkedinLogo from "../../public/linkedin.svg";
import youtubeLogo from "../../public/youtube.svg";
import "../../styles/footer/Footer.css";
import BottomBar from "./BottomBar";
import Calendar from "../../public/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf";
import Broucher from "../../public/MandatoryPDF/TIS_BROCHURE.pdf";
import DisciplinaryPolicy from "../../public/MandatoryPDF/DisciplinaryPolicy.pdf";
import childWelfarePolicy from "../../public/MandatoryPDF/childWelfarePolicy.pdf";
import MobilePhonePolicy from "../../public/MandatoryPDF/MobilePhonePolicy.pdf";
import Image from "next/image";
import Link from "next/link";
import { UtmContext } from "../globalComponents/utmParams";
import { TbDeviceLandlinePhone } from "react-icons/tb";
function Footer() {
  const { isMobile } = useMobile();
  const { utmParams } = useContext(UtmContext);
  const ourCampusLinks = [
    {
      title: "Our Campus",
      links: [
        { id: 1, linkName: "FAQ", linkTo: "/faq/" },
        {
          id: 2,
          linkName: "Calendar",
          linkTo: Calendar,
        },
        {
          id: 3,
          linkName: "Brochure",
          linkTo: Broucher,
        },
        // {
        //   id: 4,
        //   linkName: "Registration Form",
        //   linkTo: "/admission-procedure/",
        // },
        // { id: 5, linkName: "Blogs", linkTo: "/blog" },
        { id: 6, linkName: "Privacy Policy", linkTo: "/privacy-policy/" },
        { id: 7, linkName: "Terms & Conditions", linkTo: "/terms-conditions/" },
        { id: 8, linkName: "Disciplinary Policy", linkTo: DisciplinaryPolicy },
        { id: 9, linkName: "Mobile Phone Policy", linkTo: MobilePhonePolicy },
        {
          id: 10,
          linkName: "Child Welfare & Safety Policy",
          linkTo: childWelfarePolicy,
        },
      ],
    },
    // Add more sections as needed
  ];

  const socialLinks = [
    {
      title: "facebook",
      linkTo: "https://www.facebook.com/tulasinternationalschool/",
      icon: facebookLogo,
    },
    {
      title: "instagram",
      linkTo: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      icon: instagramLogo,
    },
    {
      title: "X/Twitter",
      linkTo: "https://twitter.com/tulas_intschool?lang=en",
      icon: twitterLogo,
    },
    {
      title: "Youtube",
      linkTo: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      icon: youtubeLogo,
    },
    {
      title: "Linkedin",
      linkTo:
        "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      icon: linkedinLogo,
    },
  ];

  const handleApply = () => {
    window.location.href = `/admission-procedure/${utmParams}`;
  };

  return (
    <div className="footer-container">
      {!isMobile && (
        <>
          <iframe
            className="map-footer rounded-xl"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "20%",
              height: "350px",
              marginLeft: "-10%",
              marginRight: "2%",
            }}
            src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India%3A%20Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%3B%20Dehradun%2C%20Uttarakhand%3B%20India&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            aria-label="Dhoolkot, P.O - Selaqui, Chakrata Road Dehradun, Uttarakhand India: Dhoolkot, P.O - Selaqui, Chakrata Road; Dehradun, Uttarakhand; India"
            data-rocket-lazyload="fitvidscompatible"
            alt=""
            data-lazy-src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India%3A%20Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%3B%20Dehradun%2C%20Uttarakhand%3B%20India&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="Map of Dhoolkot, P.O - Selaqui, Chakrata Road Dehradun, Uttarakhand India"
          ></iframe>

          <div className="hero">
            <Image src={footerLogo} className="logo" alt="TIS" />
            <p className="address">
              Tula&apos;s International School
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2a8f6621db6d:0xb5df8a7bd77caf7d!8m2!3d30.3430336!4d77.8891652!16s%2Fm%2F0121_pmh?entry=ttu"
              >
                Dhoolkot, P.O – Selaqui, Chakrata Road,
                <br />
                Dehradun-248011 (Uttarakhand){" "}
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="tel:0135-2699444"
              >
                Landline No. 0135-2699444
              </a>
              {", "}
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="tel:0135-2699666"
              >
                0135-2699666
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="tel:+91-9837983791"
              >
                Admission Helpline No. +91-9837983791
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="mailTo:info@tis.edu.in"
              >
                info@tis.edu.in
              </a>
            </p>
          </div>
          <div className="linkTo-list">
            <FooterLinks linksData={ourCampusLinks} />
          </div>
          <div className="three-buttons">
            <a
              target="_blank"
              href="https://tis.edu.in/virtual-tour/"
              className="button "
            >
              Virtual Tour
            </a>

            <div onClick={handleApply} className="button">
              Apply Now
            </div>

            <a
              target="_blank"
              href="https://tis.fedena.com/"
              className="button"
            >
              fedena Login
            </a>
          </div>
          <BottomBar />
        </>
      )}
      {isMobile && (
        <>
          <div className="header">
            <a href={`/${utmParams}`}>
              <Image src={footerLogoMobile} className="logo" alt="TIS" />
            </a>
            <div className="right">
              <div className="info-div">
                <Image src={markerIcon} className="icon" alt="point" />
                <p className="text">
                  Tula’s International School Dhoolkot, P.O – Selaqui, Chakrata
                  Road, Dehradun-248011 (Uttarakhand)
                </p>
              </div>
              <div className="info-div">
                {/* <Image src={phoneIcon} className="icon" alt="phone" /> */}
                <TbDeviceLandlinePhone className="icon text-white" />
                <p className="text">
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="tel:0135-2699444"
                  >
                    Landline No. 0135-2699444
                  </a>
                  {", "}
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="tel:0135-2699666"
                  >
                    0135-2699666
                  </a>
                </p>
              </div>
              <div className="info-div">
                <Image src={phoneIcon} className="icon" alt="phone" />
                <p className="text">
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="tel:+919837983791"
                  >
                    Admission Helpline No. (+91) 9837983791
                  </a>
                  <br />
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="mailTo:info@tis.edu.in"
                  >
                    info@tis.edu.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="three-buttons">
            <a
              target="_blank"
              href="https://tis.edu.in/virtual-tour/"
              className="button"
            >
              Virtual Tour
            </a>

            <div onClick={handleApply} className="button">
              Apply Now
            </div>

            <a
              target="_blank"
              href="https://tis.fedena.com/"
              className="button"
            >
              fedena Login
            </a>
          </div>
          <div className="all-links">
            <div className="mobile-links">
              {ourCampusLinks[0].links.map((item, index) => (
                <a
                  className="link"
                  key={index}
                  href={`${item.linkTo}${utmParams}`}
                >
                  <p className="links">{item.linkName}</p>
                </a>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <a
                  className="link"
                  key={index}
                  target="_blank"
                  href={item.linkTo}
                >
                  <Image src={item.icon} className="icon" alt={item.title} />
                  <p className="title">{item.title}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="bottom-bar">
            <p className="copyright-text">
              Copyright © 2025 Tula&apos;s International School, Dehradun | All
              Rights Reserved <br />
              Designed and Managed By{" "}
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                href={"https://netpuppys.com"}
              >
                NetPuppys
              </a>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;
