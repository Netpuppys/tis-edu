"use client";

export default function WebinarBlueprint() {
  const data = [
    {
      title: "CLARITY MAP",
      underlineWidth: "w-28",
      text: (
        <>
          <strong>Stop Wasting Time</strong> on outdated debates and instantly
          identify the curriculum best suited for your child’s unique brain.
        </>
      ),
    },
    {
      title: "FUTURE PROOF",
      underlineWidth: "w-32",
      text: (
        <>
          <strong>Build a Capable Adult</strong>, not just a student. Learn how to
          foster genuine confidence and adaptability in your teenager.
        </>
      ),
    },
    {
      title: "SAFETY CHECK",
      underlineWidth: "w-28",
      text: (
        <>
          <strong>Rest Easy</strong> knowing you have a checklist to spot warning
          signs and ensure their emotional and psychological well-being.
        </>
      ),
    },
    {
      title: "COST vs VALUE",
      underlineWidth: "w-36",
      text: (
        <>
          <strong>Make The Smart Financial Move</strong> with data, not emotion.
          Know precisely when a high-cost school is worth it (and when it isn’t).
        </>
      ),
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      {/* Main Heading */}
      <h2 className="text-[#b90124] font-[Mirador800] text-[clamp(22px,6vw,60px)]">
        No More Confusion
      </h2>

      {/* Underline for main heading */}
      <div className="w-40 h-[6px] bg-[#e7c01d] mx-auto mt-2 rounded-full"></div>

      {/* Subtext */}
      <p className="text-lg max-w-3xl mx-auto mt-6">
        This is NOT a feel-good Seminar, We Deliver FOUR HARD-HITTING, RESEARCH
        FORMATS so you can cut through the noise and instantly know{" "}
        <strong>WHAT YOUR CHILD NEEDS TO THRIVE</strong>
      </p>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#b90124] text-white rounded-lg px-10 py-10"
          >
            {/* Title */}
            <p className="text-2xl font-bold">{item.title}</p>

            {/* Manual underline (custom width per item) */}
            <div
              className={`${item.underlineWidth} h-[6px] bg-[#e7c01d] mx-auto mt-2 rounded-full`}
            ></div>

            {/* Body text */}
            <p className="mt-5 text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
