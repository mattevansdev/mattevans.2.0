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
                        <div className="bg-gray-900 text-center">
                            <Menu right isOpen={this.state.menuOpen}
                                onStateChange={(state) => this.handleStateChange(state)} width={'100%'} >
                                <div className="gird grid-cols-1 justify-center">
                                    <div className="p-20">
                                        <img className="inline-block align-middle h-48 rounded-full" src="/assets/images/profile.jpg" alt="Matthew Evans" />
                                        <h2 className="text-xl lg:text-3xl font-extrabold dark:text-gray-300 pt-5">Matt Evans</h2>
                                        <h3 className="text-xl lg:text-xl dark:text-gray-300 pt-1">Full Stack & Mobile Application Developer</h3>
                                    </div>
                                    <div className="p-2">
                                        <NavLink onClick={() => this.closeMenu()} className="text-4xl md:text-4xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/">
                                            <span>Home</span>
                                        </NavLink>
                                    </div>
                                    <div className="p-2">
                                        <NavLink onClick={() => this.closeMenu()} className="text-4xl md:text-4xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/blog">
                                            <span>Blog</span>
                                        </NavLink>
                                    </div>
                                    <div className="p-2">
                                        <NavLink onClick={() => this.closeMenu()} className="text-4xl md:text-4xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/projects">
                                            <span>Projects</span>
                                        </NavLink>
                                    </div>
                                    <div className="p-2">
                                        <NavLink onClick={() => this.closeMenu()} className="text-4xl md:text-4xl font-bold uppercase text-gray-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500" to="/contact">
                                            <span>Contact</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a className="btn btn-social-icon px-4 text-xl" href="http://instagram.com/mattevansdev">
                                        <i className="fa fa-instagram text-gray-300 hover:text-blue-400"></i>
                                    </a>
                                    <a className="btn btn-social-icon px-4 text-xl" href="http://facebook.com/matthew.evans">
                                        <i className="fa fa-facebook text-gray-300 hover:text-blue-400"></i>
                                    </a>
                                    <a className="btn btn-social-icon px-4 text-xl" href="http://twitter.com/matthewevansdev">
                                        <i className="fa fa-twitter text-gray-300 hover:text-blue-400"></i>
                                    </a>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
