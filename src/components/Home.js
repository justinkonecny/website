import React, {Component} from 'react';
import profile from '../resources/profile.jpeg';
import resume from '../resources/resume.pdf';
import Icons from './Icons.js';
import NavBar from './NavBar';
import liberty_cars from '../resources/liberty_cars_results.png';
import animator from '../resources/animator.png';
import '../css/Home.css';
import email from "../resources/mail.svg";

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
        this.skillProficient = {'backgroundColor': '#284496'};
        this.skillKnowledgeable = {'backgroundColor': '#3c65cd'};
        this.skillFamiliar = {'backgroundColor': '#4877ff'};
        this.skillCert = {'backgroundColor': '#eb4d45'};

        // The links passed to the navigation bar component for rendering (on the left)
        this.navLinksLeft = [
            <a className='nav-link' href='#about-me'>
                <div className='nav-inner'>About Me</div>
            </a>,
            <a className='nav-link' href='#education'>
                <div className='nav-inner'>Education</div>
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

                <div className={'intro'}>
                    <div className={'intro-inner'}>
                        <h1>Hi, I'm Justin Konecny.</h1>
                        <p style={{'fontSize': '22px', 'marginRight': '45vw'}}>
                            &#60;/ I'm a <span style={{'fontWeight': '700'}}>Cybersecurity</span> major at
                            <span style={{'fontWeight': '700'}}> Northeastern University</span>, currently
                            pursuing a career in <span style={{'fontWeight': '700'}}>software engineering</span>. />
                        </p>
                        <Icons isMobile={this.state.isMobile}/>
                    </div>
                </div>

                {/* The main body, includes education, software projects, skills, and work experience */}
                {/* ABOUT ME */}
                <div className={this.state.isMobile ? 'about-mobile' : 'about'}>
                    <div className={'about-inner'}>
                        <div className={this.state.isMobile ? 'about-text-mobile' : 'about-text'}>
                            <h3 id={'about-me'} style={{'color': 'white'}}>&#60;/ About Me</h3>
                            <hr/>
                            <div style={{'textIndent': '1.0em', 'marginTop': '20px'}}>
                                <p>
                                    Hello! I'm Justin, a software engineer originally from New Jersey, currently studying
                                    Cybersecurity at Northeastern University in Boston, Massachusetts. I recently started
                                    a six-month co-op at Rocket Software in Waltham, Massachusetts as a Software Engineer.
                                </p>
                                <br/>
                                <p>
                                    I love developing software across the stack and I'm always looking for new opportunities
                                    to expand my skill set.
                                </p>
                            </div>
                        </div>
                        <ProfileImage isMobile={this.state.isMobile}/>
                    </div>

                    <div className={'highlights'}>
                        <div className={'highlight'}>
                            <h4>Languages</h4>
                            <div className={'highlight-skills'}>
                                <div className={'h-skill'} style={this.skillProficient}>Java</div>
                                <div className={'h-skill'} style={this.skillProficient}>Python</div>
                                <div className={'h-skill'} style={this.skillProficient}>C/C++</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>HTML/CSS</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>JavaScript</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>React</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>Racket</div>
                                <div className={'h-skill'} style={this.skillFamiliar}>Assembly</div>
                            </div>
                        </div>

                        <div className={'highlight'}>
                            <h4>Software</h4>
                            <div className={'highlight-skills'}>
                                <div className={'h-skill'} style={this.skillProficient}>Linux</div>
                                <div className={'h-skill'} style={this.skillProficient}>IntelliJ</div>
                                <div className={'h-skill'} style={this.skillProficient}>Eclipse</div>
                                <div className={'h-skill'} style={this.skillProficient}>PyCharm</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>GDB</div>
                                <div className={'h-skill'} style={this.skillKnowledgeable}>Vim</div>
                            </div>
                        </div>

                        <div className={'highlight'}>
                            <h4>Interests</h4>
                            <div className={'highlight-skills'}>
                                <div className={'h-skill'} style={this.skillProficient}>Running</div>
                                <div className={'h-skill'} style={this.skillProficient}>Snowboarding</div>
                                <div className={'h-skill'} style={this.skillProficient}>Traveling</div>
                                <div className={'h-skill'} style={this.skillProficient}>Cooking</div>
                                <div className={'h-skill'} style={this.skillProficient}>Spanish</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={this.state.isMobile ? 'body-mobile' : 'body'}>
                    <div className={'body-info'}>

                        {/* EDUCATION */}
                        <h3 id={'education'}>&#60;/ Education</h3>
                        <hr/>
                        <h4>Northeastern University, Boston, MA</h4>
                        <h5>
                            B.S. Cybersecurity, Concentration Cyber Operations<br/>
                            Minor in Mathematics<br/>
                            Expected 2022
                        </h5>
                        <p>Relevant Coursework:</p>
                        <ul className={'list-container'}>
                            <div className={'list'}>
                                <li>Object-Oriented Design</li>
                                <li>Algorithms & Data Structures</li>
                                <li>Networks & Distributed Systems</li>
                                <li>Computer Systems</li>
                                <li>Theory of Computation</li>
                                <li>Foundations of Cybersecurity</li>
                            </div>
                            <div className={'list'}>
                                <li>Fundamentals of Computer Science 1 & 2</li>
                                <li>Discrete Structures</li>
                                <li>Probability & Statistics</li>
                                <li>Statistics & Stochastic Processes</li>
                                <li>Embedded Design: Robotics</li>
                                <li>Differential Equations & Linear Algebra</li>
                                <li>Linear Algebra</li>
                            </div>
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
                        <h3 id={'experience'}>&#60;/ Professional Experience</h3>
                        <hr/>
                        <h4>Rocket Software, Waltham, MA</h4>
                        <h5>Software Engineer Co-op<br/>July - December 2019</h5>
                        {/*<p>*/}
                            {/*Risus nec feugiat in fermentum posuere urna. Sodales ut etiam sit amet nisl. A erat nam at*/}
                            {/*lectus urna duis convallis convallis tellus. Bibendum neque egestas congue quisque egestas.*/}
                            {/*Eu consequat ac felis donec. Dictum at tempor commodo ullamcorper a lacus vestibulum.*/}
                            {/*Pulvinar etiam non quam lacus suspendisse faucibus. Congue mauris rhoncus aenean vel elit*/}
                            {/*scelerisque. Vulputate mi sit amet mauris commodo. Sit amet mattis vulputate enim nulla.*/}
                        {/*</p>*/}
                        {/*<div className={'skills'}>*/}
                            {/*<span className={'skill'} style={this.skillProficient}>Java</span>*/}
                            {/*<span className={'skill'} style={this.skillProficient}>JavaScript</span>*/}
                            {/*<span className={'skill'} style={this.skillKnowledgeable}>TypeScript</span>*/}
                            {/*<span className={'skill'} style={this.skillKnowledgeable}>Node.js</span>*/}
                            {/*<span className={'skill'} style={this.skillKnowledgeable}>Python</span>*/}
                        {/*</div>*/}
                        <br/>

                        <h4>Vonage, Holmdel, NJ</h4>
                        <h5>Information Security Associate<br/>July - August 2018</h5>
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
                            <span className={'skill'} style={this.skillFamiliar}>Nessus</span>
                        </div>
                        <div className={'skills'}>
                            <span className={'skill'} style={this.skillCert}>AWS Certified Cloud Practitioner</span>
                        </div>
                    </div>
                </div>

                {/* FEATURED SOFTWARE PROJECTS */}
                <div className={'projects'}>
                    <div className={'project-body'}>
                        <h3 id='projects' style={{'color': 'white'}}>&#60;/ Software Projects</h3>
                        <hr/>

                        <h4 style={{'color': 'white'}}>Featured Project</h4>

                        {/*<div className={'project'}>*/}
                            {/*<div>*/}
                                {/*<h4>Calendays</h4>*/}
                                {/*<p>Check it out <a style={{'color': '#3c65cd'}}*/}
                                                   {/*href={'https://calendays-ccfc4.firebaseapp.com'}*/}
                                                   {/*target={'_blank'} rel={'noopener noreferrer'}>here</a>!</p>*/}
                                {/*<div className={'skills'}>*/}
                                    {/*<span className={'skill'} style={this.skillProficient}>React / JSX</span>*/}
                                    {/*<span className={'skill'} style={this.skillProficient}>HTML/CSS</span>*/}
                                    {/*<span className={'skill'} style={this.skillProficient}>Firebase</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*IMG*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        <div className={'project'}>
                            <div className={'project-descript'}>
                                <h4 style={{'marginBottom': '20px'}}>Liberty Cars</h4>
                                <p>
                                    An app developed with Vue.js for simultaneously searching multiple geographic
                                    locations for a used car that matches user-specific criteria.
                                </p>
                                <br/>
                                <p>
                                    Try it out <a style={{'color': '#3c65cd'}}
                                                    href={'https://libertycars.firebaseapp.com'}
                                                    target={'_blank'} rel={'noopener noreferrer'}>here</a>, or
                                    see the code <a style={{'color': '#3c65cd'}}
                                                  href={'https://github.com/justinkonecny/liberty_cars'}
                                                  target={'_blank'} rel={'noopener noreferrer'}>here</a>!
                                </p>
                                <div className={'project-skills'} style={{'margin': '10px 0'}}>
                                    <span className={'proj-skill'} style={this.skillProficient}>Vue.js</span>
                                    <span className={'proj-skill'} style={this.skillProficient}>JavaScript</span>
                                    <span className={'proj-skill'} style={this.skillProficient}>HTML/CSS</span>
                                    <span className={'proj-skill'} style={this.skillProficient}>Firebase</span>
                                </div>
                            </div>
                            <div className={'img-container'}>
                                <div style={{'margin': 'auto'}}>
                                    <img className={'img-proj'} src={liberty_cars}/>
                                </div>
                            </div>
                        </div>

                        <h4 style={{'color': 'white', 'marginTop': '50px'}}>Additional Projects</h4>
                        <div className={'project'}>
                            <div className={'img-container'}>
                                <div style={{'margin': 'auto'}}>
                                    <img className={'img-proj'} src={animator}/>
                                </div>
                            </div>
                            <div className={'project-descript'}>
                                <h4 style={{'marginBottom': '20px'}}>Interactive Animator</h4>
                                <p>
                                    A Java application developed with a Java Swing user interface in a pair programming
                                    setting to read and display textual descriptions of animations. Display modes include
                                    interactive, visual, textual, and SVG. Interactive options developed are pause, resume,
                                    restart, loop on/off, speed increase/decrease, and export animation.
                                </p>
                                <br/>
                                <div className={'project-skills'} style={{'margin': '10px 0'}}>
                                    <span className={'proj-skill'} style={this.skillProficient}>Java</span>
                                    <span className={'proj-skill'} style={this.skillProficient}>Swing</span>
                                    <span className={'proj-skill'} style={this.skillProficient}>MVC</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={this.state.isMobile ? 'body-mobile' : 'body'}>
                    <div className={'body-info'}>
                        <h3 id='contact'>&#60;/ Get In Touch</h3>
                        <hr/>
                        <div style={{'display': 'flex'}}>
                            <a style={{'margin': 'auto', 'textDecoration': 'none'}} href='mailto:konecnyjustin@gmail.com'>
                                <div className={'contact-me'}>
                                    Email Me
                                </div>
                            </a>

                        </div>
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
                <div className={'about-profile'}>
                    <div className={'profile-crop'}>
                        <img src={profile} className={'profile-img'} alt={'Profile'}/>
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
                    <p>Developed by Justin Konecny</p>
                </div>
            );
        }
    }
}


export default Home;
