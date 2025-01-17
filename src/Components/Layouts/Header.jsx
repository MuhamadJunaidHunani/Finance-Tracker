import React, { useEffect, useState } from "react";
import CustomButton from "../UI/CustomButton";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.getBoundingClientRect().top < -100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    return (
        <header className={`bg-transparent h-[72px] transition-all duration-300 ease-in-out sticky top-0 z-50 ${window.location.pathname === "/" && !isScrolled && !isMenuOpen ? 'bg-transparent text-white' : 'bg-white text-black shadow-md '}`}>
            <div className="px-4 py-4 flex justify-between items-center">
                <div className="text-[24px] md:text-3xl font-sans font-bold custom-text-border text-[#4951c4]">COIN CRAFT</div>

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

                <div className="flex items-center gap-[15px]">


                    <CustomButton text={'LOGIN'} className={"md:scale-100 scale-75"} />


                    <button
                        className="md:hidden text-[24px] text-gray-700 focus:outline-none focus:text-[#C41F3E]"
                        onClick={toggleMenu}
                        aria-label="Open Menu"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex justify-between items-center px-4 py-4">
                    <div className="text-2xl font-bold text-[#C41F3E]">Brand</div>
                    <button
                        className="text-gray-700 text-[24px] focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                    ><RxCross2 />

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
