import React, { useState, useEffect } from "react";
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

function NestedLinkElements({ navlinks, setNestedLinksVisible }) {
  const [superNestedLinksVisible, setSuperNestedLinksVisible] = useState(false);

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
                <Link href={item.linkTo || "#"} className="links">
                  {item.title}
                  {item.nestedLinks && item.nestedLinks.length > 0 && (
                    <IoAddSharp className="expand-icon" />
                  )}
                </Link>

                {item.nestedLinks &&
                  item.nestedLinks.length > 0 &&
                  superNestedLinksVisible && (
                    <div className="nested-links-dropdown">
                      {item.nestedLinks.map((nestedItem, index) => (
                        <Link
                          key={index}
                          href={nestedItem.linkTo || "#"}
                          className="super-nested-link-item"
                        >
                          -{nestedItem.title}
                        </Link>
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
                <li className="list-item-home">
                  <Link href="/" onClick={handleMenuBtn} className="list-item">
                    Home
                  </Link>
                </li>
                {sitemap.map((item, index) => (
                  <li
                    key={index}
                    className={activeLink === index ? "active" : ""}
                  >
                    <p
                      onClick={() => toggleNestedLinks(index)}
                      className="list-item"
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