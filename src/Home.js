import React from 'react'
import { useWindowWidth } from 'react-window-size-hooks';
import logo from './images/eredivisielogo.png'
import goal from './images/goal.jpg'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import derbystar from './images/derbystar.png'
import vvv1 from './images/vvv1.jpg'
import malen from './images/malen.jpg'
import Uitslagen from './Uitslagen'
import Stand from './Stand'
import Recent from './Recent'
import styles from './styles/Home.module.css'
import Footer from './Footer'



const link = "noudvandun@gmail.com"
const link2 = <a href={'https://github.com/Noud63?tab=repositories'} target={'blank'} style={{ textDecoration: "none", color: "white" }}> github.com/Noud63</a>
const link3 = <a href={'http://www.noudvandun.com'} target={'blank'} style={{ textDecoration: "none", color: "white" }}>Noud van Dun</a>


const Home = () => {

    // const derby = React.useRef()

    // const width = useWindowWidth();

    // React.useEffect(() => {

    //     if (width < 850) {
    //         derby.current.style = "display: none"
    //     } else {
    //         derby.current.style = "display: flex"
    //     }

    // }, [width])

    return (
        <>
            {/* <div className={styles.eredivisieLogo}>
                <img src={logo} alt="logo" className={styles.logoStyle} />
            </div> */}

            <div className={styles.borderMarker2}><img src={goal3} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker3}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.dezeweek}>
                <Recent />
            </div>

            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.stand}>
                <Stand />
            </div>

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
                    {/* <img src={vvv1} alt="" className={styles.giakou} /> */}
                    {/* <div className={styles.name}>3. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>15</div> */}
                </div>
                <div className={styles.topScorers}>
                    {/* <img src={vvv1} alt="" className={styles.giakou} /> */}
                    {/* <div className={styles.name}>4. Teun Koopmeiners - AZ</div>
                    <div className={styles.goals}>15</div> */}
                </div>
            </div>

            <div className={styles.borderMarker}><img src={goal2} className={styles.ballInGoal} alt="" /></div>



           

        </>
    )
}

export default Home
