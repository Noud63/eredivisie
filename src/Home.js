import React from 'react'
import goal from './images/goal.jpg'
import eredivisie65 from './images/eredivisie65.png'
import feyenoord from './images/feyenoord.png'
import willem2 from './images/willem2.png'
import ajax from './images/ajax.png'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import vvv1 from './images/vvv1.jpg'
import malen from './images/malen.jpg'
import berghuis from './images/berghuis.jpg'
import Uitslagen from './Uitslagen'
import Stand from './Stand'
import Recent from './Recent'
import styles from './styles/Home.module.css'
//import Footer from './Footer'

const Home = () => {

    return (
        <>


            <div className={styles.schaal}>
                <img src={goal3} className={styles.schaalPic} alt="" />
                <div className={styles.ere65}><img src={eredivisie65} alt="" className={styles.eredivisie65}/></div>
            </div>

            {/* <div className={styles.clubLogos}>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt=""/></div>
                <div className={styles.club}><img src={ajax} className={styles.aj} alt="" /></div>
                <div className={styles.club}><img src={willem2} className={styles.wil} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
                <div className={styles.club}><img src={feyenoord} className={styles.fey} alt="" /></div>
            </div> */}

            <div className={styles.dezeweek} >
                <Recent />
            </div>

            <div className={styles.borderMarker2}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.stand} >
                <Stand />
            </div>

            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.topScores}>
                <div className={styles.top}>Topscorers seizoen 2020-2021</div>
                <div className={styles.topScorers}>
                    <img src={vvv1} alt="" className={styles.giakou} />
                    <div className={styles.name}>1. Georgios Giakoumakis - VVV-Venlo</div>
                    <div className={styles.goals}>26</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={malen} alt="" className={styles.giakou} />
                    <div className={styles.name}>2. Donyell Malen - PSV</div>
                    <div className={styles.goals}>19</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={berghuis} alt="" className={styles.giakou} />
                    <div className={styles.name}>3. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>18</div>
                </div>
            </div>

            <div className={styles.borderMarker}>
                <img src={goal2} className={styles.ballInGoal} alt="" /></div>

        </>
    )
}

export default Home
