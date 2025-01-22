import React from "react";

import Header from "../../globalComponents/Header/Header";
import HeaderPastoralImg from "../../../public/Banner/pastoralCare.webp";
import HeaderPastoralImgMobile from "../../../public/Banner/pastoralCareMobile.webp";
import "../../../styles/BoardingLife/pastoral.css";
export default function PastoralCare() {
  const bannerText =
    "Growth at Tula's begins with care, support, and endless possibilities";

  return (
    <>
      <Header
        title={"Pastoral Care"}
        subtitle={bannerText}
        headerImg={HeaderPastoralImg}
        headerImgMobile={HeaderPastoralImgMobile}
      />
      <div className="text-pastoral">
        <strong className="font-black">
          At Tula’s International School, we believe that your well-being is
          just as important as your academics. Our Pastoral Care team is here to
          support you every step of the way, ensuring you feel safe, cared for,
          and encouraged to grow.
        </strong>
        <br />
        <br />
        <ul className="ml-8 list-image">
          <li>
            <strong className="font-black text-[#b90124] font-[TTChocolates]">
              Support in Every Way:
            </strong>{" "}
            Whether it’s emotional, social, or academic, our team is dedicated
            to helping you feel confident and strong. We’re here to guide you
            through any challenges and celebrate your successes.
          </li>
          <br />
          <li>
            <strong className="font-black text-[#b90124] font-[TTChocolates]">
              A Safe, Caring Environment:
            </strong>{" "}
            At TIS, we create a space where kindness and respect are always a
            priority. You’ll always find support from your friends, teachers,
            and staff, no matter what you’re going through.
          </li>
          <br />
          <li>
            <strong className="font-black text-[#b90124] font-[TTChocolates]">
              Mental Health Matters:
            </strong>{" "}
            We understand that life can get tough sometimes. That’s why our
            counselors are available whenever you need someone to talk to,
            offering guidance and support when you face stress or emotional
            challenges.
          </li>
          <br />
          <li>
            <strong className="font-black text-[#b90124] font-[TTChocolates]">
              Building Friendships for Life:
            </strong>{" "}
            The friendships you make here will stay with you long after
            graduation. We encourage meaningful connections between students and
            alumni that continue to offer support and encouragement throughout
            your life.
          </li>
        </ul>
        <br />
        At TIS, we’re here to make sure you feel truly cared for and
        supported—both inside and outside the classroom.
      </div>
    </>
  );
}
