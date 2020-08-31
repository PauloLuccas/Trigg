import React from 'react';
import ItemHeader from '../../componentes/ItemHeader';
import Footer from '../../componentes/Footer';

import logo from '../../componentes/assets/images/logo-trigg.png';
import imgIcon from '../../componentes/assets/images/Shape.svg';
import imgMenu from '../../componentes/assets/images/menu.png';
import imgTrigg from '../../componentes/assets/images/img_about.png';

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

            <section className="container-trigg">
                <div className="hello-trigg">
                    <div className="img-hello">
                        <img src={imgTrigg} alt="Imagem Trigg"/>
                    </div>

                    <div className="text-hello">
                        <h1>Olá, nós somos a Trigg ;)</h1>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default theTrigg;