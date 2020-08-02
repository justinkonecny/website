import React, {Component} from 'react';
import profile from '../resources/profile.jpeg';
import calendays from '../resources/calendays.png';
import libertyCars from '../resources/liberty_cars_results.png';
import '../css/Home.scss';
import {TimelineElement} from './TimelineElement';
import {ExpandableText} from './ExpandableText';
import {Card} from './Card';
import {Timeline} from './Timeline';
import {NavBar} from './NavBar';
import {ContactForm} from './ContactForm';
import {FeaturedProject} from './FeaturedProject';


export const Sections = {
    CONTACT: 'contact',
    PROJECTS: 'projects',
    EXPERIENCE: 'experience',
    EDUCATION: 'education',
    ABOUT: 'about-me',
    HOME: 'name'
};

/**
 * Component for the home page (the main website display component).
 * Renders the navigation bar and the website body.
 */
export class Home extends Component {

    /**
     * Creates the home component with the given props.
     *
     * @param props The properties passed to this component.
     */
    constructor(props) {
        super(props);

        this.setupSkillHover = this.setupSkillHover.bind(this);
        this.setupNavHover = this.setupNavHover.bind(this);
        this.getSectionOffset = this.getSectionOffset.bind(this);

        // Scroll listener to handle hiding the navigation bar
        this.scrollListener = this.scrollListener.bind(this);
        // Resize listener to handle switching to a mobile display
        this.resizeListener = this.resizeListener.bind(this);
        // Handles animating the intro text for desktop version
        this.typeName = this.typeName.bind(this);
        // The current state of the page
        this.state = {
            currentSection: Sections.HOME,

            isMobile: false,
            showNavBar: true,
            showIntro: true,
            skipInto: true,
            showAboutMe: true,
            showHighlights: true,
            showNEUSkills: true,
            showVonageSkills: true,
            showRocketSkills: true,
            showLibertySkills: true,
            showAnimatorSkills: true,
            hoverIcons: new Set()
        };
        // The threshold width at which the page switches to the mobile version
        this.mobileThreshold = 850;

        // The number of milliseconds the introduction is delayed
        this.introDelayMS = 2500;
        this.introDelayMobileMS = 500;

        // The y-position of the page just before scrolling
        this.lastScroll = 0;

        // The animated text that appears at the top of the page
        this.introText = ['Hi, I\'m justin Konecny.', 'Hi, I\'m Justin Konecny.'];
    }

    getSectionOffset(elementId) {
        const element = document.getElementById(elementId);
        const elementBounds = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heightAdjustment = (0.5 * elementBounds.height) - 6;  // (1/2)(elementHeight) - (1/2)(dotHeight + borderSize)

        return elementBounds.y + heightAdjustment + scrollTop - (0.5 * window.innerHeight);
    }

    /**
     * Updates the page's state to show or hide the navigation bar, based on how far down the user has scrolled.
     */
    scrollListener() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // if (window.pageYOffset < 50) {
        //     // Handles scrolling to top of page
        //     this.setState({showNavBar: true});
        // } else if (window.pageYOffset > this.lastScroll) {
        //     // Scrolling towards bottom of page
        //     this.lastScroll = window.pageYOffset;
        //     this.setState({showNavBar: false});
        // } else if (this.lastScroll - window.pageYOffset > 50) {
        //     // Scrolling towards top of the page
        //     this.lastScroll = window.pageYOffset;
        //     this.setState({showNavBar: true});
        // }

        // if (window.pageYOffset > 200 && !this.state.skipIntro) {
        //     // Show the rest of the page before the intro animation finishes if user scrolls down
        //     this.setState({skipIntro: true});
        // }

        // Displays the different sets of skills based on how far the user has scrolled down the page
        // if (window.pageYOffset > this.getElementYCoord('animator', 0.60) && this.state.showAnimatorSkills === false) {
        //     this.setState({showAnimatorSkills: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('liberty-cars', 0.65) && this.state.showLibertySkills === false) {
        //     this.setState({showLibertySkills: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('vonage-skills', 0.9) && this.state.showVonageSkills === false) {
        //     this.setState({showVonageSkills: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('rocket-skills', 0.9) && this.state.showRocketSkills === false) {
        //     this.setState({showRocketSkills: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('neu-skills', 0.9) && this.state.showNEUSkills === false) {
        //     this.setState({showNEUSkills: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('highlights', 0.65) && this.state.showHighlights === false) {
        //     this.setState({showHighlights: true});
        // }
        // if (window.pageYOffset > this.getElementYCoord('about-me', 0.75) && this.state.showAboutMe === false) {
        //     this.setState({showAboutMe: true});
        // }

        // console.log(scrollTop, this.getSectionOffset(Sections.ABOUT));

        // if (this.state.currentSection !== Sections.HOME && scrollTop < this.getSectionOffset(Sections.ABOUT)) {
        //     this.setState({currentSection: Sections.HOME});
        //     return;
        // }

        for (let sectionKey in Sections) {
            const sectionId = Sections[sectionKey];
            const sectionOffset = this.getSectionOffset(sectionId);
            if (scrollTop >= sectionOffset) {
                if (this.state.currentSection !== sectionId) {
                    this.setState({currentSection: sectionId});
                }
                return;
            }
        }
    }

    /**
     * Returns the y position of an element with the given id of name, and adjusts the coordinate by the given getOffset.
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
     * Handles animating the 'introText' letter by letter.
     */
    typeName() {
        const el = document.getElementById('name');
        const fullTextCorrect = this.introText[1];
        let fullTextLower = this.introText[0];
        let hasDeleted = false;

        const back = function () {
            hasDeleted = true;
            el.innerHTML = fullTextLower.substring(0, el.innerHTML.length - 1);
        };

        const type = function () {
            el.innerHTML = fullTextLower.substring(0, el.innerHTML.length + 1);
            const timeout = Math.random() * 50;
            if (!hasDeleted && el.innerHTML.length === 10) {
                setTimeout(() => {
                    back()
                }, 50 + timeout);
                setTimeout(() => {
                    back()
                }, 125 + (2 * timeout));
                fullTextLower = fullTextCorrect;
                setTimeout(() => {
                    type()
                }, 200 + (3 * timeout));
            } else if (el.innerText.length === fullTextLower.length) {
                el.classList.remove('border-right');
            } else {
                setTimeout(() => {
                    type()
                }, 50 + timeout);
            }
        };

        type();
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
     * Sets this component's scroll listener and resize listener.
     * Updates the current state to mobile if the window width is less than the mobile width threshold.
     */
    componentDidMount() {
        window.addEventListener('resize', this.resizeListener);
        window.addEventListener('scroll', this.scrollListener);
        this.resizeListener();
        //
        // if (window.innerWidth <= this.mobileThreshold) {
        //     this.setState({isMobile: true});
        //     setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMobileMS);
        // } else {
        //     // setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMS);
        //     setTimeout(() => this.setState({showIntro: true, showNavBar: true}), this.introDelayMobileMS); // TODO
        // }
        //
        // if (this.state.isMobile) {
        //     document.getElementById('name').innerText = this.introText[1];
        // } else {
        // document.getElementById('name').innerText = this.introText[1]; // TODO
        //     // setTimeout(this.typeName, 300);
        // }

        this.setupSkillHover();
        this.setupNavHover();
    }

    setupSkillHover() {
        let all = Array.from(document.getElementsByClassName('skill-all'));

        for (let i = 0; i < all.length; i++) {
            all[i].addEventListener('mouseover', function (e) {
                all[i].classList.add('skill-animation')
            });

            all[i].addEventListener('animationend', function (e) {
                all[i].classList.remove('skill-animation');
            });
        }
    }

    setupNavHover() {
        const icons = Array.from(document.getElementsByClassName('svg-icon'));

        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener('mouseover', function (e) {
                const hoverIcons = this.state.hoverIcons;
                hoverIcons.add(icons[i].id);
                this.setState({hoverIcons: hoverIcons});
            }.bind(this));

            icons[i].addEventListener('mouseout', function (e) {
                const hoverIcons = this.state.hoverIcons;
                hoverIcons.delete(icons[i].id);
                this.setState({hoverIcons: hoverIcons});
            }.bind(this));
        }
    }

    /**
     * Renders this component.
     */
    render() {
        return (
            <div>
                {!this.state.isMobile && <NavBar currentSection={this.state.currentSection} isMobile={this.state.isMobile} display={this.state.showNavBar} hoverIcons={this.state.hoverIcons}/>}

                <Timeline>
                    <TimelineElement dotId={'name'} height={'100vh'} display={'flex'} start={true} filled={this.state.currentSection === Sections.HOME} isMobile={this.state.isMobile}>
                        <h1 id={'name'} className={this.state.isMobile ? 'name-mobile' : 'name-desk'}>Hi, I’m Justin Konecny.</h1>
                        <div className={this.state.isMobile ? 'intro intro-mobile' : 'intro'}>
                            <div className={this.state.isMobile ? 'intro-inner intro-inner-mobile' : 'intro-inner'}>
                                <div className={this.state.showIntro ? 'fade-in' : 'fade-in-hide'} style={this.state.showIntro ? {} : {'top': '5px'}}>
                                    <p className={this.state.isMobile ? 'intro-blurb intro-blurb-mobile' : 'intro-blurb'}>
                                        &lt;\ I'm a <span className={'emphasis'}>Cybersecurity</span> major at
                                        <span className={'emphasis'}> Northeastern University</span>, currently
                                        pursuing a career in <span className={'emphasis'}>software engineering</span> /&gt;.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TimelineElement>

                    {/* The main body, includes education, software projects, skills, and work experience */}

                    {/* ABOUT ME */}
                    <TimelineElement dotId={'about-me'} filled={this.state.currentSection === Sections.ABOUT} isMobile={this.state.isMobile}>
                        {/*<div className={this.state.skipIntro ? {} : (this.state.showIntro ? 'fade-in' : 'fade-in-hide')}>*/}
                        <div className={this.state.isMobile ? 'about about-mobile' : 'about'}>
                            <div className={this.state.isMobile ? 'about-inner about-inner-mobile' : 'about-inner'}>
                                <div className={this.state.isMobile ? 'about-text about-text-mobile' : 'about-text'}>
                                    <h2 id={'about-me'}>About Me</h2>
                                    <div className={this.state.showAboutMe ? 'fade-in about-inside' : 'fade-in-hide about-inside'}>
                                        <p>
                                            Hello! I'm Justin, a software engineer originally from New Jersey, currently studying
                                            Cybersecurity at Northeastern University in Boston, Massachusetts. I recently completed
                                            a six-month co-op at Rocket Software in Waltham, Massachusetts as a Software Engineer, and
                                            I would love to tell you all about it.
                                        </p>
                                        <p>
                                            I love developing software across the stack, and I'm always looking for new opportunities
                                            to expand my skill set. I'm seeking out a position to make meaningful software
                                            contributions to real products.
                                        </p>
                                    </div>
                                </div>
                                <div className={this.state.isMobile ? 'about-profile about-profile-mobile' : 'about-profile'}>
                                    <div className={this.state.isMobile ? 'profile-crop profile-crop-mobile' : 'profile-crop'}>
                                        <img src={profile} className={this.state.isMobile ? 'profile-img profile-img-mobile' : 'profile-img'} alt={'Profile'}/>
                                    </div>
                                </div>
                            </div>

                            <div id={'highlights'} className={this.state.isMobile ? 'highlights highlights-mobile' : 'highlights'}>
                                <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                    <h3 className={'highlight-title'}>Languages</h3>
                                    <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                        <div className={this.state.isMobile ? 'highlight-skills highlight-skills-mobile' : 'highlight-skills'}>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Java</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Python</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>C/C++</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>React</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>JavaScript</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>TypeScript</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>HTML/CSS</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>Vue.js</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>PHP</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>SQL</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>Racket</div>
                                            <div className={'skill-all highlight-skill skill-familiar'}>AMD64 Assembly</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                    <h3 className={'highlight-title'}>Software</h3>
                                    <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                        <div className={this.state.isMobile ? 'highlight-skills highlight-skills-mobile' : 'highlight-skills'}>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Linux</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Docker</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Jira</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>IntelliJ</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Eclipse</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>PyCharm</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>WebStorm</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>VS Code</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>Amazon Web Services</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>LaTeX</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>GDB</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>Vim</div>
                                            <div className={'skill-all highlight-skill skill-knowledgeable'}>XCode</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.isMobile ? 'highlight highlight-mobile' : 'highlight'}>
                                    <h3 className={'highlight-title'}>Interests</h3>
                                    <div className={this.state.showHighlights ? 'fade-in' : 'fade-in-hide'}>
                                        <div className={this.state.isMobile ? 'highlight-skills highlight-skills-mobile' : 'highlight-skills'}>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Running</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Snowboarding</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Traveling</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Cooking</div>
                                            <div className={'skill-all highlight-skill skill-proficient'}>Spanish</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TimelineElement>

                    {/* EDUCATION */}
                    <TimelineElement dotId={'education'} textOnly={true} filled={this.state.currentSection === Sections.EDUCATION} isMobile={this.state.isMobile}>
                        <div className={this.state.isMobile ? 'body body-mobile' : 'body'}>
                            <h2 id={'education'}>Education</h2>
                            <h3>Northeastern University, Boston, MA</h3>
                            <h4>
                                Bachelor of Science in Cybersecurity<br/>
                                Minor in Mathematics<br/>
                                Expected 2022
                            </h4>
                            <ExpandableText text={'Relevant Coursework'}>
                                <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                    <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                        <li>Object-Oriented Design</li>
                                        <li>Algorithms & Data Structures</li>
                                        <li>Networks & Distributed Systems</li>
                                        <li>Network Security</li>
                                        <li>Cryptography</li>
                                        <li>Computer Systems</li>
                                        <li>Theory of Computation</li>
                                    </div>
                                    <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                        <li>Foundations of Cybersecurity</li>
                                        <li>Fundamentals of CS 1 & 2</li>
                                        <li>Discrete Structures</li>
                                        <li>Probability & Statistics</li>
                                        <li>Statistics & Stochastic Processes</li>
                                        <li>Embedded Design: Robotics</li>
                                        <li>Differential Equations & Linear Algebra</li>
                                        <li>Linear Algebra</li>
                                    </div>
                                </ul>
                            </ExpandableText>
                            <div id={'neu-skills'} className={this.state.showNEUSkills ? 'skills fade-in' : 'skills fade-in-hide'}>
                                <span className={'skill-all body-skill skill-proficient'}>Java</span>
                                <span className={'skill-all body-skill skill-proficient'}>Python</span>
                                <span className={'skill-all body-skill skill-proficient'}>Git</span>
                                <span className={'skill-all body-skill skill-knowledgeable'}>C/C++</span>
                                <span className={'skill-all body-skill skill-knowledgeable'}>Racket</span>
                                <span className={'skill-all body-skill skill-knowledgeable'}>LaTeX</span>
                                <span className={'skill-all body-skill skill-familiar'}>AMD64 Assembly</span>
                            </div>
                        </div>
                    </TimelineElement>

                    {/* WORK EXPERIENCE */}
                    <TimelineElement dotId={'experience'} textOnly={true} filled={this.state.currentSection === Sections.EXPERIENCE} isMobile={this.state.isMobile}>
                        <h2 id={'experience'}>Professional Experience</h2>

                        <h3>Places For Less</h3>
                        <h4>Full Stack Software Engineer Co-op<br/>May - December 2020 | Boston, MA</h4>
                        <h5>
                            Places For Less is building the first real estate platform to fundamentally change the way we rent,
                            pairing leading technology with an on-demand workforce to make an affordable and seamless apartment search experience.
                        </h5>
                        {/*<ExpandableText text={'Role + Responsibilities'}>*/}
                        {/*    <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>*/}
                        {/*        <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>*/}
                        {/*            <li>TBD</li>*/}
                        {/*        </div>*/}
                        {/*    </ul>*/}
                        {/*</ExpandableText>*/}
                        <div id={'pfl-skills'} className={this.state.showRocketSkills ? 'skills fade-in' : 'skills fade-in-hide'}>
                            <span className={'skill-all body-skill skill-proficient'}>PHP</span>
                            <span className={'skill-all body-skill skill-proficient'}>Laravel</span>
                            {/*<span className={'skill-all body-skill skill-proficient'}>Eloquent</span>*/}
                            <span className={'skill-all body-skill skill-proficient'}>Vue.js</span>
                            {/*<span className={'skill-all body-skill skill-proficient'}>Asana</span>*/}
                            <span className={'skill-all body-skill skill-proficient'}>SQL</span>
                            <span className={'skill-all body-skill skill-proficient'}>Git</span>
                        </div>

                        <br/>

                        <h3>Rocket Software</h3>
                        <h4>Software Engineer Co-op<br/>July - December 2019 | Waltham, MA</h4>
                        <h5>
                            Rocket Software is a software development firm that develops products that are designed to
                            run on mainframes, Linux/Unix/Windows, IBM i, cloud, and hybrid/virtualized systems.
                        </h5>
                        <ExpandableText text={'Role + Responsibilities'}>
                            <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                    <li>Created a global shutdown helper in a Java application to register, track, and wait for hundreds of threads to finish working before safely exiting</li>
                                    <li>Added new features to and fixed bugs in a React user-interface application to process user input to interact with new API endpoints and display results</li>
                                    <li>Developed a TypeScript plugin for an open-source command line application to get, put, post, and delete information to REST API endpoints</li>
                                    <li>Migrated fifty Java servlet-style API endpoints to use Spring Web MVC</li>
                                    <li>Successfully completed Jira tickets for developing new product features, fixing bugs, and designing new QA tests as a Scrum team member</li>
                                </div>
                            </ul>
                        </ExpandableText>
                        <div id={'rocket-skills'} className={this.state.showRocketSkills ? 'skills fade-in' : 'skills fade-in-hide'}>
                            <span className={'skill-all body-skill skill-proficient'}>Java</span>
                            <span className={'skill-all body-skill skill-proficient'}>Python</span>
                            <span className={'skill-all body-skill skill-proficient'}>React</span>
                            <span className={'skill-all body-skill skill-proficient'}>TypeScript</span>
                            <span className={'skill-all body-skill skill-proficient'}>Jira</span>
                            <span className={'skill-all body-skill skill-proficient'}>Linux CLI</span>
                            <span className={'skill-all body-skill skill-proficient'}>Git</span>
                            <span className={'skill-all body-skill skill-familiar'}>Selenium</span>
                        </div>

                        <br/>

                        <h3>Vonage</h3>
                        <h4>Information Security Associate<br/>July - August 2018 | Holmdel, NJ</h4>
                        <h5>
                            Vonage is a business cloud communications provider, headquartered in New Jersey. As an
                            Information Security Associate, I worked directly with the the Vonage Information Security
                            team to develop software-based solutions for internal use.
                        </h5>
                        <ExpandableText text={'Role + Responsibilities'}>
                            <ul className={this.state.isMobile ? 'list-container list-container-mobile' : 'list-container'}>
                                <div className={this.state.isMobile ? 'list list-mobile' : 'list'}>
                                    <li>Implemented a HashiCorp vault to use PostgreSQL on an AWS EC2 instance for secure storage and retrieval of sensitive team information</li>
                                    <li>Developed Python scripts to process information from the results of scanning thousands of hosts for network vulnerabilities and to facilitate cloning hundreds of GitHub repositories for static source code
                                        analysis
                                    </li>
                                </div>
                            </ul>
                        </ExpandableText>
                        <div id={'vonage-skills'} className={this.state.showVonageSkills ? 'skills fade-in' : 'skills fade-in-hide'}>
                            <span className={'skill-all body-skill skill-proficient'}>Python</span>
                            <span className={'skill-all body-skill skill-proficient'}>Amazon Web Services</span>
                            <span className={'skill-all body-skill skill-proficient'}>Linux CLI</span>
                            <span className={'skill-all body-skill skill-proficient'}>Git</span>
                            <span className={'skill-all body-skill skill-familiar'}>Nessus</span>
                            <span className={'skill-all body-skill'} style={this.skillCert}>AWS Certified Cloud Practitioner</span>
                        </div>
                    </TimelineElement>

                    {/*/!* FEATURED SOFTWARE PROJECTS *!/*/}
                    <TimelineElement dotId={'projects'} filled={this.state.currentSection === Sections.PROJECTS} isMobile={this.state.isMobile}>
                        <div className={'projects'}>
                            <div className={this.state.isMobile ? 'project-body project-body-mobile' : 'project-body'}>
                                <h2 id={'projects'}>Software Projects</h2>
                                <h3>Featured Projects</h3>

                                <div className={'featured-projects'}>
                                    <FeaturedProject title={'Calendays'} year={'2020'} imageSrc={calendays} isMobile={this.state.isMobile} linkGitHub={'https://github.com/justinkonecny/calendays'} linkExternal={'https://www.calendays.jkonecny.com/'}>
                                        <p>
                                            Web application used for shared event planning. Uses Firebase for user authentication and
                                            storing user data (events, networks, profile). Once authenticated and verified, users can
                                            create events to be displayed on their calendar. Users can also create named networks, which
                                            consist of groups of two or more users.
                                        </p>
                                        <div className={this.state.showAnimatorSkills ? 'project-skills fade-in' : 'project-skills fade-in-hide'}>
                                            <span className={'skill-all proj-skill skill-proficient'}>React</span>
                                            <span className={'skill-all proj-skill skill-proficient'}>TypeScript</span>
                                            <span className={'skill-all proj-skill skill-proficient'}>Firebase</span>
                                        </div>
                                    </FeaturedProject>

                                    <FeaturedProject title={'Liberty Cars'} year={'2019'} imageSrc={libertyCars} isMobile={this.state.isMobile} linkGitHub={'https://github.com/justinkonecny/liberty_cars'}>
                                        <p>
                                            An app developed with Vue.js for simultaneously searching multiple geographic
                                            locations for a used car. Search criteria is entered by the user on the initial page,
                                            which is then processed to make asynchronous requests for the listing data in each
                                            location. The results are then presented to the user for viewing.
                                        </p>
                                        <div className={this.state.showLibertySkills ? 'project-skills fade-in' : 'project-skills fade-in-hide'}>
                                            <span className={'skill-all proj-skill skill-proficient'}>Vue.js</span>
                                            <span className={'skill-all proj-skill skill-proficient'}>JavaScript</span>
                                            <span className={'skill-all proj-skill skill-proficient'}>Firebase</span>
                                        </div>
                                    </FeaturedProject>
                                </div>


                                <h3 id={'additional-projects'}>Additional Projects</h3>
                                <div className={'additional-projects'}>

                                    <Card title={'Cloud Service Analysis'} isMobile={this.state.isMobile} year={2020} tech={['Python', 'AWS', 'Kubernetes', 'etcd']} linkGitHub={'https://github.com/justinkonecny/cloud_service_analysis'}>
                                        Setup and monitored four 'honeypot' AWS EC2 instances running Kubernetes and etcd in varying
                                        geographic locations to analyze captured traffic.
                                    </Card>

                                    <Card title={'Key-Value Store'} isMobile={this.state.isMobile} year={2019} tech={['Python', 'Raft']} linkGitHub={'https://github.com/justinkonecny/dist_key_value'}>
                                        An implementation of the <a href={'https://raft.github.io/raft.pdf'}
                                                                    target={'_blank'} rel={'noopener noreferrer'}>raft</a> quorum-consensus
                                        protocol for a distributed, replicated key-value store that can tolerant a variety of network faults.
                                    </Card>

                                    <Card title={'NSTP Server'} isMobile={this.state.isMobile} year={2020} tech={['Python', 'Protocol Buffers', 'libsodium']}>
                                        A multi-threaded web server using Google's v3 Protobufs that includes password and certificate
                                        client auth., intrusion detection, and user-specific key-value stores.
                                    </Card>

                                    <Card title={'Reliable Transport'} isMobile={this.state.isMobile} year={2019} tech={['Python']}>
                                        A transport protocol that provided a reliable datagram service to ensure that network packets are delivered
                                        in order and without duplicates, errors, or incomplete data.
                                    </Card>

                                    <Card title={'BGP Router'} isMobile={this.state.isMobile} year={2019} tech={['Python']}>
                                        Simulated a BGP router to route packets using a dynamic routing table. Added, revoked,
                                        aggregated, and deaggregated routes using a build-log and neighbor updates.
                                    </Card>

                                    <Card title={'File System'} isMobile={this.state.isMobile} year={2018} tech={['C', 'FUSE']}>
                                        A mountable, ext-style file system using the FUSE API and
                                        memory-mapped storage that can create, read, edit, delete variable-length files within nested directories.
                                    </Card>

                                    <Card title={'Memory Allocator'} isMobile={this.state.isMobile} year={2018} tech={['C']}>
                                        A thread-safe memory allocator that uses mutexes, memory-mapped pages,
                                        and pointer arithmetic, and bucket-style free-lists to allocate, reallocate,
                                        or free varying sized memory chunks.
                                    </Card>

                                    <Card title={'Interactive Animator'} isMobile={this.state.isMobile} year={2018} tech={['Java', 'Swing']}>
                                        An application with a GUI that reads textual animations and displays them in interactive, visual, textual, or SVG mode.
                                        Users can pause, resume, restart, toggle looping, adjust speed, and export animation.
                                    </Card>

                                </div>

                            </div>
                        </div>
                    </TimelineElement>

                    <TimelineElement dotId={'contact'} textOnly={true} filled={this.state.currentSection === Sections.CONTACT} isMobile={this.state.isMobile}>
                        <div className={this.state.isMobile ? 'body body-mobile' : 'body'}>
                            <div className={'body-info'}>
                                <div className={this.state.isMobile ? 'get-in-touch-mobile' : 'get-in-touch'}>
                                    <h2 id={'contact'}>Let's Get In Touch</h2>
                                    <p>
                                        Looking to chat about my work experiences or any of my projects? Feel free to reach out!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ContactForm/>
                    </TimelineElement>

                </Timeline>
            </div>
        );
    }
}

