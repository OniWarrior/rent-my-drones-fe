import React from "react";
import {Row, Button } from 'antd';
import { useHistory } from "react-router";
import '../styles/Navigation.css'

const LoggedInNavigation=()=>{
    const {push} = useHistory()

    const goToDashboard=(e)=>{
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
            <Row className='navbar'>
                <Button onClick={goToDashboard}>Dashboard</Button>
                <Button onClick={goToAvailable}>Available </Button>
                <Button onClick={goToRented}>Rented</Button>
                <Button>Log out</Button>
            </Row>
        </div>
    )

}

export default LoggedInNavigation