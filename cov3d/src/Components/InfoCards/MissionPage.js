import React, { Component } from "react";

class MissionPage extends Component {
  render() {
    return (
      <div
      className="flex-shrink-0"
        style={{
          position: 'fixed',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div>
          Harnessing Ottawa’s 3D printing community to make PPE for frontline workers fighting COVID
        </div>
        <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-dark"> Learn more >></button>
        </div>
      </div>
    );
  }
}


export default MissionPage;
