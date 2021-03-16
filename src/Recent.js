import React, { useEffect, useCallback } from 'react'
import './styles/Recent.css'
import { useGlobalContext } from './Context'

const Recent = () => {

    const [lastGames, setLastGames] = React.useState([])

    const { state } = useGlobalContext()
    console.log(state)

    const currentMatchDay = 26
    const recent = state.slice(currentMatchDay - 1, currentMatchDay)

    const getLastGames = useCallback(() => {
        for (let games of recent) {
            setLastGames(games)
        }
    }, [recent])

    useEffect(() => {
        getLastGames()
    }, [getLastGames])


    return (

        <div className="wrapper">
            <div className="lastGames">
                <div className="gamesnRound">
                    <div className="alleWedstrijden">Deze week</div>
                    < div className="speelrondes" > Speelronde <div className="circle"><div className="dayNumber">26</div></div></ div>
                </div>
                {lastGames.map(game => {
                    const { id, homeTeam, awayTeam, score } = game
                    return (

                        <div className="team2" key={id}>
                            <div className="home">{homeTeam.name}</div>
                            <div className="score">{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</div>
                            <div className="away">{awayTeam.name}</div>
                        </div>

                    )
                })}
            </div>
        </div>


    )
}

export default Recent
