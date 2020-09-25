import React from 'react';
import Header from '../../componentes/Header';
import SectionPay from '../../componentes/SectionPay';
import Footer from '../../componentes/Footer/Index';

import './style.css';

export default function SamsungPay() {
    return (
        <section className="pay">
            <Header />
            <SectionPay />
            <Footer />
        </section>
    )
}