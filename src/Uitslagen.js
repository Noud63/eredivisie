import React from 'react'
import { useGlobalContext } from './Context'
import Loader from './Loader';
import Pagination from './Pagination'
import styles from './styles/AllMatches.module.css'

const Uitslagen = () => {

    const { state, matchDays, currentday, totalMatches, paginate } = useGlobalContext()

    return (
        <div className={styles.container}>
            <div className={styles.matches}>

                <div className={styles.gamesnRound}>
                    <div className={styles.alleWedstrijden}>Alle wedstrijden</div>
                    < div className={styles.speelrondes} > Speelronde <div className={styles.circle}><div className={styles.dayNumber}>{currentday}</div></div></ div>
                </div>

                {totalMatches === 0 ? <Loader /> :

                    matchDays.map((game) => {
                        const { homeTeam, awayTeam, score, id } = game

                        return <>
                            <div className={styles.match} key={id}>
                                <div className={styles.teams}>
                                    <div className={styles.hometeam}>{homeTeam.name}</div>
                                    <div className={styles.scores}>{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</div>
                                    <div className={styles.awayteam}>{awayTeam.name}</div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
            <Pagination paginate={paginate} currentday={currentday} total={totalMatches} result={state} />

        </div>
    )
}

export default Uitslagen

