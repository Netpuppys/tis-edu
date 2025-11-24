import nikhil from "../../../../../public/LandingPage/nikhil-sir-Image.png";

export default function AboutSpeaker() {
  return (
    <section
      className="w-full pt-16 px-6"
      style={{ backgroundColor: "#b90124" , marginTop:'-35px'}}
    >
      {/* Title */}
             <p className="text-center font-[Mirador800] text-[#ffff] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">Meet Our Mental Wellbeing & <br/> Student Career Counselling Expert</p>
        <div className="h-[2px] bg-[#f9c603] rounded-full mx-auto" style={{ width: "40%" , marginTop:'-1px'}}></div>
      {/* Subtitle */}
      <p className="text-center text-white text-2xl mt-4">
        Hear it from <span className="text-[#f9c603] text-3xl">Nikhil Raj Sharma’s</span> Perspective
      </p>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
        
        {/* Left Text Block */}
        <div className="text-white text-2xl leading-relaxed space-y-6 pb-5">
          <p>
            Nikhil Raj Sharma, associated with Tulas International School for more than 10years. He’s leading the Himalayan Geographic Research Foundation and will be joining the session. His work spans education, youth development and community upliftment across the Himalayan belt. He has spent years building learning ecosystems in regions where resources are limited but determination runs deep.
          </p>

          <p>
            His experience shows how much children can achieve when the environment supports their potential. His guidance comes from work on the ground, which makes his insights both practical and reassuring for parents seeking reliable clarity.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-center">
          <img
            src="/LandingPage/nikhil-sir-image.png" 
            alt="Biju Jayaraaj"
            className="max-h-[580px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
