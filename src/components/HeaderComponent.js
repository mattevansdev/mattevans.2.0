import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';

// const btn = useState("button.mobile-menu-button");
// const menu = useState(".mobile");

// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });


function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
        <nav className="bg-gray-50">
            <div className="container">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <img src="/assets/images/logo100x100.png" height="60" width="60" alt="Logo" />
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink className="link" to="/blog">
                            <span>Blog</span>
                        </NavLink>
                        <NavLink className="link" to="/projects">
                            <span>Projects</span>
                        </NavLink>
                        <NavLink className="link" to="/contact">
                            <span>Contact</span>
                        </NavLink>
                    </div>

                    {/* <div className="md:hidden flex items-center">
                        <button onClick={handleToggle}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div> */}

                </div>
            </div>

            <div>
                <div className="flex px-20 justify-between mobile md:hidden">
                    <NavLink className="link" to="/blog">
                        <span>Blog</span>
                    </NavLink>
                    <NavLink className="link" to="/projects">
                        <span>Projects</span>
                    </NavLink>
                    <NavLink className="link" to="/contact">
                        <span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
