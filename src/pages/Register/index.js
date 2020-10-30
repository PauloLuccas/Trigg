import React from 'react';
import { Link } from 'react-router-dom';

import imgPrincipal from '../../assets/images/img_slider_cashback.png';
import arrowAcordion from '../../assets/images/arrow_acordion.svg';
import cpfImg from '../../assets/images/cpf-img.svg';
import nameImg from '../../assets/images/name-img.svg';
import emailImg from '../../assets/images/email-img.svg';
import pwordImg from '../../assets/images/pword-img.svg';

import './style.css';

export default function Register() {
    return (
        <section className="register-container">
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        Trigg
                    </Link>
                </div>

                <div className="text-left">
                    <h1>O cartão de crédito <br/> com Cashback</h1>
                </div>

                <div className="img-principal">
                    <img src={imgPrincipal} alt="Imagem Celular Cashback"/>
                </div>
            </div>
            <div className="right">
                <div className="insert-data">
                    <h1>Preencha seus dados para um pré-cadastro. <span>Depois é só baixar o App e finalizar.</span></h1>
                
                    <form className="f-login">
                        <div className="cp-1">
                            <label htmlFor="cpf">
                                CPF
                                <input type="text" name="cpf" id="cpf" inputMode="numeric" placeholder="000.000.000-00" required/>
                                <img src={cpfImg}/>
                            </label>
                        </div>

                        <div className="cp-1">
                            <label htmlFor="nameC">
                                Nome Completo
                                <input type="text" name="nameC" id="nameC" placeholder="Digite seu nome" required/>
                                <img src={nameImg}/>
                            </label>
                        </div>

                        <div className="cp-1">
                            <label htmlFor="Email">
                                O email
                                <input type="text" name="Email" id="Email" placeholder="Insira seu email" required/>
                                <img src={emailImg}/>
                            </label>
                        </div>

                        <div className="cp-1">
                            <label htmlFor="Cemail">
                                Confirme o seu email
                                <input type="text" name="Cemail" id="Cemail" placeholder="Insira seu email" required/>
                                <img src={emailImg}/>
                            </label>
                        </div>

                        <div className="cp-2">
                            <label htmlFor="pword">
                                Senha do app Trigg
                                <input type="password" name="pword" id="pword" placeholder="Digite uma senha para acessar o APP" required/>
                                <img src={pwordImg}/>
                                <span>A senha deve conter 6 caracteres e ter pelo menos uma letra e um número</span>
                            </label>
                        </div>

                        <div className="cp-2">
                            <label htmlFor="Cpword">
                                Confirme sua senha
                                <input type="password" name="Cpword" id="Cpword" placeholder="Confirmar a senha" required/>
                                <img src={pwordImg}/>
                            </label>
                        </div>

                        <div className="btn-register">
                            <button type="submit">
                                CADASTRAR
                                <img src={arrowAcordion}/>
                            </button>
                            <span>*Sujeito à análise de crédito.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}