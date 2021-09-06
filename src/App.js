import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Work from './components/WorkComponent';
import Workspace from './components/WorkspaceComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {
    render() {
      return (
              <div className="App">
                  <Header />
                  <Workspace />
                  <Footer />
              </div>
      );
  };
}

export default App;
