import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import MainCard1 from "./Components/InfoCards/MainCard1";
import logo from "./Images/logo.png"


function App() {
  return (
    <Router>
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
      <Header/>
      <img src={logo}/>
      <MainCard1/>
    </div>
    </Router>
  );
}

export default App;
