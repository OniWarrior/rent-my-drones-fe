import React from 'react'


const RentedCard=(props)=>{

    return(
        <div className="rented-item-card">
            <img src={props.image} alt='Rented item'/>
            <h2>{props.itemName}</h2>
            

        </div>
    )

}

export default RentedCard