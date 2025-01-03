"use client";

import React from "react";
import Image from "next/image";
import Sunil from "../../../public/ourhistory/Sunil.png";
import Image2006 from "../../../public/ourhistory/2006.jpg";
import Image2012 from "../../../public/ourhistory/2012.jpg";
import Header from "../../globalComponents/Header/Header";
import "../../../styles/About Tis/ourHistory.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import lineImg from "../../../public/pictures/lineImg.png";
import headerHistoryImg from "../../../public/Header/HistoryHeader.png";

export default function OurHistory() {
  const subTitle =
    "Tula's International School serves as the starting point for intellectual explorations that simultaneously extend into the broader world.";
  const { isMobile } = useMobile();

  return (
    <>
      <Header
        title={"Our History"}
        subtitle={subTitle}
        headerImg={headerHistoryImg}
      />
      <div className="py-8 w-[70%] mx-auto md:py-20 flex flex-col justify-center items-center">
        <h3
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="text-[#B90124] w-fit leading-none text-[clamp(20px,2.5vw,50px)]"
        >
          Flip The Pages of Our Inception Story
          <Image src={lineImg} alt="" className="ml-auto" />
        </h3>
        <div className={`flex gap-20 py-8 md:py-20`}>
          <div className="relative w-[50%] mx-auto group overflow-hidden">
            <div className="w-full h-full ">
              <Image
                src={Sunil}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              />
              {/* Animated border */}
              {!isMobile && (
                <>
                  <div className="absolute block bottom-10 left-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
                  <div className="absolute block bottom-10 left-10 h-[1px] w-full bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:bottom-0"></div>
                </>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center text-black">
            <h3
              className="w-full text-[#212121] font-normal text-[clamp(16px,1.3vw,40px)]"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              In 2004, <span className="text-[#b90124]">Sunil Kumar Jain</span>{" "}
              (Founder, Chairman) stepped into the world of education, driven by
              a belief that every student deserved more than just a
              classroom—they deserved a stage to grow, dream, and thrive. His
              journey began with the Rishabh Trust and was followed by the
              foundation of Tula’s Institute, a college that quickly became
              known for its excellence in engineering and management education. 
            </h3>
          </div>
        </div>
      </div>

      {/* <div className="our-history-desc">
        <p className="our-history-desc-p">
          Tulas International School (TIS) was founded with the goal of
          providing students with a world-class education while also encouraging
          complete growth. <br />
          <br />
          The recognized Tula&apos;s Group is known for its commitment to
          academic quality and innovative learning approaches, laying the
          foundation stone for TIS in 2012.
        </p>

         <div className="carousel-container">
          <CarouselCard
            title="#1"
            description=<>
              Ranked #1 Best
              <br /> Boarding School
              <br /> (Niche 2023 Best <br />
              High Schools)
            </>
          />
          <CarouselCard title="341" description="students" />
          <CarouselCard title="4:1" description="student:adult ratio" />
          <CarouselCard
            title="37%"
            description=<>
              of students receive
              <br /> financial aid
            </>
          />
          <CarouselCard
            title="91%"
            description=<>
              of faculty hold
              <br /> advanced degrees
            </>
          />
          <CarouselCard
            title="100+"
            description=<>
              sports, activities,
              <br /> and clubs
            </>
          />
        </div> 
      </div>*/}
      {/* <div className="our-history-main-content">
        <div className="our-history-main">
          <Image src={Sunil} alt="" />
          <div className="content-history">
            <h3>2004</h3>
            <h5>
              The Rishabh Educational Trust, founded in 2004, is committed to
              enhancing the welfare of young people and positively contributing
              to society. Since its foundation, the trust has been dedicated to
              providing opportunities and support systems for young people,
              guaranteeing their growth and development.
            </h5>
          </div>
        </div>
        <div className="our-history-main">
          {isMobile && <Image src={Image2006} alt="" />}
          <div className="content-history">
            <h3>2006</h3>
            <h4>
              “ Tula&apos;s Institute was founded in 2006 by Rishabh Educational
              Trust. The College is recognised as the Top Engineering and
              Management College in Dehradun, Uttarakhand, to ensure the best
              education and excellence in academic programs from the
              undergraduate to the postgraduate level. ”
            </h4>
            <h5>
              The courses offered are B.Tech, B.B.A., M.Tech, B.C.A., M.C.A.,
              B.Com (Honours), B.Sc (Agriculture & Forestry), Diploma
              (Polytechnic), B.J.M.C. Tula&apos;s endeavours to create a
              well-suited atmosphere for the students to nurture their talent
              through experienced faculty guidance and support along with access
              to state of the art infrastructure
            </h5>
          </div>
          {!isMobile && <Image src={Image2006} alt="" />}
        </div>
        <div className="our-history-main">
          <Image src={Image2012} alt="" />
          <div className="content-history">
            <h3>2012</h3>
            <h5>
              Tula&apos;s International School was formed in 2012 by the Rishabh
              Educational Trust with the goal of creating an exceptional
              international boarding school that provides seamless educational
              possibilities. Tula&apos;s, which is affiliated with the CBSE
              board, has swiftly established itself as one of Dehradun&apos;s
              finest boarding schools. Our supportive environment, nestled in a
              stunning setting, serves as the ideal backdrop for comprehensive
              learning and growth. Tula&apos;s is committed to helping young
              brains grow, transforming them into great minds prepared for the
              future.
            </h5>
          </div>
        </div>

        <br></br>
        <div className="ready-div">
          <h1 className="ready">Ready to see if TULA’S is made for you?</h1>
          <button id="extraedge-popup2" className="Start">
            START YOUR JOURNEY TODAY!
          </button>
          <Image className="img-line" src={lineImg} alt="" />
          <h2 className="Tulas-p">
            Tula&apos;s International School (TIS) is where intellectual
            adventures begin and extend into the world. Founded with the aim of
            providing students with top-notch education while encouraging
            overall growth, TIS stands as a beacon of excellence and innovation.
          </h2>
          <br />
        </div>
      </div> */}
    </>
  );
}
