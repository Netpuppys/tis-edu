import Image from "next/image";

export default function ChoosePath() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT COLUMN */}
        <div>
<p className="w-full font-[Mirador800] text-[#b90124] text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">
  Choose your Perfect Path
</p>

          <p className="text-gray-700 mb-10">
            No generic seminars, no copied playbooks. Four research-backed
            formats help every family find their best fit — so you choose what
            your child (and you) truly need.
          </p>

          <ul className="space-y-5 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-[#b90124] text-2xl">✔</span>
              <p>
                <span className="font-semibold">INTENSIVE:</span> Private focus for rapid leaps
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#b90124] text-2xl">✔</span>
              <p>
                <span className="font-semibold">COHORT:</span> Group momentum and shared accountability
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#b90124] text-2xl">✔</span>
              <p>
                <span className="font-semibold">HYBRID:</span> Designed flexibly for real, busy family life
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#b90124] text-2xl">✔</span>
              <p>
                <span className="font-semibold">DAILY TOUCH:</span> Habit-building support, every day
              </p>
            </li>
          </ul>

          <p className="text-gray-700 mb-10">
            Every path is built on proven principles: focused attention,
            peer support, adaptability, and daily practice — all proven to spark
            lasting growth in children and families.
          </p>

          <button className="bg-[#b90124] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#a0001f] transition">
            Start My Family’s Best-Fit Plan
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/mnt/data/16a33c1c-c80a-4ac1-b725-d3833ac16c5d.png"
            alt="Family illustration"
            width={550}
            height={450}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
