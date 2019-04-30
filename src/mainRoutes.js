import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

/**
 * Component to handle switching pages based on address path.
 *
 * @returns {*} The component to handle rendering all pages.
 * @constructor
 */
export function MainRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' render={() => (<Redirect to='/'/>)} />
        </Switch>
    );
}
