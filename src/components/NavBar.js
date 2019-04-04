import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className={this.props.display ? 'nav' : 'nav hide'}>
                {this.props.links}
            </div>
        );
    }
}

export default NavBar;
