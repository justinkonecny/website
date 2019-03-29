import React, { Component } from 'react';
import profile from '../resources/profile.jpeg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="introduction">
                    <div className="introduction-text">
                        <h2>Hi, I'm</h2>
                        <h1>Justin Konecny.</h1>
                        {/*<p style={{ 'color': '#828282', 'marginLeft': 0 }}>I'm a <span style={{ 'fontWeight': '700' }}>Cybersecurity</span> major at*/}
                            {/*<span style={{ 'fontWeight': '700' }}> Northeastern University</span>, currently pursuing a*/}
                            {/*career relating to <span style={{ 'fontWeight': '700' }}>software engineering</span>.</p>*/}
                    </div>
                    <div className="introduction-profile">
                        <img src={ profile } className="profile-image" alt="logo" />
                    </div>
                </div>
                {/*<div className="body">*/}
                    {/*<div className="about-me">*/}
                        {/*<h3>About Me</h3>*/}
                        {/*<h4>Education</h4>*/}
                        {/*<p>Northeastern University (Boston, MA)</p>*/}
                        {/*<p>BS Cybersecurity w/ Concentration Cyber Operations</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Home;
