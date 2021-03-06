import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import './css/index.css';

/**
 * The main, multi-page website.
 */
const routerApp = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
ReactDOM.render(routerApp, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
