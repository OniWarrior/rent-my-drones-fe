import { useEffect, useState } from "react";

import LoggedInNavigation from "./logged-in-navigation";
import { connect } from "react-redux";
import { getRentedDrones, returnRentedDrone } from "../state/actions/rented-actions";
import '../styles/rented.css'
import { useNavigate } from "react-router";

const Rented = (props) => {
    const navigate = useNavigate();
    const initialValue = false;
    const [isReturned, setIsReturned] = useState(initialValue);
    useEffect(() => {
        props.getRentedDrones();
        // eslint-disable-next-line
    }, [isReturned])

    const handleReturnButton = (e, id) => {
        e.preventDefault();
        props.returnRentedDrone(id);
        setIsReturned(() => ({ isReturned: !isReturned }));
        navigate('/dashboard/available');
    }



    if (props.loading) {
        return (<h1>...Loading</h1>)
    }
    else if (props.rentedDrones.length === 0) {
        return (
            <div className='renter-container'>
                <LoggedInNavigation />
                <div className='renter-header'>
                    <h1>Rented Drones</h1>
                </div>
                <div className='renter-card-container'>
                    <h2 style={{ fontSize: "xx-large" }}>No Rented Drones</h2>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className='renter-container'>
                <LoggedInNavigation />
                <div className='renter-header'>
                    <h1>Rented Drones</h1>
                </div>
                {/* 
                <div className='renter-card-container'>
                    {
                        props.rentedDrones.map((char, index) => {
                            return (
                                <Card className='renter-card' title={char.drone_name} key={index} data={char} >
                                    <div className='drone-image-container' >
                                        <img className='drone-images' src={char.drone_image} alt='The drone your returning' />
                                    </div>
                                    <div className='drone-info'>
                                        <p>$ {char.drone_cost}</p>
                                        <p>{char.drone_description}</p>
                                    </div>
                                    <div className='drone-button'>
                                        <Button type='ghost' onClick={(e) => handleReturnButton(e, char.drone_id)}>Return Drone</Button>
                                    </div>

                                </Card>)
                        })
                    }
                </div>
                */}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        rentedDrones: state.rentedReducer.rentedDrones,
        loading: state.rentedReducer.loading,
        error: state.rentedReducer.error
    }

}

const mapDispatchToProps = { getRentedDrones, returnRentedDrone }
export default connect(mapStateToProps, mapDispatchToProps)(Rented)