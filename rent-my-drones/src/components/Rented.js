import React from "react";
import { Button } from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Rented.css'

const Rented =()=>{
    return (
        <div className='rented-container'>
            <LoggedInNavigation/>
            <div className='rented-header'>
                <h1>Rented Drones</h1>
            </div>
            <div className='rented-card-container'>
            </div>
        </div>
    )

}

export default Rented