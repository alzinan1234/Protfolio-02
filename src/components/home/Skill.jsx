import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skill1 from "../../assets/Frame.svg";
import skill2 from "../../assets/Frame (1).svg";
import skill3 from "../../assets/Frame (2).svg";
import skill4 from "../../assets/Group.svg";

const Skill = () => {
  const skills = [
    { img: skill1, percentage: 20, label: "Graphic Design" },
    { img: skill2, percentage: 70, label: "Web Designing" },
    { img: skill3, percentage: 80, label: "Brand Design" },
    { img: skill4, percentage: 90, label: "Web Development" },
  ];

  const [progress, setProgress] = useState(
    skills.map(() => 0) // Initialize all progress values to 0
  );

  useEffect(() => {
    // This effect animates the progress for each skill
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress.map((value, index) =>
          value < skills[index].percentage ? value + 1 : value
        )
      );
    }, 20); // Adjust the interval speed for smoother/faster animation

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <div className="maxWidth mx-auto flex flex-wrap gap-10 justify-center items-center mb-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center"
        >
          <div className="w-[150px] h-[150px]">
            <CircularProgressbar
              value={progress[index]} // Use animated progress value
              text={`${progress[index]}%`} // Display animated progress value
              styles={buildStyles({
                pathColor: "#183a70",
                textColor: "#183a70",
                trailColor: "#e0e0e0",
                textSize: "18px",
              })}
            />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] mt-4 text-center">
            {skill.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
