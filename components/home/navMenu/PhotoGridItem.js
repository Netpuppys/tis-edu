import React from "react";
import "../../../styles/home/components/navMenu/PhotoGridItem.css";
import Image from "next/image";
import Link from "next/link";
function PhotoGridItem({ image, title, path }) {
  return (
    <div className="navmenu-photo-grid-item">
      <a href={path} passHref>
        <Image src={image} className="image" alt="TIS" />
        <p className="title">{title}</p>
      </a>
    </div>
  );
}

export default PhotoGridItem;
