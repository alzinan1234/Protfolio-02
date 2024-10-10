import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skill1 from "../../assets/Frame.svg";
import skill2 from "../../assets/Frame (1).svg";
import skill3 from "../../assets/Frame (2).svg";
import skill4 from "../../assets/Group.svg";

const Skill = () => {
  const skills = [
    { img: skill1, percentage: 98, label: "HTML" },
    { img: skill2, percentage: 96, label: "CSS" },
    { img: skill3, percentage: 90, label: "BOOTSTRAP" },
    { img: skill4, percentage: 95, label: "TAILWIND CSS" },
    { img: skill1, percentage: 98, label: "JavaScript" },
    { img: skill2, percentage: 92, label: "React" },
    { img: skill3, percentage: 80, label: "RESTful API" },
    { img: skill3, percentage: 85, label: "NextJs" },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null); // Reference to the skill section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger progress animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress.map((value, index) =>
            value < skills[index].percentage ? value + 1 : value
          )
        );
      }, 20); // Adjust animation speed

      return () => clearInterval(interval);
    }
  }, [isVisible, skills]);

  return (
    <div
      id="Skill"
      ref={skillRef}
      className="max-w-screen-lg mx-auto flex flex-wrap gap-10 justify-center items-center mb-10"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative w-[150px] sm:w-[180px] md:w-[220px] flex flex-col items-center"
        >
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]">
            <CircularProgressbar
              value={progress[index]}
              text={`${progress[index]}%`}
              styles={buildStyles({
                pathColor: "#183a70",
                textColor: "#183a70",
                trailColor: "#e0e0e0",
                textSize: "18px",
              })}
            />
          </div>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] text-center font-semibold">
            {skill.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
