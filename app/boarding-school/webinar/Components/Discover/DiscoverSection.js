"use client";
import {
  Lightbulb,
  CheckCircle,
  HeartHandshake,
  TrendingUp,
  Puzzle,
  Rocket,
} from "lucide-react";

export default function DiscoverSection() {
  const items = [
    {
      text: "How to approach the CBSE, ICSE & IB choice with a clear, balanced mindset",
      icon: Lightbulb,
    },
    {
      text: "What parents should check before considering a boarding school",
      icon: CheckCircle,
    },
    {
      text: "How modern co-educational boarding schools nurture responsibility and confidence",
      icon: HeartHandshake,
    },
    {
      text: "How to view cost in terms of long-term growth rather than fees alone",
      icon: TrendingUp,
    },
    {
      text: "A simple way to match a school’s culture with your child’s temperament",
      icon: Puzzle,
    },
    {
      text: "Real examples of projects students are building in progressive environments",
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-6 md:py-10 px-6" style={{ backgroundColor: "#b90124" }}>
      
      {/* Title */}
      <p className="text-center font-[Mirador800] text-[#ffff] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">
        You will leave with a <span className="text-[#f9c603]">clear understanding </span>of what <span className="text-[#f9c603]">your child</span><br className="hidden md:block" /> truly needs, <span className="text-[#f9c603]">not just</span> what <span className="text-[#f9c603]">schools market</span>
      </p>

            <div className="h-[2px] bg-[#f9c603] rounded-full mx-auto" style={{ width: "60%" , marginTop:'-1px'}}></div>

      {/* Card Grid */}
      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        {items.map(({ text, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white px-8 py-3 md:py-10 rounded-xl shadow-md flex flex-col items-center text-center transition hover:scale-[1.02] hover:shadow-lg duration-200"
          >
            {/* Unique Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-black mb-2 md:mb-6">
              <Icon size={36} />
            </div>

            {/* Content */}
            <p className="text-gray-800 font-sans font-semibold text-lg leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <button className="bg-white font-sans font-bold text-xl py-2 md:py-4 px-8 rounded-md shadow hover:opacity-90 transition">
          Register for FREE Webinar
        </button>
      </div>
    </section>
  );
}
