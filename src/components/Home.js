import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import beach from '../resources/beach.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                {/*<div className="container">
                    <img src={beach} className="Home-image" alt="logo" />
                    <h1 className="Image-text">
                        Hi, I'm <span style={{ color: '#303030' }}>Justin</span>, and this is my website.
                    </h1>
                </div>*/}

                <Link to="/login" activeClassName="active">
                    <button className="Login-button">
                        Login
                    </button>
                </Link>
            </div>
        );
    }
}

export default Home;
