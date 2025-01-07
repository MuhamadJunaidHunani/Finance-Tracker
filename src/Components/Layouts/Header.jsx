import React, { useState } from "react";
import { IoIosUnlock } from "react-icons/io";
import CustomButton from "../UI/CustomButton";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    return (
        <header className="bg-white h-[72px] sticky top-0 shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Brand */}
                <div className="text-3xl font-sans font-bold text-[#495eb3]">COIN CRAFT</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-gray-700 hover:text-[#C41F3E]">
                        Home
                    </a>
                    <a href="#about" className="text-gray-700 hover:text-[#C41F3E]">
                        About
                    </a>
                    <a href="#services" className="text-gray-700 hover:text-[#C41F3E]">
                        Services
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-[#C41F3E]">
                        Contact
                    </a>
                </nav>

                {/* Login Button */}
               <CustomButton text={'LOGIN'}/>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none focus:text-[#C41F3E]"
                    onClick={toggleMenu}
                    aria-label="Open Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex justify-between items-center px-4 py-4">
                    <div className="text-2xl font-bold text-[#C41F3E]">Brand</div>
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="mt-8 space-y-4 text-center">
                    <a
                        href="#home"
                        className="text-gray-700 hover:text-[#C41F3E] text-xl block"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-gray-700 hover:text-[#C41F3E] text-xl block"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="text-gray-700 hover:text-[#C41F3E] text-xl block"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 hover:text-[#C41F3E] text-xl block"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
