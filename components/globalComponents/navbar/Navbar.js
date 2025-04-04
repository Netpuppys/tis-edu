"use client";

import React, { useState, useEffect, useContext } from "react";
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
import FormPopup from "../Form-Popup/form";
import { UtmContext } from "../utmParams";
import { SiGoogleforms } from "react-icons/si";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const isMobile = useMobile();
  const [formPopup, setFormPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { utmParams } = useContext(UtmContext);
  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };
  const handleFormPopup = () => {
    setFormPopup(true);
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
        // {
        //   title: "Counselling",
        //   nestedLinks: [],
        // },
        {
          title: "International Tie-Ups",
          linkTo: "/academics/international-tie-ups/",
        },
        { title: "Publications", linkTo: "/academics/publications/" },
        { title: "Digital Workstations", linkTo: "/digital-workstations" },
        { title: "Awadh Tinkering Lab", linkTo: "/awadh-tinkering-lab" },
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
        { title: "Teachers Profile", linkTo: "/teachers-profile" },
      ],
    },
    {
      title: "Beyond Academics",
      nestedLinks: [
        { title: "Sports", linkTo: "/beyond-academics/sports/" },
        { title: "Beyond The Curriculum", linkTo: "/beyond-academics/music" },
        {
          title: "Clubs & Societies",
          linkTo: "/beyond-academics/clubs-and-societies/",
        },
        { title: "Celebrations", linkTo: "/events/celebrations/" },
        { title: "Mentor & Mentee System", linkTo: "/mentor-mentee" },
        {
          title: "Career Counselling",
          linkTo: "/academics/career-counselling/",
        },
        {
          title: "Raasta Students Counselling",
          linkTo: "/academics/raasta-students-counselling/",
        },
      ],
    },
    {
      title: "Events",
      nestedLinks: [
        { title: "Sports Day", linkTo: "/events/sports-day/" },
        { title: "38th National Games", linkTo: "/events/national-games/" },
        { title: "Founders Day", linkTo: "/events/founders-day/" },
        { title: "Confluence", linkTo: "/events/confluence/" },
        {
          title: "Prominent Personalities",
          linkTo: "/prominent-personalities/",
        },
        {
          title: "Sports Achievements",
          linkTo: "/events/sports-achievements/",
        },
      ],
    },
    {
      title: "Admission",
      nestedLinks: [
        { title: "Admission Procedure", linkTo: "/admission-procedure/" },
        // {
        //   title: "Registration Process",
        //   linkTo: "/admission-procedure/registration-form/",
        // },
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
        { title: "Transfer Certificate", linkTo: "/transfer-certificate" },
        { title: "Parent Testimonial", linkTo: "/parent-testimonial" },
      ],
    },
  ];

  useEffect(() => {
    if (!scrolled) {
      const handleScroll = () => {
        const threshold = 1;
        // 60vh in pixels
        const sixtyVH = window.innerHeight * threshold;

        if (window.scrollY > sixtyVH) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=919258159249", "_blank");
  };

  const renderNestedLinks = (nestedLinks) => (
    <div className="dropdown">
      {nestedLinks.map((nestedItem, nestedIndex) => (
        <div className="listed-item" key={nestedIndex}>
          <a
            href={`${nestedItem?.linkTo}${utmParams}`}
            style={{ color: "#fff" }}
          >
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
    <>
      <div className="navbar-global">
        <div className="top-bar">
          <a className="phone-number" href="tel:+91-9837983791">
            <FaPhone className="phone-icon" />
            ADMISSIONS HELPLINE NO. +91-9837983791
          </a>
          <button onClick={handleFormPopup} className="enquire">
            Enquire Now
          </button>
        </div>
        <nav
          className={`navbar-main-div-global  ${
            scrolled ? "bg-[#b90124]" : "md:bg-[rgba(19,19,19,0.22)]"
          }`}
        >
          <Image
            onClick={() => (window.location.href = `/${utmParams}`)}
            src={schoolLogo}
            className="second-nav-logo"
            alt="school"
          />

          <div className="navbar-list-main">
            {sitemap.map((item, index) => (
              <div
                className="main-listed-item"
                key={index}
                onMouseEnter={() => handleMenuHover(index)}
                onMouseLeave={() => handleMenuLeave()}
              >
                <p className="title">{item.title}</p>
                <Image src={lineImg} className="yellow-line" alt="line" />

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
          <a
            href={`https://admission.tis.edu.in${utmParams}`}
            // target="_blank"
            className="form-open-btn"
          >
            APPLY NOW
          </a>
        </div>
        <div
          className="chat-btn translate-x-1/2 md:translate-x-0"
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
        {isMobile && (
          <div
            style={{
              fontFamily: "TT Chocolates",
            }}
            className="fixed md:hidden bg-[#60BAB1] flex w-full h-fit z-[99999] bottom-0"
          >
            <button
              onClick={handleFormPopup}
              className="flex justify-center gap-2 h-12 items-center text-black w-full"
            >
              <SiGoogleforms />
              Enquire Now
            </button>

            <a
              className="flex justify-center gap-2 h-12 items-center text-black w-full"
              href="tel:+91-9837983791"
            >
              <FaPhone />
              +91-9837983791
            </a>
          </div>
        )}
      </div>
      {formPopup && (
        <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />
      )}
    </>
  );
};

export default Navbar;
