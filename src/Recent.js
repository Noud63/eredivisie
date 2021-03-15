import React, { useEffect } from 'react'
import './styles/Recent.css'
import { useGlobalContext } from './Context'

const Recent = () => {

    const [lastGames, setLastGames] = React.useState([])

    const { state, matchDays, currentday, totalMatches, paginate } = useGlobalContext()
    const recent = state.slice(25, 26)

    useEffect(() => {
        for (let games of recent) {
            setLastGames(games)
        }
    })

    return (
        <div className="lastGames">
            {lastGames.map(game => {
                const { id, homeTeam, awayTeam, matchday, score } = game
                return (
                    <div className="recentGames" key={id}>
                        <div className="gamebox"><div>{homeTeam.name}</div> <div>{score.fullTime.homeTeam}-{score.fullTime.awayTeam}</div><div>{awayTeam.name}</div></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Recent
