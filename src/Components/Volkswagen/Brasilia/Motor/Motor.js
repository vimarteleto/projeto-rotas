import React from "react"
import Foto from '../../../../Images/motor.jpeg'
import HeaderBrasilia from '../HeaderBrasilia';
import './Motor.css'


export default function Motor() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-motor">
                <figure>
                    <img className="logo" src={Foto} align="center" alt="Motor de carro" />
                </figure>
            </div>
        </>
    )
}