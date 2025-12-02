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
    <section className="pb-1 md:pb-10 px-6 text-center">
      {/* Main Heading */}
      <h2 className="text-[#b90124] font-[Mirador800] text-[clamp(32px,6vw,60px)]">
        No More Confusion
      </h2>

      {/* Underline for main heading */}
      <div className="w-60 h-[4px] bg-[#e7c01d] mx-auto rounded-full"></div>

      {/* Subtext */}
      <p className="text-lg max-w-3xl mx-auto mt-6">
        This is NOT a feel-good Seminar, We Deliver FOUR HARD-HITTING, RESEARCH
        FORMATS so you can cut through the noise and instantly know{" "}
        <strong>WHAT YOUR CHILD NEEDS TO THRIVE</strong>
      </p>

      {/* Grid */}
      <div className="mt-4 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 w-full max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#b90124] text-white rounded-lg px-2 md:px-10 py-3 md:py-10"
          >
            {/* Title */}
            <p className="text-lg md:text-2xl font-sans font-bold">{item.title}</p>

            {/* Manual underline (custom width per item) */}
            <div
              className={`${item.underlineWidth} h-[3px] bg-[#e7c01d] mx-auto md:mt-2 rounded-full`}
            ></div>

            {/* Body text */}
            <p className="mt-1 md:mt-5 text-md md:text-lg font-sans font-medium md:font-semibold leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
                      <a
  href="https://us06web.zoom.us/webinar/register/WN_reHzH0eGRTW52N_wCUilAQ#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
                        <button className="w-80 bg-[#b90124] text-white font-semibold mt-5 md:mt-10 py-2 md:py-4 rounded-md hover:bg-[#a40020] transition text-xl">
            Register for FREE Webinar
          </button>
          </a>
    </section>
  );
}
