import React from "react"
import Carro from "../../../Images/kombi.jpg"
import HeaderVolkswagen from "../HeaderVolkswagen"
import './Kombi.css'

export default function Kombi() {
    return (
        <>
            <HeaderVolkswagen />
            <div className="container-kombi">
                <figure>
                    <img className="logo" src={Carro} align="center" alt="Kombi laranja" />
                </figure>
            </div>
        </>
    )
}