import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CustomButton from "../UI/CustomButton";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top < -40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-primaryC font-bold" // Active link styles
      : "text-gray-700 hover:text-primaryC"; // Inactive link styles

  return (
    <header
      className={`bg-transparent h-[72px] transition-all duration-300 ease-in-out sticky top-0 z-50 ${
        window.location.pathname === "/" && !isScrolled && !isMenuOpen
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="text-[24px] md:text-3xl font-sans font-bold custom-text-border text-primaryC">
          Quick Token
        </div>

        <nav className="hidden md:flex space-x-8">
          <NavLink to="/reception" className={getLinkClass("/reception")}>
            Reception
          </NavLink>
          <NavLink to="/track-token" className={getLinkClass("/track-token")}>
            Track Your Token
          </NavLink>
          <NavLink to="/docs" className={getLinkClass("/docs")}>
            Docs
          </NavLink>
        </nav>

        <div className="flex items-center gap-[15px]">
          <CustomButton
            link={"/login"}
            text={"LOGIN"}
            className={"md:scale-100 scale-75"}
          />

          <button
            className="md:hidden text-[24px] text-gray-700 focus:outline-none focus:text-[#C41F3E]"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <div className="text-2xl font-bold text-primaryC">Quick Token</div>
          <button
            className="text-gray-700 text-[24px] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <RxCross2 />
          </button>
        </div>
        <nav className="mt-8 space-y-4 text-start px-[20px]">
          <NavLink
            to="/reception"
            className={`${getLinkClass(
              "/reception"
            )} border-b-2 text-xl block`}
            onClick={toggleMenu}
          >
            Reception
          </NavLink>
          <NavLink
            to="/track-token"
            className={`${getLinkClass(
              "/track-token"
            )} border-b-2 text-xl block`}
            onClick={toggleMenu}
          >
            Track Your Token
          </NavLink>
          <NavLink
            to="/docs"
            className={`${getLinkClass(
              "/docs"
            )} border-b-2 text-xl block`}
            onClick={toggleMenu}
          >
            Docs
          </NavLink>
  
        </nav>
      </div>
    </header>
  );
};

export default Header;
