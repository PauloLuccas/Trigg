import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import CreateAnAccount from './pages/CreateAnAccount';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/criar-conta" component={CreateAnAccount}></Route>
            <Route path="/login" component={Login}></Route>
        </BrowserRouter>
    );
}

export default Routes;