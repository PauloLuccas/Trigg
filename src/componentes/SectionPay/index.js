import React from 'react';
import { Link } from 'react-router-dom';

import samsungPay from '../../assets/images/samsung_pay.png';
import nextWhite from '../../assets/images/next-white.svg';

import './style.css';

export default function SectionPay() {
    return (
        <div className="samsung-container">
            <div className="credit-card">
                <img src={samsungPay} className="credit-pay" alt="App samsung pay"/>

                <div className="credit-text">
                    <h1>O cartão de crédito com cashback <span>agora está no Samsung Pay!</span></h1>
                    <p>Uma forma mais rápida, moderna e segura de pagar com seu Trigg.</p>

                    <Link to="/samsung-pay">
                        Como funciona 
                        <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}