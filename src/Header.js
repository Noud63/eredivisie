import React, { useContext, useState, useEffect, useCallback } from 'react'
import './styles/Header.css'

const Header = () => {

    const [date, setDate] = useState()

    const getDate = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        const day = `${days[new Date().getDay()]}, ${months[new Date().getMonth()]} ${new Date().getDate()}`
        setDate(day)
    }

    useEffect(() => {
        getDate()

    }, [])


    return (
        <div className="header">
            <div className="eredivisie">Eredivisie 2020-2021</div>
            <div className="date">{date}</div>
        </div>
    )
}

export default Header
