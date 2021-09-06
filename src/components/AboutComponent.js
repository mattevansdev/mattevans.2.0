import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron about-me">
                    <div class="container">
                        <h3 className="title text-center">Hello again, Nice to meet you.</h3>
                        <p className="text-center">I live in Kirkland, WA with my beautiful wife and our dogs Charlie and Eleven. When I’m not
                            working, you’ll find me spending time with friends, eating pizza (hint: favorite food), listening to music,
                            hiking, or traveling. I also enjoying photography.</p>
                    </div>
                </div>
                <div className="container skills">
                    <div className="row row-content">
                        <div class="col-lg-4 col-md-4">
                            <img className="mx-auto d-block" src="/assets/images/web-programming.png" width="64" height="auto"
                                alt="Front-end Developement Icon" />
                            <div className="text-center">
                                <h6>Front-End Developement</h6>
                                <p className="min-title">Languages I speak:</p>
                                <p>HTML,CSS, Sass, Javascript</p>
                                <p className="min-title">Dev Tools:</p>
                                <ul className="list-unstyled">
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
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <img class="mx-auto d-block" src="/assets/images/backend.png" width="64" height="auto"
                                alt="Back-end Developement Icon" />
                            <div className="text-center">
                                <h6>Back-End Developement</h6>
                                <p class="min-title">Languages I speak:</p>
                                <p>NodeJS, Express, MongoDB</p>
                                <p className="min-title">Dev Tools:</p>
                                <ul class="list-unstyled">
                                    <li>VS Code</li>
                                    <li>Atom</li>

                                    <li>Terminal</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <img class="mx-auto d-block" src="/assets/images/mobile-app.png" width="64" height="auto"
                                alt="Mobile App Developement Icon" />
                            <div className="text-center">
                                <h6>Mobile App Developement</h6>
                                <p className="min-title">Languages I speak:</p>
                                <p>React Native, Objective-C, Swift</p>
                                <p className="min-title">Dev Tools:</p>
                                <ul className="list-unstyled">
                                    <li>VS Code</li>
                                    <li>Atom</li>
                                    <li>Xcode</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;