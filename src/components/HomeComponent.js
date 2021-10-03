import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="bg-gray-50">
        <div className="container">
          <div className="grid place-content-center min-h-full text-center pb-80">
          <img
                  className="profile"
                  src="/assets/images/profile.jpg"
                  alt="Matthew Evans"
                ></img>
            <div className="flex-1">
            <h1 className="pb-2 text-xl lg:text-5xl font-extrabold">Full Stack & Mobile Application Developer</h1>
            <p className="py-2 max-w-5xl text-xl leading-6 lg:text-3xl ">Hi, I'm Matt. In a galaxy far, far away, I write beautiful code creating successful websites and mobile applications</p>
            </div>
            {/* <div className="grid gap-4 grid-cols-3 py-5">
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
            </div> */}
          </div>
          
        </div>
        {/* <img className="mx-auto pt-40" src="/assets/images/webdesign-alt.png" width="800" height="auto"
                  alt="Web Developement" /> */}
      </div>
    );
  }
}

export default Home;