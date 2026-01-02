export default function AboutSpeaker() {
  return (
<section
  className="w-full pt-0 px-0 md:pt-8 md:px-6"
  style={{ backgroundColor: "#b90124", marginTop: '-35px' }}
>
      {/* Desktop-only Section */}
      <div className="hidden md:block">
        {/* Title */}
        <p className="text-center font-[Mirador800] text-[#ffff] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">
          Meet Our Mental Wellbeing & <br /> Student Career Counselling Expert
        </p>
        <div
          className="h-[2px] bg-[#f9c603] rounded-full mx-auto"
          style={{ width: "40%", marginTop: '-1px' }}
        ></div>

        {/* Subtitle */}
        <p className="text-center font-[Mirador800] text-[#ffff] text-[clamp(14px,5vw,60px)] md:text-[clamp(18px,2.5vw,48px)] mt-3">
          Nikhil Raj Sharma’s Prespective
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          
          {/* Left Text Block */}
          <div className="md:col-span-8 text-white font-sans font-semibold text-2xl leading-relaxed space-y-6 pb-5">
            <p>
              Nikhil Raj Sharma, associated with Tulas International School for more than 10 years. He’s leading the Himalayan Geographic Research Foundation and will be joining the session. His work spans education, youth development and community upliftment across the Himalayan belt. He has spent years building learning ecosystems in regions where resources are limited but determination runs deep.
            </p>

            <p>
              His experience shows how much children can achieve when the environment supports their potential. His guidance comes from work on the ground, which makes his insights both practical and reassuring for parents seeking reliable clarity.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:col-span-4 flex justify-center md:justify-center">
            <img
              src="/LandingPage/shivika-maam.png"
              alt="Nikhil Raj Sharma"
              className="max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile-only Image Section */}
      <div className="block md:hidden flex justify-center mt-8">
        <img
          src="/LandingPage/mobile-img.png" // mobile version image
          alt="Nikhil Raj Sharma Mobile"
          className="max-h-[300px] object-contain"
        />
      </div>
    </section>
  );
}
