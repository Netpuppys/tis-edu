import React from "react";

import "../../../styles/globalComponents/Header/header.css";
// import logo from "../../../../public/logos/schoolLogo.png";
// import optionBtn from "../../../../public/icons/Button-Open-Menu.png";

export default function Header({ title, subtitle, headerImg }) {
  return (
    <div className="header">
      <div
        className="heading-outer"
        style={{
          backgroundImage: `url(${headerImg.src})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="heading">{title}</h1>
      </div>
      <div className="middle">
        <div className="top">
          {/* <button className="counselling-btn"><p style={{fontSize:"12px",margin:"0"}}>More in</p>About TIS</button> */}
          <h2 className="top-heading">
            {subtitle}
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
