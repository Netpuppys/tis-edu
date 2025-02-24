import Footer from "@/components/Footer/Footer";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Head from "next/head";
import nationalgamesBanner from "../../../public/Banner/NationalbannerImg.webp";
import image1 from "../../../public/national-games/image1.webp";
import image2 from "../../../public/national-games/image2.webp";
import image3 from "../../../public/national-games/image3.webp";

import React from "react";
import Image from "next/image";

export default function NationalGames() {
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
        title={"38th National Games"}
        subtitle={<>38th National Games Torch Relay at TIS</>}
        headerImg={nationalgamesBanner}
        headerImgMobile={nationalgamesBanner}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        Tula’s International School proudly welcomed Tejaswini, the torch of the
        38th National Games Uttarakhand, as part of its historic journey across
        3,823 kilometers, 99 locations, and 13 districts. Flagged off by Hon’ble
        Chief Minister Mr. Pushkar Singh Dhami on December 26, 2024, in
        Haldwani, the torch embodies the spirit of determination and
        excellence—values that define TIS.
      </h6>
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
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-[3%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        The torch arrived at Tula’s Institute, where it was met with immense
        enthusiasm by students, faculty, and dignitaries. It then continued to
        Tula’s International School, greeted by an energetic crowd at the
        football field and a proud NCC contingent. Passing through all the
        sports fields, the event concluded with students capturing the moment
        alongside "Mauli," the official mascot. True to the theme “Sankalp Se
        Shikhar Tak” (From Resolve to the Summit), this moment celebrated the
        perseverance and passion that drive future champions at TIS.
      </h6>
      <Footer />
    </>
  );
}
