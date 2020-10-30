import React from 'react';

import Header from '../../componentes/Header';
import SectionFAQ from '../../componentes/SectionFAQ';
import Footer from '../../componentes/Footer/Index';

export default function FAQ() {
    return (
        <section className="app-container">
            <Header />
            <SectionFAQ />
            <Footer />
        </section>
    )
}