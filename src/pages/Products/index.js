import React from 'react';
import Header from '../../componentes/Header';
import SectionProducts from '../../componentes/SectionProdutcs';
import Footer from '../../componentes/Footer/Index';

import './style.css';

export default function Products() {
    return (
        <div className="produc-container">
            <Header />
            <SectionProducts />
            <Footer />
        </div>
    )
}