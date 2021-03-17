import React from 'react'
import logo from './images/eredivisielogo.png'
import goal from './images/goal.jpg'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import Uitslagen from './Uitslagen'
import Standings from './Standings'
import Recent from './Recent'
import styles from './styles/Home.module.css'

const link = "noudvandun@gmail.com"
const link2 = <a href={'https://github.com/Noud63?tab=repositories'} target={'blank'} style={{ textDecoration: "none", color: "white" }}> github.com/Noud63</a>

const Home = () => {

    return (
        <>
            <div className={styles.eredivisieLogo}>
                <img src={logo} alt="logo" className={styles.logoStyle} />
            </div>

            <div className={styles.borderMarker}><img src={goal3} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.dezeweek}>
                <Recent />
            </div>

            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.standings}>
                <Standings />
            </div>

            <div className={styles.borderMarker}><img src={goal2} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.footer}>
                <div className={styles.links}>
                    <div><li>Contact: {link}</li></div><br></br>
                    <div><li>GitHub : {link2}</li></div>
                </div>

            </div>

        </>
    )
}

export default Home
