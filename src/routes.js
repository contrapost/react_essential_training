/**
 * Created by alexandershipunov on 06/03/2017.
 **/

import React from 'react';
import {render} from 'react-dom';
import {App} from './components/App';
import {Whoops404} from './components/Whoops404';
import { Router, Route, hashHistory} from 'react-router';

export const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="list-days" component={App}>
            <Route path=":filter" component={App}/>
        </Route>
        <Route path="add-day" component={App}/>
        <Route path="*" component={Whoops404}/>
    </Router>
);