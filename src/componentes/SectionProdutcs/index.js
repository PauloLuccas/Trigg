import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import startApp from '../../assets/images/start_app.png';
import badgePlayStore from '../../assets/images/badge_play_store_desk.svg';
import badgeApple from '../../assets/images/apple_store_badge.svg';
import cashProduct from '../../assets/images/cash_product.png';
import check from '../../assets/images/tick.svg';
import cashback from '../../assets/images/cashback.png';
import smilingBearded from '../../assets/images/barbudo_sorridente.png';
import myPet from '../../assets/images/img_meu_pet.png';
import plannedWithdrawal from '../../assets/images/img_saque_planejado.png';
import cardsUm from '../../assets/images/img_cards_1.png';
import cardsDois from '../../assets/images/img_cards_2.png';
import cardsTres from '../../assets/images/img_cards_3.png';
import nextWhite from '../../assets/images/next-white.svg';
import multipleCard from '../../assets/images/varios_cartoes.png';
import samsungPay from '../../assets/images/samsung_pay.png';
import imgBand from '../../assets/images/img_band.png';
import moreMoney from '../../assets/images/img_mais_grana.png';

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
                    <div className="seven">
                        <h2>#CartõesTemáticos</h2> 
                        <Carousel >
                            <div className="f1">
                                <img src={cardsUm} alt="Cartão Um"/>
                            </div>

                            <div className="f2">
                                <img src={cardsDois} alt="Cartão Dois"/>
                            </div>

                            <div className="f3">
                                <img src={cardsTres} alt="Cartão Três"/>
                            </div>
                        </Carousel>

                        <div className="text-seven">
                            <h1>Um cartão de crédito <span><br/>com a sua cara</span></h1>
                            <p>Que tal um cartão que combine com você? Melhor ainda, que <br/> tal
                                uma coleção de cartões só sua?</p>
                            
                            <Link to="/">
                                Saiba Mais
                                <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="eighth">
                        <h2>#CartãoAdicional</h2>

                        <div className="text-eighth">
                            <h1>Compartilhe a experiência Trigg com o <span>Cartão Adicional</span> </h1>
                            <p>Viva seu melhor lado <span className="obs">com as pessoas que ama!</span></p>

                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Gerencie o limite e gastos de todos os cartões
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Solicite para pessoas acima de 8 anos
                                </span>
                            </p>
                        </div>

                        <img src={multipleCard} alt="Vários Cartões"/>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="ninth">
                        <h2>#SamsungPay</h2>
                        <img src={samsungPay} alt="Samsung Pay"/>

                        <div className="text-ninth">
                            <h1>Modernidade <span>no pagamento</span></h1>
                            <p>Não sai do celular? Tranquilo! Estamos no Samsung Pay!
                                Uma forma fácil e segura de pagar com cartão de crédito.</p>

                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Cadastre e ative seu Trigg no Samsung Pay
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Faça compras usando a tecnologia NFC do seu celular
                                </span>
                            </p>

                            <Link to="/">
                                Saiba Mais
                                <img src={nextWhite} className="nextWhite" alt="Icon next"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="tenth">
                        <h2>#BandTrigg</h2>

                        <div className="text-tenth">
                            <h1>Vista o seu <span>cartão de crédito</span></h1>
                            <p>Achamos que sonhar com um mundo mais moderno era pouco.
                                Então inovamos! Lançamos a primeira pulseira de pagamento por 
                                aproximação do mercado, a Band.</p>

                                <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    À prova d’água
                                </span>
                            </p>
                            
                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Com tecnologia NFC
                                </span>
                            </p>

                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Mais segurança no dia a dia
                                </span>
                            </p>
                        </div>

                        <img className="band" src={imgBand} alt="Img band"/>
                    </div>
                </div>

                <div className="slider-products">
                    <div className="eleventh">
                        <h2>#MaisGrana</h2>
                        <img src={moreMoney} alt="Mais Grana"/>

                        <div className="text-eleventh">
                            <h1>Precisa de uma grana para tirar os sonhos do papel? <span>Vem de +Grana</span></h1>
                            <p>O +Grana é um valor pré-aprovado e liberado de acordo com o seu relacionamento com a gente</p>


                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Contrate no App em poucos cliques
                                </span>
                            </p>

                            <p className="bl">
                                <img src={check} alt="check"/>
                                <span className="tx">
                                    Receba o valor direto em sua conta corrente
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}