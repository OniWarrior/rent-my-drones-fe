/*
 * Author: Stephen Aranda
 * File  : owner-drones-owned.jsx 
 * Desc  : Single file component that shows all of the drones that belong to the owner
 *       : whether or not they are owned.
 */

import LoggedInNavigation from '../logged-in-navigation';
import { connect } from 'react-redux';
import '../../styles/owned-comp.css';
import OwnerCard from './owner-rented-owned-card';

const Owned = (props) => {
    // if loading
    if (props.loading) {
        return (
            <div className='owned'>
                <LoggedInNavigation />
                <div className='owned-header'>
                    <h1>Owned Drones</h1>
                    <h2>...Loading</h2>
                </div>

            </div>)
    }
    // if all drones are owned and none are owned
    else if (props.drones.length === 0) {
        return (
            <div className='owned'>
                <LoggedInNavigation />
                <div className='owned-header'>
                    <h1>owned Drones</h1>
                    <h2>No drones are owned</h2>
                </div>
            </div>
        )
    }
    // otherwise, render the entire component along with all the drones owned for rent.
    else {

        return (
            <div className='owned'>
                <LoggedInNavigation />
                <div className="owned-body">

                    <div className="owned-container">
                        <div className='owned-header'>
                            <h1>Owner's Drones</h1>
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
        drones: state.ownedReducer.ownedDrones,
        loading: state.ownedReducer.loading,
        error: state.ownedReducer.error
    }
}



export default connect(mapStateToProps)(Owned)