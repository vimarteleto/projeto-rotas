import React from "react"
import Foto from '../../../../Images/pedais.jpg'
import HeaderBrasilia from '../HeaderBrasilia';
import './Pedais.css'


export default function Pedais() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-pedais">
                <figure>
                    <img className="logo" src={Foto} align="center" alt="Pedais de carro" />
                </figure>
            </div>
        </>
    )
}