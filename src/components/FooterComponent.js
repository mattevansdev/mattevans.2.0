import React, { Component } from "react";
import ProjectCTA from '../components/ProjectCTAComponent';

class Footer extends Component {
  render() {
    return (
      <div className="bg-blue-900 pt-20">
        <ProjectCTA />
        <div className="h-48 flex flex-wrap content-end justify-center py-10 bg-blue-900">
          <a href="https://www.twitter.com/matthewevansdev" className="text-xl text-gray-300 font-bold uppercase px-4 hover:text-gray-400">Twitter</a>
          <a href="https://www.facebook.com/matthew.evans" className="text-xl text-gray-300 font-bold uppercase px-4 hover:text-gray-400">Facebook</a>
          <a href="https://www.instagram.com/mattevansdev" className="text-xl text-gray-300 font-bold uppercase px-4 hover:text-gray-400">Instagram</a>
          <a href="https://www.github.com/mattevansdev" className="text-xl text-gray-300 font-bold uppercase px-4 hover:text-gray-400">Github</a>
        </div>
      </div>
    );
  }
}

export default Footer;