import React from "react"
import Logo from "../../Images/fiat.png"
import './Fiat.css'


export default function Fiat() {
    return (
        <>
            <div className="container-fiat">
                <figure>
                    <img className="logo" src={Logo} alt="Logotipo Fiat" />
                </figure>
            </div>

        </>
    )
}