import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="py-5 px-4 sm:px-6 lg:px-8">
          <div className="text-center dark:text-gray-300">
            <h3 className="py-4 text-xl lg:text-5xl font-extrabold dark:text-gray-300">My Recent Work</h3>
            <p className="py-3 text-base leading-10 lg:text-xl dark:text-gray-300">Here are a few projects I've worked on recently. Want to see more? <a href="mailto:me@mattevans.dev">Email me</a></p>
            <div className="grid justify-items-center">
              <div className="mt-12 grid gap-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <NavLink className="link" to="/projects"><img className="h-80 w-full object-cover" src="/assets/images/nucamp.png" alt="nucamp"></img></NavLink>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <NavLink className="link" to="/projects"><img className="h-80 w-full object-cover" src="/assets/images/me-dev.png" alt="Matt Evans"></img></NavLink>
                </div>
              </div>
            </div>
            <div className="pt-16"><NavLink className="link" to="/projects"><button class="py-2 px-4 rounded-lg bg-gray-300 text-gray-100 dark:bg-gray-300 text-gray-800">
              View all Projects
            </button></NavLink></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
