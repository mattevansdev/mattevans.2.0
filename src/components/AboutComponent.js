import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="bg-gray-50 dark:bg-gray-800">
                <div className="jumbotron about-me bg-blue-900 px-20 sm:py-10 md:py-20 xl:py-20 rounded-md">
                    <div class="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-extrabold text-center md:text-4xl py-10 md:py-10 ">Hello again, Nice to meet you.</h3>
                        <p className="text-center text-base leading-10 md:text-2xl md:leading-loose xl:px-48">I live in Kirkland, WA, with my beautiful wife and our dachshunds Charlie and Eleven. Eleven was named after Strangers Things, and she likes waffles. I enjoy traveling and exploring new and exciting places, including pizza places (hint: favorite food). </p>
                    </div>
                </div>
                <div className="bg-indigo-50 container mx-auto rounded-3xl -mt-44 py-3 text-gray-900 ">
                    <div className="text-center grid md:col-1 xl:grid-cols-3 divide-x divide-gray-300">
                        <div className="py-10">
                            <img className="py-10 mx-auto" src="/assets/images/web-programming.png" width="64" height="auto"
                                alt="Front-end Developement Icon" />
                            <h6 className="text-2xl">Front-End Developement</h6>
                            <p className="min-title py-3">Languages I speak:</p>
                            <p>HTML,CSS, Sass, Javascript, React</p>
                            <p className="min-title">Dev Tools:</p>
                            <ul className="list-none leading-loose">
                                <li>VS Code</li>
                                <li>Atom</li>
                                <li>Bootstrap</li>
                                <li>Codepen</li>
                                <li>GIT</li>
                                <li>Github</li>
                                <li>Jquery</li>
                                <li>Terminal</li>
                            </ul>
                        </div>
                        <div className="py-10 ">
                            <img className="py-10 mx-auto" src="/assets/images/backend.png" width="64" height="auto"
                                alt="Back-end Developement Icon" />
                            <h6 className="text-2xl">Back-End Developement</h6>
                            <p class="min-title py-3">Languages I speak:</p>
                            <p>NodeJS, Express, MongoDB, Sanity</p>
                            <p className="min-title">Dev Tools:</p>
                            <ul class="list-none leading-loose">
                                <li>VS Code</li>
                                <li>Atom</li>
                                <li>Terminal</li>
                            </ul>
                        </div>
                        <div className="py-10">
                            <img className="py-10 mx-auto" src="/assets/images/mobile-app.png" width="64" height="auto"
                                alt="Mobile App Developement Icon" />
                            <h6 className="text-2xl">Mobile App Developement</h6>
                            <p className="min-title py-3">Languages I speak:</p>
                            <p>React Native, Objective-C, Swift</p>
                            <p className="min-title ">Dev Tools:</p>
                            <ul className="list-none">
                                <li>VS Code</li>
                                <li>Atom</li>
                                <li>Xcode</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;