import React, { Component } from 'react';
import github from '../resources/github.svg';
import linkedin from '../resources/linkedin.svg';
import instagram from '../resources/instagram.svg';
import facebook from '../resources/flogo.svg';


class Icons extends Component {
    constructor(props) {
        super(props);
        this.iconStyle = {
            'margin': '5px',
            'width': '30px'
        };
    }

    render() {
        if (this.props.isMobile) {
            return null;
        } else {
            return (
                <div style={{'margin': '75px 0 0 0'}}>
                    <a href='https://github.com/justinkonecny/' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={github} alt='github' style={this.iconStyle}/>
                    </a>
                    <a href='https://www.linkedin.com/in/justin-konecny/' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={linkedin} alt='linkedin' style={this.iconStyle}/>
                    </a>
                    <a href='https://www.facebook.com/konecnyj' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={facebook} alt='facebook' style={this.iconStyle}/>
                    </a>
                    <a href='https://www.instagram.com/justinkonecny/' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={instagram} alt='instagram' style={this.iconStyle}/>
                    </a>
                </div>
            );
        }
    }
}

export default Icons;
