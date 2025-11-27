"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Will my child get distracted in a co-ed boarding environment?",
    a: " Research shows co-ed settings prepare students better for the real world by building essential communication and social skills in a structured, supervised setting.",
  },
  {
    q: "Is it true that only 'problem' children are sent to boarding schools?",
    a: "False. Modern boarding is for parents who seek structured independence and holistic development beyond the typical day school environment.",
  },
  {
    q: "How can I be sure the admissions process is fair and not just based on connections?",
    a: "Transparent schools prioritize a comprehensive assessment of the student's aptitude, values, and potential, making merit the only key factor.",
  },
  {
    q: "Won't my child lose their bond with the family if they live away?",
    a: "On the contrary, scheduled, quality communication often strengthens family bonds by making the time spent together more meaningful and intentional.",
  },
  {
    q: "How can I choose between CBSE, ICSE, or an International curriculum like IB?",
    a: "The decision should align with your child's learning style and your long-term university goals; the webinar provides a clear selection matrix for this.",
  },
  {
    q: "What is the single most important factor schools look for during the admission interview?",
    a: "Schools are primarily looking for the child's attitude, curiosity, and fit within the school's culture, more than just rote academic scores.",
  },
    {
    q: "Does attending this webinar mean I am obligated to apply to a specific school?",
    a: "Absolutely not. This webinar provides an unbiased, research-backed framework to help you evaluate any school choice with confidence.",
  },
];

export default function LandingFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-2 md:py-3">
      
      {/* Heading */}
      <h2 className="w-full text-center font-[Mirador800] text-[#b90124] text-[clamp(20px,6vw,48px)]">
        Frequently Asked Questions
      </h2>

      <div
        className="h-[2px] bg-[#b90124] rounded-full mx-auto my-4"
        style={{ width: "40%" }}
      ></div>

      {/* FAQ BOXES */}
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffe6ea] border border-[#b90124]/20 rounded-xl transition-all"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-2 md:py-5 text-left text-[18px] font-semibold text-[#b90124]"
            >
              <span>{item.q}</span>
              {openIndex === index ? (
                <Minus size={22} className="text-[#b90124]" />
              ) : (
                <Plus size={22} className="text-[#b90124]" />
              )}
            </button>

            {/* Answer */}
            <div
              className={`px-6 text-[16px] leading-relaxed text-gray-700 transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 pb-4 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
