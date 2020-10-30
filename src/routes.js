import React from 'react';
// import ReactDOM from 'react-dom';
import Initial from './pages/Initial/index';
import About from './pages/About/index';
import Products from './pages/Products';
import SamsungPay from './pages/SamsungPay';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import NewPass from './pages/NewPass';
import Register from './pages/Register';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Initial} />
                <Route path="/about" exact={true} component={About} />
                <Route path="/product" exact={true} component={Products} />
                <Route path="/samsung-pay" exact={true} component={SamsungPay} />
                <Route path="/faq" exact={true} component={FAQ} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/nova-senha" exact={true} component={NewPass} />
                <Route path="/register" exact={true} component={Register} />
            </Switch>
        </ BrowserRouter>
    )
  };