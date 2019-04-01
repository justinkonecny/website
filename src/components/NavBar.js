import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.display ? 'nav' : 'nav hide'}>
                <p>NAV</p>
            </div>
        );
    }
}

export default NavBar;
