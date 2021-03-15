import React from 'react'
import { useGlobalContext } from './Context'
import Loader from './Loader';
import Pagination from './Pagination'
import './styles/AllMatches.css'

const Uitslagen = () => {

    const { state, matchDays, currentday, totalMatches, paginate } = useGlobalContext()

    return (
        <div className="container">
            <div className="matches">

                <div className="gamesnRound">
                    <div className="alleWedstrijden">Alle wedstrijden</div>
                    < div className="speelrondes" > Speelronde <div className="circle"><div className="dayNumber">{currentday}</div></div></ div>
                </div>

                {totalMatches === 0 ? <Loader /> :

                    matchDays.map((game) => {
                        const { homeTeam, awayTeam, score, id } = game

                        return <>
                            <div className="match" key={id}>
                                <div className="teams">
                                    <div className="hometeam">{homeTeam.name}</div>
                                    <div className="scores">{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</div>
                                    <div className="awayteam">{awayTeam.name}</div>
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
