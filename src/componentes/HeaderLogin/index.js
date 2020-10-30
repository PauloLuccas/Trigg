import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

export default function HeaderLogin() {
    return (
        <header className="header-top">
            <div className="headerItens">
                <div className="logo">
                    <Link to="/">
                        Trigg
                    </Link>
                </div>

                <div className="btn-login">
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    )
}