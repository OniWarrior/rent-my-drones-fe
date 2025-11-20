import React from "react";
import { Row, Button } from 'antd';
import { useNavigate } from "react-router";
import '../styles/Navigation.css'

const LoggedInNavigation = () => {
    const navigate = useNavigate();

    const goToDashboard = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    const goToAvailable = (e) => {
        e.preventDefault()
        navigate('/dashboard/available')
    }

    const goToRented = (e) => {
        e.preventDefault()
        navigate('/dashboard/rented')
    }

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div className='nav-container'>
            <Row className='navbar'>
                <Button onClick={goToDashboard}>Dashboard</Button>
                <Button onClick={goToAvailable}>Available </Button>
                <Button onClick={goToRented}>Rented</Button>
                <Button onClick={logOut}>Log out</Button>
            </Row>
        </div>
    )

}

export default LoggedInNavigation