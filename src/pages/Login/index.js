import React from 'react';

import HeaderLogin from '../../componentes/HeaderLogin/index';
import SectionLogin from '../../componentes/SectionLogin/index';
import Footer from '../../componentes/Footer/Index'

export default function Login() {
    return (
        <section className="login-container">
            <HeaderLogin />
            <SectionLogin />
            <Footer />
        </section>
    )
}