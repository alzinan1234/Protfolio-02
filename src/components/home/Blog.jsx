import { BiArrowFromLeft } from "react-icons/bi";
import project1 from "../../assets/photo-1488190211105-8b0e65b80b4e.avif";
import project2 from "../../assets/photo-34fad45aed93.avif";
import project3 from "../../assets/photo-15.avif";
import SectionTitle from "./SectionTitle";

const Blog = () => {
  return (
    <div
      id="Blog"
      className="max-w-7xl mx-auto mt-8 mb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center py-10">
        {/* Project Card 1 */}
        <div className="shadow-2xl p-5">
          <div className="w-full h-[270px]">
            <img
              className="w-full h-full object-cover"
              src={project1}
              alt="Project 1"
            />
          </div>
          <div className="mt-4">
            <p className="primary p-title-2 mb-2">Analytics, UI-Ux</p>
            <h1 className="h1-title1 mb-2">
              Branding & Digital Video <br /> Campaign For George’s Cafe
            </h1>
            <p className="mb-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="flex items-center gap-5">
              <a className="text-blue-500 hover:underline">Read More</a>
              <span className="flex justify-center items-center text-orange-700">
                <BiArrowFromLeft />
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="shadow-2xl p-5">
          <div className="w-full h-[270px]">
            <img
              className="w-full h-full object-cover"
              src={project2}
              alt="Project 2"
            />
          </div>
          <div className="mt-4">
            <p className="primary p-title-2 mb-2">Analytics, UI-Ux</p>
            <h1 className="h1-title1 mb-2">
              Branding & Digital Video <br /> Campaign For George’s Cafe
            </h1>
            <p className="mb-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="flex items-center gap-5">
              <a className="text-blue-500 hover:underline">Read More</a>
              <span className="flex justify-center items-center text-orange-700">
                <BiArrowFromLeft />
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="shadow-2xl p-5">
          <div className="w-full h-[270px]">
            <img
              className="w-full h-full object-cover"
              src={project3}
              alt="Project 3"
            />
          </div>
          <div className="mt-4">
            <p className="primary p-title-2 mb-2">Analytics, UI-Ux</p>
            <h1 className="h1-title1 mb-2">
              Branding & Digital Video <br /> Campaign For George’s Cafe
            </h1>
            <p className="mb-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="flex items-center gap-5">
              <a className="text-blue-500 hover:underline">Read More</a>
              <span className="flex justify-center items-center text-orange-700">
                <BiArrowFromLeft />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Blog;
