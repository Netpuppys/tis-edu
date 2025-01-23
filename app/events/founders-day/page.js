"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import banner from "../../../public/foundersDay/banner.webp";
import bannerMobile from "../../../public/foundersDay/bannerMobile.webp";
import Annual10 from "../../../public/foundersDay/Annual10.png";
import Annual10Img1 from "../../../public/foundersDay/Annual10(1).png";
import Annual10Img2 from "../../../public/foundersDay/Annual10(2).png";
import Annual10Img3 from "../../../public/foundersDay/Annual10(3).png";
import Annual10Img4 from "../../../public/foundersDay/Annual10(4).png";
import Annual10Img5 from "../../../public/foundersDay/Annual10(5).png";
import Annual10Img6 from "../../../public/foundersDay/Annual10(6).png";
import Annual10Img7 from "../../../public/foundersDay/Annual10(7).png";
import Annual10Img8 from "../../../public/foundersDay/Annual10(8).png";
import Annual9 from "../../../public/foundersDay/Annual9.png";
import Annual9Img1 from "../../../public/foundersDay/Annual9(1).png";
import Annual9Img2 from "../../../public/foundersDay/Annual9(2).png";
import Annual9Img3 from "../../../public/foundersDay/Annual9(3).png";
import Annual9Img4 from "../../../public/foundersDay/Annual9(4).png";
import Annual9Img5 from "../../../public/foundersDay/Annual9(5).png";
import Annual9Img6 from "../../../public/foundersDay/Annual9(6).png";
import Annual9Img7 from "../../../public/foundersDay/Annual9(7).png";
import Annual9Img8 from "../../../public/foundersDay/Annual9(8).png";
// import Annual8 from "../../../public/foundersDay/Annual8.png";
// import Annual8Img1 from "../../../public/foundersDay/Annual8(1).png";
// import Annual8Img2 from "../../../public/foundersDay/Annual8(2).png";
// import Annual8Img3 from "../../../public/foundersDay/Annual8(3).png";
// import Annual8Img4 from "../../../public/foundersDay/Annual8(4).png";
// import Annual8Img5 from "../../../public/foundersDay/Annual8(5).png";
// import Annual8Img6 from "../../../public/foundersDay/Annual8(6).png";
// import Annual8Img7 from "../../../public/foundersDay/Annual8(7).png";
// import Annual8Img8 from "../../../public/foundersDay/Annual8(8).png";
import Annual6 from "../../../public/foundersDay/Annual6.png";
import Annual6Img1 from "../../../public/foundersDay/Annual6(1).png";
import Annual6Img2 from "../../../public/foundersDay/Annual6(2).png";
import Annual6Img3 from "../../../public/foundersDay/Annual6(3).png";
import Annual6Img4 from "../../../public/foundersDay/Annual6(4).png";
import Annual6Img5 from "../../../public/foundersDay/Annual6(5).png";
import Annual6Img6 from "../../../public/foundersDay/Annual6(6).png";
import Annual6Img7 from "../../../public/foundersDay/Annual6(7).png";
import Annual6Img8 from "../../../public/foundersDay/Annual6(8).png";
import Annual4 from "../../../public/foundersDay/Annual4.png";
import Annual4Img1 from "../../../public/foundersDay/Annual4(1).png";
import Annual4Img2 from "../../../public/foundersDay/Annual4(2).png";
import Annual4Img3 from "../../../public/foundersDay/Annual4(3).png";
import Annual4Img4 from "../../../public/foundersDay/Annual4(4).png";
import Annual4Img5 from "../../../public/foundersDay/Annual4(5).png";
import Annual4Img6 from "../../../public/foundersDay/Annual4(6).png";
import Annual4Img7 from "../../../public/foundersDay/Annual4(7).png";
import Annual4Img8 from "../../../public/foundersDay/Annual4(8).png";
import Annual3 from "../../../public/foundersDay/Annual3.png";
import Annual3Img1 from "../../../public/foundersDay/Annual3(1).png";
import Annual3Img2 from "../../../public/foundersDay/Annual3(2).png";
import Annual3Img3 from "../../../public/foundersDay/Annual3(3).png";
import Annual3Img4 from "../../../public/foundersDay/Annual3(4).png";
import Annual3Img5 from "../../../public/foundersDay/Annual3(5).png";
import Annual3Img6 from "../../../public/foundersDay/Annual3(6).png";
import Annual3Img7 from "../../../public/foundersDay/Annual3(7).png";
import Annual3Img8 from "../../../public/foundersDay/Annual3(8).png";
// import Annual2 from "../../../public/foundersDay/Annual2.png";
// import Annual2Img1 from "../../../public/foundersDay/Annual2(1).png";
// import Annual2Img2 from "../../../public/foundersDay/Annual2(2).png";
// import Annual2Img3 from "../../../public/foundersDay/Annual2(3).png";
// import Annual2Img4 from "../../../public/foundersDay/Annual2(4).png";
// import Annual2Img5 from "../../../public/foundersDay/Annual2(5).png";
// import Annual2Img6 from "../../../public/foundersDay/Annual2(6).png";
// import Annual2Img7 from "../../../public/foundersDay/Annual2(7).png";
// import Annual2Img8 from "../../../public/foundersDay/Annual2(8).png";
// import Annual1 from "../../../public/foundersDay/Annual1.png";
// import Annual1Img1 from "../../../public/foundersDay/Annual1(1).png";
// import Annual1Img2 from "../../../public/foundersDay/Annual1(2).png";
// import Annual1Img3 from "../../../public/foundersDay/Annual1(3).png";
// import Annual1Img4 from "../../../public/foundersDay/Annual1(4).png";
// import Annual1Img5 from "../../../public/foundersDay/Annual1(5).png";
// import Annual1Img6 from "../../../public/foundersDay/Annual1(6).png";
// import Annual1Img7 from "../../../public/foundersDay/Annual1(7).png";
// import Annual1Img8 from "../../../public/foundersDay/Annual1(8).png";
import Head from "next/head";
import Header from "@/components/globalComponents/Header/Header";
export default function EventConfluencePage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollRef = useRef(null);
  const [currentMainImage, setCurrentMainImage] = useState(null);

  useEffect(() => {
    if (selectedCard) {
      setCurrentMainImage(selectedCard.image); // Initialize main image when a card is selected
    }
  }, [selectedCard]);

  const card = [
    {
      id: 1,
      title: "10th Annual Founders Day - 2024",
      image: Annual10,
      groupImage: [
        Annual10Img1,
        Annual10Img2,
        Annual10Img3,
        Annual10Img4,
        Annual10Img5,
        Annual10Img6,
        Annual10Img7,
        Annual10Img8,
      ],
      description:
        "Rooted in timeless values, our 10th Founders Day celebrated the epic Ramayana, with our chief guest Sh. Naresh Bansal and special guest Mr. Sarabjot Singh guiding us through its enduring lessons.",
    },
    {
      id: 2,
      title: "9th Annual Founders Day - 2023",
      image: Annual9,
      groupImage: [
        Annual9Img1,
        Annual9Img2,
        Annual9Img3,
        Annual9Img4,
        Annual9Img5,
        Annual9Img6,
        Annual9Img7,
        Annual9Img8,
      ],
      description:
        "On our 9th Founders Day we celebrated the art and wisdom of Tagore along with our chief guest Mr. Nitish Kumar and our guest of honour, Ms. Ridhima Pandey and Mr. Shivank Verma.",
    },
    // {
    //   id: 3,
    //   title: "8th Annual Founders Day - 2022",
    //   image: Annual8,
    //   groupImage: [
    //     Annual8Img1,
    //     Annual8Img2,
    //     Annual8Img3,
    //     Annual8Img4,
    //     Annual8Img5,
    //     Annual8Img6,
    //     Annual8Img7,
    //     Annual8Img8,
    //   ],
    //   description:
    //     "Roaring with pride, our 8th Founders Day honored the courage and leadership of the Lion King. With our chief guest Col. Vikram Kadyan and our special guest Hawaldar Joginder Kumar made this day unforgettable.",
    // },
    {
      id: 4,
      title: "6th Annual Founders Day - 2019",
      image: Annual6,
      groupImage: [
        Annual6Img1,
        Annual6Img2,
        Annual6Img3,
        Annual6Img4,
        Annual6Img5,
        Annual6Img6,
        Annual6Img7,
        Annual6Img8,
      ],
      description:
        "Magic, dreams, and inspiration. On our 6th Founders Day we brought Aladdin’s wonder to life, with chief guest Sh. Anurag Tripathi and our special guest LtCdr. Payal Gupta and Dr. Sanjay Prakash Saxena lighting the way.",
    },
    {
      id: 5,
      title: "4th Annual Founders Day - 2018",
      image: Annual4,
      groupImage: [
        Annual4Img1,
        Annual4Img2,
        Annual4Img3,
        Annual4Img4,
        Annual4Img5,
        Annual4Img6,
        Annual4Img7,
        Annual4Img8,
      ],
      description:
        "Love, courage, and resilience, our 4th Founders Day, inspired by Laila Majnu, was made unforgettable by Ms. Laxmi Agarwal’s empowering presence.",
    },
    {
      id: 6,
      title: "3rd Annual Founders Day - 2017",
      image: Annual3,
      groupImage: [
        Annual3Img1,
        Annual3Img2,
        Annual3Img3,
        Annual3Img4,
        Annual3Img5,
        Annual3Img6,
        Annual3Img7,
        Annual3Img8,
      ],
      description:
        "Where stories came alive on the street, our 3rd Founders Day honored the art of Nukkad Natak with Sh. Arvind Pandey (Minister for Primary Education), celebrating community and creativity.",
    },
    // {
    //   id: 7,
    //   title: "2nd Annual Founders Day - 2016",
    //   image: Annual2,
    //   groupImage: [
    //     Annual2Img1,
    //     Annual2Img2,
    //     Annual2Img3,
    //     Annual2Img4,
    //     Annual2Img5,
    //     Annual2Img6,
    //     Annual2Img7,
    //     Annual2Img8,
    //   ],
    //   description:
    //     "Embracing the power of nature, our 2nd Founders Day honored the Four Main Elements, with Justice Vijendra Jain guiding our celebration of balance and strength.",
    // },
    // {
    //   id: 8,
    //   title: "1st Annual Founders Day - 2015",
    //   image: Annual1,
    //   groupImage: [
    //     Annual1Img1,
    //     Annual1Img2,
    //     Annual1Img3,
    //     Annual1Img4,
    //     Annual1Img5,
    //     Annual1Img6,
    //     Annual1Img7,
    //     Annual1Img8,
    //   ],
    //   description:
    //     "Launching a legacy of inspiration, our 1st Founders Day celebrated the Famous Personalities whose stories continue to shape our journey.",
    // },
  ];
  return (
    <>
      <Head>
        <title>
          Best Boarding School in Dehradun (India) | Tula&apos;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Dehradun, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
      </Head>
      <Navbar />

      <Header
        title={"Founder's Day"}
        subtitle={
          <>
            Celebrate leadership and teamwork at our{" "}
            <strong className="font-black font-[HelveticaBold]">
              Annual Founder's Day
            </strong>
          </>
        }
        headerImg={banner}
        headerImgMobile={bannerMobile}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        Celebrating Growth, Creativity, and Unity – TIS Founder's Day: Honoring
        the Past, Shaping the Future!
        <br />
        <br />
        At TIS, Founders Day isn’t just about honoring our founders. It’s a time
        to celebrate how far we’ve come, the progress we’ve made, and the
        achievements of our students over the past year. We celebrate it right
        before the Diwali break in a unique way.
        <br />
        <br />
        Each year, we choose a new theme for the event. Past themes have
        included stories like Ramayana, Aladdin, Laila-Majnu, and figures like
        Rabindranath Tagore etc. What makes Founders Day even more exciting is
        that about 70% of our students work together for 60 days to create an
        amazing play based on the theme. From writing the script to designing
        the set and costumes, students are involved in every step.
        <br />
        <br />
        In addition to the play, students also organize a fun fest filled with
        exciting activities, games, and food stalls. This gives them a chance to
        take on responsibilities and work together. There are also exhibitions
        on subjects like IT, science, and social science, where students can
        showcase their creativity and knowledge in front of the school
        community.
        <br />
        <br />
        <span ref={scrollRef}>
          At TIS, Founders Day is not just about the past, but about celebrating
          our journey, growth, and the future we’re building together.
        </span>
      </h6>

      <div className="w-[90%] md:w-[80%] mx-auto">
        {!selectedCard ? (
          <div className="pb-8 md:pb-14 w-full flex flex-wrap gap-4 justify-center">
            {card.map((cards, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCard(cards);
                  scrollRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`${
                  index === 0 || index === 1
                    ? "w-full md:w-[calc(50%-16px)]"
                    : "w-full md:w-[calc(33.33%-16px)]"
                } group cursor-pointer relative aspect-[1.2/1] flex flex-col gap-2 justify-end hover:justify-center items-center px-[2%] overflow-hidden rounded-xl`}
              >
                <Image
                  src={cards.image}
                  alt=""
                  className="w-full h-full object-cover absolute"
                />
                <div className="absolute z-10 bg-[#b90124] bg-opacity-70 w-full h-full transition-all ease-in duration-700 translate-y-full group-hover:translate-y-0"></div>
                <div className="absolute z-20">
                  <h3 className="font-[TTChocolatesBold] w-fit mx-auto text-[clamp(20px,1.8vw,50px)] text-white text-center">
                    {cards.title}
                  </h3>
                  <h3
                    className="hidden group-hover:flex translate-y-full group-hover:translate-y-0 max-w-[70%] px-4 mx-auto text-[clamp(16px,1vw,50px)] text-white text-center"
                    style={{
                      fontFamily: "TT Chocolates",
                    }}
                  >
                    {cards.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-[clamp(15px,7vw,60px)] md:text-[clamp(20px,2.5vw,50px)] font-[Mirador800]">
              <span className="text-[#b90124]">
                {selectedCard.title.split(" ")[0]}
              </span>{" "}
              {selectedCard.title.split(" ").slice(1).join(" ")}
            </h2>
            <p className="w-full md:w-[70%] pb-5 md:pb-10 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates]">
              {selectedCard.description}
            </p>
            <div className="flex flex-col md:flex-row w-full mx-auto gap-8">
              {/* Main Image & Details */}
              <div className="w-full md:w-2/3 border-2 rounded-md overflow-hidden border-[#b90124]">
                <Image
                  src={currentMainImage || selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Group Images */}
              <div className="w-full md:w-1/3 grid grid-cols-2 gap-2">
                {selectedCard.groupImage.map((img, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer bg-black w-full h-full"
                  >
                    <Image
                      src={img}
                      alt=""
                      onClick={() => setCurrentMainImage(img)} // Update the main image on click
                      className="hover:opacity-80 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Other Cards */}
            <div className="w-full py-8 md:py-14">
              <div className="flex flex-wrap justify-center gap-4">
                {card
                  .filter((cards) => cards.id !== selectedCard?.id) // assuming each card has a unique id
                  .map((cards, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedCard(cards);
                        scrollRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }} // Ensure selectedCard is updated properly
                      className="w-full md:w-[calc(25%-16px)] group cursor-pointer relative aspect-[1.2/1] flex flex-col gap-2 justify-end hover:justify-center items-center px-[2%] overflow-hidden rounded-md"
                    >
                      <Image
                        src={cards.image}
                        alt=""
                        className="w-full h-full object-cover absolute"
                      />
                      <div className="absolute z-10 bg-[#b90124] bg-opacity-70 w-full h-full transition-all ease-in duration-700 translate-y-full group-hover:translate-y-0"></div>
                      <div className="absolute z-20">
                        <h3 className="font-[TTChocolatesBold] w-fit mx-auto text-[clamp(20px,1.3vw,50px)] text-white text-center">
                          {cards.title}
                        </h3>
                        <h3
                          className="hidden group-hover:flex translate-y-full group-hover:translate-y-0 max-w-[70%] px-4 mx-auto text-[clamp(12px,0.5vw,50px)] text-white text-center"
                          style={{
                            fontFamily: "TT Chocolates",
                          }}
                        >
                          {cards.description}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
