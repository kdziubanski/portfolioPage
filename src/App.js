import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="container">
          <header className="header">
            <Header />
          </header>
          <div className="main">
            <Body />
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
