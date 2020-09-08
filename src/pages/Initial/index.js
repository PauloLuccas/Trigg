import React from 'react';
import Header from '../../componentes/Header';
import MainHeader from '../../componentes/MainHeader';
import SectionInformations from '../../componentes/SectionInformations';
import SectionAbout from '../../componentes/SectionAbout';
import Footer from '../../componentes/Footer/Index';

import './style.css';

export default function Initial() {
    return (
        <div className="app-container">
            <Header />
            <MainHeader />
            <SectionInformations />
            <SectionAbout />
            <Footer />
        </div>
    )
}