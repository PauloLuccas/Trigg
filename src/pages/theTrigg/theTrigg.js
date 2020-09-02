import React from 'react';
import ItemHeader from '../../componentes/ItemHeader';
import SectionTheTrigg from '../../componentes/SectionTheTrigg';    
import Footer from '../../componentes/Footer';

import logo from '../../componentes/assets/images/logo-trigg.png';
import imgIcon from '../../componentes/assets/images/Shape.svg';
import imgMenu from '../../componentes/assets/images/menu.png';


import './style.css';

function theTrigg() {
    return (
        <div className="theTrigg">
            <header>
                <ItemHeader 
                    imagem={logo}
                    imagemicon={imgIcon}
                    imagemenu={imgMenu}
                />
            </header>

            <SectionTheTrigg />

            <Footer />
        </div>
    )
}

export default theTrigg;