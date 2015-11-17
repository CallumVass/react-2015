import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/app';
import People from './components/people';
import Person from './components/person';

render(
    (
        <Router history={createBrowserHistory()}>
            <Route path="/" component={App}>
                <IndexRoute component={People}/>
                <Route path="/:id" component={Person}/>
            </Route>
        </Router>
    ), document.getElementById("app"));