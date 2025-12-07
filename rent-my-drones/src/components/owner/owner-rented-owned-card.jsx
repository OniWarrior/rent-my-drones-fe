/*
 * Author : Stephen Aranda
 * File   : owner-rented-owned-card.jsx 
 * Desc   : single file component for card that 
 *        : displays the drone information in owner rented and owned pages.
 * */

import '../../styles/owner-card.css';



const OwnerCard = (props) => {

    return (
        <div className="owner-card">
            <div className='owner-card-box' >
                <div className='owner-card-img-container'>
                    <img className="owner-card-img" src={props.drone.drone_image} alt='Card of item' />
                </div>
                <div className='owner-card-info-container'>
                    <h2>{props.drone.drone_name}</h2>
                    <p>{props.drone.drone_description}</p>
                    <p>$ {props.drone.drone_cost}</p>
                    <p>{props.drone.renter_id ? props.drone_id : <p>Not Rented</p>}</p>
                </div>
            </div>
        </div>
    )

}



export default OwnerCard;