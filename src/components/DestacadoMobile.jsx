import React from 'react'
import FloatingCard from '../base/FloatingCard'
import BankImg from '../assets/bank-img.png'
import Coin from '../assets/coin.png'
import AddUser from '../assets/add-user.png'
import LAicon from '../assets/LA-icon.png'
import FHicon from '../assets/FH-icon.png'

const Card = props => {

    const {name, bank, money} = props

    return(
        <div className="card">
            <div className="card__header">
                <div className="card__bank-container">
                    <img src={BankImg} className="card__bank-img"/>
                </div>
                
                <div className="card__user">
                    <h3 className="card__user-name">{name}</h3>
                    <span className="card__user-bank">{bank}</span>
                </div>
            </div>

            <div className="card__footer">
                <div className="card__money">
                    <span className="card__money-span">$</span>
                    <h2 className="card__money-h2">{money}</h2>
                    <div className="card__money-prompt"></div>
                </div>
                <div className="card__money-underline"></div>
            </div>


        </div>
    )

}

const DestacadoMobile = () => {
    return(
        <div className="destacado-mobile">
            <div className="destacado-mobile__circle">

                <Card name="Jualiana Varela" bank="Banco del Plata, Caja de ahorro" money="2.5"/>
                
            </div>

            <div className="destacado-mobile__floating">
                    <div className="destacado-mobile__floating-item--1">
                        <FloatingCard isSquare={true} img={Coin}/>
                    </div>

                    <div className="destacado-mobile__floating-item--2">
                        <FloatingCard isSquare={true} img={AddUser}/>
                    </div>
            </div>

            <div>
            <div className="destacado-mobile__white-item--1">
                        <FloatingCard img={LAicon}/>
                    </div>

                    <div className="destacado-mobile__white-item--2">
                        <FloatingCard img={FHicon}/>
                    </div>
            </div>

        </div>
    )
}

export default DestacadoMobile