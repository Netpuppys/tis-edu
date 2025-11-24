"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Isn't co-ed boarding school a distraction that hurts academic focus?",
    a: "No, Tulas International's structure utilizes co-ed synergy to build essential real-world social skills and emotional intelligence, without compromising our rigorous academic focus.",
  },
  {
    q: "How can a single school truly prepare my child for both CBSE/ICSE and global universities?",
    a: "We integrate global exposure into a robust curriculum framework, ensuring your child is competent in local systems while being a strong candidate for international programs.",
  },
  {
    q: "Are boarding schools too expensive and only for problem children?",
    a: "Absolutely not — Tulas International is an investment in structured independence, offering unmatched value through holistic development, not just high fees.",
  },
  {
    q: "My child struggles with co-curriculars (or academics). Will they just fall through the cracks in a large boarding school?",
    a: "Never — our unique mentorship program ensures personalized, daily 'touch points' to build strong habits and address every student's specific academic or skill gap.",
  },
  {
    q: "How can I be sure my child will be truly safe and emotionally supported away from home?",
    a: "Our specialized residential staff and proven student-to-mentor ratio guarantee round-the-clock emotional security and a truly nurturing, family-like atmosphere.",
  },
  {
    q: "Will this webinar just give me generic advice I already know?",
    a: "No — this is a research-backed blueprint designed to debunk myths surrounding Tulas International and provide a clear, actionable selection checklist.",
  },
];

export default function LandingFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
<p className="w-full text-center font-[Mirador800] text-[#b90124] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">
  Frequently Asked Questions
</p>
        <div className="h-[2px] bg-[#b90124] rounded-full mx-auto" style={{ width: "40%" , marginBottom:'20px'}}></div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-[#b90124] rounded-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-[18px] font-medium"
            >
              <span>Q: {item.q}</span>
              {openIndex === index ? (
                <Minus size={20} />
              ) : (
                <Plus size={20} />
              )}
            </button>

            <div
              className={`px-6 pb-4 text-[16px] leading-relaxed text-gray-700 transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p>A: {item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}
