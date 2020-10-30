import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import MenuDefault from '../../componentes/MenuResponsivo';

import './style.css';
import 'aos/dist/aos.css';

export default function ItemHeader(props) {

    AOS.init({
        duration: 1200,
    });

    return (
        <div className="page-header" data-aos="fade-down">
            <div className="top-bar-container">
                <div id="logo-header-mobile" className="logo-header">
                    <Link to="/">
                        <img src={props.imagem} className="btn-logo" alt="Logo Trigg"/>
                    </Link>
                </div>

                <div className="about-header">
                    <Link to="/about">
                        <p>Conheça a Trigg</p>
                    </Link>
                </div>

                <div className="cartao-header">
                    <Link to="/Product">
                        <p>Produtos</p>
                    </Link>
                </div>

                <div className="tag-header">
                    <Link to="/faq">
                        <p>Perguntas Frequêntes</p>
                    </Link>
                </div>
                    
                <div className="button-header">
                    <Link to="/login">
                        <img src={props.imagemicon} alt="Icon"></img>
                        Acessar Conta
                    </Link>
                </div>

                <div className="button-header login">
                    <Link to="/register">
                        <img src={props.imagelogin} alt="Icon"></img>
                        Pedir Cartão
                    </Link>
                </div>

                <div className="button-mobile">
                    <MenuDefault />
                </div>
            </div>
            
        </div>
    );
}