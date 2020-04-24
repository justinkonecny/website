import React, {Component} from 'react';
import icon from '../resources/icon.svg';
import menu from '../resources/menu.svg';
import navLogo from '../resources/navLogo.svg';
import navHome from '../resources/navHome.svg';
import navAbout from '../resources/navAbout.svg';
import navEducation from '../resources/navEducation.svg';
import navExperience from '../resources/navExperience.svg';
import navProjects from '../resources/navProjects.svg';
import navResume from '../resources/navResume.svg';
import resume from '../resources/resume.pdf';
import navGithub from '../resources/navGithub.svg';
import navEmail from '../resources/navEmail.svg';
import navLinkedIn from '../resources/navLinkedIn.svg';
import '../css/NavBar.scss';

/**
 * The navigation bar component displayed at the top of the website, disappears as the user scrolls down the page.
 * All links rendered on the left side of the navigation bar are passed as a list to the 'linksLeft' prop.
 * The link rendered on the right side of the navigation bar are passed as a list to the 'linksRight' prop.
 */
export class NavBar extends Component {

    constructor(props) {
        super(props);
        this.updateMenuState = this.updateMenuState.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = {
            showMenu: false
        };
    }

    /**
     * Scrolls to the top of the page.
     */
    scrollToTop() {
        this.setState({showMenu: false});
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    /**
     * Updates the hamburger menu state to show or hide based on the current state.
     */
    updateMenuState() {
        let showing = this.state.showMenu;
        this.setState({showMenu: !showing});
    }

    /**
     * Returns the mobile side menu.
     *
     * @returns {*} The mobile side menu.
     */
    getMenu() {
        const menuButtons = this.props.linksLeft.map((el) => (
            <div className={'menu-btn-container'} onClick={this.updateMenuState} key={el.key}>
                {el}
            </div>
        ));

        return (
            <div>
                <div className={this.state.showMenu ? 'blur' : 'blur-hidden'} onClick={this.updateMenuState}/>
                <div className={this.props.display && this.state.showMenu ? 'menu-container' : 'menu-container hide-left'}>
                    <div className={'nav-left nav-left-mobile'}>
                        {menuButtons}
                        <div className={'menu-btn-container'} onClick={this.updateMenuState}>
                            {this.props.linksRight}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.isMobile) {
            if (!this.props.display && this.state.showMenu) {
                // Hides the side menu if the navigation bar is hidden
                this.setState({showMenu: false});
            }

            return (
                <div>
                    <div className={this.props.display ? 'nav nav-mobile' : 'nav nav-mobile hide'}>
                        <div style={{'width': '25vw', 'display': 'flex'}}>
                            <div className={'icon-container'}>
                                <button onClick={this.scrollToTop} className={'icon-btn'}>
                                    <img src={icon} alt={'icon'} className={'icon'}/>
                                </button>
                            </div>
                        </div>
                        <button onClick={this.updateMenuState} className={this.state.showMenu ? 'menu-slide-left' : 'menu-nav-bar'}>
                            <img className={'menu'} src={menu} alt={'menu'}/>
                        </button>
                        {this.getMenu()}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={this.props.display ? 'nav' : 'nav hide'}>
                    {/*<div style={{'width': '100px', 'display': 'flex'}}>*/}
                    {/*    <div className={'icon-container'}>*/}
                    {/*        <button onClick={this.scrollToTop} className={'icon-btn'}>*/}
                    {/*            <img src={icon} alt={'icon'} className={'icon'}/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'nav-top'}>
                        <button className={this.state.isMobile ? 'nav-link nav-link-mobile nav-logo' : 'nav-link nav-logo'} key={'navLogo'} onClick={this.scrollToTop}>
                            <img src={navLogo} alt={'Logo'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile nav-logo-inner' : 'nav-inner nav-logo-inner'}/>
                        </button>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#about-me'} key={'navHome'}>
                            <img src={navHome} alt={'Home'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#projects'} key={'navAbout'}>
                            <img src={navAbout} alt={'About'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#education'} key={'navEducation'}>
                            <img src={navEducation} alt={'Education'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#experience'} key={'navExperience'}>
                            <img src={navExperience} alt={'Experience'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'#projects'} key={'navProjects'}>
                            <img src={navProjects} alt={'Projects'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={resume} target={'_blank'} rel={'noopener noreferrer'} key={'navResume'}>
                            <img src={navResume} alt={'Resume'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                    </div>
                    <div className={'nav-bottom'}>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'https://github.com/justinkonecny'} target={'_blank'} rel={'noopener noreferrer'} key={'navGitHub'}>
                            <img src={navGithub} alt={'GitHub'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'https://www.linkedin.com/in/justin-konecny/'} target={'_blank'} rel={'noopener noreferrer'} key={'navLinkedIn'}>
                            <img src={navLinkedIn} alt={'LinkedIn'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                        <a className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link'} href={'mailto:konecnyjustin@gmail.com'} target={'_blank'} rel={'noopener noreferrer'} key={'navEmail'}>
                            <img src={navEmail} alt={'Email'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}/>
                        </a>
                    </div>
                </div>
            );
        }
    }
}
