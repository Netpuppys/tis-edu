"use client";
import { HelpCircle } from "lucide-react";

export default function IsThisYou() {
  const items = [
    "Exceptional at quick thinking but lacks the patience for long-term planning or sustained effort.",
    "A master of digital research but cannot initiate a face-to-face conversation with a stranger.",
    "Highly creative and imaginative but incapable of handling minor criticism or setbacks.",
    "Knows complex political theories but cannot manage personal finances or understand a basic contract.",
    "Excels at following rules and structure but freezes when asked to lead or invent a new solution.",
    "Can efficiently multitask but struggles with single-task deep focus and concentration.",
    "Very articulate in text messages but awkward and poor at maintaining eye contact during averbal discussion.",
    "Great at discussing global issues but fails to take responsibility for their own immediate tasks or duties.",
  ];

  return (
    <section className="w-full py-6 md:py-16 px-6" style={{ backgroundColor: "#b90124" , marginTop:'-35px'}}>
        <p className="text-center font-[Mirador800] text-[#ffff] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">If you <span className="text-[#f9c603]">Say Yes </span>to Any, This <span className="text-[#f9c603]">Webinar</span> <br/> is Specially built for you</p>
        <div className="h-[2px] bg-[#f9c603] rounded-full mx-auto" style={{ width: "40%" , marginTop:'-1px'}}></div>
        <p className="text-center mt-2 font-[Mirador800] text-[#ffff] text-[clamp(14px,4vw,60px)] md:text-[clamp(18px,2vw,48px)]">Is This Your Child ?</p>

      {/* Item Grid */}
      <div className="mt-5 md:mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
{items.map((text, index) => (
  <div
    key={index}
    className="bg-white flex gap-6 p-2 md:p-6 rounded-md shadow-md items-start"
  >
    <span className="w-10 h-10 min-w-[40px] min-h-[40px] flex-shrink-0 bg-[#b90124] flex items-center justify-center rounded-full text-white">
      <HelpCircle size={22} />
    </span>

<p className="text-gray-800 text-lg leading-snug md:leading-relaxed">{text}</p>
  </div>
))}

      </div>


      {/* CTA Button */}
      <div className="text-center mt-8">
        <a
  href="https://us06web.zoom.us/webinar/register/WN_reHzH0eGRTW52N_wCUilAQ#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
        <button className="bg-white font-sans font-bold text-xl py-2 md:py-4 px-8 rounded-md shadow hover:opacity-90 transition">
          Register for FREE Webinar
        </button>
        </a>
      </div>
    </section>
  );
}
