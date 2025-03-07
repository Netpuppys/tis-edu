import React, { useState, useEffect, useContext } from "react";
import Link from "next/link"; // Correct import for Next.js Link component
import { useMobile } from "../../globalComponents/IsMobileContext";
import firstcard from "../../../public/delete-later/header-admissions1.JPG";
import secondCard from "../../../public/delete-later/header-admissions2.JPG";
import thirdCard from "../../../public/delete-later/header-admissions3.JPG";
import fourthCard from "../../../public/delete-later/header-admissions4.JPG";
import closeIcon from "../../../public/icons/close.svg";
import PhotoGridItem from "./PhotoGridItem";
import { IoAddSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import MobileNestedLinkElements from "./mobileNestedLinks/MobileNestedLinksElements";
import "../../../styles/home/components/navMenu/NavMenu.css";
import Image from "next/image";
import { UtmContext } from "@/components/globalComponents/utmParams";

function NestedLinkElements({ navlinks, setNestedLinksVisible }) {
  const [superNestedLinksVisible, setSuperNestedLinksVisible] = useState(false);
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="nested-links-div">
      <div className="content">
        <button
          className="close-btn"
          onClick={() => setNestedLinksVisible(false)}
        >
          <Image src={closeIcon} className="close-icon" alt="exit" />
        </button>
        <ul>
          {navlinks.map((item, id) => (
            <React.Fragment key={id}>
              <div
                className="link-item"
                onClick={() => setSuperNestedLinksVisible((prev) => !prev)}
              >
                <a href={`${item.linkTo}${utmParams}`} className="links">
                  {item.title}
                  {item.nestedLinks && item.nestedLinks.length > 0 && (
                    <IoAddSharp className="expand-icon" />
                  )}
                </a>

                {item.nestedLinks &&
                  item.nestedLinks.length > 0 &&
                  superNestedLinksVisible && (
                    <div className="nested-links-dropdown">
                      {item.nestedLinks.map((nestedItem, index) => (
                        <a
                          key={index}
                          href={`${nestedItem.linkTo}${utmParams}`}
                          className="super-nested-link-item"
                        >
                          -{nestedItem.title}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NavMenu({ handleMenuBtn }) {
  const { isMobile } = useMobile();
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [rightDivOpacity, setRightDivOpacity] = useState(1);
  const { utmParams } = useContext(UtmContext);
  useEffect(() => {
    if (nestedLinksVisible === true) {
      setRightDivOpacity(0.3);
    } else {
      setRightDivOpacity(1);
    }
  }, [nestedLinksVisible]);

  const toggleNestedLinks = (id) => {
    setNestedLinksVisible(true);
    setActiveLink(id);
  };

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
  return (
    <>
      <div className="nav-menu-main-div">
        <div className="left-div">
          {isMobile && nestedLinksVisible ? (
            <MobileNestedLinkElements
              title={sitemap[activeLink].title}
              navlinks={sitemap[activeLink].nestedLinks}
              setNestedLinksVisible={setNestedLinksVisible}
            />
          ) : (
            <>
              <ul>
                <li className="listed-item-home">
                  <a
                    href={`/${utmParams}`}
                    onClick={handleMenuBtn}
                    className="listed-item"
                  >
                    Home
                  </a>
                </li>
                {sitemap.map((item, index) => (
                  <li
                    key={index}
                    className={activeLink === index ? "active" : ""}
                  >
                    <p
                      onClick={() => toggleNestedLinks(index)}
                      className="listed-item"
                    >
                      {item.title}
                      <FaLongArrowAltRight className="arrow-icon" />
                    </p>
                  </li>
                ))}
              </ul>
              {!isMobile && nestedLinksVisible && (
                <NestedLinkElements
                  navlinks={sitemap[activeLink].nestedLinks}
                  setNestedLinksVisible={setNestedLinksVisible}
                />
              )}
            </>
          )}
        </div>
        <div style={{ opacity: rightDivOpacity }} className="right-div">
          <div className="promo-div">
            <div className="photo-grid">
              <div className="photo-div">
                <PhotoGridItem
                  image={firstcard}
                  path="/about-tis/why-choose-us/"
                  title={"Explore our vibrant campus life."}
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  image={secondCard}
                  path="/academics/streams-offered"
                  title={"Discover our comprehensive academic programs."}
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  image={thirdCard}
                  path="/boarding-life/facilities"
                  title={
                    "Learn about our state-of-the-art boarding facilities."
                  }
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  path="/beyond-academics/clubs-and-societies"
                  image={fourthCard}
                  title={"Join us in celebrating diverse cultural events."}
                />
              </div>
            </div>
          </div>
          {/*
          <div className="footer-btns-div">
            <button className="btn student">STUDENTS</button>
            <div className="divider"></div>
            <button className="btn staff">FACULTY/STAFF</button>
          </div>
           */}
        </div>
      </div>
    </>
  );
}

export default NavMenu;
