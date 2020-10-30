import React from 'react';
import AOS from 'aos';

import './style.css';
import 'aos/dist/aos.css';

export default function SectionBanner() {

    AOS.init({
        duration: 1200
    });

    return (
        <div className="banner" data-aos="fade-left">
            <ul>
                <li className="bu">Simples</li>
                <li className="bu">100% Digital</li>
                <li className="betrigg"><span>#</span> BETRIGG </li>
            </ul>
        </div>
    );
}