import React from "react";
import {Row, Button } from 'antd';
import { useHistory } from "react-router";

const LoggedInNavigation=()=>{
    const {push} = useHistory()

    const goToDashboard=()=>{
        e.preventDefault()
        push('/Dashboard')
    }

    const goToAvailable=(e)=>{
        e.preventDefault()
        push('/avaliable')
    }

    const goToRented=(e)=>{
        e.preventDefault()
        push('/rented')
    }
    return(
        <div className='nav-container'>
            <Row className='nav-bar'>
                <Button onClick={goToDashboard}>Dashboard</Button>
                <Button onClick={goToAvailable}>Available </Button>
                <Button onClick={goToRented}>Rented</Button>
            </Row>
        </div>
    )

}

export default LoggedInNavigation