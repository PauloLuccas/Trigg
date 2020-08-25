import React from 'react';
import { Link } from 'react-router-dom';

import btnFace from '../assets/images/icon_face.svg';
import btnInsta from '../assets/images/icon_insta.svg';
import btnYout from '../assets/images/icon_yt.svg';
import btnTwitter from '../assets/images/icon_tt.svg';
import btnLinkedin from '../assets/images/icon_in.svg';

import './style.css';

export default function Footer() {
    return (
        <footer className="container-footer">
            <section className="social-network">
                <Link to="/">
                    <img src={btnFace} alt="Botão Facebook"/>
                </Link>

                <Link to="/">
                    <img src={btnInsta} alt="Botão Instagram"/>
                </Link>

                <Link to="/">
                    <img src={btnYout} alt="Botão Youtube"/>
                </Link>

                <Link to="/">
                    <img src={btnTwitter} alt="Botão Twitter"/>
                </Link>

                <Link to="/">
                    <img src={btnLinkedin} alt="Botão Linkedin"/>
                </Link>

                <div className="credit-movement">
                    <p>Movimento de Crédito Consciente</p>
                </div>
            </section>

            <section className="footer-informations">
                <div className="chat">
                    <h1>chat</h1>
                </div>

                <div className="sac">
                    <h1>sac</h1>
                </div>

                <div className="deficientes">
                    <h1>defit</h1>
                </div>
            </section>
            
        </footer>
    )
}