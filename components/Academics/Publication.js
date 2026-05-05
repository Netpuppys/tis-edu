"use client";
import { useEffect } from "react";
import Header from "../globalComponents/Header/Header";
import Image from "next/image";
import HeaderPublicationImg from "../../public/Banner/publications.webp";
import HeaderPublicationMobileImg from "../../public/Banner/publicationsMobile.webp";
import "../../styles/Academics/Publication.css";
import TheVoiceImg from "../../public/MandatoryPDF/TheVoice.png";
import WisdomIsFreeImg from "../../public/MandatoryPDF/Wisdom.png";
import { useMobile } from "../globalComponents/IsMobileContext";
import { Download } from "@mui/icons-material";
import Calendar from "../../public/MandatoryPDF/Calendar.png";
import Broucher from "../../public/MandatoryPDF/Brochure.png";
import Tattoo from "../../public/MandatoryPDF/Tattoo.png";
import theVoice from "../../public/MandatoryPDF/theVoice2.png";
import Nov2024 from "../../public/MandatoryPDF/Nov2024.png";
export default function Publication() {
  const { isMobile } = useMobile();

  useEffect(() => {
    // Initialize Publuu Viewer when the component mounts
    const initPubluuViewer = () => {
      const id = "publuu-viewer-popup";
      let popup = document.getElementById(id);

      if (!popup) {
        popup = document.createElement("div");
        popup.id = id;
        popup.style.cssText =
          "visibility:hidden;z-index:99999;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0, 0, 0, 0.7);opacity:0;transition:all 500ms ease-in-out;";

        const internalElem = document.createElement("div");
        internalElem.style.cssText =
          "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border-radius:5px;width:80%;max-width:1345px;height:90%;max-height:850px;padding:0px;";
        popup.appendChild(internalElem);

        const closeBtn = document.createElement("a");
        closeBtn.href = "";
        closeBtn.innerHTML = "&times;";
        closeBtn.style.cssText =
          "position: absolute; top: -10px; right: -10px; text-decoration: none; width: 24px; height: 24px; font-size: 19px; font-weight: 700; color: rgb(0 0 0); border-radius: 50%; background: white; text-align: center; line-height: 24px; padding-left: 1px;";
        internalElem.appendChild(closeBtn);

        closeBtn.addEventListener("click", (event) => {
          event.preventDefault();
          closePopup();
        });

        const iframe = document.createElement("iframe");
        iframe.setAttribute("allowFullScreen", "");
        iframe.allow = "clipboard-write";
        iframe.style.cssText =
          "width:100%;height:100%;border:0;border-radius: 5px;";
        internalElem.appendChild(iframe);

        document.body.appendChild(popup);
      }

      const showPopup = (url) => {
        const iframe = popup.getElementsByTagName("iframe")[0];
        iframe.src = url;

        popup.style.visibility = "visible";
        popup.style.opacity = "1";
      };

      const closePopup = () => {
        const iframe = popup.getElementsByTagName("iframe")[0];
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";

        if (!iframe) return;

        setTimeout(
          () =>
            (iframe.src += `${
              iframe.src.indexOf("?") === -1 ? "?" : "&"
            }t=${Date.now()}`),
          250
        );
        setTimeout(() => (iframe.src = ""), 500);
      };

      const buttons = document.querySelectorAll(".show-publuu-viewer");
      buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();

          const url = this.getAttribute("href");
          if (
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1
          ) {
            window.open(url, "_blank");
          } else {
            showPopup(url);
          }
        });
      });
    };

    // Initialize the viewer
    initPubluuViewer();
  }, []);

  const documents = [
    {
      link: "https://online.publuu.com/631991/1649960/page/1?cover",
      img: Nov2024,
    },
    {
      link: "https://online.publuu.com/631991/1409603/page/1?cover",
      img: TheVoiceImg,
    },
    {
      link: "https://online.publuu.com/631991/1413450/page/1?cover",
      img: WisdomIsFreeImg,
    },
    {
      link: "https://online.publuu.com/631991/1413467/page/1?cover",
      img: Calendar,
    },
    {
      link: "https://online.publuu.com/631991/1413465/page/1?cover",
      img: Broucher,
    },
    {
      link: "https://online.publuu.com/631991/1421012/page/1?cover",
      img: Tattoo,
    },
    {
      link: "https://publuu.com/flip-book/631991/1649960/page/1?cover",
      img: theVoice,
    },
  ];

  const bannerText =
    "Our Publications give students a real taste of the professional creative world";

  return (
    <>
      <Header
        title={"Publications"}
        subtitle={bannerText}
        headerImg={HeaderPublicationImg}
        headerImgMobile={HeaderPublicationMobileImg}
      />

      <div className="publication-main">
        <p className="publication-text">
          At Tula's International School, publishing is where student creativity finds its voice. Our Editorial Board gives students hands-on experience in writing, editing, design, and print production. They work as a team. They meet deadlines. They take an idea and turn it into something worth reading.
          <br />
          <br />
          We publish three ways — <strong className="font-black">The Voice</strong>, our monthly newsletter, <strong className="font-black">Tattoo</strong>, our annual yearbook, and term-wise department magazines across subject areas. Each one is entirely student-driven.
          <br />
          <br />
          The process teaches more than writing. Students learn how stories get selected, how layouts come together, and how to give and take feedback. These are real skills — the kind that build careers in journalism, media, communications, and design.
          <br />
          <br />
          Every edition is a reflection of our students' hard work. Browse through them below .
        </p>
      </div>

      <div className="card-publication">
        {documents.map((document, index) => (
          <div key={index} className="card-content-publication">
            <Image src={document.img} alt="" />

            <a href={document.link}>
              <button className="view-pdf-button">
                <Download style={{ width: isMobile ? "18%" : "auto" }} />
                View PDF
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
