import React from 'react';
import { Link } from 'react-router-dom';

import star from '../../assets/images/star.svg';
import handshake from '../../assets/images/rock_on_trigg.png';

import './style.css';

export default function SectionJoinTeam() {
    return (
        <section className="join-container">
            <div className="joinTeam">
                <img className="handshake" src={handshake} alt="handshake"/>
                
                <div className="text-align">
                    <h2>Junte-se <span>ao Time!</span></h2>
                    <p>Vem ver o que está rolando no nosso LinkedIn</p>

                    <Link to="/">
                        Qual vaga é a sua cara ? 
                        <img className="star" src={star} alt="Star"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}