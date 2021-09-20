import React from "react"
import Carro from "../../../Images/gol.jpg"
import HeaderVolkswagen from "../HeaderVolkswagen"
import './Gol.css'

export default function Gol() {
    return (
        <>
            <HeaderVolkswagen />
            <div className="container-gol">
                <figure>
                    <img className="logo" src={Carro} alt="Gol prata" />
                </figure>
            </div>
        </>
    )
}