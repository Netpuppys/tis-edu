"use client";
import React, { useContext } from "react";
import "../../../styles/footer/footerLinks.css";
import { UtmContext } from "@/components/globalComponents/utmParams";

function FooterLinks(props) {
  const linkData = props.linksData;
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="footerlinks-container">
      {/* About section */}
      {linkData[0].links.map((item) => (
        <li className="footerlinks-link" key={item.id}>
          <a onClick={item.OnClick} href={`${item.linkTo}${utmParams}`}>
            <h5 className="footerlinks-link-name">{item.linkName}</h5>
          </a>
        </li>
      ))}
    </div>
  );
}

export default FooterLinks;
