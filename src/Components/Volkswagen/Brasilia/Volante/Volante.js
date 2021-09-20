import React from "react"
import Foto from '../../../../Images/volante.png'
import HeaderBrasilia from '../HeaderBrasilia';
import './Volante.css'


export default function Volante() {
    return (
        <>
            <HeaderBrasilia />
            <div className="container-volante">
                <figure>
                    <img className="logo" src={Foto} align="center" alt="Volante de carro" />
                </figure>
            </div>
        </>
    )
}