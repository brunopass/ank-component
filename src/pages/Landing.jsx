import React from 'react'
import DestacadoMobile from '../components/DestacadoMobile'

const Landing = () => {
    return(
        <div className="landing">
            <div className="landing__text">
                <h1 className="landing__text--h1">Un mundo financiero<br></br>más simple, es posible.</h1>
                <p className="landing__text--p">Liberate del estrés y la complejidad de operar con bancos. No te ofrecemos una cuenta más, queremos que puedas utilizar las que ya tenés pero de una manera más simple y fácil. Liberá tu tiempo y tu mente para hacer lo que te hace feliz.</p>
            </div>
            <DestacadoMobile/>
        </div>
    )
}

export default Landing