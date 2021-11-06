import React from "react";
import {Row, Button } from 'antd';

const LoggedInNavigation=()=>{
    return(
        <div className='nav-container'>
            <Row className='nav-bar'>
                <Button>Dashboard</Button>
                <Button>Available</Button>
                <Button>Rented</Button>

            </Row>

        </div>
    )

}

export default LoggedInNavigation