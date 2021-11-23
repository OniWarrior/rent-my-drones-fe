import React from 'react'


const Card=(props)=>{

    return(
        <div className="item-card">
            <img src={props.drone_image} alt='Card of item'/>
            <h2>{props.drone_name}</h2>
            <p>{props.drone_description}</p>
            <p>{props.drone_cost}</p>
        </div>
    )

}

export default Card