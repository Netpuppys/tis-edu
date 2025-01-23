"use client";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import React from "react";
import GoogleReviews from "../boarding-school/admission-open/Components/Hero/components/GoogleReviews";
import ParentsReviews from "@/components/home/components/parentsReviews/ParentsReviews";
import Footer from "@/components/Footer/Footer";
import banner from "../../public/parents-testimonial/banner.png";
import bannerMobile from "../../public/parents-testimonial/bannerMobile.png";

function page() {
  return (
    <>
      <Navbar />
      <Header
        title={"Parent's Testimonial"}
        subtitle={"Why is TIS the best choice for your child?"}
        headerImg={banner}
        headerImgMobile={bannerMobile}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        At Tula’s, we believe in shaping the leaders of tomorrow. But don’t just
        take our word for it, listen to the heartfelt stories of our parents as
        they share their experiences. Hear from them about the warmth and
        dedication of our teachers and all the exciting opportunities their kids
        have found here. Discover how Tula’s has made a lasting impact, not just
        on their academic journey, but on their overall growth and future.
      </h6>
      <GoogleReviews />
      <div className="w-full h-full py-8 md:py-14">
        <ParentsReviews />
      </div>
      <Footer />
    </>
  );
}

export default page;
