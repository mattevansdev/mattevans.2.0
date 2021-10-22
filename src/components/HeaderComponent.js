import React, { Component, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';

// const btn = useState("button.mobile-menu-button");
// const menu = useState(".mobile");

// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });

function Header() {
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
                    <div>
                        <Menu right >
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/blog">
                                <span>Blog</span>
                            </NavLink>
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/projects">
                                <span>Projects</span>
                            </NavLink>
                            <NavLink className="text-lg md:text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/contact">
                                <span>Contact</span>
                            </NavLink>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
