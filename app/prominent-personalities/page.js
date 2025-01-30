"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import background from "../../public/ProminentPersonalities/background.webp";
import banner1 from "../../public/ProminentPersonalities/banner1.webp";
import banner2 from "../../public/ProminentPersonalities/banner2.webp";
import banner3 from "../../public/ProminentPersonalities/banner3.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
} from "react-icons/io5";
import SakshiMalik from "../../public/ProminentPersonalities/SakshiMalik.webp";
import VisheshBhriguvanshi from "../../public/ProminentPersonalities/VisheshBhriguvanshi.webp";
import PrakashiTomar from "../../public/ProminentPersonalities/PrakashiTomar.webp";
import AbhishekVerma from "../../public/ProminentPersonalities/AbhishekVerma.webp";
import AditiGopichandSwami from "../../public/ProminentPersonalities/AditiGopichandSwami.webp";
import JeevanJyotSinghTeja from "../../public/ProminentPersonalities/JeevanJyotSinghTeja.webp";
import OjasPravinDeotale from "../../public/ProminentPersonalities/OjasPravinDeotale.webp";
import RajatChauhan from "../../public/ProminentPersonalities/RajatChauhan.webp";
import DevendraSinghBisht from "../../public/ProminentPersonalities/DevendraSinghBisht.webp";
import ManishMetani from "../../public/ProminentPersonalities/ManishMetani.webp";
import LaxmiAgarwal from "../../public/ProminentPersonalities/LakshmiAgarwal.webp";
import SaurabhJoshi from "../../public/ProminentPersonalities/SaurabhJoshi.webp";
import ArushiNishank from "../../public/ProminentPersonalities/ArushiNishank.webp";
import DhanSinghRawat from "../../public/ProminentPersonalities/DhanSinghRawat.webp";
import TrivendraSinghRawat from "../../public/ProminentPersonalities/TrivendraSinghRawat.webp";
import SubodhUniyal from "../../public/ProminentPersonalities/SubodhUniyal.webp";
import AnuragTripathi from "../../public/ProminentPersonalities/AnuragTripathi.webp";
import RameshPokhriyalNishank from "../../public/ProminentPersonalities/RameshPokhriyalNishank.webp";
import BhagatSinghKoshyari from "../../public/ProminentPersonalities/BhagatSinghKoshyari.webp";
import DharmendraPradhan from "../../public/ProminentPersonalities/DharmendraPradhan.webp";
import ArvindPandey from "../../public/ProminentPersonalities/ArvindPandey.webp";
import NamamiBansal from "../../public/ProminentPersonalities/NamamiBansal.webp";
import AbhinavKumar from "../../public/ProminentPersonalities/AbhinavKumar.webp";
import JanmejayaKhanduri from "../../public/ProminentPersonalities/JanmejayaKhanduri.webp";
import AshokKumar from "../../public/ProminentPersonalities/AshokKumar.webp";
import AmitKumarSinha from "../../public/ProminentPersonalities/AmitKumarSinha.webp";
import SunilUniyalGama from "../../public/ProminentPersonalities/SunilUniyalGama.webp";
import SahdevSinghPundir from "../../public/ProminentPersonalities/SahdevSinghPundir.webp";
import { useMobile } from "@/components/globalComponents/IsMobileContext";
function ProminentPersonalities() {
  const categories = [
    {
      name: "Sports",
      subItems: [
        {
          image: SakshiMalik,
          name: "Sakshi Malik",
          description:
            "(First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014. Common Wealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shree Awardee 2017)",
        },
        {
          image: VisheshBhriguvanshi,
          name: "Vishesh Bhriguvanshi",
          description:
            "(Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008)",
        },
        {
          image: PrakashiTomar,
          name: "Prakashi Tomar & Late Ms Chandro Tomar",
          description:
            "(Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner)",
        },
        // {
        //   image: AnwarKhan,
        //   name: "Anwar khan",
        //   description: "(Indian team hockey player)",
        // },
        {
          image: AbhishekVerma,
          name: "Abhishek Verma",
          description:
            "(6th Highest World Ranking, Arjuna Awardee, Asian Game Gold Medalist in Archery 2013)",
        },
        {
          image: AditiGopichandSwami,
          name: "Aditi Gopichand Swami",
          description:
            "(7th Highest World Ranking, Arjun Awardee, World Champion in Archery 2024)",
        },
        {
          image: JeevanJyotSinghTeja,
          name: "Jeevan Jyot Singh Teja",
          description: "(Drona Chari Awardee in Archery 2022)",
        },
        {
          image: OjasPravinDeotale,
          name: "Ojus Devtale",
          description:
            "(9th Highest World Ranking, Arjun Awardee 2023 and current world champion in Archery)",
        },
        {
          image: RajatChauhan,
          name: "Rajat Chauhan",
          description:
            "(5th Highest World Ranking Arjun Awardee 2016 in Archery)",
        },
        {
          image: DevendraSinghBisht,
          name: "Devendra Singh Bisht",
          description: "(under 18 School Indian Football Team Selector)",
        },
        {
          image: ManishMetani,
          name: "Manish Metani",
          description: "(Indian Football Player)",
        },
      ],
    },
    {
      name: "Actors",
      subItems: [
        {
          image: SaurabhJoshi,
          name: "Saurabh Joshi",
          description: "(Influencer with 30 Million Subscribers on Youtube)",
        },
        {
          image: ArushiNishank,
          name: "Arushi Nishank",
          description:
            "(Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga",
        },
        {
          image: LaxmiAgarwal,
          name: "Laxmi Agarwal",
          description:
            "(International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Bip Pic Movie “Chappak” based on her)",
        },
      ],
    },
    {
      name: "Leaders of India",
      subItems: [
        {
          image: DhanSinghRawat,
          name: "Shri Dhan Singh Rawat Ji",
          description: "(Minister of Higher Education, Uttarakhand)",
        },
        {
          image: TrivendraSinghRawat,
          name: "Shri Trivendra Singh Rawat Ji",
          description:
            "(Member of Parliament & Former Chief Minister, Uttarakhand)",
        },
        {
          image: SubodhUniyal,
          name: "Shri Subodh Uniyal Ji",
          description:
            "(Technical Education and Forest Minister, Uttarakhand.)",
        },
        {
          image: RameshPokhriyalNishank,
          name: "Dr Ramesh Pokhriyal Nishank Ji",
          description:
            "(Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand)",
        },
        {
          image: BhagatSinghKoshyari,
          name: "Shri Bhagat Singh Koshyari Ji",
          description:
            "(Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand)",
        },
        {
          image: DharmendraPradhan,
          name: "Shri Dharmendra Pradhan Ji",
          description: "(Union Minister of Education for India.)",
        },
        {
          image: AnuragTripathi,
          name: "Shri Anurag Tripathi Ji",
          description: "(CBSE Secretary Uttarakhand)",
        },
        {
          image: ArvindPandey,
          name: "Shri Arvind Pandey Ji",
          description: "(MLA, Former Education Minister)",
        },
        {
          image: NamamiBansal,
          name: "Shri Namami Bansal Ji",
          description: "(I.A.S Municipal Commissioner Uttarakhand)",
        },
        {
          image: AbhinavKumar,
          name: "Shri Abhinav Kumar Ji",
          description: "(ADG and former DGP of Uttarakhand Police)",
        },
        {
          image: JanmejayaKhanduri,
          name: "Shri Janmejaya khanduri Ji",
          description: "(IG Dehradun - Government of India)",
        },
        {
          image: AshokKumar,
          name: "Shri Ashok Kumar Ji",
          description: "(Former DGP, Uttarakhand)",
        },
        {
          image: AmitKumarSinha,
          name: "Shri Amit Kumar Sinha Ji",
          description: "(ADG, Principal Secretary Sports, Uttarakhand)",
        },
        {
          image: SunilUniyalGama,
          name: "Shri Sunil Uniyal Gama Ji",
          description: "(Former Mayor Municipal Corp, Dehradun.)",
        },
        // {
        //   image: AmandeepKaur,
        //   name: "Shri Amandeep Kaur Ji",
        //   description: "(IRS)",
        // },
        {
          image: SahdevSinghPundir,
          name: "Shri Sahdev Singh Pundir Ji",
          description: "(MLA Sahaspur, Uttarakhand)",
        },
      ],
    },
  ];

  const banner = [banner1, banner2, banner3];
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name);
  const [selectedItem, setSelectedItem] = useState(false);
  useEffect(() => {
    setIsClient(true); // Ensures the component renders only on the client
  }, []);

  const handleBackClick = () => {
    if (swiperInstance) {
      const prevIndex =
        swiperInstance.activeIndex === 0
          ? banner.length - 1
          : swiperInstance.activeIndex - 1;
      swiperInstance.slideTo(prevIndex);
    }
  };
  const { isMobile } = useMobile();
  const handleForwardClick = () => {
    if (swiperInstance) {
      const nextIndex =
        swiperInstance.activeIndex === banner.length - 1
          ? 0
          : swiperInstance.activeIndex + 1;
      swiperInstance.slideTo(nextIndex);
    }
  };
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  return (
    <>
      {!isClient && (
        <div className="w-full h-screen flex justify-center items-center bg-white">
          <div className="loader"></div>
        </div>
      )}
      {isClient && (
        <>
          <div
            className="w-full h-[60vh] min-h-[500px] md:h-screen flex flex-col justify-end"
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Navbar />
            <div className="w-full h-[60vh] min-h-[500px] md:h-[calc(100vh-8rem)] overflow-hidden flex flex-col gap-4 md:gap-[4%] justify-center items-center">
              <div
                className={`w-full h-full flex flex-col justify-end items-center relativ`}
              >
                <div className="h-fit w-full">
                  <Swiper
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => {
                      setActiveIndex(swiper.activeIndex);
                      console.log(swiper.activeIndex);
                    }}
                    centeredSlides={true}
                    slidesPerView={isMobile ? 1.4 : 2}
                    initialSlide={1}
                  >
                    {banner.map((bannerImg, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`flex flex-col w-full rounded-3xl mx-auto h-full transition-all ${
                            activeIndex === index ? "scale-100" : "scale-75"
                          } duration-300`}
                        >
                          <Image
                            src={bannerImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div
                className={`w-full h-fit flex gap-[10%] justify-center items-center`}
              >
                <button
                  onClick={handleBackClick}
                  className="bg-[#FFFFFF] w-fit text-[#b90124] text-2xl rounded-full p-3 aspect-square"
                >
                  <IoChevronBackOutline />
                </button>
                <button
                  onClick={handleForwardClick}
                  className="bg-[#FFFFFF] w-fit text-[#b90124] text-2xl rounded-full p-3 aspect-square"
                >
                  <IoChevronForwardOutline />
                </button>
              </div>
              <h1
                style={{
                  textShadow: "0px 5px 16px rgba(0, 0, 0, 0.2)",
                }}
                className="font-[Mirador800] w-full px-4 md:px-0 leading-tight text-center text-[clamp(20px,7vw,60px)] md:text-[clamp(20px,3.2vw,80px)] pb-8 text-white"
              >
                Prominent Personalities
              </h1>
            </div>
          </div>
          <div className="w-full h-full">
            <h2
              className="px-4 md:px-0 py-8 md:py-[3%] text-[clamp(14px,4.5vw,25px)] md:text-[clamp(10px,1.1vw,25px)] text-center w-full"
              style={{
                fontFamily: "TT Chocolates",
              }}
            >
              Tula’s International School is a futuristic institution that
              endeavours to
            </h2>
            <div
              style={{
                fontFamily: "TT Chocolates",
              }}
              className="w-[calc(100%-2rem)] md:w-[90%] mx-auto"
            >
              {/* Category Buttons */}
              <div className="flex w-full flex-wrap gap-4 justify-center">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 w-full md:w-[calc(33.33%-16px)] py-2 rounded-full shadow-[0px_4px_18.6px_0px_rgba(0,0,0,0.25)] text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1vw,50px)] border border-[#b90124] transition-all ${
                      selectedCategory === category.name
                        ? "bg-[#b90124] text-white"
                        : "bg-white text-[#b90124] "
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Selected Category Content */}
              <div className="flex py-8 flex-wrap justify-center md:py-[3%] gap-4">
                {categories
                  .find((category) => category.name === selectedCategory)
                  ?.subItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedItem(item)}
                      className={`bg-white rounded-lg flex flex-col justify-between items-center overflow-hidden border border-[#b90124] shadow-[0px_4px_25.2px_0px_rgba(0,0,0,0.25)] w-full md:w-[calc(33.33%-16px)]`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-fit aspect-[1.5/1] md:aspect-[2/1] object-cover"
                      />
                      <div className="w-full h-fit p-4">
                        <h3 className="uppercase text-[#b90124] text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.2vw,50px)] leading-tight font-bold mt-2">
                          {item.name}
                        </h3>
                        <p className="text-[clamp(10px,3.8vw,50px)] text-[#494949] italic md:text-[clamp(10px,0.8vw,50px)] mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {selectedItem && (
            <div className="fixed z-20 w-full inset-0 flex items-center justify-center bg-black bg-opacity-80">
              <div className="p-5 w-[95%] md:w-[40%] mx-auto h-fit rounded shadow-lg relative">
                <button
                  className="absolute top-2 right-2 bg-[#b90124] text-white p-2 rounded-full"
                  onClick={() => setSelectedItem(null)}
                >
                  <IoClose />
                </button>
                <Image
                  src={selectedItem.image}
                  alt=""
                  className="w-full h-fit rounded"
                />
              </div>
            </div>
          )}
          <Footer />
        </>
      )}
    </>
  );
}

export default ProminentPersonalities;
