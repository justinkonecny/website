import React, {Component} from 'react';
import profile from '../resources/profile.jpeg';
import resume from '../resources/resume.pdf';
import Icons from './Icons.js';
import NavBar from './NavBar';
import liberty_cars from '../resources/liberty_cars_results.png';
import animator from '../resources/animator.png';
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
        this.state = {
            isMobile: false,
            showNavBar: false,
            showIntro: false,
            showAboutMe: false,
            showHighlights: false,
            showNEUSkills: false,
            showVonageSkills: false,
            showLibertySkills: false,
            showAnimatorSkills: false
        };
        // The threshold width at which the page switches to the mobile version
        this.mobileThreshold = 850;

        // The number of milliseconds the introduction is delayed
        this.introDelayMS = 2000;

        // The y-position of the page just before scrolling
        this.lastScroll = 0;

        // Constants for consistent display
        this.skillProficient = {'backgroundColor': '#284496'};
        this.skillKnowledgeable = {'backgroundColor': '#3c65cd'};
        this.skillFamiliar = {'backgroundColor': '#4877ff'};
        this.skillCert = {'backgroundColor': '#eb4d45'};

        // The links passed to the navigation bar component for rendering (on the left)
        this.navLinksLeft = [
            <a className='nav-link' href='#about-me' key={'navAboutMe'}>
                <div className='nav-inner'>About Me</div>
            </a>,
            <a className='nav-link' href='#education' key={'navEducation'}>
                <div className='nav-inner'>Education</div>
            </a>,
            <a className='nav-link' href='#experience' key={'navExperience'}>
                <div className='nav-inner'>Experience</div>
            </a>,
            <a className='nav-link' href='#projects' key={'navProjects'}>
                <div className='nav-inner'>Projects</div>
            </a>
        ];
        // The links passed to the navigation bar component for rendering (on the right)
        this.navLinksRight = [
            <a className='nav-link main-link' href={resume} target={'_blank'} rel={'noopener noreferrer'} key={'navResume'}>
                <div className='nav-inner nav-inner-main'>Resume</div>
            </a>
        ];
    }

    /**
     * Updates the page's state to show or hide the navigation bar, based on how far down the user has scrolled.
     */
    scrollListener() {
        console.log(window.pageYOffset);
        if (window.pageYOffset < 50) {
            // Handles scrolling to top of page
            this.setState({showNavBar: true});
        } else if (window.pageYOffset > this.lastScroll) {
            // Scrolling towards bottom of page
            this.lastScroll = window.pageYOffset;
            this.setState({showNavBar: false});
        } else if ( this.lastScroll - window.pageYOffset > 50) {
            // Scrolling towards top of the page
            this.lastScroll = window.pageYOffset;
            this.setState({showNavBar: true});
        }

        if (window.pageYOffset > this.getElementYCoord('animator', 0.60) && this.state.showAnimatorSkills === false) {
            this.setState({showAnimatorSkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('liberty-cars', 0.65) && this.state.showLibertySkills === false) {
            this.setState({showLibertySkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('vonage-skills', 0.9) && this.state.showVonageSkills === false) {
            this.setState({showVonageSkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('neu-skills', 0.9) && this.state.showNEUSkills === false) {
            this.setState({showNEUSkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('highlights', 0.65) && this.state.showHighlights === false) {
            this.setState({showHighlights: true});
        }
        if (window.pageYOffset > this.getElementYCoord('about-me', 0.75) && this.state.showAboutMe === false) {
            this.setState({showAboutMe: true});
        }

    }

    /**
     * Returns the y position of an element with the given id of name, and adjusts the coordinate by the given offset.
     *
     * @param name The id of the element.
     * @param offset The amount to adjust the position by (as a percentage of window height).
     * @returns {number} The adjusted y position of the element.
     */
    getElementYCoord(name, offset) {
        return document.getElementById(name).getBoundingClientRect().top + window.scrollY - (offset * window.innerHeight);
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
        // window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.resizeListener);
        window.addEventListener('scroll', this.scrollListener);
        setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMS);

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
                <NavBar isMobile={this.state.isMobile} display={this.state.showNavBar} linksLeft={this.navLinksLeft} linksRight={this.navLinksRight}/>
                <div className={this.state.isMobile ? 'intro intro-mobile' : 'intro'}>
                    <div className={this.state.isMobile ? 'intro-inner intro-inner-mobile' : 'intro-inner'}>
                        <h1 id={'name'} className={this.state.isMobile ? 'name-mobile' : 'name-desk'}>Hi, I'm Justin Konecny.</h1>
                        <div className={this.state.showIntro ? 'fade-in' : 'fade-in-hide'} style={this.state.showIntro ? {} : {'top': '200px'}}>
                            <p className={this.state.isMobile ? 'intro-blurb intro-blurb-mobile' : 'intro-blurb'}>
                                I'm a <span style={{'fontWeight': '700'}}>Cybersecurity</span> major at
                                <span style={{'fontWeight': '700'}}> Northeastern University</span>, currently
                                pursuing a career in <span style={{'fontWeight': '700'}}>software engineering</span>.
                            </p>
                            <Icons isMobile={this.state.isMobile} />
                        </div>
                    </div>
                </div>

                {/* The main body, includes education, software projects, skills, and work experience */}
                {/* ABOUT ME */}
                <div className={this.state.showIntro ? 'fade-in' : 'fade-in-hide'}>
                    <div className={this.state.isMobile ? 'about about-mobile' : 'about'}>
                        <div className={this.state.isMobile ? 'about-inner about-inner-mobile' : 'about-inner'}>
                            <div className={this.state.isMobile ? 'about-text about-text-mobile' : 'about-text'}>
                                <h3 id={'about-me'} style={{'color': 'white'}}>About Me</h3>
                                <hr/>
                                <div className={this.state.showAboutMe ? 'fade-in' : 'fade-in-hide'}
                                     style={{'textIndent': '1.0em', 'margin': '20px auto'}}>
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

                        <div id={'highlights'} className={this.state.isMobile ? 'highlights highlights-mobile' : 'highlights'}>
                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4>Languages</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Java</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Python</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>C/C++</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>HTML/CSS</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>JavaScript</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>React</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>Racket</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillFamiliar}>Assembly</div>
                                    </div>
                                </div>
                            </div>

                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4>Software</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Linux</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>IntelliJ</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Eclipse</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>PyCharm</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>GDB</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>Vim</div>
                                    </div>
                                </div>
                            </div>

                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4>Interests</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Running</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Snowboarding</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Traveling</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Cooking</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Spanish</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={this.state.isMobile ? 'body body-mobile' : 'body'}>
                    <div className={'body-info'}>

                        {/* EDUCATION */}
                        <h3 id={'education'}>Education</h3>
                        <hr/>
                        <h4>Northeastern University, Boston, MA</h4>
                        <h5>
                            B.S. Cybersecurity, Concentration Cyber Operations<br/>
                            Minor in Mathematics<br/>
                            Expected 2022
                        </h5>
                        <p>Relevant Coursework:</p>
                        <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
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
                        <div id={'neu-skills'} className={this.state.showNEUSkills ? 'skills fade-in' : 'skills fade-in-hide'}>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Java</span>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Python</span>
                            <span className={'skill-all body-skill'} style={this.skillKnowledgeable}>C/C++</span>
                            <span className={'skill-all body-skill'} style={this.skillKnowledgeable}>Racket</span>
                            <span className={'skill-all body-skill'} style={this.skillKnowledgeable}>LaTeX</span>
                            <span className={'skill-all body-skill'} style={this.skillKnowledgeable}>Git</span>
                            <span className={'skill-all body-skill'} style={this.skillFamiliar}>AMD64 Assembly</span>
                        </div>

                        {/* WORK EXPERIENCE */}
                        <h3 id={'experience'}>Professional Experience</h3>
                        <hr/>
                        <h4>Rocket Software, Waltham, MA</h4>
                        <h5>Software Engineer Co-op<br/>July - December 2019</h5>
                        <br/>

                        <h4>Vonage, Holmdel, NJ</h4>
                        <h5>Information Security Associate<br/>July - August 2018</h5>
                        <p>
                            Vonage is a business cloud communications provider, headquartered in New Jersey. As an
                            Information Security Associate, I worked directly with the the Vonage Information Security
                            team to develop software-based solutions for internal use.
                        </p>
                        <ul className={'list'}>
                            <li>Implemented a PostgreSQL vault on an AWS EC2 instance for secure storage of team information
                            </li>
                            <li>Developed a Python script to process information from vulnerability scans of thousands of hosts
                            </li>
                            <li>Employed Python scripts to clone hundreds of GitHub repositories for static source code analysis
                            </li>
                            <li>Reviewed Jira tickets to track bug fix requests and project progress across company teams
                            </li>
                        </ul>
                        <div id={'vonage-skills'} className={this.state.showVonageSkills ? 'skills fade-in' : 'skills fade-in-hide'} style={{'marginBottom': '0'}}>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Python</span>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Amazon Web Services</span>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Linux CLI</span>
                            <span className={'skill-all body-skill'} style={this.skillProficient}>Git</span>
                            <span className={'skill-all body-skill'} style={this.skillFamiliar}>Nessus</span>
                            <br/> <br/>
                            <span className={'skill-all body-skill'} style={this.skillCert}>AWS Certified Cloud Practitioner</span>
                        </div>
                    </div>
                </div>

                {/* FEATURED SOFTWARE PROJECTS */}
                <div className={'projects'}>
                    <div className={this.state.isMobile ? 'project-body project-body-mobile' : 'project-body'}>
                        <h3 id='projects' style={{'color': 'white'}}>Software Projects</h3>
                        <hr/>

                        <div className={this.state.isMobile ? 'project project-mobile' : 'project'}>
                            <h4 id={'liberty-cars'} style={{'marginBottom': '20px'}}>Liberty Cars</h4>
                            <div className={this.state.isMobile ? 'project-descript project-descript-mobile' : 'project-descript'}>
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
                                <div className={this.state.showLibertySkills ? 'project-skills fade-in' : 'project-skills fade-in-hide'} style={{'margin': '10px 0'}}>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>Vue.js</span>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>JavaScript</span>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>HTML/CSS</span>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>Firebase</span>
                                </div>
                            </div>
                            <div className={this.state.isMobile ? 'img-container img-container-mobile' : 'img-container'}>
                                <div style={{'margin': 'auto'}}>
                                    <img className={'img-proj'} src={liberty_cars} alt={'Liberty Cars'}/>
                                </div>
                            </div>
                        </div>

                        {/*<h4 style={{'color': 'white', 'marginTop': '50px'}}>Additional Projects</h4>*/}
                        <div className={this.state.isMobile ? 'project project-mobile' : 'project'}>
                            <h4 id={'animator'} style={{'marginBottom': '20px'}}>Interactive Animator</h4>
                            <div className={this.state.isMobile ? 'img-container img-container-mobile' : 'img-container'}>
                                <div style={{'margin': 'auto', 'width': '90%'}}>
                                    <img className={'img-proj'} src={animator} alt={'Animator'}/>
                                </div>
                            </div>
                            <div className={this.state.isMobile ? 'project-descript project-descript-mobile' : 'project-descript'}>
                                <p>
                                    A Java application developed with a Java Swing user interface in a pair programming
                                    setting to read and display textual descriptions of animations. Display modes include
                                    interactive, visual, textual, and SVG. Interactive options developed are pause, resume,
                                    restart, loop on/off, speed increase/decrease, and export animation.
                                </p>
                                <br/>
                                <div className={this.state.showAnimatorSkills ? 'project-skills fade-in' : 'project-skills fade-in-hide'} style={{'margin': '10px 0'}}>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>Java</span>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>Swing</span>
                                    <span className={'skill-all proj-skill'} style={this.skillProficient}>MVC</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p style={{'color': 'white', 'fontSize': '30px'}}>
                                See More
                            </p>
                        </div>

                    </div>
                </div>

                <div className={'body'}>
                    <div className={'body-info'}>
                        <h3 id='contact'>Get In Touch</h3>
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
        return (
            <div className={this.props.isMobile ? 'about-profile-mobile' : 'about-profile'}>
                <div className={this.props.isMobile ? 'profile-crop profile-crop-mobile' : 'profile-crop'}>
                    <img src={profile} className={this.props.isMobile ? 'profile-img profile-img-mobile' : 'profile-img'} alt={'Profile'}/>
                </div>
            </div>
        );
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
