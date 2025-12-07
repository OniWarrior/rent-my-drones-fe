/*
 * Author : Stephen Aranda
 * File   : owner-market-card.jsx 
 * Desc   : single file component for card that displays the drone information in owner market place.
 * */

import '../../styles/market-card.css';



const MarketCard = (props) => {

    return (
        <div className="market-card">
            <div className='market-card-box' >
                <div className='market-card-img-container'>
                    <img className="market-card-img" src={props.drone.drone_image} alt='Card of item' />
                </div>
                <div className='market-card-info-container'>
                    <h2>{props.drone.drone_name}</h2>
                    <p>{props.drone.drone_description}</p>
                    <p>$ {props.drone.drone_cost}</p>
                </div>
            </div>
        </div>
    )

}



export default MarketCard;