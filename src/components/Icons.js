import React, { Component } from 'react';
import github from '../resources/github.svg';
import linkedin from '../resources/linkedin.svg';
import email from '../resources/mail.svg';

/**
 * Component for displaying social media icons on a page. Renders and links Github and LinkedIn.
 */
class Icons extends Component {
    constructor(props) {
        super(props);
        this.iconStyle = {
            'margin': '10px', // The spacing between each icon
            'width': '45px' // The width of each icon
        };
    }

    /**
     * If on a desktop, returns the component to display the social media icons. Otherwise, returns null.
     * @returns {*}
     */
    render() {
        if (this.props.isMobile) {
            return null;
        } else {
            return (
                <div style={{'margin': '65px 0 0 0'}}>
                    <a href='https://github.com/justinkonecny/' target='_blank' rel='noopener noreferrer'>
                        <img src={github} alt='github' style={this.iconStyle}/>
                    </a>
                    <a href='https://www.linkedin.com/in/justin-konecny/' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedin} alt='linkedin' style={this.iconStyle}/>
                    </a>
                    <a href='mailto:konecnyjustin@gmail.com'>
                        <img src={email} alt='email' style={this.iconStyle}/>
                    </a>
                </div>
            );
        }
    }
}

export default Icons;
