import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import InputSlider from '../../controllers/InputSlider';

import './style.css';
import 'aos/dist/aos.css';

import cashIcon from '../../assets/images/cashback.svg';
import appleStore from '../../assets/images/logo-apple-blue.svg';
import googlePlay from '../../assets/images/logo-googleplay-blue.svg';
import mobileFront from '../../assets/images/front.png';

export default function SectionInformations() {

    AOS.init({
        duration: 1200,
    });

    return (
        <section className="container-section">
            <div className="cashback" data-aos="fade-right">
                <img src={cashIcon} alt="CashBack Icon"/>
                <h1>CASHBACK</h1>
                <p className="title">Seu dinheiro de volta!</p>
                <p>Na Trigg, devolvemos seu dinheiro, literalmente! Um percentual do que você gasta todo mês no seu cartão, volta para você.</p>
                <div className="button">
                    <Link to="/">
                        CRIAR MINHA CONTA
                    </Link>
                </div>

                <div className="store">
                <Link to="/">
                    <img src={appleStore} className="appleStore" alt="Apple Store"/>
                </Link>

                <Link to="/">
                    <img src={googlePlay} className="googlePlay" alt="Google Play"/>
                </Link>
            </div>      
            </div>

            <div className="cashback-img" data-aos="fade-up">
                <img src={mobileFront} alt="Mobile Front"/>
            </div>

            <div className="cashback-simulation" data-aos="fade-left">
                <h2>Devolvemos até 1.3% do valor da sua compra.</h2>
                <p>Simule o gasto mensal e veja quanto pode receber de volta.</p>
                <h1>R$ 5.500,00</h1>

                <InputSlider />
                
               <div className="calc-simulation">
                   <div className="por-simulation">
                       <p className="title">% cashback</p>
                       <p>1,30%</p>
                   </div>

                   <div className="resgate-mes">
                       <p className="title">resgate mês</p>
                       <p>R$ 71,50</p>
                   </div>

                   <div className="resgate-ano">
                       <p className="titles">resgate
                        no ano</p>
                       <p>R$ 858,00</p>
                   </div>
               </div>
            </div>

        </section>
    )
}