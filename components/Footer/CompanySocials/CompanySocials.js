import React from "react";
import Link from "next/link";
// import logo from "../../../public/cmpny_logo.png";
import facebookLogo from "../../../public/facebook.svg";
import twitterLogo from "../../../public/twitter.svg";
import instagramLogo from "../../../public/instagram.svg";
import linkedinLogo from "../../../public/linkedin.svg";
import youtubeLogo from "../../../public/youtube.svg";
import "../../../styles/footer/companySocials.css";
import Image from "next/image";
function CompanySocials() {
  const socials = [
    {
      id: 1,
      mediaName: "faceBook",
      link: "https://www.facebook.com/tulasinternationalschool/",
      logo: facebookLogo,
    },
    {
      id: 2,
      mediaName: "twitter",
      link: "https://twitter.com/tulas_intschool?lang=en",
      logo: twitterLogo,
    },
    {
      id: 3,
      mediaName: "linkedin",
      link: "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      logo: linkedinLogo,
    },
    {
      id: 4,
      mediaName: "instagram",
      link: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      logo: instagramLogo,
    },
    {
      id: 5,
      mediaName: "youtube",
      link: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      logo: youtubeLogo,
    },
  ];

  return (
    <div className="cmpny-socials-container">
      {/* <Image src={logo} className='cmpny-socials-logo' alt='logo' />
        <h4 className='cmpny-tagline'>Random 2 line text to fill out empty space real text added later</h4> */}
      <div className="cmpny-social-btns">
        <ul className="cmpny-socials-btns-list">
          {socials.map((item, id) => (
            <li className="cmpny-socials-btns-item" key={id}>
              <a
                href={item.link}
                target="_blank"
                className="cmpny-socials-btns-link"

                // onClick={handleClick}
              >
                <Image
                  src={item.logo}
                  className="cmpny-socials-btns-logo"
                  alt={item.mediaName}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanySocials;
