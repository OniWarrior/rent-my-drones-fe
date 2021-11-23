import React from 'react'


const Card=(props)=>{

    return(
        <div className="rented-item-card">
            <img src={props.image} alt='Rented item'/>
            <h2>{props.itemName}</h2>
            

        </div>
    )

}

export default Card