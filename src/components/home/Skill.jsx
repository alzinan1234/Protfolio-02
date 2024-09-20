import skill1 from "../../assets/Frame.svg";
import skill2 from "../../assets/Frame (1).svg";
import skill3 from "../../assets/Frame (2).svg";
import skill4 from "../../assets/Group.svg";

const Skill = () => {
  return (
    <div className="maxWidth mx-auto flex flex-wrap gap-10 justify-center items-center mb-10">
      <div className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
        <img src={skill1} alt="Graphic Design" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          40%
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] mt-4 text-center">
          Graphic Design
        </p>
      </div>

      <div className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
        <img src={skill2} alt="Web Designing" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          89%
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] mt-4 text-center">
          Web Designing
        </p>
      </div>

      <div className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
        <img src={skill3} alt="Brand Design" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          40%
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] mt-4 text-center">
          Brand Design
        </p>
      </div>

      <div className="relative w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
        <img src={skill4} alt="Web Development" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          80%
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#183a70] mt-4 text-center">
          Web Development
        </p>
      </div>
    </div>
  );
};

export default Skill;
