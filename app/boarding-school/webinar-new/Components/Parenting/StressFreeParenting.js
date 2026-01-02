export default function StressFreeParenting() {
  return (
    <>
          <img
  src="/LandingPage/bannernew.jpg"
  alt="banner"
  class="w-full h-auto"
/>

    <section className="w-full py-14 md:py-24" style={{ backgroundColor: "#b90124" , marginTop:'-50px' }}>
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

<p className="w-full text-center font-[Mirador800] text-white text-[clamp(14px,6vw,60px)] md:text-[clamp(18px,3vw,48px)]">
  <span className="border-b-4 border-[#e7c01d]">STOP</span> Failing Your Child.
</p>


        <p className="text-2xl mb-6 opacity-90">
          Register now and take the ONLY FIRST STEP that actually matters.
        </p>

        <p className="text-lg mb-12 opacity-90">
         If you want a decision-making process that feels steady and well-informed, register for the webinar. The session aims to give you dependable clarity and a framework you can apply right away.
        </p>

<a
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  target="_blank"
  rel="noopener noreferrer"
>
        <button className="bg-white text-black text-xl font-medium px-10 py-4 rounded-md shadow hover:bg-gray-100 transition">
          Register Now
        </button>
        </a>

      </div>
    </section>
        </>
  );
}
