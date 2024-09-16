"use client";

import React from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
const Video = () => {
  const { isMobile } = useMobile();
  return (
    <div id="5" style={{ marginTop: isMobile ? "3rem" : "0rem" }}>
      <div style={{ padding: "50% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/970387029?autoplay=1&loop=1&muted=1&controls=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Video;
