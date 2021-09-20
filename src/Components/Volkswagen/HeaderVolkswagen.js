import React from "react";
import { Link } from "react-router-dom";

import '../Header/Header.css'
 
export default function HeaderVolkswagen() {
    return (
        <>
            <header className="menu menu-volkswagen"> 
                <nav className="navbar">
                    <ul>
                        <li><a href="/">Voltar</a></li>
                        <li><Link to="/volkswagen/brasilia">Brasília</Link></li>
                        <li><Link to="/volkswagen/fusca">Fusca</Link></li>
                        <li><Link to="/volkswagen/kombi">Kombi</Link></li>
                        <li><Link to="/volkswagen/polo">Polo</Link></li>
                        <li><Link to="/volkswagen/gol">Gol</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
