import React from 'react'

const FloatingCard = props => {
    
    const {isSquare, img, title, subTitle} = props

    if(isSquare){
        return(
            <div className="floating-card--red">
                <img alt="img" src={img} className="floating-card__img"/> 
            </div>
        )
    }

    return (
        <div className="floating-card--white">
            <img alt="img" src={img} className="floating-card__img"/>
            <div className="floating-card--white__container">
                <h3 className="floating-card--white__container-h3">{title}</h3>
                <span className="floating-card--white__container-span">{subTitle}</span>
            </div>
        </div>  
    )
}

export default FloatingCard