import React from 'react';

import startApp from '../../assets/images/start_app.png';
import badgePlayStore from '../../assets/images/badge_play_store_desk.svg';
import badgeApple from '../../assets/images/apple_store_badge.svg';

import './style.css';

export default function SectionProducts() {
    return (
        <section className="products">
            <div className="slider-products">
                    <div className="first">
                        <h2>#AppTrigg</h2>
                        <img src={startApp} alt="Start App"/>

                        <div className="text-first">
                            <h1>Um cartão <span>sem burocracia</span></h1>
                            <p>
                                Nos disseram que o mercado financeiro era complexo.
                                Inquietos que somos, simplificamos e colocamos tudo o
                                que você precisa em um só App.
                            </p>
                            
                            <img src={badgePlayStore} alt="Play Store"/>
                            <img src={badgeApple} alt="Apple Store"/>
                        </div>

                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste2</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste3</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste4</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste5</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste6</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste7</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste8</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste9</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste10</h2>
                    </div>
                </div>

                <div className="slider-products">
                    <div>
                        <h2>teste11</h2>
                    </div>
                </div>
        </section>
    )
}