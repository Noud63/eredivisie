import React from 'react'
import logo from './images/eredivisielogo.png'
import bg from './images/bg.jpg'
import goal from './images/goal.jpg'
import goal3 from './images/goal3.jpg'
import Uitslagen from './Uitslagen'
import Standings from './Standings'
import Recent from './Recent'
import './styles/Home.css'

const Home = () => {

    return (
        <>
            <div className="eredivisieLogo">
                <img src={logo} alt="logo" className="logoStyle" />
            </div>

            <div className="borderMarker"><img src={goal} className="ballInGoal" /></div>

            <div className="allmatches">
                <Uitslagen />
            </div>

            <div className="laatst">
                <Recent />
            </div>

            <div className="borderMarker"><img src={goal} className="ballInGoal" /></div>

            <div className="standings">
                <Standings />
            </div>

            <div className="borderMarker"><img src={goal} className="ballInGoal" /></div>

        </>
    )
}

export default Home
