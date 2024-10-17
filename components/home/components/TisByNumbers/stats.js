"use-client";

import React, { useState, useEffect, useRef } from "react";
import "../../../../styles/home/components/tisByNumbers/TisByNumbers.css";
function Stats() {
  const [isInViewport, setIsInViewport] = useState(false);
  const [counters, setCounters] = useState({
    collegeAcceptance: 0,
    yearsOfEducation: 0,
    stemProgram: 0,
    extracurricularActivities: 0,
  });

  const countersRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInViewport(true);
      } else {
        setIsInViewport(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the component is visible
    });
    observer.observe(countersRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInViewport) {
      const animateCounters = () => {
        const interval = 2000 / 100; // 100 steps for 2 seconds
        let counter = 0;
        const timer = setInterval(() => {
          if (counter <= 100) {
            setCounters({
              collegeAcceptance: Math.floor(counter),
              yearsOfEducation: Math.floor((counter * 20) / 100),
              stemProgram: Math.floor((counter * 60) / 100),
              extracurricularActivities: Math.floor((counter * 15) / 100),
            });
            counter++;
          } else {
            clearInterval(timer);
          }
        }, interval);
      };
      animateCounters();
    }
  }, [isInViewport]);

  return (
    <div ref={countersRef} className="stats">
      <div className="college">
        {isInViewport && (
          <h2 className="counter">{counters.collegeAcceptance}%</h2>
        )}
        {!isInViewport && <h2 className="counter">100%</h2>}
        <h2 className="title-counter">College Acceptance</h2>
      </div>
      <div className="line-stats"></div>
      <div className="college">
        {isInViewport && (
          <h2 className="counter">{counters.yearsOfEducation}</h2>
        )}
        {!isInViewport && <h2 className="counter">20</h2>}
        <h2 className="title-counter">Years of Educational Excellence</h2>
      </div>
      <div className="line-stats"></div>
      <div className="college">
        {isInViewport && <h2 className="counter">{counters.stemProgram}%</h2>}
        {!isInViewport && <h2 className="counter">60%</h2>}
        <h2 className="title-counter">STEM Program Participation</h2>
      </div>
      <div className="line-stats"></div>
      <div className="college">
        {isInViewport && (
          <h2 className="counter">{counters.extracurricularActivities}+</h2>
        )}
        {!isInViewport && <h2 className="counter">15+</h2>}
        <h2 className="title-counter">Extracurricular Activities</h2>
      </div>
    </div>
  );
}

export default Stats;
