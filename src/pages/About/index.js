import React from 'react';
import Header from '../../componentes/Header';
import SectionTheTrigg from '../../componentes/SectionTheAbout';
import Footer from '../../componentes/Footer/Index';

import './style.css';


export default function About() {
    return (
        <div className="app-container">
            <Header />
            <SectionTheTrigg />
            <Footer />
        </div>
    )
}