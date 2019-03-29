import React, { Component } from 'react';
import profile from '../resources/profile.jpeg';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        };
    }

    componentWillMount() {
        if (window.innerWidth <= 500) {
            this.setState({
                isMobile: true
            });
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.isMobile ? "intro-mobile" : "intro"}>
                    <div className="intro-text">
                        <h2>Hi, I'm</h2>
                        <h1>Justin Konecny.</h1>
                        {/*<p style={{ 'color': '#828282', 'marginLeft': 0 }}>I'm a <span style={{ 'fontWeight': '700' }}>Cybersecurity</span> major at*/}
                            {/*<span style={{ 'fontWeight': '700' }}> Northeastern University</span>, currently pursuing a*/}
                            {/*career relating to <span style={{ 'fontWeight': '700' }}>software engineering</span>.</p>*/}
                    </div>
                    <ProfileImage isMobile={this.state.isMobile} />
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

function ProfileImage(props) {
    if (props.isMobile) {
        return null;
    }

    return (
        <div className="intro-profile-mobile">
            <img src={profile} className="profile-img" alt="logo" />
        </div>
    );
}

export default Home;
