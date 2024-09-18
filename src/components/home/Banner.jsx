import image from "../../assets/image_here.png";
import bgImage from "../../assets/background.png";

const Banner = () => {
  return (
    <>
      <div
        className="w-[1075px] h-auto bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex justify-center items-center">
          <img className="w-[845px] h-[880px]" src={image} alt="Banner Image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
