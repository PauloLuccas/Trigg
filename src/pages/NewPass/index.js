import React from 'react';

import HeaderLogin from '../../componentes/HeaderLogin/index';
import SectionNewPass from '../../componentes/SectionNewPass/index';
import Footer from '../../componentes/Footer/Index'

export default function Login() {
    return (
        <section className="login-container">
            <HeaderLogin />
            <SectionNewPass />
            <Footer />
        </section>
    )
}