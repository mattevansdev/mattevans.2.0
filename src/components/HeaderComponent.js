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
        <nav className="bg-gray-50 dark:bg-gray-800">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <img src="/assets/images/logo100x100.png" height="60" width="60" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <label for="menu-toggle" className="md:hidden block"><svg class="fill-current text-gray-900 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                        <input class="hidden" type="checkbox" id="menu-toggle" />
                        <div className="hidden md:flex items-center space-x-8" id="menu">
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/blog">
                                <span>Blog</span>
                            </NavLink>
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/projects">
                                <span>Projects</span>
                            </NavLink>
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/contact">
                                <span>Contact</span>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div>
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
            </div> */}
        </nav>
    );
}

export default Header;
