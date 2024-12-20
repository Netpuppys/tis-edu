"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import lineImg from "../../../public/doodles/yellowLine1.svg";
import schoolLogo from "../../../public/logos/schoolLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import "../../../styles/globalComponents/navbar/NavBar.css";
import optionsIcon from "../../../public/icons/Button-Open-Menu.png";
import optionsIconClose from "../../../public/icons/Button-Close-Menu.png";
import menuIcon from "../../../public/icons/menu-text.png";
import menuCloseIcon from "../../../public/icons/menu-close-text.png";
import NavMenu from "../../home/navMenu/NavMenu";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useMobile } from "../IsMobileContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const isMobile = useMobile();
  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  useEffect(() => {
    const loadScriptAndStyles = () => {
      var t = document.createElement("script");
      t.type = "text/javascript";
      t.src =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/tisd/ee-form-widget/form-2/widget.js";
      document.getElementsByTagName("head")[0].appendChild(t);
    };

    loadScriptAndStyles();
  }, []);

  const handleLandingPage = () => {
    window.location.href = "https://admission.tis.edu.in";
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const handleMenuBtn = () => {
    setIsNavMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      "https://extraaedgeresources.blob.core.windows.net/documents/tisd/Chatbot/js/chat.js";
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  const sitemap = [
    {
      title: "About TIS",
      nestedLinks: [
        { title: "Our History", linkTo: "/about-tis/our-history/" },
        { title: "Why Choose Us?", linkTo: "/about-tis/why-choose-us/" },
        { title: "Vision & Mission", linkTo: "/about-tis/vision-mission/" },
        {
          title: "Awards & Achievements",
          linkTo: "/about-tis/awards-achievements/",
        },
        {
          title: "Headmaster's Profile",
          linkTo: "/about-tis/principal-message/",
        },
        { title: "Our Management", linkTo: "/about-tis/about-management/" },
        { title: "Virtual Tour", linkTo: "/virtual-tour/" },
      ],
    },
    {
      title: "Academics",
      nestedLinks: [
        { title: "Pedagogy", linkTo: "/academics/pedagogy/" },
        { title: "Curriculum", linkTo: "/academics/affilation" },
        { title: "Streams Offered", linkTo: "/academics/streams-offered/" },
        {
          title: "Career Counselling",
          linkTo: "/academics/career-counselling/",
        },
        {
          title: "International Tie-Ups",
          linkTo: "/academics/international-tie-ups/",
        },
        { title: "Publications", linkTo: "/academics/publications/" },
      ],
    },
    {
      title: "Boarding Life",
      nestedLinks: [
        { title: "Pastoral Care", linkTo: "/boarding-life/pastoral-care/" },
        {
          title: "Food & Nutrition",
          linkTo: "/boarding-life/food-and-nutrition/",
        },
        { title: "Facilities", linkTo: "/boarding-life/facilities/" },
        {
          title: "Infirmary & Medical Facilities",
          linkTo: "/boarding-life/infirmary-and-medical-facilities/",
        },
        {
          title: "Our House System",
          linkTo: "/boarding-life/our-house-system/",
        },
      ],
    },
    {
      title: "Beyond Academics",
      nestedLinks: [
        { title: "Sports", linkTo: "/beyond-academics/sports/" },
        { title: "Music & Dance", linkTo: "/beyond-academics/music" },
        {
          title: "Clubs & Societies",
          linkTo: "/beyond-academics/clubs-and-societies/",
        },
        { title: "Celebrations", linkTo: "/events/celebrations/" },
        { title: "Confluence", linkTo: "/events/confluence/" },
      ],
    },
    {
      title: "Admission",
      nestedLinks: [
        { title: "Admission Procedure", linkTo: "/admission-procedure/" },
        {
          title: "Registration Process",
          linkTo: "/admission-procedure/registration-form/",
        },
        {
          title: "Pay Fee Online",
          linkTo: "https://pages.razorpay.com/pl_EehyEVeDo25wMd/view",
        },
        {
          title: "Fee Structure",
          linkTo: "/admission-procedure/fee-structure/",
        },
        {
          title: "Scholarship Programs",
          linkTo: "/admission-procedure/scholarship-programmes/",
        },
        {
          title: "Withdrawal Policy",
          linkTo: "/admission-procedure/withdrawal-policy/",
        },
      ],
    },
    {
      title: "Mandatory Disclosure",
      nestedLinks: [
        { title: "Mandatory Disclosure", linkTo: "/cbse-documents/" },
      ],
    },
    {
      title: "Quick Links",
      nestedLinks: [
        { title: "Blogs", linkTo: "/blog" },
        { title: "Contact Us", linkTo: "/contact-us/" },
        { title: "Newsletter", linkTo: "/newsletter/" },
        { title: "Careers", linkTo: "/careers/" },
      ],
    },
  ];

  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=919458311000", "_blank");
  };
  const renderNestedLinks = (nestedLinks) => (
    <div className="dropdown">
      {nestedLinks.map((nestedItem, nestedIndex) => (
        <div className="listed-item" key={nestedIndex}>
          <a href={nestedItem?.linkTo} style={{ color: "#fff" }}>
            <div className="title-arrow">
              <p className="nested-link-title">{nestedItem?.title}</p>
              {nestedItem?.nestedLinks?.length > 1 && (
                <IoIosArrowForward className="nav-arrows" />
              )}
            </div>
          </a>

          {nestedItem.nestedLinks && nestedItem.nestedLinks.length > 0 && (
            <div className="super-nested-links">
              {nestedItem.nestedLinks.length > 1}
              {renderNestedLinks(nestedItem.nestedLinks)}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="navbar-global">
      <div className="top-bar">
        <a className="phone-number" href="tel:+91-9837983791">
          <FaPhone className="phone-icon" />
          ADMISSION HELPLINE NO. +91-9837983791
        </a>
        <button
          id="extraedge-popup7"
          className="enquire"
          style={{ opacity: "0" }}
        >
          Enquire Now
        </button>
      </div>
      <nav className={`navbar-main-div-global scrolled`}>
        <a href="/">
          <Image src={schoolLogo} className="second-nav-logo" alt="school" />
        </a>
        <div className="navbar-list-main">
          {sitemap.map((item, index) => (
            <div
              className="main-listed-item"
              key={index}
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={() => handleMenuLeave()}
            >
              <a href={item.linkTo}>
                <p className="title">{item.title}</p>
                <Image src={lineImg} className="yellow-line" alt="line" />
              </a>
              <div className="dropdown-container">
                {activeMenu === index &&
                  item.nestedLinks &&
                  item.nestedLinks.length > 0 &&
                  renderNestedLinks(item.nestedLinks)}
              </div>
            </div>
          ))}
        </div>
        <button className="options-btn" onClick={handleMenuBtn}>
          <Image
            src={isNavMenuVisible ? optionsIconClose : optionsIcon}
            className="options"
            alt="TIS"
          />
          <div className="menu-icon-div">
            <Image
              src={isNavMenuVisible ? menuCloseIcon : menuIcon}
              className="menu-icon"
              alt="menu"
            />
          </div>
        </button>
      </nav>
      {isNavMenuVisible && (
        <div className="sidebar-container">
          <NavMenu handleMenuBtn={handleMenuBtn} />
        </div>
      )}
      <div className="form-btn-container">
        <button onClick={handleLandingPage} className="form-open-btn">
          APPLY NOW
        </button>
      </div>
      <div
        className="chat-btn"
        onClick={handleWhatsapp}
        style={{
          borderRadius: "50%",
          backgroundColor: "#25d366",
          display: "flex",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <FaWhatsapp
          style={{
            color: "#fff",
            alignSelf: "center",
            margin: "auto",
          }}
        />
      </div>
      <div id="link"></div>

      {isMobile && (
        <div className="bottom-bar-all-pages">
          <button
            id="extraedge-popup8"
            className="bottom-enquire"
            style={{ opacity: "0" }}
          >
            Enquire Now
          </button>
          <div className="phone-div-bottom-bar">
            <a className="bottom-phone-number" href="tel:+91-9837983791">
              <FaPhone className="bottom-phone-icon" /> +91-9837983791
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
