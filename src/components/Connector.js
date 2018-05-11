import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Connector extends Component {
    render() {
        const { startXy = [0,0], endXy = [0,0] } = this.props;

        return (
            <svg height="100%" width="100%">
                <filter id="blurLine">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18">
                <g stroke-width="6" stroke="#cccccc" fill="none">
                  <path d="M12.29 21.00l-6-24"/>
                  <circle cx="70" cy="70" r="35"/>
                </g></svg>
            </svg>
        );
    }
}

Connector.propTypes = {
    startXy: PropTypes.array,
    endXy: PropTypes.array
};

export default Connector;
