import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
    render() {
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

export default NavBar;
