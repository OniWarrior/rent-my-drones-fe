/*
 * Author: Stephen Aranda
 * File  : rented-card.jsx 
 * Desc  : card component for the rented component. Used to display the information
 *       : of a drone and allow a user to return by pressing the return button.
 */
import '../styles/available-card.css';
import { returnRentedDrone } from '../state/actions/rented-actions';
import { connect } from "react-redux";
import { useNavigate } from 'react-router';


const RentedCard = (props) => {

    // nav var to navigate back to dashboard
    const navigate = useNavigate();


    // created handler function for form submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        // make api call to rent drone after rent button is pressed
        props.returnRentedDrone(props.drone.drone_id);

        // after successful rent, then navigate to dashboard.
        navigate('/dashboard');

    }





    return (
        <div className="rented-card">
            <form className='rented-card-form' onSubmitCapture={onFormSubmit}>
                <div className='rented-card-img-container'>
                    <img className="rented-card-img" src={props.drone.drone_image} alt='Card of item' />
                </div>
                <div className='rented-card-info-container'>
                    <h2>{props.drone.drone_name}</h2>
                    <p>{props.drone.drone_description}</p>
                    <p>$ {props.drone.drone_cost}</p>
                    <button className='btn-submit btn-return'>Return Drone</button>

                </div>


            </form>

        </div>
    )

}

const mapDispatchToProps = { returnRentedDrone }

export default connect(null, mapDispatchToProps)(RentedCard);