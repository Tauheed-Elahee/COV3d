import React, { Component } from "react";

class MainCard1 extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="card my-auto" style={cardStyle}>
          <div className="card-body">
            <p className="card-text">
              In the past few weeks, we have seen the pandemic place copious
              levels of stress on our healthcare system, testing its
              capabilities and exposing its limitations. With the increasing
              number of positive COVID-19 patients, our healthcare system is in
              dire need of equipment that can help protect the frontline
              workers, namely our nurses, doctors, and hospital admin
            </p>
          </div>
        </div>
      </div>

      // <div className="card my-auto" style={cardStyle}>
      //   <div className="card-body">
      //     <p className="card-text">
      //       In the past few weeks, we have seen the pandemic place copious
      //       levels of stress on our healthcare system, testing its capabilities
      //       and exposing its limitations. With the increasing number of positive
      //       COVID-19 patients, our healthcare system is in dire need of
      //       equipment that can help protect the frontline workers, namely our
      //       nurses, doctors, and hospital admin
      //     </p>
      //   </div>
      // </div>
    );
  }
}

const cardStyle = {
  width: "25rem",
};

const imgStyle = {
  margin: "0",
  padding: "0",
};

const textStyle = {
  margin: "0",
  padding: "0",
};

export default MainCard1;
