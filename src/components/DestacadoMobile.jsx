import React, { useEffect, useState } from 'react'
import FloatingCard from '../base/FloatingCard'
import BankImg from '../assets/bank-img.png'
import Coin from '../assets/coin.png'
import AddUser from '../assets/add-user.png'
import LAicon from '../assets/LA-icon.png'
import FHicon from '../assets/FH-icon.png'

/**
 * Main Card UI Component
 * @param name
 * @param bank
 * @param money
 */
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

    let [money,setMoney] = useState('25')

    useEffect(()=>{
        setInterval( moneyEffect.bind({}), 5000)
       
    }, [])

    const moneyEffect = () => {
        setTimeout(()=>{setMoney('25')}, 500)
        setTimeout(()=>{setMoney('250')}, 1000)
        setTimeout(()=>{setMoney('2.500')}, 1500)
        setTimeout(()=>{setMoney('25.000')}, 2000)
        setTimeout(()=>{setMoney('2.500')}, 2500)
        setTimeout(()=>{setMoney('250')}, 3500)
        setTimeout(()=>{setMoney('25')}, 4000)
    }

    return(
        <div className="destacado-mobile">
            <div className="destacado-mobile__circle">

                <Card name="Jualiana Varela" bank="Banco del Plata, Caja de ahorro" money={money}/>
                
            </div>

            <div className="destacado-mobile__floating">
                    <div className="destacado-mobile__floating-item--1">
                        <FloatingCard isSquare={true} img={Coin}/>
                    </div>

                    <div className="destacado-mobile__floating-item--2">
                        <FloatingCard isSquare={true} img={AddUser}/>
                    </div>


                    <div className="destacado-mobile__cards-item--1">
                        <FloatingCard img={LAicon} title="Lucas Acosta" subTitle="Sudbank +2"/>
                    </div>

                    <div className="destacado-mobile__cards-item--2">
                        <FloatingCard img={FHicon} title="Franco Hernández" subTitle="Ank"/>
                    </div>
            </div>
        </div>
    )
}

export default DestacadoMobile