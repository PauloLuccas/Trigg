import React from 'react';
import ItemHeader from '../ItemHeader';

import logo from '../assets/images/logo-trigg.png';
import imgIcon from '../assets/images/Shape.svg';
import imgMenu from '../assets/images/menu.png';

import './style.css';

export default function Header() {
    return (
        <header className="box">
            <ItemHeader 
                imagem={logo}
                imagemicon={imgIcon}
                imagemenu={imgMenu}
            />
        </header>
    );
}