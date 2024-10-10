import image from "../../assets/zinan.png";

const Banner = () => {
  return (
    <div
      id="Banner"
      className="bg-[#00413D] md:h-[80vh] relative overflow-hidden flex justify-center items-center px-4 py-10"
    >
      <div className="flex flex-col md:flex-row gap-8 h-auto w-full max-w-[1200px] mx-auto items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-[60%] text-center md:text-left relative z-50">
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className="text-[2.5rem] md:text-[5.5rem] font-extrabold leading-tight md:leading-[1.1] text-white"
          >
            Hello! <br /> My Name Is Al Zinan
          </h1>
          <p className="text-[1rem] md:text-[1.25rem] mt-4 text-white">
            I’m a freelance{" "}
            <span className="font-extrabold">Front-End Web Developer</span>
            based in Indonesia who loves to craft attractive design experiences
            for the web.
          </p>
          <button className="mt-6 btn">Contact Me</button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[40%] h-[300px] md:h-[80vh] flex justify-center md:justify-end">
          <img
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src={image}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
