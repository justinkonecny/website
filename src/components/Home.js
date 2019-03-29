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
                    <div className={this.state.isMobile ? "intro-text-mobile" : "intro-text"}>
                        <h2>Hi, I'm</h2>
                        <h1>Justin Konecny.</h1>
                        <p style={{ 'color': '#828282' }}>
                            I'm a <span style={{ 'fontWeight': '700' }}>Cybersecurity</span> major at
                            <span style={{ 'fontWeight': '700' }}> Northeastern University</span>, currently
                            pursuing a career in <span style={{ 'fontWeight': '700' }}>software engineering</span>.
                        </p>
                    </div>
                    <ProfileImage isMobile={this.state.isMobile} />
                </div>
                <div className={this.state.isMobile ? "body-mobile" : "body"}>
                    <div className="about-me">
                        <h3>About Me</h3>
                        <p>
                            Some words about me.
                        </p>
                        <h3>Professional Experience</h3>
                        <p>
                            Some work stuff here.
                        </p>
                        <h3>Software Projects</h3>
                        <p>
                            Some project stuff here.
                        </p>
                    </div>
                </div>
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
