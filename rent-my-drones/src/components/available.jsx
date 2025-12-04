import { useEffect, useState } from "react";

import LoggedInNavigation from "./logged-in-navigation";
import '../styles/available-comp.css'
import { connect } from "react-redux";
import { getAvailableDrones, rentAvailableDrone } from "../state/actions/available-actions";
import { useNavigate } from "react-router";


const Available = (props) => {
    const navigate = useNavigate();
    const initialValue = false;
    const [isRented, setIsRented] = useState(initialValue);
    useEffect(() => {
        props.getAvailableDrones();
        // eslint-disable-next-line
    }, [isRented])

    const handleRentButton = (e, id) => {
        e.preventDefault();
        props.rentAvailableDrone(id);
        setIsRented(() => ({ isRented: !isRented }));
        navigate('/dashboard/rented');
    }

    if (props.loading) {
        return (<h1>...Loading</h1>)
    }
    else if (props.drones.length === 0) {
        return (
            <div className='available-container'>
                <LoggedInNavigation />
                <div className='available-header'>
                    <h1>Available Drones</h1>
                </div>
                <div className='available-card-container'>
                    <h2 style={{ fontSize: "xx-large" }}>No Available Drones</h2>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className='available-container'>
                <LoggedInNavigation />
                <div className='available-header'>
                    <h1>Available Drones</h1>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drones: state.availableReducer.drones,
        loading: state.availableReducer.loading,
        error: state.availableReducer.error
    }
}

const mapDispatchToProps = { getAvailableDrones, rentAvailableDrone }

export default connect(mapStateToProps, mapDispatchToProps)(Available)