import React from "react"
import Logo from "../../Images/hyundai.png"
import './Hyundai.css'


export default function Hyundai() {
    return (
        <>
            <div className="container-hyundai">
                <figure>
                    <img className="logo" src={Logo} alt="Logotipo Hyundai" />
                </figure>
            </div>

        </>
    )
}