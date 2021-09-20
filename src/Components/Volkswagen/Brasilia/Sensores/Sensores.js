import React from "react"
import Foto from '../../../../Images/sensores.jpeg'
import HeaderBrasilia from '../HeaderBrasilia';
import './Sensores.css'


export default function Sensores() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-sensores">
                <figure>
                    <img className="logo" src={Foto} align="center" alt="Sensores de carro" />
                </figure>
            </div>
        </>
    )
}