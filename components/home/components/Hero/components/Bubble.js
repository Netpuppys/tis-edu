import React from "react";
import "../../../../../styles/home/components/Hero/components/Bubble.css";
import Image from "next/image";
function Bubble(props) {
  const imageSrc = props.image;
  const title = props.title || "TIS";

  return (
    <div className="bubble-container">
      <div className="image-div">
        <Image src={imageSrc} className="background" alt="events" />
        <div className="fade"></div>
      </div>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default Bubble;
