import React from 'react'
import logo from './images/eredivisielogo.png'
import goal from './images/goal.jpg'
import goal2 from './images/goal2.jpg'
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

            <div className="borderMarker"><img src={goal3} className="ballInGoal" alt=""/></div>

            <div className="allmatches">
                <Uitslagen />
            </div>

            <div className="borderMarker"><img src={goal} className="ballInGoal" alt="" /></div>

            <div className="dezeweek">
                <Recent />
            </div>

            <div className="borderMarker"><img src={goal} className="ballInGoal" alt=""/></div>

            <div className="standings">
                <Standings />
            </div>

            <div className="borderMarker"><img src={goal2} className="ballInGoal" alt=""/></div>

        </>
    )
}

export default Home
