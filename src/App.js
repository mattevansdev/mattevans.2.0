import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Workspace from './components/WorkspaceComponent';
import Footer from './components/FooterComponent';
import AllPosts from './components/AllPostComponent';
import SinglePosts from './components/SinglePostComponent';
import Projects from './components/ProjectsComponent'
import Contact from './components/ContactComponent';
import Work from './components/WorkComponent';
import { BrowserRouter, Route } from 'react-router-dom';
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