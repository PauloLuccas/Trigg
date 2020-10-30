import React from 'react';
import AOS from 'aos';

import imgTrigg from '../../assets/images/img_about.png';
import check from '../../assets/images/tick.svg';

import './style.css';
import 'aos/dist/aos.css';  

export default function SectionTheTrigg() {

    AOS.init({
        duration: 1200,
    })

    return (
        <section className="container-trigg" data-aos="fade-zoom">
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
    )
}