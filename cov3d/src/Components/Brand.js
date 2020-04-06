import React, { Component } from 'react';
import Logo from '../Images/covidLogo.png';

class Brand extends Component {
    render() {
        return (
            // <div className='navbar-brand' style={brand}>
            //     COV3d
            // </div>
            <div className='navbar-brand' style={brand}>
                <img src={Logo} style={{height: 100, width: 250}} alt="COV3d"></img>
            </div>
        );
    }
}

const brand={
    color: "#fff",
    fontSize: 'x-large',
    fontWeight : '700',
    width: '300px'
}

export default Brand;