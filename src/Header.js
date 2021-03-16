import React from 'react'
import './styles/Header.css'
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
        <div className="header">
            <div className="eredivisie">KNVB Eredivisie 2020-2021</div>
            {/* <div className="date">{date}</div> */}
            <div className="links">
                <Link to="/" className="link">
                    <div>Home</div>
                </Link>

                <Link to="/uitslagen" className="link">
                    <div >Alle wedstrijden</div>
                </Link>

                <Link to="/recent" className="link">
                    <div >Uitslagen</div>
                </Link>


                <Link to='/standings' className="link">
                    <div >Stand</div>
                </Link>
            </div>
        </div>
    )
}

export default Header
