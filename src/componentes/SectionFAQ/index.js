import React from 'react';
import AOS from 'aos';

import btnPlus from '../../assets/images/maior.svg';

import './style.css';
import 'aos/dist/aos.css';

export default function SectionFAQ() {
    
    AOS.init({
        duration: 1200,
    })

    function giro() {
        document.getElementById('btn_plus1').classList.toggle('giro');
    }

    function giro1() {
        document.getElementById('btn_plus').classList.toggle('giro');
    }

    function giro2() {
        document.getElementById('btn_plus2').classList.toggle('giro');
    }

    function giro3() {
        document.getElementById('btn_plus3').classList.toggle('giro');
    }

    function giro4() {
        document.getElementById('btn_plus4').classList.toggle('giro');
    }

    function giro5() {
        document.getElementById('btn_plus5').classList.toggle('giro');
    }
    
    function giro6() {
        document.getElementById('btn_plus6').classList.toggle('giro');
    }

    function giro7() {
        document.getElementById('btn_plus7').classList.toggle('giro');
    }

    function giro8() {
        document.getElementById('btn_plus8').classList.toggle('giro');
    }
    
    function giro9() {
        document.getElementById('btn_plus9').classList.toggle('giro');
    }

    function giro10() {
        document.getElementById('btn_plus10').classList.toggle('giro');
    }

    return (
        <section className="faq-container">
            <div className="duvidas">
                <h1 data-aos="fade-right">Tire suas dúvidas</h1>
            </div>

            <div className="section-faq" data-aos="fade-zoom">
                <div className="aboutApp">
                    <h2>Sobre sua conta da Trigg</h2>

                    <ul className="list-faq">
                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header1" className="style-header">
                                    <h3>Como fazer recarga no app da Trigg ?</h3>

                                    <input type="checkbox" id="view_span1"/>
                                    <label for="view_span1">
                                        <img src={btnPlus} id="btn_plus1" onClick={giro} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body1" className="style-body">
                                        <span>
                                            Para fazer a recarga, é só clicar na Store + do App, Recargas e 
                                            definir o tipo de recarga que quer fazer. O desconto dessa transação 
                                            será direto na fatura do seu Trigg.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header2" className="style-header">
                                    
                                    <h3>Qual o prazo para que a recarga seja feita ?</h3>

                                    <input type="checkbox" id="view_span2"/>
                                    <label for="view_span2">
                                        <img src={btnPlus} id="btn_plus" onClick={giro1} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body2" className="style-body">
                                        <span>
                                            O prazo é de 24 horas para que a recarga esteja disponível em seu 
                                            celular ou para que você receba o PIN no caso das recargas de game ou TV.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header3" className="style-header">
                                    
                                    <h3>Não consegui fazer a recarga, o que pode ter acontecido?</h3>

                                    <input type="checkbox" id="view_span3"/>
                                    <label for="view_span3">
                                        <img src={btnPlus} id="btn_plus2" onClick={giro2} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body3" className="style-body">
                                        <span>
                                            Isso pode acontecer caso tenha colocado algum dado incorreto (como DDD, número de celular,
                                            operadora ou até mesmo o plano de celular) ou <br/> por não ter limite disponível para aquela recarga.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header4" className="style-header">
                                    
                                    <h3>Como funcionam as recargas de games e TV?</h3>

                                    <input type="checkbox" id="view_span4"/>
                                    <label for="view_span4">
                                        <img src={btnPlus} id="btn_plus3" onClick={giro3} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body4" className="style-body">
                                        <span>
                                            Logo que sua recarga for aprovada, te enviaremos um e-mail com um PIN, esse número de PIN também vai
                                            aparecer na tela do App.<br/> Ele deve ser inserido como um voucher na plataforma que quer recarregar.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header5" className="style-header">
                                    
                                    <h3>Posso carregar um valor diferente dos disponíveis na tela do App?</h3>

                                    <input type="checkbox" id="view_span5"/>
                                    <label for="view_span5">
                                        <img src={btnPlus} id="btn_plus4" onClick={giro4} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body5" className="style-body">
                                        <span>
                                        Não, os valores que aparecem são os definidos pela operadora/plataforma, então são fixos.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <h2>Quero ser Trigg</h2>

                    <ul className="list-faq">
                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header6" className="style-header">
                                    <h3>A Trigg tem cartões personalizados?</h3>

                                    <input type="checkbox" id="view_span6"/>
                                    <label for="view_span6">
                                        <img src={btnPlus} id="btn_plus5" onClick={giro5} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body6" className="style-body">
                                        <span>
                                            Não produzimos cartões personalizados, mas temos uma coleção irada da DC Comics 
                                            (Batman, Mulher-Maravilha, Superman, Joker, Arlequina) e o Trigg Scooby-Doo.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header7" className="style-header">
                                    
                                    <h3>Por que preciso enviar foto?</h3>

                                    <input type="checkbox" id="view_span7"/>
                                    <label for="view_span7">
                                        <img src={btnPlus} id="btn_plus6" onClick={giro6} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body7" className="style-body">
                                        <span>
                                            O envio da foto é mega importante para evitar que terceiros utilizem seus dados indevidamente.
                                            Assim conseguimos confirmar que<br/> é você e ainda te conhecemos melhor. ;)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header8" className="style-header">
                                    
                                    <h3>Se meu pedido for aprovado, qual cartão receberei?</h3>

                                    <input type="checkbox" id="view_span8"/>
                                    <label for="view_span8">
                                        <img src={btnPlus} id="btn_plus7" onClick={giro7} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body8" className="style-body">
                                        <span>
                                            Você receberá um cartão Trigg Visa Gold Internacional no modelo que você escolher!<br/>
                                            Aqui tem pra todos os gostos: do gafrite ou verdinho até a coleção DC Comics ou Scooby-Doo. Maneiro, né?!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header9" className="style-header">
                                    
                                    <h3>Ainda não sou cliente Trigg e quero mais de um cartão. Eu posso?</h3>

                                    <input type="checkbox" id="view_span9"/>
                                    <label for="view_span9">
                                        <img src={btnPlus} id="btn_plus8" onClick={giro8} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body9" className="style-body">
                                        <span>
                                            Se você ainda não é cliente, você só pode pedir 1 (um) cartão durante a aquisição. 
                                            Mas depois fica tudo liberado para a aquisição<br/> de outros cartões na Store + do App!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <h2>Cartões edição limitada</h2>

                    <ul className="list-faq">
                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header10" className="style-header">
                                    <h3>Os cartões dos heróis são cartões adicionais?</h3>

                                    <input type="checkbox" id="view_span10"/>
                                    <label for="view_span10">
                                        <img src={btnPlus} id="btn_plus9" onClick={giro9} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body10" className="style-body">
                                        <span>
                                            Não. Os cartões dos heróis são como a Band, um ‘espelho’ do seu primeiro cartão, ou seja,
                                            seu limite e senha serão os mesmos e você vai receber uma fatura só. ;)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header11" className="style-header">
                                    
                                    <h3>Já sou cliente e quero trocar meu cartão atual por um dos heróis, como faço para substituir?</h3>

                                    <input type="checkbox" id="view_span11"/>
                                    <label for="view_span11">
                                        <img src={btnPlus} id="btn_plus10" onClick={giro10} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body11" className="style-body">
                                        <span>
                                            Se você quiser substituir seu cartão, é só ir em “Cartão’’ no menu inferior do App que você já vai ver a opção de troca.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="listItem">
                            <div className="list-style">
                                <div id="style_header12" className="style-header">
                                    
                                    <h3>Quantos cartões ativos eu posso ter?</h3>

                                    <input type="checkbox" id="view_span12"/>
                                    <label for="view_span12">
                                        <img src={btnPlus} id="btn_plus10" onClick={giro10} className="btnPlus" alt="Plus"/>
                                    </label>

                                    <div id="style_body12" className="style-body">
                                        <span>
                                            Você pode ter até 10 cartões ativos! Ah! E, além dos cartões, você também pode ter uma Band ativa.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}