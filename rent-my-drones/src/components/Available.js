import React from "react";
import LoggedInNavigation from "./LoggedInNavigation";


const Available=()=>{
    return (
        <div className='available-container'>
            <LoggedInNavigation/>
            <div className='available-header'>
                <h1>Available Drones</h1>
            </div>

        </div>
    )

}

export default Available