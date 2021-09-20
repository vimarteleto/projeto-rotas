import React from "react"
import Carro from "../../../Images/brasilia.png"
import HeaderBrasilia from './HeaderBrasilia';
import './Brasilia.css'

export default function Brasilia() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-brasilia">
                <figure>
                    <img className="logo" src={Carro} align="center" alt="Fusca cinza" />
                </figure>
            </div>
        </>
    )
}