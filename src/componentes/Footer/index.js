import React from 'react';
import { Link } from 'react-router-dom';

import btnFace from '../assets/images/icon_face.svg';
import btnInsta from '../assets/images/icon_insta.svg';
import btnYout from '../assets/images/icon_yt.svg';
import btnTwitter from '../assets/images/icon_tt.svg';
import btnLinkedin from '../assets/images/icon_in.svg';
import btnGGPlay from '../assets/images/btn_google_play.svg';
import btnAppStory from '../assets/images/btn_appstore.svg';
import logoBlue from '../assets/images/logo_trigg_footer.svg';
import logoABCD from '../assets/images/abcd_badge.png';

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
                    <h4 className="first-title">App <span>chat</span> ou <Link to="/">trigg.com.br/chat</Link></h4>
                    <p>Segunda a Sexta das 09h às 18h30</p>

                    <h4 className="second-title">Central de Relacionamento</h4>
                    <p><strong>3003-1025</strong> Capitais e Regiões Metropolitanas</p>
                    <p><strong>0800 326 0808</strong> Demais Localidades</p>
                    <p>Segunda a Sexta das 08h às 20h </p>
                    <p>e aos Sábados das 08h às 18h.</p>
                </div>

                <div className="sac">
                    <h4 className="first-title">SAC</h4>
                    <p><strong>0800 727 0885</strong></p>
                    <p>24h e 7 dias por semana</p>
                    <p className="note">Exclusivo para reclamações, elogios, sugestões, suspensão
                    e / ou cancelamentos de serviços e contratos.</p>

                    <h4 className="second-title">Ouvidoria</h4>
                    <p><strong>0800 701 0412</strong></p>
                    <p>Segunda a Sexta das 09h às 17h</p>
                    <p className="note">Se já passou pelos outros canais e ainda precisa de ajuda <Link to="/">envie sua manifestação</Link></p>
                </div>

                <div className="deficientes">
                    <h4 className="first-title">Deficientes Auditivos ou de fala</h4>
                    <p><strong>0800 888 3588</strong></p>
                    <p>24h e 7 dias por semana</p>

                    <div className="p-store">
                    <Link to="/">
                        <img src={btnGGPlay} alt="Google Play"/>
                    </Link>

                    <Link to="/">
                        <img src={btnAppStory} alt="App Store"/>
                    </Link>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="associate-member">
                <div className="logo-trigg">
                    <Link to="/">
                        <img src={logoBlue} alt="Logo Azul"/>
                    </Link>
                </div>

                <div className="text-member">
                    <p>Somos membros da ABCD e seguimos como Orientações de Conduta do Código de Ética e Autorregulação</p>
                </div>

                <div className="logo-member">
                    <img src={logoABCD} alt="Logo Abcd"/>
                </div>
            </section>
        </footer>
    )
}