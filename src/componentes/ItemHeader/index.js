import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../MainHeader';

import './style.css';

export default function ItemHeader(props) {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <div id="logo-header-mobile" className="logo-header">
                    <Link to="/">
                        <img src={props.imagem} alt="Logo Trigg"/>
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
                        <Link to="/">
                            <img src={props.imagemicon} alt="Icon"></img>
                            Acessar Conta
                        </Link>
                    </div>

                    <button id="menu-mobile" className="menu-button">
                        <img src={props.imagemenu} alt="Menu Icon"/>
                    </button>
            </div>

            <MainHeader />
        </header>
    );
}