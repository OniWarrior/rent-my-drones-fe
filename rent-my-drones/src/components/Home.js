import React from "react";
import { Image, Typography } from "antd";
import Title from "antd/lib/skeleton/Title";
import Paragraph from "antd/lib/skeleton/Paragraph";

const Home =()=>{

    return(
        <div className='home-container'>
        <Image width={400} src='https://thumbs.dreamstime.com/b/silhouette-flying-drone-glowing-red-sunset-sky-modern-technological-background-silhouette-flying-drone-glowing-red-116709282.jpg'/>
        <Typography>
          <Title>
            Welcom to Rent My Drone App
          </Title>
          <Paragraph>
              If you're an individual who's an avid drone enthusiast who's looking to rent a drone on the go or 
              a drone owner who's wanting to earn a little extra money by renting your drones,
              then Rent My Drone is the app for you.              
          </Paragraph>
          <Paragraph>
              With Rent My Drone, you can sign up and look for drones in your area that 
              are available to rent and rent directly from the owner. If you're an owner of drones,
              you can post a listing for your drones that are available to rent. Sign up/Login at the top of the screen.
          </Paragraph>
        

        </Typography>
        </div>
    )

    

}

export default Home