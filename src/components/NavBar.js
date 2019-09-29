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
        this.updateState = this.updateState.bind(this);
        this.state = {
            showMenu: false
        };
    }

    scrollTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    updateState() {
        let showing = this.state.showMenu;
        this.setState({showMenu: !showing});
    }

    getMenu() {
        return (
            <div className={this.props.display && this.state.showMenu ? 'menu-container' : 'menu-container hide-left'}>
                <div className={'nav-left nav-left-mobile'}>
                    {this.props.linksLeft}
                </div>
            </div>
        );
    }

    render() {
        if (this.props.isMobile) {
            if (!this.props.display && this.state.showMenu) {
                this.setState({showMenu: false});
            }

            return (
                <div>
                    <div className={this.props.display ? 'nav nav-mobile' : 'nav nav-mobile hide'}>
                        <div style={{'margin': 'auto 5px 18px 30px'}}>
                            <button onClick={this.scrollTop}>
                                <img src={icon} alt={'icon'} style={{'width': '25px', 'height': '25px'}}/>
                            </button>
                        </div>
                        <button onClick={this.updateState} style={{'margin': '25px 25px auto auto'}}>
                            <img className={'menu'} src={menu} alt={'menu'}/>
                        </button>
                    </div>

                    {this.getMenu()}
                </div>
            );
        } else {
            return (
                <div className={this.props.display ? 'nav' : 'nav hide'}>
                    <div style={{'margin': 'auto 5px 18px 30px'}}>
                        <button onClick={this.scrollTop}>
                            <img src={icon} alt={'icon'} style={{'width': '25px', 'height': '25px'}}/>
                        </button>
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
