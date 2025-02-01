import React, { useEffect, useRef } from "react";
import SakshiMalik from "../../../public/ProminentPersonalities/SakshiMalik.webp";
import VisheshBhriguvanshi from "../../../public/ProminentPersonalities/VisheshBhriguvanshi.webp";
import PrakashiTomar from "../../../public/ProminentPersonalities/PrakashiTomar.webp";
import AbhishekVerma from "../../../public/ProminentPersonalities/AbhishekVerma.webp";
import AditiGopichandSwami from "../../../public/ProminentPersonalities/AditiGopichandSwami.webp";
import JeevanJyotSinghTeja from "../../../public/ProminentPersonalities/JeevanJyotSinghTeja.webp";
import OjasPravinDeotale from "../../../public/ProminentPersonalities/OjasPravinDeotale.webp";
import RajatChauhan from "../../../public/ProminentPersonalities/RajatChauhan.webp";
import DevendraSinghBisht from "../../../public/ProminentPersonalities/DevendraSinghBisht.webp";
import ManishMetani from "../../../public/ProminentPersonalities/ManishMetani.webp";
import LaxmiAgarwal from "../../../public/ProminentPersonalities/LakshmiAgarwal.webp";
import SaurabhJoshi from "../../../public/ProminentPersonalities/SaurabhJoshi.webp";
import ArushiNishank from "../../../public/ProminentPersonalities/ArushiNishank.webp";
import DhanSinghRawat from "../../../public/ProminentPersonalities/DhanSinghRawat.webp";
import TrivendraSinghRawat from "../../../public/ProminentPersonalities/TrivendraSinghRawat.webp";
import SubodhUniyal from "../../../public/ProminentPersonalities/SubodhUniyal.webp";
import AnuragTripathi from "../../../public/ProminentPersonalities/AnuragTripathi.webp";
import RameshPokhriyalNishank from "../../../public/ProminentPersonalities/RameshPokhriyalNishank.webp";
import BhagatSinghKoshyari from "../../../public/ProminentPersonalities/BhagatSinghKoshyari.webp";
import DharmendraPradhan from "../../../public/ProminentPersonalities/DharmendraPradhan.webp";
import ArvindPandey from "../../../public/ProminentPersonalities/ArvindPandey.webp";
import NamamiBansal from "../../../public/ProminentPersonalities/NamamiBansal.webp";
import AbhinavKumar from "../../../public/ProminentPersonalities/AbhinavKumar.webp";
import JanmejayaKhanduri from "../../../public/ProminentPersonalities/JanmejayaKhanduri.webp";
import AshokKumar from "../../../public/ProminentPersonalities/AshokKumar.webp";
import AmitKumarSinha from "../../../public/ProminentPersonalities/AmitKumarSinha.webp";
import SunilUniyalGama from "../../../public/ProminentPersonalities/SunilUniyalGama.webp";
import SahdevSinghPundir from "../../../public/ProminentPersonalities/SahdevSinghPundir.webp";
import Image from "next/image";
function Famous() {
  const sports = [
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
      description: "(5th Highest World Ranking Arjun Awardee 2016 in Archery)",
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
  ];
  const leaders = [
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
      description: "(Technical Education and Forest Minister, Uttarakhand.)",
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
  ];
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0.5; // Speed of scrolling
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to start for continuous effect
        }
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[Mirador800] text-center pt-8 md:pt-[2%] px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-[#b90124] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Influential Personalitites On Campus
      </div>
      <h2 className="text-[#5F5F5F] text-center leading-none font-[darwin-pro] text-[clamp(20px,4.5vw,55px)] pt-6 md:text-[clamp(20px,1.5vw,55px)]">
        Sports Person/Social Media Influencers
      </h2>
      <div className="w-full h-full overflow-hidden whitespace-nowrap">
        <div className="w-full overflow-auto py-6 flex gap-2 md:py-[3%] no-scrollbar">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col items-end overflow-hidden border border-[#b90124] rounded-xl min-w-[60%] max-w-[60%] md:max-w-[22vw] md:min-w-[22vw] mx-auto"
            >
              <div className="w-full h-full flex flex-col justify-between">
                <Image
                  src={sport.image}
                  alt=""
                  className="w-full h-full aspect-[1.5/1] object-cover"
                />
              </div>
              <div className="p-[3%] z-20 w-full h-full">
                <h2 className="text-[clamp(10px,3.2vw,50px)] text-wrap md:text-[clamp(10px,1.1vw,50px)] text-[#b90124] font-[TTChocolates] font-extrabold">
                  {sport.name}
                </h2>
                <h2 className="text-[clamp(10px,2.8vw,50px)] italic text-wrap md:text-[clamp(10px,0.75vw,50px)] text-[#404040] font-[TTChocolates] font-normal">
                  {sport.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[#5F5F5F] leading-none text-center font-[darwin-pro] text-[clamp(20px,4.5vw,55px)] md:text-[clamp(20px,1.5vw,55px)]">
        Leaders Of India
      </h2>
      <div className="w-full h-full overflow-hidden whitespace-nowrap">
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="w-full overflow-auto py-6 flex gap-2 md:py-[3%] no-scrollbar"
        >
          {leaders.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col overflow-hidden border border-[#b90124] rounded-xl min-w-[60%] max-w-[60%] md:max-w-[22vw] md:min-w-[22vw] mx-auto"
            >
              <div className="w-full h-full relative flex flex-col justify-between">
                <Image
                  src={sport.image}
                  alt=""
                  className="w-full h-full aspect-[1.5/1] object-cover"
                />
              </div>
              <div className="p-[3%] z-20 w-full h-full">
                <h2 className="text-[clamp(10px,3.2vw,50px)] text-wrap md:text-[clamp(10px,1.1vw,50px)] text-[#b90124] font-[TTChocolates] font-extrabold">
                  {sport.name}
                </h2>
                <h2 className="text-[clamp(10px,2.8vw,50px)] italic text-wrap md:text-[clamp(10px,0.75vw,50px)] text-[#404040] font-[TTChocolates] font-normal">
                  {sport.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Famous;
