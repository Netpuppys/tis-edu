"use-client";

import React, { useEffect, useState, useRef } from "react";
import ranking from "../../../../public/pictures/ranking.png";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import seeactivity from "../../../../public/icons/see-all-activities.png";
import "../../../../styles/home/components/Ranking/ranking.css";
import Image from "next/image";
export default function Ranking() {
  const [isInViewport, setIsInViewport] = useState(false);
  const { isMobile } = useMobile();
  const [counters, setCounters] = useState({
    Dehradun: 1,
    Uttrakhand: 2,
    India: 4,
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
        const interval = 1000 / 9; // 100 steps for 5 seconds
        let counter = 0;
        const timer = setInterval(() => {
          if (counter <= 9) {
            setCounters({
              Dehradun: Math.floor((counter * 1) / 9),
              Uttrakhand: Math.floor((counter * 2) / 9),
              India: Math.floor((counter * 4) / 9),
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
    <div id="10">
      {!isMobile && (
        <div className="rankings">
          <div ref={countersRef} className="ranks">
            <Image className="ranking" src={ranking} alt="" />
            <Image className="ActivitySee" src={seeactivity} alt="" />

            <div className="rank1">
              {isInViewport && (
                <div className="counter-number">#{counters.Dehradun}</div>
              )}
              {!isInViewport && <div className="counter-number">#1</div>}

              <h2 className="counter-number-span">In Dehradun</h2>
              <h2 className="counter-title-rank">
                Co-Educational Boarding School
                <br /> in Dehradun by Education Today <br />
              </h2>
            </div>
            <div className="rank1">
              {isInViewport && (
                <div className="counter-number">#{counters.Uttrakhand} </div>
              )}
              {!isInViewport && <div className="counter-number">#2</div>}

              <h2 className="counter-number-span">
                In Uttrakhand
                <br />
              </h2>
              <h2 className="counter-title-rank">
                Co-Educational Boarding School
                <br /> in North India by Education
                <br /> Today
              </h2>
            </div>
            <div className="rank1">
              {isInViewport && (
                <div className="counter-number">#{counters.Dehradun}</div>
              )}
              {!isInViewport && <div className="counter-number">#1</div>}

              <h2 className="counter-number-span">
                In North India
                <br />
              </h2>
              <h2 className="counter-title-rank">
                Co-Educational Boarding School
                <br /> in North India by Outlook
                <br />
              </h2>
            </div>
            <div className="rank1">
              {isInViewport && (
                <div className="counter-number">#{counters.India}</div>
              )}
              {!isInViewport && <div className="counter-number">#4</div>}

              <h2 className="counter-number-span">
                In India
                <br />
              </h2>
              <h2 className="counter-title-rank">
                Co-Educational Boarding School
                <br /> in India by Education Today
                <br />
              </h2>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="rankings">
          <div ref={countersRef} className="ranks">
            <Image className="ranking" src={ranking} alt="" />
            <div className="rank-mobile">
              <div className="rank1">
                {isInViewport && (
                  <div className="counter-number">#{counters.Dehradun}</div>
                )}
                {!isInViewport && <div className="counter-number">#1</div>}

                <h2 className="counter-number-span">In Dehradun</h2>
                <h2 className="counter-title-rank">
                  Co-Educational Boarding School in Dehradun by Education Today
                </h2>
              </div>
              <div className="rank1">
                {isInViewport && (
                  <div className="counter-number">#{counters.Uttrakhand} </div>
                )}
                {!isInViewport && <div className="counter-number">#2</div>}

                <h2 className="counter-number-span">
                  In Uttrakhand
                  <br />
                </h2>
                <h2 className="counter-title-rank">
                  Co-Educational Boarding School in North India by Education
                  Today
                </h2>
              </div>
              <div className="rank1">
                {isInViewport && (
                  <div className="counter-number">#{counters.Dehradun}</div>
                )}
                {!isInViewport && <div className="counter-number">#1</div>}

                <h2 className="counter-number-span">
                  In North India
                  <br />
                </h2>
                <h2 className="counter-title-rank">
                  Co-Educational Boarding School in North India by Outlook
                </h2>
              </div>
              <div className="rank1">
                {isInViewport && (
                  <div className="counter-number">#{counters.India}</div>
                )}
                {!isInViewport && <div className="counter-number">#4</div>}

                <h2 className="counter-number-span">
                  In India
                  <br />
                </h2>
                <h2 className="counter-title-rank">
                  Co-Educational Boarding School in India by Education Today
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
