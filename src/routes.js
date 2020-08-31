import React from 'react';
// import ReactDOM from 'react-dom';
import Trigg from './pages/Trigg/index';
import theTrigg from './pages/theTrigg/theTrigg';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Trigg} />
                <Route path="/conhecatrigg" exact={true} component={theTrigg} />
            </Switch>
        </ BrowserRouter>
    )
  };