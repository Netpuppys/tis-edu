"use client";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/Pages/Home/Home";
import Navbar from "../components/globalComponents/navbar/Navbar";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <head>
        <title>
          Best Boarding School in Dehradun, India | Tula&apos;s International
          School
        </title>
        <meta
          name="description"
          content="Discover the Best Boarding School in Uttarakhand, India - Tula's International School for a World-class Education. Join Our Top-ranked CBSE Boarding School With a Co-ed, Residential Campus."
        />
        <meta
          name="google-site-verification"
          content="45l-c_yntJwqdKfX55egBlZhXwd2-u6Cz8sVHUWOvDM"
        />
      </head>
      <body>
        <Navbar />
        <HomePage />
        <Footer />
      </body>
    </>
  );
}
