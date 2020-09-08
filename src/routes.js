import React from 'react';
// import ReactDOM from 'react-dom';
import Initial from './pages/Initial/index';
import About from './pages/About/index';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Initial} />
                <Route path="/about" exact={true} component={About} />
            </Switch>
        </ BrowserRouter>
    )
  };