import React from "react"
import Logo from "../../Images/chevrolet.png"
import './Chevrolet.css'

export default function Chevrolet() {
    return (
        <>
            <div className="container-chevrolet">
                <figure>
                    <img className="logo" src={Logo} alt="Logotipo Chevrolet" />
                </figure>
            </div>

        </>
    )
}