import React from "react";
import {Row, Button } from 'antd';
import { useHistory } from "react-router";

const LoggedInNavigation=()=>{
    const {push} = useHistory()
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