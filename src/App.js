import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'typeface-open-sans';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Workspace from './components/WorkspaceComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';
import Work from './components/WorkComponent';
import AboutPage from './components/pages/About';
import AllPosts from './components/pages/AllPost';
import SinglePosts from './components/pages/SinglePost';
import Projects from './components/pages/Projects'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route component={Home} path="/" exact />
            <Route component={About} path="/" exact />
            <Route component={Work} path="/" exact />
            <Route component={AllPosts} path="/blog" exact />
            <Route component={SinglePosts} path="/blog/:slug" />
            <Route component={AboutPage} path="/about" />
            <Route component={Workspace} path="/workspace" />
            <Route component={Projects} path="/projects" />
            <Route component={Contact} path="/contact" />
            <Footer />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;