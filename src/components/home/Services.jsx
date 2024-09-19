import logo1 from "../../assets/1.svg";
import logo2 from "../../assets/web-design 1 (Traced) (1).svg";
import logo3 from "../../assets/booking 1 (Traced).svg";

import SectionTitle from "./SectionTitle";
import { GoArrowRight } from "react-icons/go";

const services = [
  {
    logo: logo1,
    title: "Ui/Ux Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    logo: logo2,
    title: "Web Development",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    logo: logo3,
    title: "Booking System",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

const Services = () => {
  return (
    <div className="maxWidth mt-10 mb-10 mx-auto">
      <SectionTitle align="text-center" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-center p-6 rounded-lg shadow-2xl shadow-green-600 hover:shadow-2xl  duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="w-[64px] h-[64px] mx-auto">
              <img
                src={service.logo}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
            <p className="text-gray-500 mt-2">{service.description}</p>
            <p>
              <GoArrowRight className="primary h-6 w-6" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
