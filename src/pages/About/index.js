import React from 'react';
import Header from '../../componentes/Header';
import SectionTheTrigg from '../../componentes/SectionTheAbout';
import SectionTrailer from '../../componentes/SectionTrailer/index';
import SectionOurStory from '../../componentes/SectionOurStory';
import SectionJoinTeam from '../../componentes/SectionJoinTeam'
import Footer from '../../componentes/Footer/Index';

import './style.css';;

export default function About() {
    return (
        <div className="app-container">
            <Header />
            <SectionTheTrigg />
            <SectionTrailer />
            <SectionOurStory />
            <SectionJoinTeam />
            <Footer />
        </div>
    )
}