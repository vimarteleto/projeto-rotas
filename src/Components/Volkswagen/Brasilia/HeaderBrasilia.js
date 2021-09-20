import React from "react";
import { Link } from "react-router-dom";

import '../../Header/Header.css'
 
export default function HeaderBrasilia() {
    return (
        <>
            <header className="menu menu-volkswagen menu-brasilia"> 
                <nav className="navbar">
                    <ul>
                        <li><a href="/volkswagen">Voltar</a></li>
                        <li><Link to="/volkswagen/brasilia/motor">Motor</Link></li>
                        <li><Link to="/volkswagen/brasilia/pedais">Pedais</Link></li>
                        <li><Link to="/volkswagen/brasilia/cambio">Câmbio</Link></li>
                        <li><Link to="/volkswagen/brasilia/volante">Voltante</Link></li>
                        <li><Link to="/volkswagen/brasilia/sensores">Sensores</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
