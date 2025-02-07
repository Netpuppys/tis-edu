"use client";

import React from "react";
import Image from "next/image";
import Sunil from "../../../public/ourhistory/Sunil.png";
import school from "../../../public/ourhistory/school.png";
import Image2012 from "../../../public/ourhistory/2012.png";
import silky from "../../../public/ourhistory/silky.png";
import Raunak from "../../../public/ourhistory/Raunak.png";
import Header from "../../globalComponents/Header/Header";
import "../../../styles/About Tis/ourHistory.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import lineImg from "../../../public/pictures/lineImg.png";
import headerHistoryImg from "../../../public/Header/HistoryHeader.png";
import headerHistoryMobileImg from "../../../public/Header/HistoryHeaderMobile.jpg";

export default function OurHistory() {
  const subTitle =
    "TIS sparks intellectual journeys that connect to the wider world";
  const { isMobile } = useMobile();

  return (
    <>
      <Header
        title={"Our History"}
        subtitle={subTitle}
        headerImg={headerHistoryImg}
        headerImgMobile={headerHistoryMobileImg}
      />
      <div className="py-8 w-[85%] md:w-[75%] mx-auto md:py-14 flex flex-col justify-center items-center">
        <h3
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="text-[#B90124] w-fit font-semibold leading-tight text-center text-[clamp(10px,7.5vw,60px)] md:text-[clamp(10px,2.5vw,50px)]"
        >
          Flip The Pages of Our Inception Story
          <Image
            src={lineImg}
            alt=""
            className="mx-auto md:ml-auto md:mr-0 w-[50%] md:w-fit"
          />
        </h3>

        <div className={`flex flex-col md:flex-row gap-8 md:gap-20`}>
          <div className="relative w-[80%] md:w-[50%] mx-auto group overflow-hidden">
            <div className="w-full h-full ">
              <Image
                src={Sunil}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              <div className="absolute block bottom-5 md:bottom-10 left-5 md:left-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
              <div className="absolute block bottom-5 md:bottom-10 left-5 md:left-10 h-[1px] w-full bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center text-black">
            <h3
              className="w-full text-[#212121] font-normal border-b-2 border-[#b90124] pb-4 md:pb-8 text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,40px)] leading-tight"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              Sunil Kumar Jain (Founder, Chairman) stepped into the world of
              education, driven by a belief that every student deserved more
              than just a classroom—they deserved a stage to grow, dream, and
              thrive. His journey began in 2004 with the Rishabh Trust under
              which Tula’s Institute was founded in 2006. Tula’s Institute went
              ahead to become a college that is widely known for its excellence
              in engineering and management education. 
            </h3>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row-reverse py-8 md:py-14 gap-8 md:gap-20`}
        >
          <div className="relative w-full md:w-[80%] mx-auto group overflow-hidden">
            <div className="w-full h-full ">
              <Image
                src={school}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              <div className="absolute block bottom-5 md:bottom-10 right-5 md:right-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-hover:bottom-0"></div>
              <div className="absolute block bottom-5 md:bottom-10 right-5 md:right-10 h-[1px] w-full bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-hover:bottom-0"></div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center text-black">
            <h3
              className="w-full text-[#212121] font-normal leading-tight border-b-2 border-[#b90124] pb-4 md:pb-8 text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,40px)]"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              But even as the corridors of Tula’s Institute echoed with the
              aspirations of countless students, Mr. Jain felt there was more to
              be done
              <br />
              <br />
              Dehradun, a city steeped in the legacy of education, had long been
              a hub for learning. Yet, Mr. Jain envisioned something different:
              a school that didn’t just educate but inspired—a place that
              celebrated individuality of each student.
            </h3>
          </div>
        </div>
        <div className={`flex flex-col gap-8 md:gap-20`}>
          <div className="relative w-full aspect-square md:aspect-auto mx-auto group overflow-hidden">
            <div className="w-full h-full ">
              <Image
                src={Image2012}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              <div className="absolute block bottom-5 md:bottom-10 right-0 h-[1px] w-full bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-hover:bottom-0"></div>
            </div>
          </div>
          <div className="flex w-full md:w-[70%] mx-auto flex-col items-start justify-center text-black">
            <h3
              className="w-full text-[#212121] font-normal leading-tight border-b-2 border-[#b90124] pb-4 md:pb-8 text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,40px)]"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              In 2012, he turned that dream into reality with the inception of
              Tula’s International School. It wasn’t just a school; it was a
              bold step into the unconventional. A co-educational, vegetarian
              boarding school—rare at the time—that challenged the norms and
              placed balance at its core.
              <br />
              <br />
              It wasn't easy but Mr. Jain knew that this risk was worth taking.
              He envisioned a school where students could learn in a setting
              that was not only intellectually stimulating but also deeply
              aligned with values like compassion, sustainability, and respect
              for nature.
              <br />
              <br />
              He believed that education wasn’t about filling minds with
              knowledge but about shaping lives with purpose.
            </h3>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row pt-8 md:pt-14 gap-4 md:gap-20`}
        >
          <div className="w-full md:w-[40%] aspect-[1/1] md:aspect-auto mx-auto overflow-hidden">
            <div className="relative w-fit mx-auto group md:w-full h-full overflow-hidden">
              <Image
                src={silky}
                alt=""
                className="w-fit md:w-full mx-auto h-full object-cover  transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              <div className="absolute bottom-0 left-5 md:left-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center text-black">
            <h3
              className="w-full text-[#212121] md:text-justify leading-tight font-normal border-b-2 border-[#b90124] pb-4 md:pb-8 text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,40px)]"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              As the school grew, so did the dream. The baton was passed to the
              next generation. Raunak Jain (Vice Chairman), a visionary molded
              by international education at the Royal Holloway University of
              London, brought a global lens to the institution. He dreamed of
              giving students the tools to thrive in a connected, tech-driven
              world. Alongside him, Silky Jain Marwah (Executive Director)—an
              alumna of Symbiosis and a leader honed by Harvard and Oxford—wove
              in creativity, leadership, and innovation. Together, they brought
              a modern vibrancy to Tula’s, blending traditional values with
              progress.
              <br />
              <br />
              Today, Tula’s International School stands as a testament to the
              power of vision and collaboration across generations.
            </h3>
          </div>
          <div className="w-full md:w-[40%] aspect-[1/1] md:aspect-auto mx-auto overflow-hidden">
            <div className="relative overflow-hidden group w-fit mx-auto md:w-full h-full ">
              <Image
                src={Raunak}
                alt=""
                className="w-fit md:w-full mx-auto h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              <div className="absolute block bottom-0 right-5 md:right-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-hover:bottom-0"></div>
            </div>
          </div>
        </div>
        <h3 className="text-[#B90124] pt-8 leading-tight font-[TTChocolatesBold] md:pt-14 uppercase text-center w-fit text-[clamp(10px,6.5vw,60px)] md:text-[clamp(10px,1.8vw,50px)]">
          <span
            style={{
              fontFamily: "TT Chocolates",
            }}
            className="text-[#5E5E5E] font-semibold capitalize"
          >
            This is the story of Tula’s,
          </span>{" "}
          A story of belief, courage, and the relentless pursuit of excellence.
        </h3>
      </div>
    </>
  );
}
