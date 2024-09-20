import SectionTitle from "./SectionTitle";
import svg from "../../assets/image.svg";

const Feedback = () => {
  return (
    <>
      <div className="maxWidth mx-auto mt-18 px-4">
        <SectionTitle align={"text-center"} />

        {/* Divider lines */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mb-10 mt-10">
          <div className="w-full sm:w-[570px] h-[7px] bg-orange-700 rounded"></div>
          <div className="w-full sm:w-[570px] h-[7px] bg-orange-700 rounded"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {/* Review 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <img
                className="w-[74px] h-[74px] rounded-full"
                src={svg}
                alt="Client"
              />
              <p className="text-xl font-semibold text-gray-800">
                Michale Doie
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <img
                className="w-[74px] h-[74px] rounded-full"
                src={svg}
                alt="Client"
              />
              <p className="text-xl font-semibold text-gray-800">Adam Smith</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
