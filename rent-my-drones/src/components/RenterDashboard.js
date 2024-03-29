import { Button } from 'antd'
import React from 'react'
import '../styles/RenterDashboard.css'
import { useHistory } from 'react-router'
import LoggedInNavigation from './LoggedInNavigation'

const RenterDashboard=()=>{
    const {push} = useHistory()

    const handleAvailable=(e)=>{
        e.preventDefault()
        push('/Dashboard/available')
    }

    const handleRented=(e)=>{
        e.preventDefault()
        push('/Dashboard/rented')
    }


    return(
        <div className='dashboard-container'>
            <LoggedInNavigation/>
            <div className='dashboard-header'>
                <h1>Dashboard</h1>                
            </div>
            <div className='dashboard-card-container'>
              <Button id='available-card'className='dashboard-card' onClick={handleAvailable}>Available</Button>
              <Button id = 'rented-card' className='dashboard-card' onClick={handleRented}>Rented</Button>
            </div>
        </div>
    )

}

export default RenterDashboard