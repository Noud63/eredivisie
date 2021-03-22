import React, { useEffect, useCallback } from 'react'
import styles from './styles/Recent.module.css'
import { useGlobalContext } from './Context'
import { useGlobalState } from './Standings'


const Recent = () => {

    const [lastGames, setLastGames] = React.useState([])

    const { state } = useGlobalContext()
    const { matchDay } = useGlobalState()


    const currentMatchDay = matchDay
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
        <>
            <div className={styles.container}>
                <div className={styles.matches}>

                    <div className={styles.gamesnRound}>
                        <div className={styles.alleWedstrijden}>Deze week gespeeld</div>
                        < div className={styles.speelrondes} > Speelronde <div className={styles.circle}><div className={styles.dayNumber}>{currentMatchDay}</div></div></ div>
                    </div>

                    {lastGames.map((game) => {
                        const { homeTeam, awayTeam, score, id } = game

                        return (
                            <div className={styles.match} key={id}>
                                <div className={styles.teams} >
                                    <div className={styles.hometeam}>{homeTeam.name}</div>
                                    <div className={styles.scores}>{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</div>
                                    <div className={styles.awayteam}>{awayTeam.name}</div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        </>

    )
}

export default Recent
