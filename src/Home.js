import React from 'react'
import logo from './images/eredivisielogo.png'
import bg from './images/bg2.jpg'
import AllMatches from './AllMatches'
import Standings from './Standings'
import './styles/Home.css'

const Home = () => {

    return (
        <>
            <div className="eredivisieLogo">
                <img src={logo} alt="logo" className="logoStyle" />
            </div>

            <div className="borderMarker" style={{ backgroundImage: `url(${bg})` }}>

            </div>

            <div className="allmatches">
                <AllMatches />
            </div>

            <div className="standings">
                <Standings />
            </div>


        </>
    )
}

export default Home
