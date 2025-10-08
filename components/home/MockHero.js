// components/HomePlaceholderHero.js
export default function MockHero() {
  return (
    <section
      className="w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-20"
      style={{
        backgroundImage: "url('https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp')",
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Welcome to Tula's International School
      </h2>
      <p className="text-lg md:text-2xl text-white max-w-xl">
        World-class education, sports, and holistic development for students.
      </p>
      <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-md">
        Learn More
      </button>
    </section>
  );
}
