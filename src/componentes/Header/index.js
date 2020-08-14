import React from 'react';

import { Link } from 'react-router-dom';

import imgLogo from '../assets/images/logo-trigg-png';

import './index.css';

function Header() {
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
                    <p>TAG</p>
                </div>
                
                <div className="button-header">
                    <Link to="/criar-conta">
                        <p>CRIAR MINHA CONTA</p>
                    </Link>

                    <Link to="login">
                        <p>Acessar Conta</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;