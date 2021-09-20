import React from "react"
import Logo from "../../Images/ford.png"
import './Ford.css'


export default function Ford() {
    return (
        <>
            <div className="container-ford">
                <figure>
                    <img className="logo" src={Logo} alt="Logotipo Ford" />
                </figure>
            </div>

        </>
    )
}