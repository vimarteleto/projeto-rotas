import React from "react"
import Carro from "../../../Images/polo.jpg"
import HeaderVolkswagen from "../HeaderVolkswagen"
import './Polo.css'

export default function Polo() {
    return (
        <>
            <HeaderVolkswagen />
            <div className="container-polo">
                <figure>
                    <img className="logo" src={Carro} align="center" alt="Polo prata" />
                </figure>
            </div>
        </>
    )
}