
import '../styles/home.css';
import UnsignedNavigation from './unsigned-navigation';

const Home = () => {

    return (
        <div className='home'>
            <UnsignedNavigation />
            <div className='home-container'>
                <div className='drone-img'>
                    <div className='hero-text-container'>
                        <div className='hero-text-header'>
                            <h1>Rent My Drones</h1>
                        </div>

                        <div className='hero-text'>
                            <p>Here at Rent My Drones, we allow the drone enthusiast to directly rent from a local drone owner.
                                We also allow an owner to rent out their drone to earn money.
                                So if your a drone owner looking to earn some extra money by renting out your drone or a drone enthusiast who needs a drone quickly for use,
                                then signup/login at the top of the page. </p>

                        </div>

                    </div>

                </div>

            </div>
        </div >
    )



}

export default Home