import React from "react"
import Foto from '../../../../Images/cambio.jpg'
import HeaderBrasilia from '../HeaderBrasilia';
import './Cambio.css'


export default function Cambio() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-cambio">
                <figure>
                    <img className="logo" src={Foto} align="center" alt="Cambio de carro" />
                </figure>
            </div>
        </>
    )
}