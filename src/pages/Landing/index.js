import React from 'react';

import { Link } from 'react-router-dom';

import imgLogo from '../../componentes/assets/images/logo-trigg.png';

import './style.css'

function Landing() {
    return (
        <div>
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

            <div className="page-landing">
                <h1>Em construção...</h1>
            </div>
        </div>

        
    );
}

export default Landing;