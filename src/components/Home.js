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
            skipInto: false,
            showAboutMe: false,
            showHighlights: false,
            showNEUSkills: false,
            showVonageSkills: false,
            showRocketSkills: false,
            showLibertySkills: false,
            showAnimatorSkills: false,
            hoverIcons: new Set()
        };
        // The threshold width at which the page switches to the mobile version
        this.mobileThreshold = 850;

        // The number of milliseconds the introduction is delayed
        this.introDelayMS = 2200;
        this.introDelayMobileMS = 500;

        // The y-position of the page just before scrolling
        this.lastScroll = 0;

        // Constants for consistent display
        this.skillProficient = {'backgroundColor': '#284496'};
        this.skillKnowledgeable = {'backgroundColor': '#3c65cd'};
        this.skillFamiliar = {'backgroundColor': '#4877ff'};
        this.skillCert = {'backgroundColor': '#eb4d45'};
    }

    /**
     * Returns the 'normal' links in the navigation bar.
     *
     * @returns {*[]} The list of the 'normal' elements in the navigation bar.
     */
    getNavLinksOther() {
        // The links passed to the navigation bar component for rendering (on the left)
        return ([
            <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#about-me'} key={'navAboutMe'}>
                <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>About Me</div>
            </a>,
            <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#education'} key={'navEducation'}>
                <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>Education</div>
            </a>,
            <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#experience'} key={'navExperience'}>
                <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>Experience</div>
            </a>,
            <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#projects'} key={'navProjects'}>
                <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>Projects</div>
            </a>
        ]);
    }

    /**
     * Returns the 'special' links in the navigation bar.
     *
     * @returns {*[]} The list of the 'main' elements in the navigation bar.
     */
    getNavLinksMain() {
        // The links passed to the navigation bar component for rendering (on the right)
        return ([
            <a className='nav-link main-link resume' href={resume} target={'_blank'} rel={'noopener noreferrer'} key={'navResume'}>
                <div className='nav-inner nav-inner-main'>Resume</div>
            </a>
        ]);
    }

    /**
     * Updates the page's state to show or hide the navigation bar, based on how far down the user has scrolled.
     */
    scrollListener() {
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

        if (window.pageYOffset > 200 && !this.state.skipIntro) {
            // Show the rest of the page before the intro animation finishes if user scrolls down
            this.setState({skipIntro: true});
        }

        // Displays the different sets of skills based on how far the user has scrolled down the page
        if (window.pageYOffset > this.getElementYCoord('animator', 0.60) && this.state.showAnimatorSkills === false) {
            this.setState({showAnimatorSkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('liberty-cars', 0.65) && this.state.showLibertySkills === false) {
            this.setState({showLibertySkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('vonage-skills', 0.9) && this.state.showVonageSkills === false) {
            this.setState({showVonageSkills: true});
        }
        if (window.pageYOffset > this.getElementYCoord('rocket-skills', 0.9) && this.state.showRocketSkills === false) {
            this.setState({showRocketSkills: true});
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
        window.addEventListener('resize', this.resizeListener);
        window.addEventListener('scroll', this.scrollListener);

        if (window.innerWidth <= this.mobileThreshold) {
            this.setState({isMobile: true});
            setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMobileMS);
        } else {
            setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMS);
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
     * Handles adding event listeners for binding animation classes to all skills.
     */
    componentDidMount() {
        let all = Array.from(document.getElementsByClassName('skill-all'));

        for (let i = 0; i < all.length; i++) {
            all[i].addEventListener('mouseover', function(e) {
                all[i].classList.add('skill-animation')
            });

            all[i].addEventListener('animationend', function(e) {
                all[i].classList.remove('skill-animation');
            });
        }

        const icons = Array.from(document.getElementsByClassName('contact-icon'));

        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener('mouseover', function (e) {
                icons[i].classList.add('skill-animation');
                const hoverIcons = this.state.hoverIcons;
                hoverIcons.add(icons[i].id);
                this.setState({hoverIcons: hoverIcons});
            }.bind(this));

            icons[i].addEventListener('animationend', function (e) {
                icons[i].classList.remove('skill-animation');
                const hoverIcons = this.state.hoverIcons;
                hoverIcons.delete(icons[i].id);
                this.setState({hoverIcons: hoverIcons});
            }.bind(this));
        }
    }

    /**
     * Given a project title and the content to display, returns the properly formatted project component.
     *
     * @param title The name of the project.
     * @param content The content to display (surrounded by <p> tags if required)
     * @returns {*} The project html
     */
    getAdditionalProject(title, content) {
        return (
            <div className={this.state.isMobile ? 'additional-projects-container-mobile' : 'additional-projects-container'}>
                <div className={this.state.isMobile ? 'additional-projects-content-mobile' : 'additional-projects-content content-left'}>
                    <h5>{ title }</h5>
                </div>
                <div className={this.state.isMobile ? 'additional-projects-content-mobile' : 'additional-projects-content content-right'}>
                    { content }
                </div>
            </div>
        );
    }

    getIntroType() {
        // var TxtRotate = function(el, toRotate, period) {
        //     this.toRotate = toRotate;
        //     this.el = el;
        //     this.loopNum = 0;
        //     this.period = parseInt(period, 10) || 2000;
        //     this.txt = '';
        //     this.tick();
        //     this.isDeleting = false;
        // };
        //
        // TxtRotate.prototype.tick = function() {
        //     var i = this.loopNum % this.toRotate.length;
        //     var fullTxt = this.toRotate[i];
        //
        //     if (this.isDeleting) {
        //         this.txt = fullTxt.substring(0, this.txt.length - 1);
        //     } else {
        //         this.txt = fullTxt.substring(0, this.txt.length + 1);
        //     }
        //
        //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        //
        //     var that = this;
        //     var delta = 300 - Math.random() * 100;
        //
        //     if (this.isDeleting) { delta /= 2; }
        //
        //     if (!this.isDeleting && this.txt === fullTxt) {
        //         delta = this.period;
        //         this.isDeleting = true;
        //     } else if (this.isDeleting && this.txt === '') {
        //         this.isDeleting = false;
        //         this.loopNum++;
        //         delta = 500;
        //     }
        //
        //     setTimeout(function() {
        //         that.tick();
        //     }, delta);
        // };
    }

    /**
     * Renders this component.
     */
    render() {
        return (
            <div>
                <NavBar isMobile={this.state.isMobile} display={this.state.showNavBar} linksLeft={this.getNavLinksOther()} linksRight={this.getNavLinksMain()}/>
                <div className={this.state.isMobile ? 'intro intro-mobile' : 'intro'}>
                    <div className={this.state.isMobile ? 'intro-inner intro-inner-mobile' : 'intro-inner'}>
                        <h1 id={'name'} className={this.state.isMobile ? 'name-mobile' : 'name-desk'}>Hi, I'm Justin Konecny.</h1>
                        <div className={this.state.showIntro ? 'fade-in' : 'fade-in-hide'} style={this.state.showIntro ? {} : {'top': '20px'}}>
                            <p className={this.state.isMobile ? 'intro-blurb intro-blurb-mobile' : 'intro-blurb'}>
                                I'm a <span style={{'fontWeight': '700'}}>Cybersecurity</span> major at
                                <span style={{'fontWeight': '700'}}> Northeastern University</span>, currently
                                pursuing a career in <span style={{'fontWeight': '700'}}>software engineering</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The main body, includes education, software projects, skills, and work experience */}
                {/* ABOUT ME */}
                <div className={this.state.skipIntro ? {} : (this.state.showIntro ? 'fade-in' : 'fade-in-hide')}>
                    <div className={this.state.isMobile ? 'about about-mobile' : 'about'}>
                        <div className={this.state.isMobile ? 'about-inner about-inner-mobile' : 'about-inner'}>
                            <div className={this.state.isMobile ? 'about-text about-text-mobile' : 'about-text'}>
                                <h3 id={'about-me'} style={{'color': 'white'}}>About Me</h3>
                                <div className={this.state.showAboutMe ? 'fade-in' : 'fade-in-hide'}
                                     style={{'margin': '20px auto'}}>
                                    <p>
                                        Hello! I'm Justin, a software engineer originally from New Jersey, currently studying
                                        Cybersecurity at Northeastern University in Boston, Massachusetts. I recently started
                                        a six-month co-op at Rocket Software in Waltham, Massachusetts as a Software Engineer.
                                    </p>
                                    <br/>
                                    <p>
                                        I love developing software across the stack, and I'm always looking for new opportunities
                                        to expand my skill set. I'm looking for opportunities to make meaningful software
                                        contributions to real products.
                                    </p>
                                </div>
                            </div>
                            <ProfileImage isMobile={this.state.isMobile}/>
                        </div>

                        <div id={'highlights'} className={this.state.isMobile ? 'highlights highlights-mobile' : 'highlights'}>
                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4 className={'highlight-title'}>Languages</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Java</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Python</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>C/C++</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>JavaScript</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>TypeScript</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>HTML/CSS</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>React</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>Vue.js</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>Racket</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillFamiliar}>AMD64 Assembly</div>
                                    </div>
                                </div>
                            </div>

                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4 className={'highlight-title'}>Software</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Linux</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Jira</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>IntelliJ</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Eclipse</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>PyCharm</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>VS Code</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>LaTeX</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>GDB</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>Vim</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillKnowledgeable}>XCode</div>
                                    </div>
                                </div>
                            </div>

                            <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                <h4 className={'highlight-title'}>Interests</h4>
                                <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                    <div className={'highlight-skills'}>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Running</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Snowboarding</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Traveling</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Cooking</div>
                                        <div className={'skill-all highlight-skill'} style={this.skillProficient}>Spanish Culture</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={this.state.isMobile ? 'body body-mobile' : 'body'}>
                        <div className={'body-info'}>

                            {/* EDUCATION */}
                            <h3 id={'education'}>Education</h3>
                            <h4>Northeastern University, Boston, MA</h4>
                            <h5>
                                B.S. Cybersecurity, Concentration Cyber Operations<br/>
                                Minor in Mathematics<br/>
                                Expected 2022
                            </h5>
                            <p>Relevant Coursework:</p>
                            <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'} style={{'padding': '0'}}>
                                    <li>Object-Oriented Design</li>
                                    <li>Algorithms & Data Structures</li>
                                    <li>Networks & Distributed Systems</li>
                                    <li>Computer Systems</li>
                                    <li>Theory of Computation</li>
                                    <li>Foundations of Cybersecurity</li>
                                </div>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                    <li>Fundamentals of CS 1 & 2</li>
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
                            <h4>Rocket Software</h4>
                            <h5>Software Engineer Co-op<br/>July - December 2019 | Waltham, MA</h5>
                            <p>
                                Rocket Software is a software development firm that develops products that are designed to
                                run on mainframes, Linux/Unix/Windows, IBM i, cloud, and hybrid/virtualized systems.
                            </p>
                            <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                    <li>Developed a TypeScript plugin for an open-source command line application to get, put, post, and delete information to REST API endpoints</li>
                                    <li>Migrated fifty Java servlet-style API endpoints to use Spring Web MVC annotation-based registration, license checking, and user authorization</li>
                                    <li>Created a global shutdown helper in a Java application to register, track, and wait for hundreds of threads to finish working before safely exiting</li>
                                    <li>Successfully completed many Jira tickets for developing new product features, fixing bugs, and designing new QA tests as a Scrum team member</li>
                                </div>
                            </ul>
                            <div id={'rocket-skills'} className={this.state.showRocketSkills ? 'skills fade-in' : 'skills fade-in-hide'} style={{'marginBottom': '0'}}>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>Java</span>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>Python</span>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>TypeScript</span>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>JavaScript</span>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>Linux CLI</span>
                                <span className={'skill-all body-skill'} style={this.skillProficient}>Git</span>
                            </div>

                            <br/>

                            <h4>Vonage</h4>
                            <h5>Information Security Associate<br/>July - August 2018 | Holmdel, NJ</h5>
                            <p>
                                Vonage is a business cloud communications provider, headquartered in New Jersey. As an
                                Information Security Associate, I worked directly with the the Vonage Information Security
                                team to develop software-based solutions for internal use.
                            </p>
                            <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                    <li>Implemented a HashiCorp vault to use PostgreSQL on an AWS EC2 instance for secure storage and retrieval of sensitive team information</li>
                                    <li>Developed a Python script to process and record information from the results of scanning thousands of hosts for potential network vulnerabilities</li>
                                    <li>Designed a Python script to facilitate cloning hundreds of GitHub repositories for static source code analysis to identify vulnerabilities</li>
                                </div>
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

                            <div className={this.state.isMobile ? 'project project-mobile' : 'project'}>
                                <div className={this.state.isMobile ? 'project-descript project-descript-mobile' : 'project-descript'}>
                                    <h5 id={'liberty-cars'} style={{'marginBottom': '20px', 'fontSize': '24px', 'fontWeight': '600'}}>Liberty Cars</h5>
                                    <p>
                                        An app developed with Vue.js for simultaneously searching multiple geographic
                                        locations for a used car. Search criteria is entered by the user on the initial page,
                                        which is then processed to make asynchronous requests for the listing data in each
                                        location. The results are then presented to the user for viewing.
                                    </p>
                                    <br/>
                                    {/*<p>*/}
                                        {/*/!*Try it out <a style={{'color': '#3c65cd'}}*!/*/}
                                                      {/*/!*href={'https://libertycars.firebaseapp.com'}*!/*/}
                                                      {/*/!*target={'_blank'} rel={'noopener noreferrer'}>here</a>, or*!/*/}
                                        {/*Check out the code <a style={{'color': '#3c65cd'}}*/}
                                                        {/*href={'https://github.com/justinkonecny/liberty_cars'}*/}
                                                        {/*target={'_blank'} rel={'noopener noreferrer'}>here</a>!*/}
                                    {/*</p>*/}
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

                            <div className={this.state.isMobile ? 'project project-mobile' : 'project'}>
                                <div className={this.state.isMobile ? 'project-descript project-descript-mobile' : 'project-descript'}>
                                    <h5 id={'animator'} style={{'marginBottom': '20px', 'fontSize': '24px', 'fontWeight': '600'}}>Interactive Animator</h5>
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
                                <div className={this.state.isMobile ? 'img-container img-container-mobile' : 'img-container'}>
                                    <div style={{'margin': 'auto'}}>
                                        <img className={'img-proj'} src={animator} alt={'Animator'}/>
                                    </div>
                                </div>
                            </div>

                            <div className={'additional-projects'}>
                                <h4 id={'additional-projects'} style={{'marginBottom': '20px'}}>Additional Projects</h4>

                                {/* Distributed Key-Value STore*/}
                                {this.getAdditionalProject('Distributed, Replicated Key-Value Store',
                                    (<p>
                                        Implemented the <a style={{'color': '#3c65cd'}}
                                                       href={'https://raft.github.io/raft.pdf'}
                                                       target={'_blank'} rel={'noopener noreferrer'}>raft</a> consensus
                                        protocol in Python to create a key-value store that accepts <i>put</i>s from
                                        clients and retrieves the corresponding data when receiving a <i>get</i>.
                                        All data from clients was replicated, in an attempt to maintain consistency
                                        (clients should always receive correct answers to <i>get</i> requests) and
                                        achieve high-availability (clients should be able to
                                        execute <i>put</i> and <i>get</i> requests at any time with low latency.
                                    </p>))}

                                {/* Reliable Transport Protocol */}
                                {this.getAdditionalProject('Reliable Transport Protocol',
                                    (<p>
                                        Designed and developed a simple transport protocol in Python that provided a
                                        reliable datagram service and ensured that data was delivered in order,
                                        without duplicates, without missing data, and without errors.
                                    </p>))}

                                {/* File System */}
                                {this.getAdditionalProject('File System',
                                    (<p>
                                        Programmed a mountable, ext-style file system in C using the FUSE API and
                                        memory-mapped file storage. Implemented a disk image to allow users to
                                        create, read, edit, and delete variable-length files within nested directories.
                                    </p>))}

                                {/* Memory Allocator */}
                                {this.getAdditionalProject('Memory Allocator',
                                    (<p>
                                        Created a thread-safe memory allocator in C using mutexes, memory-mapped pages,
                                        and pointer arithmetic. The allocator utilized bucket-style free-lists to handle
                                        allocation, reallocation and freeing of varying sized memory chunks.
                                    </p>))}
                            </div>

                        </div>
                    </div>

                    <div className={this.state.isMobile ? 'body body-mobile' : 'body'}>
                        <div className={'body-info'} style={{'display': 'flex'}}>
                            <div style={this.state.isMobile
                                ? {'margin': 'auto', 'textAlign': 'center', 'padding': '0 5vw'}
                                : {'margin': 'auto', 'textAlign': 'center', 'padding': '0 15vw'}}>
                                <h3 id='contact'>LET'S GET IN TOUCH</h3>
                                <p>
                                    I am currently seeking opportunities for a co-op position or internship for July - December
                                    2020 in a software engineering roll.
                                </p>
                                <br/>
                                <p>
                                    Looking to chat about my work experiences or any of my projects? Feel free to reach out!
                                </p>
                                <Icons isMobile={this.state.isMobile} hoverIcons={this.state.hoverIcons} />
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
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
