import React from 'react'


const Card=(props)=>{

    return(
        <div className="item-card">
            <img src={props.image} alt='Card of item'/>
            <h2>{props.itemName}</h2>
            

        </div>
    )

}

export default Card