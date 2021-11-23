import React, { Component } from "react";

class Workspace extends Component {
  render() {
    return (
      <div className="bg-gray-50 y-32 px-10 min-h-screen dark:bg-gray-800 text-gray-800 dark:text-gray-300">
        <h1 className="py-4 text-3xl text-center md:text-5xl font-extrabold">Stuff I Use</h1>
        <div className="max-w-5xl mx-auto">
          <div className="p-3">
            <div className="text-xl leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus.</div>
          </div>
          <div className="px-3 text-lg leading-10">
            <div>
              <h3 className="pb-10 text-3xl font-bold">Computer Setup</h3>
              <img
                className="h-1/2 w-full object-cover rounded-xl mb-5"
                src="/assets/images/workspace.jpg"
                alt="My Office" style={{ height: "400px" }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus.</p>
              <div class="grid grid-cols-2 gap-4">
                <div className="border-2 p-4 mt-3 mb-3">
                  <span className="flex text-xl front-extrabold">Logitech MX Master 3</span>
                  <span className="flex italic">Wireless mouse</span>
                  <a href="#" className="flex">Amazon</a>
                </div>
                <div className="border-2 p-4 mt-3 mb-3">
                  <span className="flex text-xl front-extrabold">Logitech MX Master 3</span>
                  <span className="flex italic">Wireless mouse</span>
                  <a href="#" className="flex">Amazon</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="pb-10 pt-10 text-3xl font-bold">Monitors</h3>
              <img
                className="h-1/2 w-full object-cover rounded-xl mb-5"
                src="/assets/images/workspace.jpg"
                alt="My Office" style={{ height: "400px" }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus.</p>
            </div>
            <div>
              <h3 className="pb-10 pt-10 text-3xl font-bold">Standing Desk</h3>
              <img
                className="h-1/2 w-full object-cover rounded-xl mb-5"
                src="/assets/images/workspace.jpg"
                alt="My Office" style={{ height: "400px" }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus.</p>
              <p className="py-5 font-extrabold">If you have any questions about my Workspace feel free to shoot
                me an email. You can also follow me on instagram.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workspace;
