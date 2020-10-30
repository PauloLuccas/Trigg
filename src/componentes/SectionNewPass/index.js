import React from 'react';

import '../SectionLogin/style.css';

import './style.css';

export default function SectionLogin() {
    return (
        <section className="form-login">
            <form className="f-login">
                <h1>Cadastre uma nova senha</h1>
                
                <p className="text-login">
                    Digite seu CPF e cadastre uma nova senha. Vamos te enviar um código de validação por 
                    e-mail para confirmar a nova senha.
                </p>

                <div className="cp-1">
                    <label htmlFor="cpf">
                        CPF:
                        <input type="text" name="cpf" id="cpf" inputMode="numeric" placeholder="000.000.000-00" required/>
                    </label>
                </div>

                <div className="cp-2">
                    <label htmlFor="New-pword">
                        Nova senha:
                        <input type="password" name="New-pword" id="New-pword" placeholder="********" required/>
                    </label>
                </div>

                <div className="cp-2">
                    <label htmlFor="New-pword">
                        Confirmar nova senha:
                        <input type="password" name="New-pword" id="New-pword" placeholder="********" required/>
                    </label>
                </div>

                <div className="cp-3">
                    <button type="submit" className="btn-open">
                        Entrar
                    </button>
                </div>
            </form>
        </section>
    )
}