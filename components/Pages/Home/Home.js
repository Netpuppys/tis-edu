// app/components/Pages/Home/HomePage.js
import React from "react";
import HomeLayout from "../../home/HomeLayout";

export default function HomePage() {
  return (
    <div>
      {/* ============================= */}
      {/* SEO content for Google (hidden visually) */}
      {/* ============================= */}
      <section className="sr-only">
        <h1>Welcome to The International School (TIS)</h1>
        <p>
          The International School (TIS) is one of India’s leading institutions
          for academic excellence, innovation, and holistic development. With a
          strong focus on both academics and co-curricular activities, TIS
          empowers students to achieve success in a rapidly changing world. Our
          campus offers modern facilities, experienced faculty, and a nurturing
          environment that supports every learner's journey.
        </p>
        <p>
          As a top boarding and day school, we combine traditional values with
          modern learning practices. From sports and cultural activities to
          advanced technology integration, TIS ensures that students grow into
          confident, responsible, and globally-minded individuals. Our
          achievements in rankings and awards reflect our dedication to shaping
          future leaders.
        </p>
        <p>
          Explore our programs, admission process, and student life to see why
          TIS is the preferred choice for parents across India. Together, we
          build the foundation for lifelong success.
        </p>

        {/* Add more SEO text blocks as needed */}
        <h2>About Tula's International School</h2>
        <p>
          TIS offers a world-class CBSE curriculum with a holistic approach to
          education. Our boarding facilities provide a safe and nurturing
          environment for students from across India and abroad.
        </p>
        <h2>Academic Excellence</h2>
        <p>
          Our faculty consists of highly qualified and experienced teachers who
          ensure that every student reaches their academic potential while
          developing critical thinking and leadership skills.
        </p>
        <h2>Co-Curricular & Sports</h2>
        <p>
          TIS emphasizes extracurricular activities, including sports, arts,
          and cultural programs, to promote overall student development and
          global awareness.
        </p>
      </section>

      {/* ============================= */}
      {/* Interactive content visible to users */}
      {/* ============================= */}
      <HomeLayout />
    </div>
  );
}
