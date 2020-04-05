import React, { Component } from 'react';

class Brand extends Component {
    render() {
        return (
            <div className='navbar-brand' style={brand}>
                COV3d
            </div>
        );
    }
}

const brand={
    color: "#05386B",
    fontSize: 'x-large',
    fontWeight : '300'
}

export default Brand;