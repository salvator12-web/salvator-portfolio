import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Salvator Ahishakiye Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain rounded-full border-2 border-gray-300"
          />
        </Link>

        {/* Navbar Links with Spacing */}
        <div className="ml-auto hidden lg:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About Me", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Skills", path: "/skills" },
            { name: "Contact Me", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl p-2 focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="text-gray-400 hover:text-white transition" />
          ) : (
            <Menu className="text-gray-400 hover:text-white transition" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out lg:transition-none flex flex-col lg:hidden items-center justify-center lg:justify-start lg:bg-transparent`}
        >
          {/* Close Icon Inside Menu */}
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition text-3xl lg:hidden"
            onClick={toggleMenu}
          >
            <X />
          </button>

          <ul className="flex flex-col space-y-8 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "About Me", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Contact Me", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={({ isActive }) =>
                    `text-lg block hover:text-blue-400 ${
                      isActive ? "text-blue-400 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Mode Toggle */}
        <div className="ml-4 hidden lg:block">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? (
              <Sun className="text-yellow-400 hover:text-yellow-500 transition" />
            ) : (
              <Moon className="text-gray-400 hover:text-gray-300 transition" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
