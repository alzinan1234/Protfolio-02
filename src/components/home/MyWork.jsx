import image2 from "../../assets/Screenshot_2.png";
import image3 from "../../assets/Screenshot_6.png";
import image4 from "../../assets/Screenshot_1.png";
import image5 from "../../assets/Screenshot_10.png";

const MyWork = () => {
  return (
    <>
      <div id="MyWork" className="max-w-screen-xl mx-auto mb-20 px-4">
        <div className="flex flex-wrap gap-7 justify-center">
          {/* First Image */}
          <div className="w-full sm:w-[570px] h-[520px] mt-10">
            <img
              className="w-full h-full object-cover"
              src={image2}
              alt="Motion Graphics 1"
            />
            <a
              href="https://movie-master-02.netlify.app/movie/1064028"
              className="text-xl sm:text-2xl bg-[#00413D] h-[50px] text-center text-white flex items-center justify-center underline"
            >
              MOVIE WEBSITE
            </a>
          </div>
          {/* Second Image */}
          <div className="w-full sm:w-[570px] h-[520px] mt-10 mb-7">
            <img
              className="w-full h-full object-cover"
              src={image4}
              alt="Motion Graphics 4"
            />
            <a
              href="https://restaurant-boos.netlify.app/"
              className="text-xl sm:text-2xl bg-[#00413D] h-[50px] text-center text-white flex items-center justify-center underline"
            >
              RESTAURANT WEBSITE
            </a>
          </div>
          ;{/* Third Image */}
          <div className="w-full sm:w-[570px] h-[520px] mt-10">
            <img
              className="w-full h-full object-cover"
              src={image5}
              alt="Motion Graphics 3"
            />
            <a
              href="https://your-nike-world.netlify.app/"
              className="text-xl sm:text-2xl bg-[#00413D] h-[50px] text-center text-white flex items-center justify-center underline"
            >
              NIKE WEBSITE
            </a>
          </div>
          {/* Fourth Image */}
          <div className="w-full sm:w-[570px] h-[520px] mt-10">
            <img
              className="w-full h-full object-cover"
              src={image3}
              alt="Motion Graphics 2"
            />
            <a
              href="https://education-02.vercel.app/"
              className="text-xl sm:text-2xl bg-[#00413D] h-[50px] text-center text-white flex items-center justify-center underline"
            >
              EDUCATION WEBSITE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWork;
