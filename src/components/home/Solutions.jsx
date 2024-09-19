import image1 from "./../../assets/image_here (1).png";
import image2 from "./../../assets/image_here (2).png";
import image3 from "./../../assets/image 2 (5).jpg";

const Solutions = () => {
  return (
    <>
      <div className="flex maxWidth mx-auto gap-10 justify-center items-center">
        <div className="flex gap-7">
          <div className="w-[370px] h-[480px]">
            <img className="w-full h-full" src={image1} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[170px] h-[225px]">
              <img className="h-full w-full" src={image2} alt="" />
            </div>
            <div className="w-[170px] h-[225px]">
              <img className="h-full w-full" src={image3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="primary font-semibold mb-6">About Me</h2>
          <h1 className="secondary text-4xl font-semibold mb-6">
            I Enjoy Solving Problems <br /> With Scalable <br /> Solutions
          </h1>
          <p>
            Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
            aeci velit, sed quia non <br />
            numquam eius modi tempora incidunt lao magnam aliquam quaerat
            voluptatem reprehenderit <br />
            <span className="mt-10">
              Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
              reprehenderit non numquam eius.
            </span>
          </p>
          <button className="btn mt-10">Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Solutions;
