import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends Component {
  render() {
    return (
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid place-content-center min-h-full text-center pb-80">
            <img className="profile" src="/assets/images/profile.jpg" alt="Matthew Evans" />
            <div className="flex-1 max-w-7xl">
              <h1 className="text-xl lg:text-5xl font-extrabold dark:text-gray-300">Full Stack & Mobile Application Developer</h1>
              <p className="py-3 text-base leading-10 lg:text-2xl dark:text-gray-300">Hi, I'm Matt. In a galaxy far, far away, I write beautiful code creating successful websites and mobile applications</p>
              <div className="flex justify-center">
                <div className="pt-16 px-3"><NavLink className="link" to="/projects"><button className="py-2 px-4 rounded-lg bg-gray-300 text-gray-100 dark:bg-gray-300 text-gray-800">
                  Recent Projects
                </button></NavLink></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;