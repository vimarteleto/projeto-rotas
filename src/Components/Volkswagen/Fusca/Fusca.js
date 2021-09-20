import React from "react"
import Carro from "../../../Images/fusca.png"
import HeaderVolkswagen from "../HeaderVolkswagen"
import './Fusca.css'

export default function Fusca() {
    return (
        <>
            <HeaderVolkswagen />
            <div className="container-fusca">
                <figure>
                    <img className="logo" src={Carro} align="center" alt="Fusca cinza" />
                </figure>
            </div>
        </>
    )
}