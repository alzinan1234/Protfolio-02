import image1 from "./../../assets/image_here (1).png";
import image2 from "./../../assets/image_here (2).png";
import image3 from "./../../assets/image 2 (5).jpg";

const Solutions = () => {
  return (
    <div className="flex flex-col lg:flex-row maxWidth mx-auto gap-10 justify-center items-center p-4 lg:p-0 mb-10">
      <div className="flex gap-7 flex-col lg:flex-row items-center">
        <div className="w-[300px] sm:w-[370px] h-[400px] sm:h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={image1}
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
        <h1 className="secondary text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
          I Enjoy Solving Problems <br /> With Scalable <br /> Solutions
        </h1>
        <p className="text-sm sm:text-base">
          Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci
          velit, sed quia non <br />
          numquam eius modi tempora incidunt lao magnam aliquam quaerat
          voluptatem reprehenderit <br />
          <span className="block mt-4">
            Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
            reprehenderit non numquam eius.
          </span>
        </p>
        <button className="btn mt-6 sm:mt-10">Click Me</button>
      </div>
    </div>
  );
};

export default Solutions;
