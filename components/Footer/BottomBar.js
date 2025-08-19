import React, { useState } from "react";
import "../../styles/footer/bottomBar.css";
import CompanySocials from "./CompanySocials/CompanySocials";
import Link from "next/link";
function BottomBar() {
  return (
    <div className="bottom-bar">
      <p className="copyright-text">
        Copyright © 2025 Tula&apos;s International School, Dehradun | All Rights
        Reserved <br />
        Designed and Managed By{" "}
        <a
          style={{ textDecoration: "none", color: "#fff" }}
          target="_blank"
          href={"https://netpuppys.com"}
        >
          NetPuppys
        </a>{" "}
      </p>
      <CompanySocials />      
    </div>
  );
}

export default BottomBar;
