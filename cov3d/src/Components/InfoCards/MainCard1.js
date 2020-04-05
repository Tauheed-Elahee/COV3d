import React, { Component } from "react";
import Graph from "../../Images/graph.jpg";

class MainCard1 extends Component {
  render() {
    return (
      <div className="container" style={card}>
        <div className="row">
          <div className="col-8" style={{margin:'0', padding: '0'}}>
            <img src={Graph} className='img-fluid rounded float-left' style ={imgStyle}/>
          </div>
          <div className="col-4 caption" syle={textStyle}>
            In the past few weeks, we have seen the pandemic place copious
            levels of stress on our healthcare system, testing its capabilities
            and exposing its limitations. With the increasing number of positive
            COVID-19 patients, our healthcare system is in dire need of
            equipment that can help protect the frontline workers, namely our
            nurses, doctors, and hospital admin
          </div>
        </div>
      </div>
    );
  }
}

const card ={
  background: '#fff',
  paddingLeft: '0'
}

const imgStyle ={
  margin: '0',
  padding: '0'
}

const textStyle ={
  margin: '0',
  padding: '0'
}

export default MainCard1;
