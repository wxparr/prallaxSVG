import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Radar extends Component {
    render() { 
        return (
            <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            
            viewBox="0 0 2055 813" 
            xmlSpace="preserve">
                <circle cx = "50%" cy = "50%" r = "15%" stroke = "#F59902" stroke-width = "3" fill = "none"/>
                <circle cx = "50%" cy = "50%" r = "30%" stroke = "#F59902" stroke-width = "3" fill = "none"/>
                <circle cx = "50%" cy = "50%" r = "50%" stroke = "#F59902" stroke-width = "3" fill = "none"/>
                <circle className = "innerCircle" cx = "50%" cy = "50%" r = "45%" fill = "#F59902"/>
            </svg>
        );
    }
}

// Dbase.propTypes = {
//     width: PropTypes.number,
//     height: PropTypes.number,
//     xPos: PropTypes.number,
//     yPos: PropTypes.number
// };

export default Radar;
