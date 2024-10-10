import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo5 from "../../assets/logo-z.png"; // Importing a logo

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  const navItems = [
    { name: "Home", to: "Banner" },

    { name: "Services", to: "Service" },
    { name: "Skills", to: "Skill" },
    { name: "Project", to: "MyWork" },

    {
      name: "About",
      to: "About",
    },
    { name: "Blog", to: "Blog" },
    { name: "Contact", to: "Contact" },
  ];

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
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500} // Smooth scroll animation
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMenuOpen(false); // Close menu after selection
                  }}
                  className={`cursor-pointer ${
                    activeItem === item.name
                      ? "text-orange-500"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
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
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500} // Smooth scroll animation for mobile as well
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMenuOpen(false); // Close menu after selection
                  }}
                  className={`cursor-pointer ${
                    activeItem === item.name
                      ? "text-orange-500"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
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
