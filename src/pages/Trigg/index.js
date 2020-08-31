import React from 'react';

import Header from '../../componentes/Header';
import MainHeader from '../../componentes/MainHeader';
import SectionInformations from '../../componentes/SectionInformations';
import SectionAbout from '../../componentes/SectionAbout';
import Footer from '../../componentes/Footer';



import '../../index.css';
import './style.css';
function Trigg() {
    return (
        <div className="App">
            <Header />
            <MainHeader />

            <section className="sectionInformations">
                <SectionInformations />
            </section>
            <section className="section-about">
                <SectionAbout />
            </section>

            <Footer />
        </div>
    )
}

export default Trigg;