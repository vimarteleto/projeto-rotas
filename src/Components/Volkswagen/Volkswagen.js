import React from "react"
import Logo from "../../Images/volkswagen.png"
import HeaderVolkswagen from './HeaderVolkswagen';
import './Volkswagen.css'

export default function Pacaembu() {
    return (
        <>
            <HeaderVolkswagen />
            <div className="container-volkswagen">
                <figure>
                    <img className="logo" src={Logo} alt="Logotipo Volkswagen" />
                </figure>
            </div>
        </>
    )
}