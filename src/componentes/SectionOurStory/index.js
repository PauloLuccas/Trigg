import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import './style.css';

export default function SectionOurStory() {

    return (
        <section className="OurStory">
            
            <div className="text-story">
                <h1>Nossa <span>história</span></h1>
            </div>

            <div className="Story">
                <Carousel>
                    <div className="sliderStory">
                        
                        <div>
                            <h2>2017</h2>
                            <p>
                                <span>Março:</span><br/>
                                Nascemos com um cartão de crédito totalmente digital,
                                com Cashback, Cartão Vitual, opção de saques e muito 
                                outros benefícios!
                            </p>
                            <p>
                                <span>Setembro:</span><br/>
                                Pensando em uma maneira mais moderna de usar o cartão 
                                de crédito, lançamos a Band, a pulseira de pensamento Trigg.
                            </p>
                            <p>
                                <span>Novembro:</span><br/>
                                Para dar aquela forcinha para os clientes Trigg, lançamos o
                                +Grana, uma graninha pré aprovada para saques que pode ser
                                contratada direto no App.
                            </p>
                            <p>
                                <span>Dezembro:</span><br/>
                                Para encerrar o ano em grande estilo, liberamos o The Game,
                                o joguinho da Trigg perfeito para divertir a galera e de quebra
                                laçamos uma assistência para cães e gatos, o Meu Pet.                       
                            </p>
                        </div>
                        
                    </div>

                    <div className="sliderStory">
                        
                        <div>
                            <h2>2018</h2>
                            <p>
                                <span>Abril:</span><br/>
                                Entrando no ritmo do maior campeonato de futebol do mundo, 
                                lançamos o Cartão Comemorativo em versão limitada com as cores 
                                do Brasil para dar aquela animada na torcida!
                            </p>
                            <p>
                                <span>Outubro:</span><br/>
                                Lançamos 3 cartões em parceria com a DC Comics com artes do Batman,
                                Mulher Maravilha e Superman.
                            </p>
                            <p>
                                <span>Dezembro:</span><br/>
                                Fomos o cartão de crédito oficial da CCXP18 e para completar, lançamos
                                o cartão do Aguaman!
                            </p>
                        </div>
                        
                    </div>

                    <div className="sliderStory">
                        
                        <div>
                            <h2>2019</h2>
                            <p>
                            <span>Março:</span><br/>
                                Implementamos a teclonologia NFC em todos os modelos de cartão
                                e o nosso trio de heróis ganhou o prêmio inovação Warner!
                            </p>
                            <p>
                                <span>Setembro:</span><br/>
                                Para deixar o time ainda maior, foi a vez do Joker ter um cartão
                                para chamar de seu.
                            </p>
                            <p>
                            <span>Dezembro:</span><br/>
                                Para fechar 2019 com tudo, além na nossa participação épica como 
                                cartão de crédito oficial da CCXP19, lançamos o cartão da Arlequina!                        
                            </p>
                        </div>
                        
                    </div>

                    <div className="sliderStory">
                        
                        <div>
                            <h2>2020</h2>
                            <p>
                                <span>Março:</span><br/>
                                Começamos lançando o Cartão Adicional para a galera acima de 8 anos!
                            </p>
                            <p>
                                <span>Maio:</span><br/>
                                Lançamento do Cash Protegido, um seguro que protege o bolso e o cartão.
                            </p>

                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}