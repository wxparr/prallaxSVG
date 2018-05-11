import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Module from './Module';

const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
};

class Topology extends Component {
    render() {
        return (
            <Module />
        );
    }
}

Topology.propTypes = {
    deviceCoords: PropTypes.array.isRequired
};

export default Topology;
