import React from 'react'
<<<<<<< HEAD
import logo from './images/eredivisielogo.png'
=======
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a
import goal from './images/goal.jpg'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import vvv1 from './images/vvv1.jpg'
<<<<<<< HEAD
import koopmeiners from './images/koopmeiners.jpg'
import malen from './images/malen.jpg'
import berghuis from './images/berghuis.jpg'
=======
import malen from './images/malen.jpg'
import berghuis from './images/berghuis.jpg'
import koopmeiners from './images/koopmeiners2.jpg'
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a
import Uitslagen from './Uitslagen'
import Stand from './Stand'
import Recent from './Recent'
import styles from './styles/Home.module.css'
<<<<<<< HEAD
import Footer from './Footer'

const Home = () => {


    return (
        <>
            <div className={styles.schaal}><img src={goal3} className={styles.ballInGoal} alt="" /></div>
=======

const Home = () => {

    return (
        <>
            <div className={styles.borderMarker2}><img src={goal3} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.dezeweek}>
                <Recent />
            </div>

            <div className={styles.borderMarker3}><img src={goal} className={styles.ballInGoal} alt="" /></div>
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a

            <div className={styles.dezeweek} >
                <Recent />
            </div>

<<<<<<< HEAD
            <div className={styles.borderMarker2}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.stand} >
                <Stand />
            </div>

=======
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a
            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker}><img src={goal} className={styles.ballInGoal} alt="" /></div>

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
<<<<<<< HEAD
                    <div className={styles.goals}>17</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={berghuis} alt="" className={styles.giakou} />
                    <div className={styles.name}>3. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>17</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={koopmeiners} alt="" className={styles.giakou} />
                    <div className={styles.name}>4. Teun Koopmeiners - AZ</div>
=======
                    <div className={styles.goals}>16</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={berghuis} alt="" className={styles.giakou} />
                    <div className={styles.name}>2. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>16</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={koopmeiners} alt="" className={styles.giakou} />
                    <div className={styles.name}>3. Teun Koopmeiners - AZ</div>
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a
                    <div className={styles.goals}>15</div>
                </div>
            </div>

            <div className={styles.borderMarker}>
                <img src={goal2} className={styles.ballInGoal} alt="" /></div>

            <Footer />


        </>
    )
}

export default Home
