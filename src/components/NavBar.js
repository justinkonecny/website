import React, {Component} from 'react';
import icon from '../resources/icon.svg';
import menu from '../resources/menu.svg';
import navLogo from '../resources/navLogo.svg';
import resume from '../resources/resume.pdf';
import '../css/NavBar.scss';
import {Sections} from './Home';

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
        this.scrollListener = this.scrollListener.bind(this);

        this.colorInactive = '#DAE0E6';
        this.colorActive = '#30B96E';

        this.state = {
            showMenu: false,
            animating: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollListener);
        setTimeout(this.scrollListener, 100);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener() {
        if (!this.state.animating && this.props.currentSection === Sections.CONTACT) {
            Array.from(document.getElementsByClassName('nav-animate')).forEach((el) => {
                el.classList.add('nav-animation');
            });
            this.setState({animating: true});
        } else if (this.state.animating && this.props.currentSection !== Sections.CONTACT) {
            Array.from(document.getElementsByClassName('nav-animation')).forEach((el) => {
                el.classList.remove('nav-animation');
            });
            this.setState({animating: false});
        }
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

        const colorResume = this.props.hoverIcons.has('btn-resume')? this.colorActive : this.colorInactive;

        const colorGithub = this.props.hoverIcons.has('btn-github') || this.props.currentSection === Sections.CONTACT  ? this.colorActive : this.colorInactive;
        const colorLinkedIn = this.props.hoverIcons.has('btn-linkedin') || this.props.currentSection === Sections.CONTACT  ? this.colorActive : this.colorInactive;
        const colorEmail = this.props.hoverIcons.has('btn-email')  || this.props.currentSection === Sections.CONTACT ? this.colorActive : this.colorInactive;

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
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M20.3098 11.7676L12 4.59094L3.69021 11.7676C3.37673 12.0383 2.90312 12.0037 2.63238 11.6902C2.36164 11.3767 2.3963 10.9031 2.70978 10.6323L11.5098 3.03234C11.7914 2.78916 12.2086 2.78916 12.4902 3.03234L21.2902 10.6323C21.6037 10.9031 21.6384 11.3767 21.3676 11.6902C21.0969 12.0037 20.6233 12.0383 20.3098 11.7676Z'
                                        fill={colorHome}/>
                                    <path
                                        d='M6.3501 12.8001V19.6501H17.6501V12.8001C17.6501 12.3858 17.9859 12.0501 18.4001 12.0501C18.8143 12.0501 19.1501 12.3858 19.1501 12.8001V20.4001C19.1501 20.8143 18.8143 21.1501 18.4001 21.1501H5.6001C5.18589 21.1501 4.8501 20.8143 4.8501 20.4001V12.8001C4.8501 12.3858 5.18589 12.0501 5.6001 12.0501C6.01431 12.0501 6.3501 12.3858 6.3501 12.8001Z'
                                        fill={colorHome}/>
                                </svg>
                            </div>
                        </button>
                        <a id={'btn-about'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#about-me'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M7.0002 7.0249C7.0002 4.2249 9.2002 2.0249 12.0002 2.0249C14.7002 2.0249 17.0002 4.2249 17.0002 7.0249C17.0002 9.8249 14.8002 12.0249 12.0002 12.0249C9.2002 12.0249 7.0002 9.8249 7.0002 7.0249ZM15.5002 7.0249C15.5002 5.1249 13.9002 3.5249 12.0002 3.5249C10.0002 3.5249 8.5002 5.1249 8.5002 7.0249C8.5002 8.9249 10.1002 10.5249 12.0002 10.5249C13.9002 10.5249 15.5002 8.9249 15.5002 7.0249Z'
                                          fill={colorAbout}/>
                                    <path
                                        d='M12 14.4751C8.44431 14.4751 5.55 17.5086 5.55 21.2251C5.55 21.6393 5.21421 21.9751 4.8 21.9751C4.38579 21.9751 4.05 21.6393 4.05 21.2251C4.05 16.6955 7.59972 12.9751 12 12.9751C16.4003 12.9751 19.95 16.6955 19.95 21.2251C19.95 21.6393 19.6142 21.9751 19.2 21.9751C18.7858 21.9751 18.45 21.6393 18.45 21.2251C18.45 17.5086 15.5557 14.4751 12 14.4751Z'
                                        fill={colorAbout}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-education'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#education'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M12.298 3.53047L22.698 8.03047C23.3035 8.29249 23.3 9.15243 22.6924 9.40952L12.2924 13.8095C12.1056 13.8886 11.8947 13.8886 11.7079 13.8095L2.34985 9.85034V14.5186C2.34985 14.9328 2.01406 15.2686 1.59985 15.2686C1.18564 15.2686 0.84985 14.9328 0.84985 14.5186V8.7186C0.84985 8.66654 0.855152 8.61573 0.865247 8.56667C0.904703 8.37039 1.02152 8.18802 1.21591 8.07418C1.25128 8.05307 1.28854 8.03478 1.32736 8.01963L11.7023 3.53047C11.8924 3.44824 12.1079 3.44824 12.298 3.53047ZM3.50669 8.71105L12.0001 12.3044L20.4936 8.71105L12.0001 5.03599L3.50669 8.71105Z'
                                          fill={colorEducation}/>
                                    <path
                                        d='M4.95035 17.8882V12.8184C4.95035 12.4042 4.61456 12.0684 4.20035 12.0684C3.78614 12.0684 3.45035 12.4042 3.45035 12.8184V18.4184C3.45035 18.7329 3.64652 19.0139 3.94169 19.1224C8.81141 20.9116 14.1047 20.9927 19.0661 19.3876L19.8365 19.1299C20.1428 19.0278 20.3493 18.7412 20.3493 18.4184V12.8184C20.3493 12.4042 20.0136 12.0684 19.5993 12.0684C19.1851 12.0684 18.8493 12.4042 18.8493 12.8184V17.8795C14.295 19.4092 9.44394 19.417 4.95035 17.8882Z'
                                        fill={colorEducation}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-experience'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#experience'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M15.5928 6.19961V4.85001C15.5928 4.13579 15.057 3.60001 14.3428 3.60001H9.9428C9.22858 3.60001 8.6928 4.13579 8.6928 4.85001V6.19961H3.943C2.88156 6.19961 1.993 6.98363 1.993 7.94961V11.4496C1.993 12.4936 2.8503 13.1996 3.943 13.1996L11.9501 14.194L12.1339 14.194L20.1932 13.1991L20.3404 13.1918C21.3596 13.1099 22.1207 12.3956 21.993 11.3956V7.94961C21.993 6.98339 21.1042 6.19961 20.042 6.19961H15.5928ZM14.0928 6.19961V5.10001H10.1928V6.19961H14.0928ZM20.143 11.6996L20.0511 11.7053L12.042 12.6939L4.0349 11.7053C3.62141 11.6996 3.493 11.5939 3.493 11.4496V7.94961C3.493 7.85676 3.6711 7.69961 3.943 7.69961H20.042C20.3148 7.69961 20.493 7.85674 20.493 7.94961V11.4496L20.5032 11.5729C20.5143 11.6395 20.4456 11.6996 20.143 11.6996Z'
                                          fill={colorExperience}/>
                                    <path
                                        d='M4.792 14.85V18.9H19.393V19.65L20.143 18.9H19.393V14.85C19.393 14.4358 19.7288 14.1 20.143 14.1C20.5572 14.1 20.893 14.4358 20.893 14.85V19.65C20.893 20.0642 20.5572 20.4 20.143 20.4H4.042C3.62778 20.4 3.292 20.0642 3.292 19.65V14.85C3.292 14.4358 3.62778 14.1 4.042 14.1C4.45621 14.1 4.792 14.4358 4.792 14.85Z'
                                        fill={colorExperience}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-projects'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={'#projects'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M13.7314 6.96254L11.5314 11.7625C11.3588 12.1391 10.9137 12.3044 10.5371 12.1318C10.1606 11.9593 9.99522 11.5141 10.1678 11.1376L12.3678 6.33755C12.5404 5.96101 12.9855 5.79566 13.3621 5.96825C13.7386 6.14083 13.904 6.58599 13.7314 6.96254Z'
                                        fill={colorProjects}/>
                                    <path
                                        d='M9.48038 7.98052C9.77336 7.68771 9.77349 7.21284 9.48068 6.91986C9.18787 6.62689 8.71299 6.62676 8.42002 6.91957L6.07286 9.26542L8.43538 11.4954C8.7366 11.7798 9.21128 11.7661 9.4956 11.4649C9.77993 11.1636 9.76623 10.689 9.46502 10.4046L8.22554 9.23467L9.48038 7.98052Z'
                                        fill={colorProjects}/>
                                    <path
                                        d='M14.5195 11.4804C14.2266 11.1875 14.2266 10.7126 14.5195 10.4197L15.7041 9.23511L14.5045 7.96501C14.2201 7.66387 14.2337 7.18919 14.5348 6.90479C14.836 6.62038 15.3107 6.63394 15.5951 6.93508L17.7955 9.26498L15.5801 11.4804C15.2872 11.7733 14.8124 11.7733 14.5195 11.4804Z'
                                        fill={colorProjects}/>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M3.75 15.5999H20.25C21.1642 15.5999 22 14.7642 22 13.8499V4.34995C22 3.33573 21.2642 2.59995 20.25 2.59995H3.75C2.73502 2.59995 2 3.33549 2 4.34995V13.8499C2 14.8644 2.73502 15.5999 3.75 15.5999ZM20.5 13.8499C20.5 13.9357 20.3358 14.0999 20.25 14.0999H3.75C3.56369 14.0999 3.5 14.0362 3.5 13.8499V4.34995C3.5 4.16368 3.56369 4.09995 3.75 4.09995H20.25C20.4358 4.09995 20.5 4.16416 20.5 4.34995V13.8499Z'
                                          fill={colorProjects}/>
                                    <path
                                        d='M2.77014 19.9L3.46586 17.6738C3.58941 17.2784 3.36907 16.8577 2.97371 16.7342C2.57835 16.6106 2.15769 16.831 2.03414 17.2263L1.03414 20.4263C0.883219 20.9093 1.24402 21.4 1.75 21.4H22.25C22.756 21.4 23.1168 20.9093 22.9659 20.4263L21.9659 17.2263C21.8423 16.831 21.4217 16.6106 21.0263 16.7342C20.6309 16.8577 20.4106 17.2784 20.5341 17.6738L21.2299 19.9H2.77014Z'
                                        fill={colorProjects}/>
                                </svg>
                            </div>
                        </a>
                        <a id={'btn-resume'} className={this.state.isMobile ? 'nav-link nav-link-mobile' : 'nav-link svg-icon'} href={resume} target={'_blank'} rel={'noopener noreferrer'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M15.2993 7.80001H11.2993C10.8851 7.80001 10.5493 7.46422 10.5493 7.05001C10.5493 6.63579 10.8851 6.30001 11.2993 6.30001H15.2993C15.7135 6.30001 16.0493 6.63579 16.0493 7.05001C16.0493 7.46422 15.7135 7.80001 15.2993 7.80001Z'
                                        fill={colorResume}/>
                                    <path
                                        d='M8.6997 11.1999H15.2997C15.7139 11.1999 16.0497 10.8641 16.0497 10.4499C16.0497 10.0357 15.7139 9.69991 15.2997 9.69991H8.6997C8.28549 9.69991 7.9497 10.0357 7.9497 10.4499C7.9497 10.8641 8.28549 11.1999 8.6997 11.1999Z'
                                        fill={colorResume}/>
                                    <path
                                        d='M15.2997 14.6999H8.6997C8.28549 14.6999 7.9497 14.3641 7.9497 13.9499C7.9497 13.5357 8.28549 13.1999 8.6997 13.1999H15.2997C15.7139 13.1999 16.0497 13.5357 16.0497 13.9499C16.0497 14.3641 15.7139 14.6999 15.2997 14.6999Z'
                                        fill={colorResume}/>
                                    <path
                                        d='M8.6997 18.0998H15.2997C15.7139 18.0998 16.0497 17.764 16.0497 17.3498C16.0497 16.9356 15.7139 16.5998 15.2997 16.5998H8.6997C8.28549 16.5998 7.9497 16.9356 7.9497 17.3498C7.9497 17.764 8.28549 18.0998 8.6997 18.0998Z'
                                        fill={colorResume}/>
                                    <path d='M9.8999 7.05001C9.8999 6.49801 9.4519 6.05001 8.8999 6.05001C8.3469 6.05001 7.8999 6.49801 7.8999 7.05001C7.8999 7.60201 8.3469 8.05001 8.8999 8.05001C9.4519 8.05001 9.8999 7.60201 9.8999 7.05001Z'
                                          fill={colorResume}/>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M5.5995 21.4H18.4005C18.8147 21.4 19.1505 21.0642 19.1505 20.65V3.35001C19.1505 2.93579 18.8147 2.60001 18.4005 2.60001H5.5995C5.18529 2.60001 4.8495 2.93579 4.8495 3.35001V20.65C4.8495 21.0642 5.18529 21.4 5.5995 21.4ZM6.3495 4.10001H17.6505V19.9H6.3495V4.10001Z'
                                          fill={colorResume}/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className={'nav-bottom'}>
                        <a id={'btn-github'} className={this.state.isMobile ? 'nav-link nav-link-mobile nav-animate' : 'nav-link svg-icon nav-animate'} href={'https://github.com/justinkonecny'} target={'_blank'} rel={'noopener noreferrer'}
                           key={'navGitHub'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M13.4036 19.9994C13.322 19.9828 13.2549 19.9491 13.2023 19.8985C13.0914 19.7917 13.036 19.6581 13.036 19.498V16.6803C13.036 15.8167 12.8057 15.1845 12.3451 14.784C12.8501 14.7306 13.3041 14.6503 13.7074 14.5433C14.1105 14.4364 14.5271 14.2628 14.9569 14.0224C15.3867 13.7822 15.7456 13.4861 16.0338 13.1343C16.3217 12.7825 16.5564 12.3153 16.738 11.732C16.9193 11.1487 17.0105 10.4789 17.0105 9.72218C17.0105 8.64492 16.6602 7.72777 15.9602 6.97092C16.2882 6.16084 16.2527 5.25276 15.8541 4.24664C15.6059 4.16642 15.2468 4.21544 14.7771 4.39343C14.3077 4.57151 13.8999 4.76741 13.5545 4.98118L13.0494 5.30155C12.2251 5.07015 11.3743 4.95442 10.4971 4.95442C9.61989 4.95442 8.76927 5.07015 7.94501 5.30155C7.8032 5.20379 7.61498 5.08324 7.38006 4.941C7.14514 4.7987 6.77531 4.62708 6.27018 4.42673C5.76515 4.22648 5.38405 4.16628 5.12706 4.2465C4.73711 5.25258 4.70615 6.1607 5.03409 6.97078C4.33404 7.72763 3.98394 8.64454 3.98394 9.72204C3.98394 10.4788 4.07477 11.1465 4.25638 11.7253C4.4379 12.3039 4.67059 12.7715 4.95411 13.1276C5.23758 13.4836 5.59424 13.782 6.02418 14.0223C6.45389 14.2629 6.87042 14.4364 7.2735 14.5434C7.67681 14.6502 8.13086 14.7305 8.63589 14.7838C8.28156 15.1043 8.06442 15.5627 7.98468 16.1595C7.7985 16.2485 7.5991 16.3154 7.38658 16.3599C7.17382 16.4042 6.9213 16.4265 6.62894 16.4265C6.33657 16.4265 6.0463 16.3309 5.7584 16.1395C5.47027 15.948 5.2246 15.6698 5.02068 15.3047C4.85229 15.0199 4.63744 14.7884 4.37608 14.6104C4.11458 14.4322 3.89535 14.3256 3.71811 14.2899L3.45237 14.25C3.2662 14.25 3.13789 14.2695 3.06689 14.3097C2.9959 14.3499 2.97383 14.4011 3.00046 14.4636C3.02704 14.526 3.06685 14.5883 3.12001 14.6505C3.17323 14.7128 3.23077 14.7664 3.29278 14.8109L3.38584 14.8779C3.58077 14.9669 3.77346 15.1359 3.96402 15.3853C4.15457 15.6344 4.29405 15.8617 4.38264 16.0663L4.51556 16.3736C4.63078 16.7118 4.82571 16.9856 5.10029 17.1949C5.37502 17.4041 5.67181 17.5376 5.9909 17.5952C6.30985 17.6533 6.6179 17.6846 6.91465 17.6887C7.21153 17.693 7.45744 17.6778 7.65236 17.6419L7.95809 17.5888C7.95809 17.9269 7.96023 18.3231 7.9648 18.7772C7.96922 19.2314 7.9715 19.4717 7.9715 19.4984C7.9715 19.6584 7.91396 19.7921 7.79873 19.8989C7.74396 19.9496 7.67516 19.9833 7.59233 19.9999'
                                        fill={colorGithub}/>
                                </svg>

                            </div>
                        </a>
                        <a id={'btn-linkedin'} className={this.state.isMobile ? 'nav-link nav-link-mobile nav-animate' : 'nav-link svg-icon nav-animate'} href={'https://www.linkedin.com/in/justin-konecny/'} target={'_blank'}
                           rel={'noopener noreferrer'} key={'navLinkedIn'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='20' height='20' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M8 0C3.5824 0 0 3.5824 0 8C0 12.4176 3.5824 16 8 16C12.4176 16 16 12.4176 16 8C16 3.5824 12.4176 0 8 0ZM5.67529 12.0938H3.72693V6.23206H5.67529V12.0938ZM4.70117 5.43164H4.68848C4.03467 5.43164 3.61182 4.98157 3.61182 4.41907C3.61182 3.84387 4.04761 3.40625 4.71411 3.40625C5.38062 3.40625 5.79077 3.84387 5.80347 4.41907C5.80347 4.98157 5.38062 5.43164 4.70117 5.43164ZM12.7007 12.0938H10.7526V8.95789C10.7526 8.1698 10.4705 7.63232 9.7655 7.63232C9.22729 7.63232 8.90674 7.99487 8.76587 8.34485C8.71436 8.47009 8.70178 8.64514 8.70178 8.82031V12.0938H6.75354C6.75354 12.0938 6.77905 6.78198 6.75354 6.23206H8.70178V7.06201C8.96069 6.6626 9.42395 6.09448 10.4576 6.09448C11.7395 6.09448 12.7007 6.93225 12.7007 8.73267V12.0938Z'
                                          fill={colorLinkedIn}/>
                                </svg>

                            </div>
                        </a>
                        <a id={'btn-email'} className={this.state.isMobile ? 'nav-link nav-link-mobile nav-animate' : 'nav-link svg-icon nav-animate'} href={'mailto:konecnyjustin@gmail.com'} target={'_blank'} rel={'noopener noreferrer'}
                           key={'navEmail'}>
                            <div className={this.state.isMobile ? 'nav-inner nav-inner-mobile' : 'nav-inner'}>
                                <svg width='20' height='20' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule={'evenodd'} clipRule={'evenodd'}
                                          d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM3.26531 5.0419V4.57143H12.7347V5.0419L8 7.9026L3.26531 5.0419ZM8.18752 8.62266L12.7347 5.87527V11.5156H3.26531V5.87527L7.81248 8.62266C7.9276 8.69222 8.0724 8.69222 8.18752 8.62266Z'
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
