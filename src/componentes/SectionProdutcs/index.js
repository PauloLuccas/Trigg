import React from 'react';

import startApp from '../../assets/images/start_app.png';
import badgePlayStore from '../../assets/images/badge_play_store_desk.svg';
import badgeApple from '../../assets/images/apple_store_badge.svg';
import cashProduct from '../../assets/images/cash_product.png';
import check from '../../assets/images/tick.svg';
import cashback from '../../assets/images/cashback.png';
import smilingBearded from '../../assets/images/barbudo_sorridente.png';
import myPet from '../../assets/images/img_meu_pet.png';
import plannedWithdrawal from '../../assets/images/img_saque_planejado.png';

import InputSlider from '../../controllers/InputSlider/';

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
                            
                            <div className="store-text">
                                <img src={badgePlayStore} alt="Play Store"/>
                                <img src={badgeApple} alt="Apple Store"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="slider-products">
                    <div className="second">
                        <h2>#CashProtegido</h2>

                        <div className="text-second">
                            <h1>Proteja seu bolso <span>de imprevistos!</span></h1>
                            <p>Um seguro para o seu cartão e para a sua fatura.</p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                Seguro cartão<br/>
                                <span className="tx">
                                    Cobertura para transações feitas
                                    em casos de roubo, perda ou furto
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                Fatura protegida<br/>
                                <span className="tx">
                                    Cobertura em casos de desemprego involuntário,
                                    invalidez permanente ou total e muito mais
                                </span>
                            </p>

                            <p className="bl">
                                <img src={check} alt="check"/>
                                Fatura premiadao<br/>
                                <span className="tx">
                                    Mensalmente você concorre a <strong>R$ 5.000,00</strong> pela Loteria Federal
                                </span>
                            </p>

                            <h3>Contrate na <strong>Store + do App</strong></h3>
                        </div>

                        <img src={cashProduct} alt="Cash Product"/>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="third">
                        <h2>#Cashback</h2>
                        <img src={cashback} alt="Cashback"/>

                        <div className="text-third">
                            <h1>Cashback <span>Trigg</span></h1>
                            <p>Aqui todas as suas compras valem Cashback!</p>
                            <InputSlider />
                            
                            <div className="cashback-products">
                                <div className="l1">
                                    <div className="monthly-invoice">
                                        <h2>R$0,00</h2>
                                        <h4>Fatura Mensal</h4>
                                    </div>

                                    <div className="cashback-porc b2">
                                        <h2>0,25 %</h2>
                                        <h4>% de Cashback</h4>
                                    </div>
                                </div>

                                <div className="l2">
                                    <div className="monthly-cashback">
                                        <h2>R$ 0,00</h2>
                                        <h4>Cashback Mensal</h4>
                                    </div>

                                    <div className="annual-cashback b2">
                                        <h2 className="blue">R$ 0,00</h2>
                                        <h4>Cashback Anual</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="fourth-place">
                        <h2>#MemberGetMember</h2>

                        <div className="text-fourth">
                            <h1>Sua indicação também <br/> <span>vale Cashback</span></h1>
                            <p>Convide seus amigos para a Trigg! Assim que ele for aprovado e pagar a <br/> 1ª fatura,
                                <span className="ex"> vocês ganham R$ 10,00 em Cashback</span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Sua indicação pode ajudar um amigo a fazer parte da Trigg
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Você e ele ganham Cashback pela indicação
                                </span>
                            </p>
                        </div>

                        <img src={smilingBearded} alt="Barbudo Sorridente"/>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="fifth">
                        <h2>#MeuPet</h2>
                        <img src={myPet} alt="Meu Pet"/>

                        <div className="text-fifth">
                            <h1>Viva o seu <span>lado <br/> pet lover!</span></h1>
                            <p>No App da Trigg você pode contratar o Meu Pet, 
                                uma assistência de emergências e urgências para cães e gatos.</p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Proteção em todo o território nacional
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Consultas veterinárias, transporte pet e muito mais
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="sixth-place">
                        <h2>#SaquePlanejado</h2>

                        <div className="text-sixth">
                            <h1><span>Dinheiro extra</span><br/>quando precisar</h1>
                            <p>Não perca seu tempo em filas de banco. Agora você pode<br/>
                                planejar um saque em poucos cliques e pagar parcelado.<br/> Ah, 
                                e aquele tempo que sobrou? Pode usar como quiser!
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Contrate o Saque Planejado e Saque o valor no mesmo dia
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Pague parcelado direto na fatura do cartão
                                </span>
                            </p>
                        </div>

                        <img src={plannedWithdrawal} alt="Saque Planejado"/>
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