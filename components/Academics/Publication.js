"use client";
import { useEffect } from "react";
import Header from "../globalComponents/Header/Header";
import Image from "next/image";
import HeaderPublicationImg from "../../public/Header/PublicationHeader.jpg";
import HeaderPublicationMobileImg from "../../public/Header/PublicationHeaderMobile.jpg";
import "../../styles/Academics/Publication.css";
import TheVoiceImg from "../../public/MandatoryPDF/TheVoice.png";
import WisdomIsFreeImg from "../../public/MandatoryPDF/Wisdom.png";
import { useMobile } from "../globalComponents/IsMobileContext";
import { Download } from "@mui/icons-material";
import Calendar from "../../public/MandatoryPDF/Calendar.png";
import Broucher from "../../public/MandatoryPDF/Brochure.png";
import Tattoo from "../../public/MandatoryPDF/Tattoo.png";
import theVoice from "../../public/MandatoryPDF/theVoice2.png";

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
      img: theVoice
    }
  ];

  const bannerText =
    "A strong school management provides the best learning environment for students.";

  return (
    <>
      <Header
        title={"Publications"}
        subtitle={bannerText}
        headerImg={isMobile ? HeaderPublicationMobileImg : HeaderPublicationImg}
      />

      <div className="publication-main">
        <p className="publication-text">
          In Education publishing is an important aspect of academic writing, it
          motivates and enables the students to connect to their core strength,
          interests, and makes them more autonomous to control the power of
          expression. Editorial Board membership is the first platform where
          students deal with hands-on experience of creative content writing,
          content editing, designing, proofreading, and printing. Right from the
          inception of a concept to the final piece of work, students learn to
          work constructively in a group and achieve targets. They are being
          groomed for future professional commitments.
        </p>
        <p className="text2">
          The various publications at TIS are monthly VOICE, yearly TATTOO, and
          term-wise department magazines.
        </p>
      </div>

      <div className="card-publication">
        {documents.map((document, index) => (
          <div key={index} className="card-content-publication">
            <Image src={document.img} alt="PDF icon" />

            <a href={document.link} className="show-publuu-viewer">
              <button>
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
