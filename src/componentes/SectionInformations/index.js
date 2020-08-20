import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import cashIcon from '../assets/images/cashback.svg';
import appleStore from '../assets/images/logo-apple-blue.svg';
import googlePlay from '../assets/images/logo-googleplay-blue.svg';
import mobileFront from '../assets/images/front.png';

export default function SectionInformations() {
    return (
        <div className="container-section">
            <div className="cashback">
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

            <div className="cashback-img">
                <img src={mobileFront} alt="Mobile Front"/>
            </div>

            <div className="cashback-simulation">
                <h1>simulador</h1>
            </div>

        </div>
    )
}