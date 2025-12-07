/*
 * Author: Stephen Aranda
 * File  : owner-add-drone.jsx 
 * Desc  : single file component of add drone form that allows an owner to add a drone to market place.
 * */

import '../../styles/add-drone.css';
import LoggedInNavigation from '../logged-in-navigation';
import AddDroneForm from './owner-add-drone-form';

const AddDrone = () => {

    return (
        <div className='add-drone'>
            <LoggedInNavigation />
            <div className="add-drone-body">
                <AddDroneForm />
            </div>
        </div>
    )

}



export default AddDrone;