import React from "react";
import googleReviewsBackground from "../../../../../../public/LandingPage/googleReviewsBackground.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
function GoogleReviews() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col md:flex-row md:min-h-[100vh] relative w-full  justify-center">
      <div className="w-full md:w-[42%]  relative flex bg-black flex-col justify-center items-center md:h-full">
        <Image
          src={googleReviewsBackground}
          alt=""
          className="w-full opacity-50 min-h-[50vh] md:min-h-screen object-cover"
        />
        <div className="text-white absolute  flex flex-col justify-center items-center px-8">
          <h3
            className="font-[Mirador] text-center"
            style={{ fontSize: "clamp(38px, 4vw, 70px)" }}
          >
            Google Reviews
          </h3>
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 268.317 14.075"
            className={`mainText-scribble mb-8 w-[60%] max-w-[268px] ${
              inView ? "active" : ""
            }`}
            width="268.3169860839844"
            height="14.074999809265137"
          >
            <path
              id="mainTextScribble"
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0"
              transform="translate(-403.065 -1791.313)"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="svg-elem-1"
            />
          </svg>
          <p3
            className="px-8 md:px-20"
            style={{
              fontSize: "clamp(14px, 1.1vw, 25px)",
              fontFamily: "TT Chocolates",
            }}
          >
            The school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. The
            school has ample support services in place for its students to
            thrive both physically and mentally, including a Wellness Infirmary,
            equipped with everything that one may need to keep them healthy. 
          </p3>
        </div>
      </div>
      <div className="w-full md:w-[58%] min-h-[50vh] md:min-h-screen backgroundGoogle"></div>
    </div>
  );
}

export default GoogleReviews;
