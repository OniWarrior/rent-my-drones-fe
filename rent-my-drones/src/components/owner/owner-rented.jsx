/*
 * Author: Stephen Aranda
 * File  : owner-rented.jsx 
 * Desc  : Single file component that shows all of the drones that belong to the owner
 *       : that are rented by the Renter user types.
 */

import LoggedInNavigation from '../logged-in-navigation';
import { connect } from 'react-redux';
import '../../styles/rented-comp.css';
import OwnerCard from './owner-rented-owned-card';

const OwnerRented = (props) => {
    // if loading
    if (props.loading) {
        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className='rented-header'>
                    <h1>Rented Drones</h1>
                    <h2>...Loading</h2>
                </div>

            </div>)
    }
    // if all drones are rented and none are rented
    else if (props.drones.length === 0) {
        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className='rented-header'>
                    <h1>Rented Drones</h1>
                    <h2>No drones have been rented</h2>
                </div>
            </div>
        )
    }
    // otherwise, render the entire component along with all the drones rented for rent.
    else {

        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className="rented-body">

                    <div className="rented-container">
                        <div className='rented-header'>
                            <h1>Rented Drones</h1>
                            <h2>Owner's Drones That have been Rented</h2>
                        </div>
                        <div className="card-container">
                            {
                                props.drones.map((drone) => {
                                    return <OwnerCard key={drone.drone_id} drone={drone} />

                                })
                            }

                        </div>

                    </div>

                </div>


            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        drones: state.rentedReducer.rentedDrones,
        loading: state.rentedReducer.loading,
        error: state.rentedReducer.error
    }
}



export default connect(mapStateToProps)(OwnerRented)