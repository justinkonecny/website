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
import {Sections} from "./Home";

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

        this.colorInactive = "#DAE0E6";
        this.colorActive = "#30B96E";

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
        const colorHome = this.props.hoverIcons.has('btn-home') || this.props.currentSection === Sections.HOME ? this.colorActive : this.colorInactive;
        const colorAbout = this.props.hoverIcons.has('btn-about') || this.props.currentSection === Sections.ABOUT ? this.colorActive : this.colorInactive;
        const colorEducation = this.props.hoverIcons.has('btn-education') || this.props.currentSection === Sections.EDUCATION ? this.colorActive : this.colorInactive;
        const colorExperience = this.props.hoverIcons.has('btn-experience') || this.props.currentSection === Sections.EXPERIENCE ? this.colorActive : this.colorInactive;
        const colorProjects = this.props.hoverIcons.has('btn-projects') || this.props.currentSection === Sections.PROJECTS ? this.colorActive : this.colorInactive;

        const colorResume = this.props.hoverIcons.has('btn-resume') ? this.colorActive : this.colorInactive;
        const colorGithub = this.props.hoverIcons.has('btn-github') ? this.colorActive : this.colorInactive;
        const colorLinkedIn = this.props.hoverIcons.has('btn-linkedin') ? this.colorActive : this.colorInactive;
        const colorEmail = this.props.hoverIcons.has('btn-email') ? this.colorActive : this.colorInactive;

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
                    <div className={'nav-top'}>
                        <button className={this.state.isMobile ? 'nav-link nav-link-mobile nav-logo' : 'nav-link nav-logo'} onClick={this.scrollToTop}>
                            <img src={navLogo} alt={'Logo'} className={this.state.isMobile ? 'nav-inner nav-inner-mobile nav-logo-inner' : 'nav-inner nav-logo-inner'}/>
                        </button>
                        <button id={'btn-home'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} onClick={this.scrollToTop}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.3098 11.7676L12 4.59094L3.69021 11.7676C3.37673 12.0383 2.90312 12.0037 2.63238 11.6902C2.36164 11.3767 2.3963 10.9031 2.70978 10.6323L11.5098 3.03234C11.7914 2.78916 12.2086 2.78916 12.4902 3.03234L21.2902 10.6323C21.6037 10.9031 21.6384 11.3767 21.3676 11.6902C21.0969 12.0037 20.6233 12.0383 20.3098 11.7676Z"
                                        fill={colorHome}/>
                                    <path
                                        d="M6.3501 12.8001V19.6501H17.6501V12.8001C17.6501 12.3858 17.9859 12.0501 18.4001 12.0501C18.8143 12.0501 19.1501 12.3858 19.1501 12.8001V20.4001C19.1501 20.8143 18.8143 21.1501 18.4001 21.1501H5.6001C5.18589 21.1501 4.8501 20.8143 4.8501 20.4001V12.8001C4.8501 12.3858 5.18589 12.0501 5.6001 12.0501C6.01431 12.0501 6.3501 12.3858 6.3501 12.8001Z"
                                        fill={colorHome}/>
                                </svg>
                            </div>
                        </button>
                        <a id={'btn-about'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#about-me'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M7.0002 7.0249C7.0002 4.2249 9.2002 2.0249 12.0002 2.0249C14.7002 2.0249 17.0002 4.2249 17.0002 7.0249C17.0002 9.8249 14.8002 12.0249 12.0002 12.0249C9.2002 12.0249 7.0002 9.8249 7.0002 7.0249ZM15.5002 7.0249C15.5002 5.1249 13.9002 3.5249 12.0002 3.5249C10.0002 3.5249 8.5002 5.1249 8.5002 7.0249C8.5002 8.9249 10.1002 10.5249 12.0002 10.5249C13.9002 10.5249 15.5002 8.9249 15.5002 7.0249Z"
                                          fill={colorAbout}/>
                                    <path
                                        d="M12 14.4751C8.44431 14.4751 5.55 17.5086 5.55 21.2251C5.55 21.6393 5.21421 21.9751 4.8 21.9751C4.38579 21.9751 4.05 21.6393 4.05 21.2251C4.05 16.6955 7.59972 12.9751 12 12.9751C16.4003 12.9751 19.95 16.6955 19.95 21.2251C19.95 21.6393 19.6142 21.9751 19.2 21.9751C18.7858 21.9751 18.45 21.6393 18.45 21.2251C18.45 17.5086 15.5557 14.4751 12 14.4751Z"
                                        fill={colorAbout}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-education'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#education'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M12.298 3.53047L22.698 8.03047C23.3035 8.29249 23.3 9.15243 22.6924 9.40952L12.2924 13.8095C12.1056 13.8886 11.8947 13.8886 11.7079 13.8095L2.34985 9.85034V14.5186C2.34985 14.9328 2.01406 15.2686 1.59985 15.2686C1.18564 15.2686 0.84985 14.9328 0.84985 14.5186V8.7186C0.84985 8.66654 0.855152 8.61573 0.865247 8.56667C0.904703 8.37039 1.02152 8.18802 1.21591 8.07418C1.25128 8.05307 1.28854 8.03478 1.32736 8.01963L11.7023 3.53047C11.8924 3.44824 12.1079 3.44824 12.298 3.53047ZM3.50669 8.71105L12.0001 12.3044L20.4936 8.71105L12.0001 5.03599L3.50669 8.71105Z"
                                          fill={colorEducation}/>
                                    <path
                                        d="M4.95035 17.8882V12.8184C4.95035 12.4042 4.61456 12.0684 4.20035 12.0684C3.78614 12.0684 3.45035 12.4042 3.45035 12.8184V18.4184C3.45035 18.7329 3.64652 19.0139 3.94169 19.1224C8.81141 20.9116 14.1047 20.9927 19.0661 19.3876L19.8365 19.1299C20.1428 19.0278 20.3493 18.7412 20.3493 18.4184V12.8184C20.3493 12.4042 20.0136 12.0684 19.5993 12.0684C19.1851 12.0684 18.8493 12.4042 18.8493 12.8184V17.8795C14.295 19.4092 9.44394 19.417 4.95035 17.8882Z"
                                        fill={colorEducation}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-experience'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#experience'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M15.5928 6.19961V4.85001C15.5928 4.13579 15.057 3.60001 14.3428 3.60001H9.9428C9.22858 3.60001 8.6928 4.13579 8.6928 4.85001V6.19961H3.943C2.88156 6.19961 1.993 6.98363 1.993 7.94961V11.4496C1.993 12.4936 2.8503 13.1996 3.943 13.1996L11.9501 14.194L12.1339 14.194L20.1932 13.1991L20.3404 13.1918C21.3596 13.1099 22.1207 12.3956 21.993 11.3956V7.94961C21.993 6.98339 21.1042 6.19961 20.042 6.19961H15.5928ZM14.0928 6.19961V5.10001H10.1928V6.19961H14.0928ZM20.143 11.6996L20.0511 11.7053L12.042 12.6939L4.0349 11.7053C3.62141 11.6996 3.493 11.5939 3.493 11.4496V7.94961C3.493 7.85676 3.6711 7.69961 3.943 7.69961H20.042C20.3148 7.69961 20.493 7.85674 20.493 7.94961V11.4496L20.5032 11.5729C20.5143 11.6395 20.4456 11.6996 20.143 11.6996Z"
                                          fill={colorExperience}/>
                                    <path
                                        d="M4.792 14.85V18.9H19.393V19.65L20.143 18.9H19.393V14.85C19.393 14.4358 19.7288 14.1 20.143 14.1C20.5572 14.1 20.893 14.4358 20.893 14.85V19.65C20.893 20.0642 20.5572 20.4 20.143 20.4H4.042C3.62778 20.4 3.292 20.0642 3.292 19.65V14.85C3.292 14.4358 3.62778 14.1 4.042 14.1C4.45621 14.1 4.792 14.4358 4.792 14.85Z"
                                        fill={colorExperience}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-projects'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#projects'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.7314 6.96254L11.5314 11.7625C11.3588 12.1391 10.9137 12.3044 10.5371 12.1318C10.1606 11.9593 9.99522 11.5141 10.1678 11.1376L12.3678 6.33755C12.5404 5.96101 12.9855 5.79566 13.3621 5.96825C13.7386 6.14083 13.904 6.58599 13.7314 6.96254Z"
                                        fill={colorProjects}/>
                                    <path
                                        d="M9.48038 7.98052C9.77336 7.68771 9.77349 7.21284 9.48068 6.91986C9.18787 6.62689 8.71299 6.62676 8.42002 6.91957L6.07286 9.26542L8.43538 11.4954C8.7366 11.7798 9.21128 11.7661 9.4956 11.4649C9.77993 11.1636 9.76623 10.689 9.46502 10.4046L8.22554 9.23467L9.48038 7.98052Z"
                                        fill={colorProjects}/>
                                    <path
                                        d="M14.5195 11.4804C14.2266 11.1875 14.2266 10.7126 14.5195 10.4197L15.7041 9.23511L14.5045 7.96501C14.2201 7.66387 14.2337 7.18919 14.5348 6.90479C14.836 6.62038 15.3107 6.63394 15.5951 6.93508L17.7955 9.26498L15.5801 11.4804C15.2872 11.7733 14.8124 11.7733 14.5195 11.4804Z"
                                        fill={colorProjects}/>
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M3.75 15.5999H20.25C21.1642 15.5999 22 14.7642 22 13.8499V4.34995C22 3.33573 21.2642 2.59995 20.25 2.59995H3.75C2.73502 2.59995 2 3.33549 2 4.34995V13.8499C2 14.8644 2.73502 15.5999 3.75 15.5999ZM20.5 13.8499C20.5 13.9357 20.3358 14.0999 20.25 14.0999H3.75C3.56369 14.0999 3.5 14.0362 3.5 13.8499V4.34995C3.5 4.16368 3.56369 4.09995 3.75 4.09995H20.25C20.4358 4.09995 20.5 4.16416 20.5 4.34995V13.8499Z"
                                          fill={colorProjects}/>
                                    <path
                                        d="M2.77014 19.9L3.46586 17.6738C3.58941 17.2784 3.36907 16.8577 2.97371 16.7342C2.57835 16.6106 2.15769 16.831 2.03414 17.2263L1.03414 20.4263C0.883219 20.9093 1.24402 21.4 1.75 21.4H22.25C22.756 21.4 23.1168 20.9093 22.9659 20.4263L21.9659 17.2263C21.8423 16.831 21.4217 16.6106 21.0263 16.7342C20.6309 16.8577 20.4106 17.2784 20.5341 17.6738L21.2299 19.9H2.77014Z"
                                        fill={colorProjects}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-resume'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={resume} target={'_blank'} rel={'noopener noreferrer'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.2993 7.80001H11.2993C10.8851 7.80001 10.5493 7.46422 10.5493 7.05001C10.5493 6.63579 10.8851 6.30001 11.2993 6.30001H15.2993C15.7135 6.30001 16.0493 6.63579 16.0493 7.05001C16.0493 7.46422 15.7135 7.80001 15.2993 7.80001Z"
                                        fill={colorResume}/>
                                    <path
                                        d="M8.6997 11.1999H15.2997C15.7139 11.1999 16.0497 10.8641 16.0497 10.4499C16.0497 10.0357 15.7139 9.69991 15.2997 9.69991H8.6997C8.28549 9.69991 7.9497 10.0357 7.9497 10.4499C7.9497 10.8641 8.28549 11.1999 8.6997 11.1999Z"
                                        fill={colorResume}/>
                                    <path
                                        d="M15.2997 14.6999H8.6997C8.28549 14.6999 7.9497 14.3641 7.9497 13.9499C7.9497 13.5357 8.28549 13.1999 8.6997 13.1999H15.2997C15.7139 13.1999 16.0497 13.5357 16.0497 13.9499C16.0497 14.3641 15.7139 14.6999 15.2997 14.6999Z"
                                        fill={colorResume}/>
                                    <path
                                        d="M8.6997 18.0998H15.2997C15.7139 18.0998 16.0497 17.764 16.0497 17.3498C16.0497 16.9356 15.7139 16.5998 15.2997 16.5998H8.6997C8.28549 16.5998 7.9497 16.9356 7.9497 17.3498C7.9497 17.764 8.28549 18.0998 8.6997 18.0998Z"
                                        fill={colorResume}/>
                                    <path d="M9.8999 7.05001C9.8999 6.49801 9.4519 6.05001 8.8999 6.05001C8.3469 6.05001 7.8999 6.49801 7.8999 7.05001C7.8999 7.60201 8.3469 8.05001 8.8999 8.05001C9.4519 8.05001 9.8999 7.60201 9.8999 7.05001Z"
                                          fill={colorResume}/>
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M5.5995 21.4H18.4005C18.8147 21.4 19.1505 21.0642 19.1505 20.65V3.35001C19.1505 2.93579 18.8147 2.60001 18.4005 2.60001H5.5995C5.18529 2.60001 4.8495 2.93579 4.8495 3.35001V20.65C4.8495 21.0642 5.18529 21.4 5.5995 21.4ZM6.3495 4.10001H17.6505V19.9H6.3495V4.10001Z"
                                          fill={colorResume}/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className={'nav-bottom'}>
                        <a id={'btn-github'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'https://github.com/justinkonecny'} target={'_blank'} rel={'noopener noreferrer'} key={'navGitHub'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/*<path d="M8.33126 15.9996C11.6156 14.9818 14.0062 11.8637 14.0062 8.17509C14.0062 3.66011 10.4245 0 6.00618 0C6.00621 0 6.00616 0 6.00618 0C7.48798 0 8.85399 0.366767 10.1053 1.10049" fill="#DAE0E6"/>*/}
                                    <path
                                        d="M8.33126 15.9996C8.26599 15.9863 8.21231 15.9593 8.17022 15.9188C8.08151 15.8334 8.03719 15.7265 8.03719 15.5984V13.3443C8.03719 12.6534 7.8529 12.1477 7.48441 11.8272C7.88843 11.7845 8.25168 11.7202 8.57429 11.6347C8.89675 11.5491 9.23008 11.4103 9.57392 11.218C9.91769 11.0258 10.2048 10.7889 10.4354 10.5075C10.6657 10.226 10.8535 9.8523 10.9987 9.38562C11.1438 8.91901 11.2167 8.38317 11.2167 7.77777C11.2167 6.91596 10.9365 6.18223 10.3765 5.57676C10.639 4.92869 10.6105 4.20223 10.2917 3.39734C10.0931 3.33316 9.80577 3.37238 9.43005 3.51476C9.05455 3.65723 8.72825 3.81395 8.45194 3.98496L8.04788 4.24126C7.38843 4.05614 6.70779 3.96356 6.00603 3.96356C5.30428 3.96356 4.62379 4.05614 3.96437 4.24126C3.85093 4.16305 3.70035 4.06662 3.51242 3.95282C3.32448 3.83898 3.02861 3.70168 2.62451 3.54141C2.22049 3.38121 1.9156 3.33305 1.71002 3.39722C1.39806 4.20208 1.37329 4.92858 1.63564 5.57664C1.0756 6.18212 0.795519 6.91566 0.795519 7.77766C0.795519 8.38306 0.868183 8.91721 1.01347 9.38027C1.15869 9.84313 1.34484 10.2172 1.57165 10.5021C1.79843 10.7869 2.08376 11.0256 2.42771 11.2178C2.77148 11.4103 3.1047 11.5492 3.42716 11.6347C3.74981 11.7201 4.11305 11.7844 4.51708 11.8271C4.23361 12.0834 4.05991 12.4502 3.99611 12.9276C3.84717 12.9988 3.68765 13.0523 3.51763 13.088C3.34742 13.1234 3.14541 13.1412 2.91152 13.1412C2.67762 13.1412 2.4454 13.0648 2.21509 12.9116C1.98458 12.7584 1.78804 12.5359 1.62491 12.2437C1.4902 12.0159 1.31832 11.8308 1.10923 11.6883C0.900027 11.5458 0.724643 11.4605 0.582854 11.432L0.370264 11.4C0.221324 11.4 0.118679 11.4157 0.0618811 11.4478C0.0050836 11.4799 -0.0125701 11.5209 0.00873359 11.5709C0.0300001 11.6208 0.0618439 11.6706 0.104377 11.7204C0.146947 11.7703 0.192981 11.8132 0.242591 11.8488L0.317042 11.9023C0.472984 11.9735 0.627138 12.1088 0.779579 12.3083C0.932019 12.5076 1.0436 12.6894 1.11448 12.8531L1.22081 13.0989C1.31299 13.3694 1.46893 13.5885 1.6886 13.7559C1.90838 13.9233 2.14581 14.0301 2.40108 14.0762C2.65624 14.1227 2.90269 14.1477 3.14008 14.151C3.37759 14.1544 3.57432 14.1423 3.73026 14.1136L3.97484 14.0711C3.97484 14.3415 3.97655 14.6585 3.9802 15.0218C3.98374 15.3851 3.98557 15.5774 3.98557 15.5987C3.98557 15.7268 3.93953 15.8337 3.84735 15.9191C3.80353 15.9597 3.7485 15.9866 3.68223 15.9999"
                                        fill={colorGithub}/>
                                </svg>

                            </div>
                        </a>
                        <a id={'btn-linkedin'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'https://www.linkedin.com/in/justin-konecny/'} target={'_blank'} rel={'noopener noreferrer'} key={'navLinkedIn'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M8 0C3.5824 0 0 3.5824 0 8C0 12.4176 3.5824 16 8 16C12.4176 16 16 12.4176 16 8C16 3.5824 12.4176 0 8 0ZM5.67529 12.0938H3.72693V6.23206H5.67529V12.0938ZM4.70117 5.43164H4.68848C4.03467 5.43164 3.61182 4.98157 3.61182 4.41907C3.61182 3.84387 4.04761 3.40625 4.71411 3.40625C5.38062 3.40625 5.79077 3.84387 5.80347 4.41907C5.80347 4.98157 5.38062 5.43164 4.70117 5.43164ZM12.7007 12.0938H10.7526V8.95789C10.7526 8.1698 10.4705 7.63232 9.7655 7.63232C9.22729 7.63232 8.90674 7.99487 8.76587 8.34485C8.71436 8.47009 8.70178 8.64514 8.70178 8.82031V12.0938H6.75354C6.75354 12.0938 6.77905 6.78198 6.75354 6.23206H8.70178V7.06201C8.96069 6.6626 9.42395 6.09448 10.4576 6.09448C11.7395 6.09448 12.7007 6.93225 12.7007 8.73267V12.0938Z"
                                          fill={colorLinkedIn}/>
                                </svg>

                            </div>
                        </a>
                        <a id={'btn-email'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'mailto:konecnyjustin@gmail.com'} target={'_blank'} rel={'noopener noreferrer'} key={'navEmail'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule={"evenodd"} clipRule={"evenodd"}
                                          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM3.26531 5.0419V4.57143H12.7347V5.0419L8 7.9026L3.26531 5.0419ZM8.18752 8.62266L12.7347 5.87527V11.5156H3.26531V5.87527L7.81248 8.62266C7.9276 8.69222 8.0724 8.69222 8.18752 8.62266Z"
                                          fill={colorEmail}/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            );
        }
    }
}
