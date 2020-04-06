import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MainCard1 from "./Components/InfoCards/MainCard1";
import logo from "./Images/logo.png";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        >
        </link>
        <Header />
        <MainCard1/>
      </div>
    </Router>
  );
}

export default App;
