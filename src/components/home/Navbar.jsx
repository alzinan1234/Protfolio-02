import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo5 from "../../assets/logo-z.png"; // Importing a hamburger menu icon

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  const navItems = ["Home", "Page", "Services", "Blog", "Contact"];

  return (
    <nav className="maxWidth mx-auto py-4">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <img src={logo5} alt="Logo" className="w-10 h-10" />
          <span className="text-[#00413d] font-medium">Zinan</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <AiOutlineMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <button className="btn">Download CV</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveItem(item);
                  setIsMenuOpen(false); // Close menu on selection
                }}
                className={`cursor-pointer ${
                  activeItem === item ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </li>
            ))}
            <button className="btn mt-4">Download CV</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
