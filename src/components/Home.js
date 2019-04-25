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
        this.skillCert = {'border-color': '#eb4d45'};
        this.navLinksLeft = [
            <a className='nav-link' href='#about-me'>
                <div className='nav-inner'>About Me</div>
            </a>,
            <a className='nav-link' href='#experience'>
                <div className='nav-inner'>Experience</div>
            </a>,
            <a className='nav-link' href='#projects'>
                <div className='nav-inner'>Projects</div>
            </a>
        ];
        this.navLinksRight = [
            <a className='nav-link main-link' href={resume} target={'_blank'} rel={'noopener noreferrer'}>
                <div className='nav-inner nav-inner-main'>Resume</div>
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
                <NavBar display={this.state.showNavBar} linksLeft={this.navLinksLeft} linksRight={this.navLinksRight}/>
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
                    <div className={'body-info'}>
                        <h3 id={'about-me'}>About Me</h3>
                        <hr/>
                        <h4>Northeastern University<span className={'right'}>Boston, MA</span></h4>
                        <h5>Cybersecurity, B.S.<span className={'right'}>Expected 2022</span></h5>
                        <p>Relevant Coursework:</p>
                        <ul className={'list'}>
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
                        <div className={'skills'}>
                            <span className={'skill'} style={this.skillProficient}>Java</span>
                            <span className={'skill'} style={this.skillProficient}>Python</span>
                            <span className={'skill'} style={this.skillKnowledgeable}>C/C++</span>
                            <span className={'skill'} style={this.skillKnowledgeable}>Racket</span>
                            <span className={'skill'} style={this.skillKnowledgeable}>LaTeX</span>
                            <span className={'skill'} style={this.skillKnowledgeable}>Git</span>
                            <span className={'skill'} style={this.skillFamiliar}>AMD64 Assembly</span>
                        </div>

                        <h3 id={'experience'}>Professional Experience</h3>
                        <hr/>

                        {/*<h4>Rocket Software<span className={'right'}>Waltham, MA</span></h4>*/}
                        {/*<h5>Software Engineer Co-op<span className={'right'}>July - December 2019</span></h5>*/}
                        {/*<p>*/}
                            {/*Risus nec feugiat in fermentum posuere urna. Sodales ut etiam sit amet nisl. A erat nam at*/}
                            {/*lectus urna duis convallis convallis tellus. Bibendum neque egestas congue quisque egestas.*/}
                            {/*Eu consequat ac felis donec. Dictum at tempor commodo ullamcorper a lacus vestibulum.*/}
                            {/*Pulvinar etiam non quam lacus suspendisse faucibus. Congue mauris rhoncus aenean vel elit*/}
                            {/*scelerisque. Vulputate mi sit amet mauris commodo. Sit amet mattis vulputate enim nulla.*/}
                        {/*</p>*/}
                        {/*<div className={'skills'}>*/}
                            {/*<span className={'skill'} style={this.skillProficient}>Java</span>*/}
                        {/*</div>*/}

                        <h4>Vonage<span className={'right'}>Holmdel, NJ</span></h4>
                        <h5>Information Security Associate<span className={'right'}>July - August 2018</span></h5>
                        <p>
                            Vonage is a business cloud communications provider, headquartered in New Jersey. As an
                            Information Security Associate, I worked directly with the the Vonage Information Security
                            team to learn industry practices. Over this summer, I experienced how to integrate
                            software solutions with the team's practices to produce efficient and effective solutions.
                        </p>
                        <ul className={'list'}>
                            <li>Implemented a PostgreSQL vault on an AWS EC2 instance for secure storage/retrieval of team information</li>
                            <li>Developed a Python script to process and record information from vulnerability scans of thousands of hosts</li>
                            <li>Employed Python scripts to facilitate cloning hundreds of GitHub repositories for static source code analysis</li>
                            <li>Reviewed and submitted Jira tickets to track bug fix requests and project progress across company teams</li>
                        </ul>
                        <div className={'skills'} style={{'margin-bottom': '0'}}>
                            <span className={'skill'} style={this.skillProficient}>Python</span>
                            <span className={'skill'} style={this.skillProficient}>Amazon Web Services</span>
                            <span className={'skill'} style={this.skillProficient}>Linux CLI</span>
                            <span className={'skill'} style={this.skillProficient}>Git</span>
                        </div>
                        <div className={'skills'}>
                            <span className={'skill'} style={this.skillCert}>AWS Certified Cloud Practitioner</span>
                        </div>

                        <h3 id='projects'>Software Projects</h3>
                        <hr/>
                        <p>
                            <h4>Calendays</h4>
                            <p>Check it out <a href={'https://calendays-ccfc4.firebaseapp.com'} target={'_blank'} rel={'noopener noreferrer'}>here</a>!</p>
                            <div className={'skills'}>
                                <span className={'skill'} style={this.skillProficient}>React / JSX</span>
                                <span className={'skill'} style={this.skillProficient}>HTML/CSS</span>
                                <span className={'skill'} style={this.skillProficient}>Firebase</span>
                            </div>

                            <h4>Liberty Cars</h4>
                            <p>Check it out <a href={'https://libertycars.firebaseapp.com'} target={'_blank'} rel={'noopener noreferrer'}>here</a>!</p>
                            <div className={'skills'}>
                                <span className={'skill'} style={this.skillProficient}>Vue.js / JavaScript</span>
                                <span className={'skill'} style={this.skillProficient}>HTML/CSS</span>
                                <span className={'skill'} style={this.skillProficient}>Firebase</span>
                            </div>

                            <h4>Interactive Animator</h4>
                            <div className={'skills'}>
                                <span className={'skill'} style={this.skillProficient}>Java / Swing</span>
                                <span className={'skill'} style={this.skillProficient}>MVC</span>
                            </div>

                            <h4>Distributed Key-Value Store</h4>
                            <div className={'skills'}>
                                <span className={'skill'} style={this.skillProficient}>Python</span>
                            </div>
                        </p>
                    </div>
                </div>
                <Footer />
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
                <div className={'intro-profile'}>
                    <div className={'profile-crop'}>
                        <img src={profile} className={'profile-img'} alt={'Profile Image'}/>
                    </div>
                </div>
            );
        }
    }
}

class Footer extends Component {
    render() {
        if (this.props.isMobile) {
            return null;
        } else {
            return (
                <div className={'footer'}>
                    <p>Designed and Built by Justin Konecny</p>
                </div>
            );
        }
    }
}


export default Home;
