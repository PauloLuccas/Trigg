import React from 'react';
import ItemHeader from '../../componentes/ItemHeader';
import Footer from '../../componentes/Footer';

import logo from '../../componentes/assets/images/logo-trigg.png';
import imgIcon from '../../componentes/assets/images/Shape.svg';
import imgMenu from '../../componentes/assets/images/menu.png';
import imgTrigg from '../../componentes/assets/images/img_about.png';
import check from '../../componentes/assets/images/tick.svg';

import './style.css';

function theTrigg() {
    return (
        <div className="theTrigg">
            <header>
                <ItemHeader 
                    imagem={logo}
                    imagemicon={imgIcon}
                    imagemenu={imgMenu}
                />
            </header>

            <section className="container-trigg">
                <div className="hello-trigg">
                    <div className="img-hello">
                        <img src={imgTrigg} alt="Imagem Trigg"/>
                    </div>

                    <div className="text-hello">
                        <h1>Olá, nós somos <br/> a <span> Trigg ;) </span></h1>
                        <p className="subtitle">Vivemos de <span>tecnologia!</span></p>

                        <div className="about-text">
                            <div className="text-flex">
                                <img src={check} alt="Check"/>
                                <p>Compartilhamos nossa cultura e aprendizados</p>
                            </div>
                            
                            <div className="text-flex">
                                <img src={check} alt="Check"/>
                                <p>Estamos sempre em busca do diferente</p>
                            </div>

                            <div className="text-flex">
                                <img src={check} alt="Check"/>
                                <p>Queremos transformar o mercado financeiro com tecnologia digital</p>
                            </div>
                            
                            <div className="text-flex end">
                                <img src={check} alt="Check"/>
                                <p>Trabalhamos para descomplicar sua vida financeira</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default theTrigg;