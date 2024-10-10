import image from "../../assets/zinan.png";
import image2 from "./../../assets/image_here (2).png";
import image3 from "./../../assets/image 2 (5).jpg";

const Solutions = () => {
  return (
    <div id="About" className="py-10">
      <div className="flex flex-col lg:flex-row maxWidth mx-auto gap-10 justify-center items-center p-4 lg:p-0 ">
        <div className="flex gap-7 flex-col lg:flex-row items-center">
          <div className="w-[300px] sm:w-[370px] h-[400px] sm:h-[480px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Image 1"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[140px] sm:w-[170px] h-[200px] sm:h-[225px]">
              <img
                className="h-full w-full object-cover"
                src={image2}
                alt="Image 2"
              />
            </div>
            <div className="w-[140px] sm:w-[170px] h-[200px] sm:h-[225px]">
              <img
                className="h-full w-full object-cover"
                src={image3}
                alt="Image 3"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="primary font-semibold mb-4 sm:mb-6">About Me</h2>
          <button className="secondary   text-2xl  rounded  font-semibold mb-4">
            Education
          </button>
          <p className="text-sm sm:text-base mb-2">
            Im a CSE student with a 4-year Diploma in Computer Science and
            Technology. As class CR, I lead with creativity and innovation,
            focusing on pursuing a BSC in Software Engineering and modern
            technologies.
          </p>
          <button className="secondary  text-2xl  rounded  font-semibold mb-4">
            Experience
          </button>
          <p className="text-sm sm:text-base">
            <ol className="list-disc">
              <li>
                With 1.5 years of hands-on experience as a React.js developer, I
                specialize in building dynamic and responsive web applications.
                I have been dedicated to learning various programming languages
                and modern technologies.
              </li>
              <li>
                complemented by a 3-month internship at Creative IT Institute,
                where I honed my skills in front-end development and modern
                technologies.
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
