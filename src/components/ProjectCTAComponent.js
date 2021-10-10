import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class ProjectCTA extends Component {
  render() {
    return (
      <div className="grid grid-col-3 place-content-center max-w-md bg-indigo-50 text-gray-800 mx-auto rounded-2xl .shadow-2xl lg:max-w-6xl lg:py-6">
        <div className="p-4 lg:flex lg:flex-wrap content-center">
          <div className="text-2xl text-center font-extrabold px-5 lg:py-10 lg:pt-1">Start a project</div>
          <div className="text-lg max-w-xl py-10 lg:px-10 lg:pt-2">I'm always excited to learn about new projects. Interested in working together? Let's chat and discuss your project.</div>
          <div className="px-10 text-center">
          <NavLink className="text-xl font-bold uppercase text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500" to="/contact">
            <button class="text-lg font-bold py-2 px-4 rounded-2xl bg-gray-800 text-gray-100">
              Let's Connect
            </button></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCTA;