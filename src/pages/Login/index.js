import React from 'react';

import { Link } from 'react-router-dom';

import imgLogo from '../../componentes/assets/images/logo-trigg.png';
import loginIcon from '../../componentes/assets/images/Shape.svg';
import menuIcon from '../../componentes/assets/images/menu.png';

import '../../index.css';

function Login() {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <div className="logo-header">
                        <Link to="/">
                            <img src={imgLogo} alt="Logo Trigg"/>
                        </Link>
                    </div>

                    <div className="about-header">
                        <p>Conheça a Trigg</p>
                    </div>

                    <div className="cartao-header">
                        <p>Cartão de Crédito</p>
                    </div>

                    <div className="cashback-header">
                        <p>Cashback</p>
                    </div>

                    <div className="tag-header">
                        <p>Dúvidas?</p>
                    </div>
                    
                    <div className="button-header">
                        <Link to="login">
                            <img src={loginIcon} alt="Icon"></img>
                            Acessar Conta
                        </Link>
                    </div>

                    <button id="menu-mobile" className="menu-button">
                        <img src={menuIcon} alt="Menu Icon"/>
                    </button>

                </div>
            </header>
    );
}

export default Login;