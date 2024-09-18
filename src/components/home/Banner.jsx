import image from "../../assets/image_here.png";
import bgImage from "../../assets/background.png";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="relative overflow-hidden flex w-[100%] justify-center items-center bg-[#00413D] md:h-[80vh] px-1 md:px-0">
          <div className="flex gap-5 md:flex-row flex-col h-auto  mx-auto justify-between items-center relative overflow-hidden">
            <div className=" md:w-[60%]  relative">
              <div className=" ">
                <h1
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                  className="text-[50px] md:text-[100px] md:leading-[110px] flex
                  relative md:w-[1100px] z-50 font-bold text-white
                  heading-baner-text "
                >
                  {" "}
                  {/* Hello! <br /> My Name Is Al Zinan */}
                </h1>

                {/* <p className="text-[20px]  banner-paragraph-text">
                  I’am freelance{" "}
                  <span className="font-extrabold text-[#fff]">
                    Front-End Web Developer
                  </span>{" "}
                  based in Indonesia who loves to craft attractive design
                  experiences for the web.
                </p>
                <button className="btn mt-5">Contact Me</button> */}
              </div>
            </div>
            <div className="md:w-[40%] md:h-[80vh] flex justify-end  bg-white ">
              <img
                className=" w-[100%] h-[100%] "
                src={image}
                alt="Banner Image"
              />
            </div>
          </div>

          <div className="  mxWidth absolute  h-[80vh] ">
            <div className="flex flex-col  justify-center h-[100%] ">
              <h1
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="text-[50px] md:text-[90px] md:leading-[110px] flex
                  relative md:w-[1250px] z-50 font-bold text-white
                  heading-baner-text "
              >
                {" "}
                Hello! <br /> My Name Is Al Zinan
              </h1>

              <p className="text-[20px]  banner-paragraph-text">
                I’am freelance{" "}
                <span className="font-extrabold text-[#fff]">
                  Front-End Web Developer
                </span>{" "}
                based in Indonesia who loves to craft <br /> attractive design
                experiences for the web.
              </p>
              <button className="btn mt-5">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
