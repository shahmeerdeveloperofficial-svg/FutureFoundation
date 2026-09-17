import React, { useState, useEffect, useRef } from "react";
import "./StatsGlance.css";

const statsData = [
  {
    target: 1998,
    suffix: "",
    label: "Year Established with Visionary Leadership",
  },
  {
    target: 70,
    suffix: "+",
    label: "Campuses Across Pakistan",
  },
  {
    target: 2,
    suffix: "x",
    label: "Worldwide 1st Positions in Federal Board",
  },
  {
    target: 100,
    suffix: "+",
    label: "Certified Master Teachers & Trainers",
  },
  {
    target: 8,
    suffix: "+",
    label: "Core Curriculum & Holistic Pillars",
  },
  {
    target: 10,
    suffix: "k+",
    label: "Graduates & Students Empowered",
  },
];

export const StatsGlanceSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // ms
    const steps = 40;
    const interval = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        statsData.map((item) => {
          return Math.round(item.target * eased);
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
        setCounts(statsData.map((item) => item.target));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section className="iskl_stats_section" ref={sectionRef}>
      <div className="container">
        <div className="iskl_stats_header">
          <span className="iskl_section_tag" style={{ color: "var(--secondary-color)" }}>
            By The Numbers
          </span>
          <h2 className="iskl_stats_heading">
            Future Foundation School <span>at a Glance</span>
          </h2>
          <p className="iskl_section_subtitle" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Over two and a half decades of unwavering commitment to educational distinction and character elevation.
          </p>
        </div>

        <div className="iskl_stats_grid">
          {statsData.map((stat, index) => (
            <div key={index} className="iskl_stat_card">
              <div className="iskl_stat_number">
                {counts[index]}
                <span>{stat.suffix}</span>
              </div>
              <div className="iskl_stat_label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

