import React, { useContext } from "react";
import "../../../styles/home/components/navMenu/PhotoGridItem.css";
import Image from "next/image";
import Link from "next/link";
import { UtmContext } from "@/components/globalComponents/utmParams";
function PhotoGridItem({ image, title, path }) {
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="navmenu-photo-grid-item">
      <a href={`${path}${utmParams}`}>
        <Image src={image} className="image" alt="TIS" />
        <p className="title">{title}</p>
      </a>
    </div>
  );
}

export default PhotoGridItem;
