import React, { useContext, useState, useEffect, useCallback } from 'react'
import { RoundContext } from './Listcontainer'

const Header = () => {

    // const state = useContext(RoundContext)
    // const [date, setDate] = useState()
    // const [roundsLeft, setRoundsLeft] = useState()

    // const getDate = () => {
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     const months = ["January", "February", "March", "April", "May", "June", "July",
    //         "August", "September", "October", "November", "December"];
    //     const day = `${days[new Date().getDay()]}, ${months[new Date().getMonth()]} ${new Date().getDay()}`
    //     setDate(day)
    // }

    // const roundsToGo = useCallback(() => {
    //     const competitionLength = (state.standings.length - 1) * 2
    //     let leftToGo = competitionLength - state.round;

    //     if (leftToGo > 0 && leftToGo <= competitionLength) {
    //         setRoundsLeft(leftToGo)
    //     }
    //     if (leftToGo === 0) {
    //         setRoundsLeft(" the end, no")
    //     }
    //     if (state.round === 0) {
    //         setRoundsLeft("?")
    //     }

    // }, [state.round, state.standings.length])

    // useEffect(() => {
    //     getDate()
    //     roundsToGo()
    // }, [date, roundsLeft, roundsToGo])


    return (
        <div className="header">
            <div className="eredivisie">Eredivisie 2020-2021</div>
            {/* <div className="round">Speelronde {state.round}, nog {roundsLeft} rondes te gaan!</div>
            <div className="date">{date}</div> */}
        </div>
    )
}

export default Header
