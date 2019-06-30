import React, { Component } from 'react';
import '../css/NavBar.css';

/**
 * The navigation bar component displayed at the top of the website, disappears as the user scrolls down the page.
 * All links rendered on the left side of the navigation bar are passed as a list to the 'linksLeft' prop.
 * The link rendered on the right side of the navigation bar are passed as a list to the 'linksRight' prop.
 */
class NavBar extends Component {
    render() {
        if (this.props.isMobile) {
            return null;
            // return (
            //     <div className={this.props.display ? 'nav nav-mobile' : 'nav nav-mobile hide'}>
            //         More
            //     </div>
            // );
        } else {
            return (
                <div className={this.props.display ? 'nav' : 'nav hide'}>
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
