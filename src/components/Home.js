import React, {Component} from 'react';
import profile from '../resources/profile.jpeg';
import resume from '../resources/resume.pdf';
import Icons from './Icons.js';
import NavBar from './NavBar';
import '../css/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollListener = this.scrollListener.bind(this);
        this.resizeListener = this.resizeListener.bind(this);
        this.state = {isMobile: false, showNavBar: true};
        this.mobileThreshold = 850;
        this.skillProficient = {'border-color': '#125eff'};
        this.skillKnowledgeable = {'border-color': '#81a4ff'};
        this.skillFamiliar = {'border-color': '#a5c5ff'};
        this.navLinks = [
            <a className='nav-link main-link' href='#about-me'>
                <div className='nav-inner nav-inner-main'>About Me</div>
            </a>,
            <a className='nav-link' href='#experience'>
                <div className='nav-inner'>Experience</div>
            </a>,
            <a className='nav-link' href='#projects'>
                <div className='nav-inner'>Projects</div>
            </a>,
            <a className='nav-link' href={resume}>
                <div className='nav-inner'>Resume</div>
            </a>
        ];
    }

    scrollListener() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 50) {
            // Handles scrolling down the page
            this.setState({showNavBar: false});
        } else {
            // Handles scrolling back up the page
            this.setState({showNavBar: true});
        }
    }

    resizeListener() {
        if (window.innerWidth <= this.mobileThreshold && !this.state.isMobile) {
            // Handles resizing to a smaller width window
            this.setState({isMobile: true});
        } else if (window.innerWidth > this.mobileThreshold && this.state.isMobile) {
            // Handles resizing to a larger width window
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
                <NavBar display={this.state.showNavBar} links={this.navLinks}/>
                <div className={this.state.isMobile ? 'intro-mobile' : 'intro'}>
                    <div className={this.state.isMobile ? 'intro-text-mobile' : 'intro-text'}>
                        <h2>Hi, I'm</h2>
                        <h1>Justin Konecny.</h1>
                        <p style={{'color': '#828282', 'font-size': '17px'}}>
                            I'm a <span style={{'fontWeight': '700'}}>Cybersecurity</span> major at
                            <span style={{'fontWeight': '700'}}> Northeastern University</span>, currently
                            pursuing a career in <span style={{'fontWeight': '700'}}>software engineering</span>.
                        </p>
                        <Icons isMobile={this.state.isMobile}/>
                    </div>
                    <ProfileImage isMobile={this.state.isMobile}/>
                </div>
                <div className={this.state.isMobile ? 'body-mobile' : 'body'}>
                    <div className='body-info'>
                        <h3 id='about-me'>About Me</h3>
                        <hr/>
                        <h4>Northeastern University<span className='right'>Boston, MA</span></h4>
                        <h5>Cybersecurity, B.S.<span className='right'>Expected: 2022</span></h5>
                        <p>Relevant Coursework:</p>
                        <ul className='list'>
                            <li>Object-Oriented Design</li>
                            <li>Algorithms & Data Structures</li>
                            <li>Networks & Distributed Systems</li>
                            <li>Computer Systems</li>
                            <li>Theory of Computation</li>
                            <li>Foundations of Cybersecurity</li>
                            <li>Fundamentals of Computer Science 1 & 2</li>
                            <li>Discrete Structures</li>
                            <li>Probability & Statistics</li>
                            <li>Statistics & Stochastic Processes</li>
                            <li>Embedded Design: Robotics</li>
                            <li>Differential Equations & Linear Algebra</li>
                        </ul>
                        <div className='skills'>
                            <span className='skill' style={this.skillProficient}>Java</span>
                            <span className='skill' style={this.skillProficient}>Python</span>
                            <span className='skill' style={this.skillKnowledgeable}>C/C++</span>
                            <span className='skill' style={this.skillKnowledgeable}>Racket</span>
                            <span className='skill' style={this.skillKnowledgeable}>LaTeX</span>
                            <span className='skill' style={this.skillFamiliar}>AMD64 Assembly</span>
                        </div>

                        <h3 id='experience'>Professional Experience</h3>
                        <hr/>
                        <h4>Vonage<span className='right'>Holmdel, NJ</span></h4>
                        <h5>Information Security Associate<span className='right'>Summer 2018</span></h5>
                        <p>
                            Vivamus arcu felis bibendum ut tristique. Ipsum dolor sit amet consectetur adipiscing elit.
                            Hendrerit gravida rutrum quisque non tellus. Iaculis urna id volutpat lacus laoreet. Tempor
                            nec feugiat nisl pretium fusce id velit ut tortor. Orci sagittis eu volutpat odio facilisis
                            mauris sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Sit amet purus
                            gravida quis. Arcu felis bibendum ut tristique et egestas. Dolor morbi non arcu risus.
                            Auctor urna nunc id cursus metus. Et netus et malesuada fames ac turpis egestas maecenas
                            pharetra. Dictum at tempor commodo ullamcorper a lacus vestibulum sed.
                        </p>

                        <h3 id='projects'>Software Projects</h3>
                        <hr/>
                        <p>
                            Risus nec feugiat in fermentum posuere urna. Sodales ut etiam sit amet nisl. A erat nam at
                            lectus urna duis convallis convallis tellus. Bibendum neque egestas congue quisque egestas.
                            Eu consequat ac felis donec. Dictum at tempor commodo ullamcorper a lacus vestibulum.
                            Pulvinar etiam non quam lacus suspendisse faucibus. Congue mauris rhoncus aenean vel elit
                            scelerisque. Vulputate mi sit amet mauris commodo. Sit amet mattis vulputate enim nulla.
                            Nibh mauris cursus mattis molestie a. Etiam sit amet nisl purus in mollis nunc sed id.
                            Molestie nunc non blandit massa enim nec dui nunc. Vestibulum mattis ullamcorper velit sed
                            ullamcorper morbi tincidunt ornare. Nibh sed pulvinar proin gravida hendrerit lectus a.
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
