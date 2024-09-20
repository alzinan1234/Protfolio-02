import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skill1 from "../../assets/Frame.svg";
import skill2 from "../../assets/Frame (1).svg";
import skill3 from "../../assets/Frame (2).svg";
import skill4 from "../../assets/Group.svg";

const Skill = () => {
  const skills = [
    { img: skill1, percentage: 20, label: "Graphic Design" },
    { img: skill2, percentage: 60, label: "Web Designing" },
    { img: skill3, percentage: 80, label: "Brand Design" },
    { img: skill4, percentage: 90, label: "Web Development" },
  ];

  return (
    <div className="maxWidth mx-auto flex flex-wrap gap-10 justify-center items-center mb-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center"
        >
          <div className="w-[150px] h-[150px]">
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
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
