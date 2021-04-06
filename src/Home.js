import React from 'react'
import goal from './images/goal.jpg'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import vvv1 from './images/vvv1.jpg'
import malen from './images/malen.jpg'
import berghuis from './images/berghuis.jpg'
import koopmeiners from './images/koopmeiners2.jpg'
import Uitslagen from './Uitslagen'
import Stand from './Stand'
import Recent from './Recent'
import styles from './styles/Home.module.css'

const Home = () => {

    return (
        <>
            <div className={styles.borderMarker2}><img src={goal3} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.dezeweek}>
                <Recent />
            </div>

            <div className={styles.borderMarker3}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.stand}>
                <Stand />
            </div>

            <div className={styles.borderMarker}><img src={goal2} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.topScores}>
                <div className={styles.top}>Topscorers</div>
                <div className={styles.topScorers}>
                    <img src={vvv1} alt="" className={styles.giakou} />
                    <div className={styles.name}>1. Georgios Giakoumakis - VVV-Venlo</div>
                    <div className={styles.goals}>24</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={malen} alt="" className={styles.giakou} />
                    <div className={styles.name}>2. Donyell Malen - PSV</div>
                    <div className={styles.goals}>15</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={berghuis} alt="" className={styles.giakou} />
                    <div className={styles.name}>2. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>15</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={koopmeiners} alt="" className={styles.giakou} />
                    <div className={styles.name}>2. Teun Koopmeiners - AZ</div>
                    <div className={styles.goals}>15</div>
                </div>
            </div>



        </>
    )
}

export default Home
