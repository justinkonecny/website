import React, {Component} from 'react';
import '../css/NavBar.css';
import icon from '../resources/icon.svg'
import menu from '../resources/menu.svg'

/**
 * The navigation bar component displayed at the top of the website, disappears as the user scrolls down the page.
 * All links rendered on the left side of the navigation bar are passed as a list to the 'linksLeft' prop.
 * The link rendered on the right side of the navigation bar are passed as a list to the 'linksRight' prop.
 */
class NavBar extends Component {

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
        return (
            <div>
                <div className={this.state.showMenu ? 'blur' : 'menu-hidden'} onClick={this.updateMenuState}/>
                <div className={this.props.display && this.state.showMenu ? 'menu-container' : 'menu-container hide-left'}>
                    <div className={'menu-btn-container'}>
                        <button onClick={this.updateMenuState} className={this.state.showMenu ? 'menu-expanded' : 'menu-hidden'}>
                            <img className={'menu'} src={menu} alt={'menu'}/>
                        </button>
                    </div>
                    <div className={'nav-left nav-left-mobile'} onClick={this.updateMenuState}>
                        {this.props.linksLeft}
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
                        <div style={{'width': '75vw', 'display': 'flex'}}>
                            <div className={'menu-btn-container'} style={{'margin': 'auto 0 auto auto'}}>
                                <button onClick={this.updateMenuState} className={this.state.showMenu ? 'menu-hidden' : 'menu-nav-bar'}>
                                    <img className={'menu'} src={menu} alt={'menu'}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.getMenu()}
                </div>
            );
        } else {
            return (
                <div className={this.props.display ? 'nav' : 'nav hide'}>
                    <div style={{'width': '100px', 'display': 'flex'}}>
                        <div className={'icon-container'}>
                            <button onClick={this.scrollToTop} className={'icon-btn'}>
                                <img src={icon} alt={'icon'} className={'icon'}/>
                            </button>
                        </div>
                    </div>
                    <div className={'nav-left'}>
                        {this.props.linksLeft}
                    </div>
                    <div className={'nav-right'}>
                        {this.props.linksRight}
                    </div>
                </div>
            );
        }
    }
}

export default NavBar;
