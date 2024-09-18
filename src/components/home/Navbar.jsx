import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  const navItems = ["Home", "Page", "Services", "Blog", "Contact"];

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            viewBox="0 0 30 40"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.8184 27.3141C18.7025 27.0592 18.5258 26.8319 18.2828 26.6213C17.2723 25.7512 15.2569 25.0805 14.0089 24.7092C12.7002 24.3212 11.3253 23.8723 9.97245 23.3402L9.96141 23.2127H9.65218C7.60358 22.3869 5.61571 21.3671 3.96468 20.0867C1.27555 17.9917 0 15.1152 0 11.7287C0 8.34226 1.57373 5.29944 4.38987 3.17667C7.36614 0.931975 10.9112 0.0285526 14.5998 0.000840282C17.3441 -0.0213296 20.0664 0.394356 22.6396 1.34766C24.909 2.19012 27.0405 3.38175 28.8406 5.01678L29.4866 5.60428V15.6361H23.2801L23.3795 10.0604C22.3745 9.05723 21.1321 8.25358 19.6578 7.64945C18.1779 7.05086 16.5379 6.75157 14.7378 6.75157C12.3082 6.79037 10.2927 7.46655 8.68586 8.7912C7.079 10.1214 6.27281 11.8285 6.27281 13.9124C6.27281 15.9964 6.98513 17.6869 8.40977 18.9007C9.8344 20.12 11.9272 21.1675 14.7047 22.0543C16.3005 22.5864 17.4159 23.1517 18.0564 23.7503C18.6914 24.3544 19.0117 25.1526 19.0117 26.1447C19.0117 26.5659 18.9454 26.9539 18.8184 27.303V27.3141Z"
              fill="#EF8100"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2313 12.6206C11.3583 12.7814 11.5294 12.9199 11.7227 13.0529C13.0314 13.9675 15.3064 14.7157 16.8304 15.2034C20.1656 16.129 23.7272 17.5479 26.3446 19.8757C28.8404 22.0927 30 24.9914 30 28.3169C30 31.914 28.5367 34.8903 25.6378 37.013C22.5897 39.2467 18.8404 40.0004 15.1242 40.0004C12.3136 40.0004 9.52502 39.5681 6.90215 38.5317C4.5388 37.595 2.3908 36.2537 0.623811 34.4025L0.0771484 33.8261V23.7277H6.32787V29.575C7.32733 30.7223 8.56974 31.6147 10.0606 32.2631C11.5571 32.9172 13.2302 33.2331 15.08 33.2442C17.6697 33.2386 19.757 32.6012 21.3418 31.3265C22.9265 30.0517 23.7217 28.3114 23.7217 26.1055C23.7217 23.8996 23.0535 22.2867 21.7228 20.9898C20.392 19.6928 18.4318 18.6453 15.8531 17.8583C14.0529 17.232 12.7884 16.6389 12.054 16.0736C11.3251 15.5138 10.9607 14.7988 10.9607 13.9231C10.9607 13.4409 11.0546 12.9975 11.2368 12.604L11.2313 12.6206Z"
              fill="#00413D"
            />
          </svg>
          <span className="text-[#00413d] font-medium">Safuan</span>
        </div>
        <div className="flex">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer ${
                  activeItem === item ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="btn">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
