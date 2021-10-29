import React from 'react'


const RentedCard=(props)=>{

    return(
        <div className="rented-item-card">
            <img src={props.image} alt='Rented item'/>

        </div>
    )

}

export default RentedCard