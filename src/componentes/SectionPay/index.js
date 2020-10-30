import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import samsungPay from '../../assets/images/samsung_pay.png';
import nextWhite from '../../assets/images/next-white.svg';
import idDigital from '../../assets/images/ic-digital.svg';
import iconAtive from '../../assets/images/icon_ative.svg';
import iconAproveite from '../../assets/images/icon_aproveite.svg';
import samsungFull from '../../assets/images/img_samsung_pay_full.png';
import startApp from '../../assets/images/start_app.png';
import badgePlayStore from '../../assets/images/badge_play_store_desk.svg';
import badgeApple from '../../assets/images/apple_store_badge.svg';

import './style.css';
import 'aos/dist/aos.css';

export default function SectionPay() {

    AOS.init({
        duration: 1200,
    })

    return (
        <div className="samsung-container">
            <div className="credit-card" data-aos="fade-zoom">
                <img src={samsungPay} className="credit-pay" alt="App samsung pay"/>

                <div className="credit-text">
                    <h1>O cartão de crédito com cashback <span>agora está no Samsung Pay!</span></h1>
                    <p>Uma forma mais rápida, moderna e segura de pagar com seu Trigg.</p>

                    <Link to="/samsung-pay">
                        Como funciona 
                        <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                    </Link>
                </div>
            </div>

            <div className="compatibleDevices">
                <h1 data-aos="fade-up">Pegue o celular<br/><span>que montamos um tutorial</span></h1>
                
                <div className="tutorial">
                    <div className="step1" data-aos="fade-right">
                        <img src={idDigital} alt="Id Digital"/>
                        
                        <div className="text-tutorial">
                            <h3>Cadastre</h3>
                            <p>
                                No App Samsung Pay, faça o login e escolha uma opção de 
                                segurança: íris, digital ou PIN. Depois é só clicar em <strong>“Adicionar cartão”</strong>
                            </p>
                        </div>
                    </div>

                    <div className="step2" data-aos="fade-up">
                        <img src={iconAtive} alt="Icon Ative"/>
                        
                        <div className="text-tutorial">
                            <h3>Ative</h3>
                            <p>
                                Cadastre seu Trigg tirando uma foto do cartão ou se preferir,
                                adicione manualmente e clique em  <strong>“Ativar seu cartão”</strong>
                            </p>
                        </div>
                    </div>

                    <div className="step3" data-aos="fade-left">
                        <img src={iconAproveite} alt="Icon Aproveite"/>
                        
                        <div className="text-tutorial">
                            <h3>Aproveite</h3>
                            <p>
                                Aproxime o verso do seu celular na maquininha (na parte superior ou ao lado
                                do leitor de tarja magnética) e prontinho, pagamento feito
                            </p>
                        </div>
                    </div>
                </div>

                <Link to="/samsung-pay">
                    Aparelhos Compatíveis
                    <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                </Link>


                <iframe data-aos="fade-up" width="797" height="446" src="https://www.youtube.com/embed/amAU7YlxSTI" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="orderNow-container" >
                <img src={samsungFull} className="samsungFull" alt="Samsung Full" data-aos="fade-zoom"/>

                <div className="orderNow" data-aos="fade-zoom">
                    <img src={startApp} className="startApp" alt="start app"/>

                    <div className="textOrder">
                        <h1 data-aos="fade-left">Peça o seu <span>cartão Trigg!</span> </h1>
                        <p data-aos="fade-up">
                            Nos disseram que o mercado financeiro era complexo. Inquietos que somos,
                            simplificamos e colocamos tudo o que você precisa em um só App.
                        </p>

                        <div className="store-text">
                            <img src={badgePlayStore} alt="Play Store"/>
                            <img src={badgeApple} alt="Apple Store"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}