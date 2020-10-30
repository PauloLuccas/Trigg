import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

export default function SectionLogin() {
    
    return (
        <section className="form-login">
            <form className="f-login">
                <h1>Login</h1>

                <div className="cp-1">
                    <label htmlFor="cpf">
                        CPF:
                        <input type="text" name="cpf" id="cpf" inputMode="numeric" placeholder="000.000.000-00" required/>
                    </label>
                </div>

                <div className="cp-2">
                    <label htmlFor="pword">
                        Senha:
                        <input type="password" name="pword" id="pword" placeholder="********" required/>
                    </label>
                </div>

                <div className="cp-3">
                    <button type="submit" className="btn-open" id="btn_open">
                        Entrar
                    </button>

                    <Link to="/nova-senha" className="link-pword">
                        Esqueceu sua senha ?
                    </Link>
                </div>
            </form>
        </section>
    )
}