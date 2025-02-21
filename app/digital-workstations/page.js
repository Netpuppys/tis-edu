import React from "react";
import BannerImg from "../../public/Banner/digitalBanner.webp";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import yellowLine from "../../public/pictures/lineImg.png";
import tagore from "../../public/workstations/tagore.png";
import steveJobs from "../../public/workstations/steveJobs.png";
import einstein from "../../public/workstations/einstein.png";
import shakespeare from "../../public/workstations/shakespeare.png";
import aryabhatta from "../../public/workstations/Aryabhatta.png";
import kabir from "../../public/workstations/kabir.png";
import galileo from "../../public/workstations/galileo.png";
import chandragupta from "../../public/workstations/chandragupta.png";
import colors from "../../public/workstations/colors.png";
import stepUp from "../../public/workstations/stepUp.png";
import lyrics from "../../public/workstations/lyrics.png";
import caesar from "../../public/workstations/caesar.png";
import archimedes from "../../public/workstations/archimedes.png";
import saregama from "../../public/workstations/saregama.png";
import pythagoras from "../../public/workstations/pythagoras.png";
import kotler from "../../public/workstations/kotler.png";
import ledger from "../../public/workstations/ledger.png";
import dickens from "../../public/workstations/dickens.png";
import encyclopedia from "../../public/workstations/encyclopedia.png";
import newton from "../../public/workstations/newton.png";
import image1 from "../../public/workstations/image1.webp";
import image2 from "../../public/workstations/image2.webp";
import image3 from "../../public/workstations/image3.webp";
import image4 from "../../public/workstations/image4.webp";
import Image from "next/image";

function MentorMentee() {
  const workstations1 = [
    {
      title: "Tagore",
      desc: "(Hindi)",
      logo: tagore,
    },
    {
      title: "Steve Jobs",
      desc: "(Computer Application)",
      logo: steveJobs,
    },
    {
      title: "Einstien",
      desc: "(Junior Sciences)",
      logo: einstein,
    },
    {
      title: "Shakespeare",
      desc: "(English)",
      logo: shakespeare,
    },
    {
      title: "Aryabhatta",
      desc: "(Mathematics)",
      logo: aryabhatta,
    },
    {
      title: "Kabir",
      desc: "(Language)",
      logo: kabir,
    },
  ];
  const workstations2 = [
    {
      title: "Galileo",
      desc: "(Geography)",
      logo: galileo,
    },
    {
      title: "Chandragupta",
      desc: "(History)",
      logo: chandragupta,
    },
    {
      title: "Colours",
      desc: "(Art & Craft)",
      logo: colors,
    },
    {
      title: "Step Up",
      desc: "(Dance)",
      logo: stepUp,
    },
    {
      title: "Lyrics",
      desc: "(Music)",
      logo: lyrics,
    },
    {
      title: "Caesar",
      desc: "(Dramatics)",
      logo: caesar,
    },
    {
      title: "Archimedes",
      desc: "(Science)",
      logo: archimedes,
    },
  ];
  const workstations3 = [
    {
      title: "Saregama",
      desc: "(Indian Classical Music)",
      logo: saregama,
    },
    {
      title: "Pythgoras",
      desc: "(Senior Mathematics)",
      logo: pythagoras,
    },
    {
      title: "Kotler",
      desc: "(Economics)",
      logo: kotler,
    },
    {
      title: "Ledger",
      desc: "(Accounts)",
      logo: ledger,
    },
    {
      title: "Dickens",
      desc: "(English)",
      logo: dickens,
    },
    {
      title: "Encyclopedia",
      desc: "(Junior Library)",
      logo: encyclopedia,
    },
    {
      title: "Newton",
      desc: "(Chemistry)",
      logo: newton,
    },
  ];
  return (
    <>
      <Navbar />
      <Header
        headerImg={BannerImg}
        headerImgMobile={BannerImg}
        title={"Digital Workstations"}
        subtitle={"Replace the traditional Classrooms"}
      />
      <div className="py-8 md:py-[3%]">
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] mx-auto text-center text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          At Tula’s International School, learning isn’t confined to four
          walls—it moves, breathes, and adapts. Instead of traditional
          classrooms, we have dedicated workstations for each subject, designed
          to enhance focus, creativity, and real-world application. From science
          to literature, mathematics to music, every subject has its own space,
          carefully crafted to match its essence. This approach not only makes
          learning more immersive but also encourages students to shift their
          mindset as they move through different disciplines, keeping them
          engaged and intellectually stimulated throughout the day. Here,
          education isn’t just about textbooks—it’s about experiencing knowledge
          in spaces that bring it to life.
        </h2>
      </div>

      <h2 className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
        The <span className="text-[#b90124]">Workstations</span>
        <Image className="ml-auto w-fit max-w-[60%]" src={yellowLine} alt="" />
      </h2>

      <div className="flex flex-col md:flex-row py-8 md:py-[3%] gap-[3%] justify-between w-full px-8 md:px-0 md:w-[75%] mx-auto">
        <div className="flex w-fit flex-col gap-2">
          {workstations1.map((logo, index) => (
            <div
              key={index}
              className="flex gap-3 justify-start items-center w-fit"
            >
              <Image
                src={logo.logo}
                alt=""
                className="w-[60px] md:w-[70px] h-fit border border-black rounded-full"
              />
              <h6 className="text-black font-[Pacifico] text-[clamp(10px,5vw,30px)] leading-tight md:text-[clamp(10px,1.4vw,45px)]">
                {logo.title}
              </h6>
              <h6 className="text-black font-[TTChocolates] text-[clamp(10px,3.5vw,30px)] leading-tight md:text-[clamp(10px,1.2vw,45px)]">
                {logo.desc}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex w-fit py-2 md:py-0 flex-col gap-2">
          {workstations2.map((logo, index) => (
            <div
              key={index}
              className="flex gap-3 justify-start  items-center w-fit"
            >
              <Image
                src={logo.logo}
                alt=""
                className="w-[60px] md:w-[70px] h-fit border border-black rounded-full"
              />
              <h6 className="text-black font-[Pacifico] text-[clamp(10px,5vw,30px)] leading-tight md:text-[clamp(10px,1.4vw,45px)]">
                {logo.title}
              </h6>
              <h6 className="text-black font-[TTChocolates] text-[clamp(10px,3.5vw,30px)] leading-tight md:text-[clamp(10px,1.2vw,45px)]">
                {logo.desc}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex w-fit flex-col gap-2">
          {workstations3.map((logo, index) => (
            <div
              key={index}
              className="flex gap-3 justify-start items-center w-fit"
            >
              <Image
                src={logo.logo}
                alt=""
                className="w-[60px] md:w-[70px] h-fit border border-black rounded-full"
              />
              <h6 className="text-black font-[Pacifico] text-[clamp(10px,5vw,30px)] leading-tight md:text-[clamp(10px,1.4vw,45px)]">
                {logo.title}
              </h6>
              <h6 className="text-black font-[TTChocolates] text-[clamp(10px,3.5vw,30px)] leading-tight md:text-[clamp(10px,1.2vw,45px)]">
                {logo.desc}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[clamp(10px,7vw,50px)] w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
        Intelligence + <span className="text-[#b90124]">Character</span>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-fit ml-auto text-center text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          That is the goal of true education
        </h2>
      </div>
      <div className="flex pt-8 md:pt-[3%] pb-4 flex-col md:flex-row w-[90%] md:w-[85%] mx-auto gap-4">
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
      <Footer />
    </>
  );
}

export default MentorMentee;
