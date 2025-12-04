/*
 * Author: Stephen Aranda
 * File  : available-card.jsx 
 * Desc  : card component for the avaialble component. Used to display the information
 *       : of a drone and allow a user to rent by pressing the rent button.
 */
import '../styles/available-card.css';


const AvailableCard = (props) => {

    return (
        <div className="available-card">
            <form className='available-card-form'>
                <img src={props.drone_image} alt='Card of item' />
                <h2>{props.drone_name}</h2>
                <p>{props.drone_description}</p>
                <p>{props.drone_cost}</p>
                <button>Rent Drone</button>

            </form>

        </div>
    )

}

export default AvailableCard;