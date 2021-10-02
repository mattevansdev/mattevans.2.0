import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="bg-gray-50">
        <div className="container">
          <div className="grid place-content-center min-h-screen text-center">
            <h1 className="pb-2 text-5xl font-extrabold">Full Stack & Mobile Application Developer</h1>
            <p className="py-2 text-3xl leading-10 max-w-5xl">Hi, I'm Matt. In a galaxy far, far away, I write beautiful code creating successful websites and mobile applications</p>
            <div className="grid gap-4 grid-cols-3 py-5">
              <div className="bg-red-100 rounded-md h-48">
                <img className="py-10 mx-auto" src="/assets/images/web-programming.png" width="64" height="auto"
                  alt="Front-end Developement Icon" />
                <h6 className="text-lg">Front-End Developement</h6>
              </div>
              <div className="bg-blue-100 rounded-md h-48"><img className="py-10 mx-auto" src="/assets/images/backend.png" width="64" height="auto"
                alt="Back-end Developement Icon" />
                <h6 className="text-lg">Back-End Developement</h6></div>
              <div className="bg-purple-100 rounded-md h-48"><img className="py-10 mx-auto" src="/assets/images/mobile-app.png" width="64" height="auto"
                alt="Mobile App Developement Icon" />
                <h6 className="text-lg">Mobile App Developement</h6></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;