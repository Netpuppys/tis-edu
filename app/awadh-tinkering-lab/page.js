"use client";
import React, { useRef, useState } from "react";
import BannerImg from "../../public/Banner/AwadhBannerImg.webp";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import yellowLine from "../../public/pictures/lineImg.png";
import image1 from "../../public/awadh/image1.webp";
import image2 from "../../public/awadh/image2.webp";
import image3 from "../../public/awadh/image3.webp";
import image4 from "../../public/awadh/image4.webp";
import mukesh from "../../public/awadh/mukesh.webp";
import deshraj from "../../public/awadh/deshraj.webp";
import "swiper/css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxDoubleArrowDown } from "react-icons/rx";

function MentorMentee() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleExpand = (index) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    } // Toggle the expanded state
  };
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      swiperRef.current.swiper.slidePrev();
      setExpandedIndex(activeIndex - 1); // Set expandedIndex to the new slide index
    }
  };

  const handleNextClick = () => {
    if (activeIndex < data.length - 1) {
      swiperRef.current.swiper.slideNext();
      setExpandedIndex(activeIndex + 1); // Set expandedIndex to the new slide index
    }
  };
  const data = [
    {
      name: "Dr. Mukesh Kestwal",
      position: "(CIO , iHUB AWaDH, IIT Ropar)",
      image: mukesh,
      points:
        "Dr. Kestwal is a tech enthusiast and innovator with a 12 years journey in the research, innovation and Startup ecosystem, specializing in policy navigation and impactful initiatives. Currently serving as CIO at the IIT Ropar Technology Innovation Hub, driving change with a 110Cr fund from DST and 20Cr+ from Startup India/NIDHISSS/GENESIS for Deep-tech startups. Dr Kestwal played pivotal roles in various committee including various AICs for Startup India Seed Fund committee, DCC for DOT, Advisor for Startups (R2E) and many other.",
      description: (
        <>
          <strong>Some Key Achievements of Dr. Kestwal</strong>
          <p className="py-1"></p>
          <ol className="ml-5 list-decimal">
            <li>
              Having a portfolio with 15 IPs, spanning patents, trademarks,
              copyrights, and industrial designs.
            </li>
            <li>
              250+ citations for my research work, with a paper boasting 18k+
              views and 1.8k+ downloads.
            </li>
            <li>
              Facilitated over 30 Innovation Challenges and conducted 650+
              sessions for startups and enablers.
            </li>
            <li>
              Delivered 60+ keynote speeches, including prestigious platforms
              such as UGC, IIT Delhi, Startup Mahakumbh, etc
            </li>
            <li>
              Established partnerships with 25+ Hubs, 50+ incubators, and 100+
              organizations, totaling 300+
            </li>
            <li>
              Secured 21Cr+ through Startup India, DST NIDHI, MeitY GENESIS,
              HDFC and built a portfolio of 1300Cr+ valuation for IIT Ropar
              AWaDH, where also have led investment of 15Cr
            </li>
            <li>
              Contributed to projects exceeding 230Cr for various organizations,
              hubs, and AICs/TBIs.
            </li>
            <li>
              As a founding member of initiatives like Startup September,
              SAMRIDHI, SPRINT, WATER, AVNI, DISA, and others, I bring a wealth
              of experience to the table.
            </li>
          </ol>
        </>
      ),
    },
    {
      name: "Mr. Deshraj",
      image: deshraj,
      position: "(Project Manager at IIT Ropar’s iHub AWaDH)",
      points:
        "Mr. Deshraj is a dedicated tech enthusiast and innovator with over 12 years of extensive experience in product design and development. His journey includes impactful contributions to industry and government initiatives, such as DST’s grassroots implementation of ATAL Tinkering Labs, where he played a pivotal role in fostering innovation and creativity among young minds. With a strong foundation in hardware and firmware design, he excels at integrating cutting-edge technologies into practical, real-world solutions.",
      description: (
        <>
          Currently, Mr. Deshraj serves as a Project Manager at IIT Ropar’s iHub
          AWaDH, one of the Technology Hubs established by DST under the NM-ICPS
          initiative. In this role, he leads diverse, multidisciplinary teams
          specializing in hardware, firmware, cloud, and AI/ML technologies. At
          iHub AWaDH, his efforts focus on building an ecosystem that empowers
          students and professionals to achieve remarkable growth across various
          technological domains. Through his leadership, he is driving
          innovation and inspiring the next generation of tech leaders.
        </>
      ),
    },
  ];
  return (
    <>
      <Navbar dark={true} />
      <Header
        headerImg={BannerImg}
        headerImgMobile={BannerImg}
        title={"Awadh Tinkering Lab"}
      />
      <div className="py-8 md:py-[3%]">
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          With a vision of "National Mission on Interdisciplinary Cyber Physical
          system (NMICPS)", iHUB AWaDH, IIT Ropar established the India's first
          AWaDH Tinkering Laboratories (ATL) in Tula's International schools,
          Dehradun Uttarakhand. The objective of this scheme is to foster
          curiosity, creativity, and imagination in young minds; and inculcate
          scientific temper and skills such as design mindset, computational
          thinking, adaptive learning, physical computing etc. <br /> ATL is a
          workspace where young minds can give shape to their ideas through
          hands on do-it-yourself mode; and learn innovation skills. Young
          Studens will get a chance to work with tools and equipment to
          understand the concepts of STEM (Science, Technology, Engineering and
          Math). ATL would contain educational and learning 'do it yourself'
          kits and equipment on-science, electronics, robotics.
          <br /> The ATL will be conduct different activities like project
          competition, ideathon and hackathon ranging from regional and national
          level competitions and workshops on problem solving, designing and
          fabrication of products.
        </h2>
      </div>
      <div className="flex pb-4 flex-col md:flex-row w-[90%] md:w-[85%] mx-auto gap-4">
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image1}
          alt=""
        />
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image2}
          alt=""
        />
      </div>
      <div className="flex pb-8 md:pb-[3%] flex-col md:flex-row w-[90%] md:w-[85%] mx-auto gap-4">
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image3}
          alt=""
        />
        <Image
          className="w-full md:w-[50%] object-cover rounded-lg overflow-hidden"
          src={image4}
          alt=""
        />
      </div>
      <h2 className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
        ATL <span className="text-[#b90124]">Objectives</span>
        <Image className="ml-auto w-fit max-w-[60%]" src={yellowLine} alt="" />
      </h2>
      <div className="py-8 md:py-[3%]">
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <ol className="list-decimal ml-5">
            <li>
              Inspiring Innovation Hubs: Cultivating dynamic workspaces where
              young minds ignite their creativity, transform ideas into reality
              through hands-on experiences, and thrive in a flexible ,
              collaborative environment.
            </li>
            <li>
              Empowering Future Leaders: Equipping our youth with essential
              21st-century skills-creativity, innovation, critical thinking,
              design thinking, ethical leadership, and cross-cultural
              collaboration-to shape a smarter, more connected world.
            </li>
            <li>
              Building a Smarter India: Nurturing innovative solutions tailored
              to India's unique challenges, driving the nation's growth as a
              powerhouse of knowledge, ideas, and technological excellence.
            </li>
          </ol>
        </h2>
      </div>
      <h2 className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
        Representative form{" "}
        <span className="text-[#b90124]">iHUB AWaDH, IIT Ropar</span>
        <Image className="ml-auto w-fit max-w-[60%]" src={yellowLine} alt="" />
      </h2>
      <div className="hidden w-full h-full md:block">
        <div className="w-[90%] xl:w-[75%] pt-10 mx-auto gap-6 flex justify-center overflow-scroll md:overflow-auto">
          {data.map((data, index) => (
            <div key={index} className="w-[60%] md:w-[25%]">
              <div
                onClick={() => handleExpand(index)}
                className={`flex w-full cursor-pointer relative flex-col justify-end rounded-t-xl ${
                  expandedIndex !== index
                    ? "rounded-es-xl rounded-br-[32.5px]"
                    : ""
                } overflow-hidden shadow-[0px_14px_12.7px_0px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)70.53%,#000_93.09%)]`}
              >
                <Image
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover -z-10"
                />
                <div className="flex absolute text-white items-end justify-between w-full">
                  <div className="flex flex-col justify-center px-4 items-start">
                    <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(10px,5vw,30px)] md:text-[clamp(10px,1.8vw,50px)]">
                      {data.name}
                    </h3>
                    {expandedIndex !== index && (
                      <h2 className="text-[#9A9A9A] text-xl font-[TTChocolates]">
                        Read More
                      </h2>
                    )}
                  </div>
                  {expandedIndex !== index && (
                    <button className="border-4 font-black bg-white rounded-full text-[#b90124] text-[26px] border-[#b90124] min-w-[65px] min-h-[65px] max-w-[65px] max-h-[65px] flex justify-center items-center">
                      <RxDoubleArrowDown />
                    </button>
                  )}
                </div>
              </div>
              {expandedIndex === index && (
                <div className="pt-[10%] w-full bg-[#FFE4E4]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="block w-full h-full md:hidden">
        <div className="flex px-8 pt-6 gap-4 justify-end pb-8">
          <button
            onClick={handlePrevClick}
            className="text-white bg-[#b90124] active:scale-90 w-[40px] flex items-center justify-center rounded-full h-[40px] text-[20px]"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="text-white bg-[#b90124] w-[40px] active:scale-90 flex items-center justify-center rounded-full h-[40px] text-[20px]"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="w-[75%] mx-auto flex overflow-scroll">
          <Swiper
            spaceBetween={24}
            className="mySwiper"
            slidesPerView={1.3}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setExpandedIndex(swiper.activeIndex);
            }}
            ref={swiperRef}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={`flex`}>
                <div
                  onClick={() => handleExpand(index)}
                  className={`flex w-full cursor-pointer relative flex-col aspect-[303/470] justify-end rounded-t-xl overflow-hidden shadow-[0px_14px_12.7px_0px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)70.53%,#000_93.09%)]`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover -z-10"
                  />
                  <div className="flex absolute text-white items-end justify-between w-full">
                    <div className="flex flex-col justify-center px-4 items-start">
                      <h3 className="font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(10px,5vw,30px)] md:text-[clamp(10px,1.8vw,50px)]">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className="pt-[20%] w-full bg-[#FFE4E4]"></div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full text-black transition-all duration-500">
        <div className="flex w-full justify-center items-center">
          <button
            onClick={handlePrevClick}
            className="text-[#b90124] md:hidden active:scale-90 w-[40px] flex items-center justify-center rounded-full h-[40px] text-[20px]"
          >
            <FaChevronLeft />
          </button>

          <div
            className={`bg-[#FFE4E4] w-[85%] md:w-[90%] xl:w-[75%] mx-auto rounded-xl  px-8 md:px-14 py-8`}
          >
            <h3 className="text-[#B90124] text-[clamp(10px,7vw,60px)] leading-tight pb-4 font-[NeueHaasDisplayBold] tracking-wide md:tracking-wider md:text-[clamp(10px,2.2vw,50px)]">
              {data[expandedIndex].name} {data[expandedIndex].position}
            </h3>
            <h4
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] leading-tight"
            >
              {data[expandedIndex].points}
            </h4>
          </div>
          <button
            onClick={handleNextClick}
            className="text-[#b90124] md:hidden w-[40px] active:scale-90 flex items-center justify-center rounded-full h-[40px] text-[20px]"
          >
            <FaChevronRight />
          </button>
        </div>
        <h4
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[85%] md:w-[90%] xl:w-[75%] mx-auto text-[clamp(10px,4.5vw,30px)] py-8 md:py-14 md:text-[clamp(10px,1.3vw,45px)] leading-tight"
        >
          {data[expandedIndex].description}
        </h4>
      </div>
      <Footer />
    </>
  );
}

export default MentorMentee;
