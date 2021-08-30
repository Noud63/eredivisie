import React from 'react'
import styles from './styles/Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {

    // const [date, setDate] = useState()

    // const getDate = () => {
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     const months = ["January", "February", "March", "April", "May", "June", "July",
    //         "August", "September", "October", "November", "December"];
    //     const day = `${days[new Date().getDay()]}, ${months[new Date().getMonth()]} ${new Date().getDate()}`
    //     setDate(day)
    // }

    // useEffect(() => {
    //     getDate()

    // }, [])


    return (
        <div className={styles.header}>
            {/* <div className={styles.logo2}><img src={logo} alt="" className={styles.logo} /></div> */}
            <div className={styles.eredivisie}>KNVB Eredivisie 2021-2022</div>
            
            {/* <div className="date">{date}</div> */}
            <div className={styles.links}>

                <Link to="/" className={styles.link}>
                    <div>Home</div>
                </Link>

                <Link to="/uitslagen" className={styles.link}>
                    <div >Alle wedstrijden</div>
                </Link>

                <Link to="/recent" className={styles.link}>
                    <div >Recent</div>
                </Link>

                <Link to='/stand' className={styles.link}>
                    <div >Stand</div>
                </Link>

            </div>

        </div>
    )
}

export default Header
