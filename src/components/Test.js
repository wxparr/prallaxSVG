import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pathOneStyle = {
    fill:'url(radialGradient18302)',
    fillOpacity:1,
    fillRule:'evenodd',
    stroke:'none'
  };

const st0 = {fill:'#F2F2F2'}
const st1 = {fill:'#FFFFFF'}
const st2 = {fill:'#3C3F42'}
const st3 = {opacity:0.4 }
const st4 = {fill:'#70797C'}
const st5 = {opacity:0.3,fill:'none',stroke:'#48D8A8',strokeWidth:5,strokeMiterlimit:10,enableBackground:'new' }
const st6 = {fill:'#846E57'}
const st7 = {fill:'#1C1006'}
const st8 = {fill:'#8BB7B6'}
const st9 = {fill:'#A6D1D1'}
const st10 = {opacity:0.2, enableBackground:'new' }
const st11 = {fill:'#2D3033'}
const st12 = {fill:'#48D8A8'}
const st13 = {fill:'#F2EAE2'}
const st14 = {fill:'#BFC4C4'}

const st15 = {opacity:0.2,fill:'none',stroke:'#000000',strokeWidth:1.45,strokeLinecap:'round',strokeLinejoin:'round',enableBackground:'new' }
const st16 = {fill:'none',stroke:'#FFFFFF',strokeWidth:1.45,strokeMiterlimit:10 }
const st17 = {fontFamily:'Courier' }
const st18 = {fontSize:'34.8px' }
const st19 = {letterSpacing:-8 }
const st20 = {fill:'none',stroke:'#FFFFFF',strokeWidth:1.62,strokeLinecap:'round',strokeLinejoin:'round' }
const st21 = {opacity:0.2 }
const st22 = {opacity:0.1 }
const st23 = {fill:'#560000' }
const st24 = {opacity:0.15,fill:'#560000',enableBackground:'new' }
const st25 = {fill:'none',stroke:'#846E57',strokeWidth:2.9,strokeLinecap:'round',strokeMiterlimit:10 }
const st26 = {fill:'#E6E6E6' }
const st27 = {opacity:0.3,fill:'#70797C',enableBackground:'new' }

  class Test extends Component {
    render() {
        const { width, height, xPos = 0, yPos = 0 } = this.props;
            
        return (

            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <style>
                    { `.classNameA { fill:red }` }
                </style>
                <defs>
                    <g id="Port">
                        <circle style={{fill:'inherit'}} r="10"/>
                    </g>
                </defs>

                <text y="15">black</text>
                <use x="70" y="10" xlinkHref="#Port" />
                <text y="35">Hello</text>
                <use x="70" y="30" xlinkHref="#Port" classNameName="classNameA"/>
                <text y="55">blue</text>
                <use x="0" y="50" xlinkHref="#Port" style={{fill:'blue'}}/>
        </svg>

        );
    }
}

Test.propTypes = {
width: PropTypes.number,
height: PropTypes.number,
xPos: PropTypes.number,
yPos: PropTypes.number
};

export default Test;