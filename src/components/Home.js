import React, { Component } from 'react';
import profile from '../resources/profile.jpeg';
import '../css/Home.css';
import Icons from './Icons.js';
import NavBar from './NavBar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollListener = this.scrollListener.bind(this);
        this.state = {
            isMobile: false,
            showNavBar: true
        };
    }

    scrollListener() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 50) {
            this.setState({
                showNavBar: false
            });
        } else {
            this.setState({
                showNavBar: true
            });
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scrollListener)
        if (window.innerWidth <= 500) {
            this.setState({
                isMobile: true
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener)
    }

    render() {
        return (
            <div>
                <NavBar display={this.state.showNavBar}/>
                <div className={this.state.isMobile ? 'intro-mobile' : 'intro'}>
                    <div className={this.state.isMobile ? 'intro-text-mobile' : 'intro-text'}>
                        <h2>Hi, I'm</h2>
                        <h1>Justin Konecny.</h1>
                        <p style={{ 'color': '#828282' }}>
                            I'm a <span style={{ 'fontWeight': '700' }}>Cybersecurity</span> major at
                            <span style={{ 'fontWeight': '700' }}> Northeastern University</span>, currently
                            pursuing a career in <span style={{ 'fontWeight': '700' }}>software engineering</span>.
                        </p>
                        <Icons isMobile={this.state.isMobile} />
                    </div>
                    <ProfileImage isMobile={this.state.isMobile} />
                </div>
                <div className={this.state.isMobile ? 'body-mobile' : 'body'}>
                    <div className='about-me'>
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

class ProfileImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isMobile) {
            return null;
        } else {
            return (
                <div className='intro-profile-mobile'>
                    <img src={profile} className='profile-img' alt='logo'/>
                </div>
            );
        }
    }
}



export default Home;
