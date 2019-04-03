import React, { Component } from 'react';
import profile from '../resources/profile.jpeg';
import '../css/Home.css';
import Icons from './Icons.js';
import NavBar from './NavBar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollListener = this.scrollListener.bind(this);
        this.resizeListener = this.resizeListener.bind(this);
        this.mobileThreshold = 850;
        this.state = {
            isMobile: false,
            showNavBar: true
        };
    }

    scrollListener() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 50) {
            this.setState({showNavBar: false});
        } else {
            this.setState({showNavBar: true});
        }
    }

    resizeListener() {
        if (window.innerWidth <= this.mobileThreshold && !this.state.isMobile) {
            this.setState({isMobile: true});
        } else if (window.innerWidth > this.mobileThreshold && this.state.isMobile) {
            this.setState({isMobile: false});
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.resizeListener);

        if (window.innerWidth <= this.mobileThreshold) {
            this.setState({isMobile: true});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.resizeListener);
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet mattis vulputate. Donec ac odio tempor orci dapibus ultrices. Consectetur a erat nam at lectus urna duis convallis convallis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Feugiat nibh sed pulvinar proin. Turpis in eu mi bibendum neque egestas congue quisque. Adipiscing elit duis tristique sollicitudin nibh sit. Nisi lacus sed viverra tellus in. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Ridiculus mus mauris vitae ultricies. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Volutpat odio facilisis mauris sit amet massa vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.
                        </p>
                        <h3>Professional Experience</h3>
                        <p>
                            Vivamus arcu felis bibendum ut tristique. Ipsum dolor sit amet consectetur adipiscing elit. Hendrerit gravida rutrum quisque non tellus. Iaculis urna id volutpat lacus laoreet. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Orci sagittis eu volutpat odio facilisis mauris sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Sit amet purus gravida quis. Arcu felis bibendum ut tristique et egestas. Dolor morbi non arcu risus. Auctor urna nunc id cursus metus. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dictum at tempor commodo ullamcorper a lacus vestibulum sed.
                        </p>
                        <h3>Software Projects</h3>
                        <p>
                            Risus nec feugiat in fermentum posuere urna. Sodales ut etiam sit amet nisl. A erat nam at lectus urna duis convallis convallis tellus. Bibendum neque egestas congue quisque egestas. Eu consequat ac felis donec. Dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar etiam non quam lacus suspendisse faucibus. Congue mauris rhoncus aenean vel elit scelerisque. Vulputate mi sit amet mauris commodo. Sit amet mattis vulputate enim nulla. Nibh mauris cursus mattis molestie a. Etiam sit amet nisl purus in mollis nunc sed id. Molestie nunc non blandit massa enim nec dui nunc. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nibh sed pulvinar proin gravida hendrerit lectus a.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

class ProfileImage extends Component {
    render() {
        if (this.props.isMobile) {
            return null;
        } else {
            return (
                <div className='intro-profile'>
                    <img src={profile} className='profile-img' alt='logo'/>
                </div>
            );
        }
    }
}



export default Home;
