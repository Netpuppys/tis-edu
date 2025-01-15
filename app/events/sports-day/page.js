"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import sportsDay from "../../../public/Banner/sportsDay.webp";
import Annual11 from "../../../public/sportsDay/Annual11.png";
import Annual11Img1 from "../../../public/sportsDay/Annual11(1).png";
import Annual11Img2 from "../../../public/sportsDay/Annual11(2).png";
import Annual11Img3 from "../../../public/sportsDay/Annual11(3).png";
import Annual11Img4 from "../../../public/sportsDay/Annual11(4).png";
import Annual11Img5 from "../../../public/sportsDay/Annual11(5).png";
import Annual11Img6 from "../../../public/sportsDay/Annual11(6).png";
import Annual11Img7 from "../../../public/sportsDay/Annual11(7).png";
import Annual11Img8 from "../../../public/sportsDay/Annual11(8).png";
import Annual10 from "../../../public/sportsDay/Annual10.png";
import Annual7 from "../../../public/sportsDay/Annual7.png";
import Annual6 from "../../../public/sportsDay/Annual6.png";
import Annual5 from "../../../public/sportsDay/Annual5.png";
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
      title: "11th Annual Sports Day",
      image: Annual11,
      groupImage: [
        Annual11Img1,
        Annual11Img2,
        Annual11Img3,
        Annual11Img4,
        Annual11Img5,
        Annual11Img6,
        Annual11Img7,
        Annual11Img8,
      ],
      description:
        "Whether you're an athlete, a spectator, or simply someone who enjoys a day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy the lively cheers, the electrifying performances,",
    },
    {
      id: 2,
      title: "10th Annual Sports Day",
      image: Annual10,
      groupImage: [
        Annual11,
        Annual10,
        Annual7,
        Annual6,
        Annual5,
        Annual11,
        Annual10,
        Annual7,
      ],
      description:
        "Whether you're an athlete, a spectator, or simply someone who enjoys a day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy the lively cheers, the electrifying performances,",
    },
    {
      id: 3,
      title: "7th Annual Sports Day",
      image: Annual7,
      groupImage: [
        Annual11,
        Annual10,
        Annual7,
        Annual6,
        Annual5,
        Annual11,
        Annual10,
        Annual7,
      ],
      description:
        "Whether you're an athlete, a spectator, or simply someone who enjoys a day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy the lively cheers, the electrifying performances,",
    },
    {
      id: 4,
      title: "6th Annual Sports Day",
      image: Annual6,
      groupImage: [
        Annual11,
        Annual10,
        Annual7,
        Annual6,
        Annual5,
        Annual11,
        Annual10,
        Annual7,
      ],
      description:
        "Whether you're an athlete, a spectator, or simply someone who enjoys a day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy the lively cheers, the electrifying performances,",
    },
    {
      id: 5,
      title: "5th Annual Sports Day",
      image: Annual5,
      groupImage: [
        Annual11,
        Annual10,
        Annual7,
        Annual6,
        Annual5,
        Annual11,
        Annual10,
        Annual7,
      ],
      description:
        "Whether you're an athlete, a spectator, or simply someone who enjoys a day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy the lively cheers, the electrifying performances,",
    },
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
        title={"Sports Day"}
        subtitle={
          <>
            Celebrate sportsmanship and teamwork at{" "}
            <strong className="font-black font-[HelveticaBold]">
              Tulas Annual Sports Day,
            </strong>{" "}
            a showcase of talent and passion!
          </>
        }
        headerImg={sportsDay}
        headerImgMobile={sportsDay}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        Tulas' 7th Annual Sports Day is a celebration of energy, determination,
        and teamwork. This event brings together athletes and enthusiasts from
        across the community to participate in a variety of sports and
        activities. From thrilling track events to exciting team games, Sports
        Day promises a vibrant atmosphere filled with passion and friendly
        competition. It’s not just about winning but embracing the spirit of
        sportsmanship and fostering camaraderie among participants.
        <br />
        <br />
        Whether you're an athlete, a spectator, or simply someone who enjoys a
        day of outdoor fun, Tulas' Sports Day has something for everyone. Enjoy
        the lively cheers, the electrifying performances, and the inspiring
        stories of effort and perseverance.{" "}
        <span ref={scrollRef}>
          Join us to witness and celebrate the joy of sports and the values it
          instills, making this event a memorable experience for all.
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
                style={{
                  background: `
      linear-gradient(180deg, rgba(0, 0, 0, 0.00) 88.37%, #000 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
      url(${cards.image.src}) center/cover no-repeat
    `,
                }}
                className={`${
                  index === 0 || index === 1
                    ? "w-full md:w-[calc(50%-16px)]"
                    : "w-full md:w-[calc(33.33%-16px)]"
                } group cursor-pointer relative aspect-[1.2/1] flex flex-col gap-2 justify-end hover:justify-center items-center px-[2%] overflow-hidden rounded-xl`}
              >
                {/* <Image
                  src={cards.image}
                  alt=""
                  className="w-full h-full object-cover absolute"
                /> */}
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
              <div className="flex flex-wrap gap-4">
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
