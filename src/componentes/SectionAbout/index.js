import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import eventoTrigg from '../../assets/images/evento-trigg.jpg';
import check from '../../assets/images/tick.svg';
import nextWhite from '../../assets/images/next-white.svg';

import './style.css';
import 'aos/dist/aos.css';

export default function SectionAbout() {

    AOS.init({
        duration: 1200,
    });

    return (
        <section className="container-about" data-aos="fade-zoom">
            <div className="about">
                <div className="banner-about">
                    <img src={eventoTrigg} alt="Evento Trigg"/>
                </div>

                <div className="text-about">

                    <h1>Vivemos <span>tecnologia!</span></h1>

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

                    <Link to="/">
                        Quem somos
                        <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                    </Link>
                    
                </div>
            </div>
        </section>       
    )
}