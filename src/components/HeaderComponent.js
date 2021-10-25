import React, { Component, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }
    render() {
        return (
            <div className="bg-gray-50 dark:bg-gray-800">
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
                            <Menu right isOpen={this.state.menuOpen}
                                onStateChange={(state) => this.handleStateChange(state)} >

                                <NavLink onClick={() => this.closeMenu()} className="text-lg md:text-xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/blog">
                                    <span>Blog</span>
                                </NavLink>
                                <NavLink onClick={() => this.closeMenu()} className="text-lg md:text-xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/projects">
                                    <span>Projects</span>
                                </NavLink>
                                <NavLink onClick={() => this.closeMenu()} className="text-lg md:text-xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/contact">
                                    <span>Contact</span>
                                </NavLink>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
