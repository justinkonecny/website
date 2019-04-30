import React, {Component} from 'react';
import profile from '../resources/profile.jpeg';
import resume from '../resources/resume.pdf';
import Icons from './Icons.js';
import NavBar from './NavBar';
import '../css/Home.css';

/**
 * Component for the home page (the main website display component).
 * Renders the navigation bar and the website body.
 */
class Home extends Component {
    /**
     * Creates the home component with the given props.
     *
     * @param props The properties passed to this component.
     */
    constructor(props) {
        super(props);
        // Scroll listener to handle hiding the navigation bar
        this.scrollListener = this.scrollListener.bind(this);
        // Resize listener to handle switching to a mobile display
        this.resizeListener = this.resizeListener.bind(this);
        // The current state of the page
        this.state = {isMobile: false, showNavBar: true};
        // The threshold width at which the page switches to the mobile version
        this.mobileThreshold = 850;

        // Constants for consistent display
        this.skillProficient = {'border-color': '#125eff'};
        this.skillKnowledgeable = {'border-color': '#81a4ff'};
        this.skillFamiliar = {'border-color': '#a5c5ff'};
        this.skillCert = {'border-color': '#eb4d45'};

        // The links passed to the navigation bar component for rendering (on the left)
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
        // The links passed to the navigation bar component for rendering (on the right)
        this.navLinksRight = [
            <a className='nav-link main-link' href={resume} target={'_blank'} rel={'noopener noreferrer'}>
                <div className='nav-inner nav-inner-main'>Resume</div>
            </a>
        ];
    }

    /**
     * Updates the page's state to show or hide the navigation bar, based on how far down the user has scrolled.
     */
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

    /**
     * Updates the page's state to the mobile or desktop version, based on the current window width.
     */
    resizeListener() {
        if (window.innerWidth <= this.mobileThreshold && !this.state.isMobile) {
            // Handles resizing to a smaller width window
            this.setState({isMobile: true});
        } else if (window.innerWidth > this.mobileThreshold && this.state.isMobile) {
            // Handles resizing to a larger width window
            this.setState({isMobile: false});
        }
    }

    /**
     * Sets this component's scroll listener and resize listener.
     * Updates the current state to mobile if the window width is less than the mobile width threshold.
     */
    componentWillMount() {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.resizeListener);

        if (window.innerWidth <= this.mobileThreshold) {
            this.setState({isMobile: true});
        }
    }

    /**
     * Removes this component's scroll listener and resize listener.
     */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.resizeListener);
    }

    /**
     * Renders this component.
     */
    render() {
        return (
            <div>
                <NavBar display={this.state.showNavBar} linksLeft={this.navLinksLeft} linksRight={this.navLinksRight}/>

                {/* The introduction section, includes name, picture, and social media icons */}
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

                {/* The main body, includes education, software projects, skills, and work experience */}
                {/* EDUCATION */}
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

                        {/* WORK EXPERIENCE */}
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
                            <li>Implemented a PostgreSQL vault on an AWS EC2 instance for secure storage/retrieval of
                                team information
                            </li>
                            <li>Developed a Python script to process and record information from vulnerability scans of
                                thousands of hosts
                            </li>
                            <li>Employed Python scripts to facilitate cloning hundreds of GitHub repositories for static
                                source code analysis
                            </li>
                            <li>Reviewed and submitted Jira tickets to track bug fix requests and project progress
                                across company teams
                            </li>
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

                        {/* FEATURED SOFTWARE PROJECTS */}
                        <h3 id='projects'>Software Projects</h3>
                        <hr/>
                        <p>
                            <h4>Calendays</h4>
                            <p>Check it out <a href={'https://calendays-ccfc4.firebaseapp.com'} target={'_blank'}
                                               rel={'noopener noreferrer'}>here</a>!</p>
                            <div className={'skills'}>
                                <span className={'skill'} style={this.skillProficient}>React / JSX</span>
                                <span className={'skill'} style={this.skillProficient}>HTML/CSS</span>
                                <span className={'skill'} style={this.skillProficient}>Firebase</span>
                            </div>

                            <h4>Liberty Cars</h4>
                            <p>Check it out <a href={'https://libertycars.firebaseapp.com'} target={'_blank'}
                                               rel={'noopener noreferrer'}>here</a>!</p>
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
                <Footer/>
            </div>
        );
    }
}

/**
 * Component to crop and display the profile image. Does not render on a mobile device.
 */
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

/**
 * Component for the footer displayed at the bottom of the page. Does not render on a mobile device.
 */
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
