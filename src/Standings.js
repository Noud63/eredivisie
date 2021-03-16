import React, { useState, useEffect, useCallback } from 'react'
import Loader from './Loader';
import './styles/Standings.css'

const url = "https://api.football-data.org/v2/competitions/DED/standings";

const initialState = {
    standings: [],
    round: 0,
    leftRow: [],
    rightRow: []
}

const Standings = () => {

    const [state, setState] = useState(initialState)

    /** Instead of an object use separate useStates **/
    // const [standings, setstandings] = useState([])
    // const [round, setRound] = useState(0)
    // const [leftRow, setLeftRow] = useState([])
    // const [rightRow, setRightRow] = useState([])

    const getStandings = useCallback(async () => {

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: { "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4" }
            })
            const data = await res.json()
            const table = data.standings[0].table
            for (let club of table) {
                club.team.name = club.team.name
                    .replace("Rotterdam", "")
                    .replace("'65", "")
                    .replace("Almelo", "")
                    .replace("AFC", "")
                    .replace("Tilburg", "")
                    .replace("SBV", "")
            }

            const matchday = data.season.currentMatchday
            const left = table.slice(0, 9)
            const right = table.slice(9, 18)

            setState((state) => (    // functional update prev => { ...prev, leftRow: left etc }
                {
                    ...state,
                    leftRow: left,
                    rightRow: right,
                    standings: table,
                    round: matchday
                }
            ))

            // setLeftRow(left)
            // setRightRow(right)
            // setstandings(table)
            // setRound(matchday)

        } catch (error) {
            console.log(error)
        }
    }, [])


    useEffect(() => {
        getStandings()
    }, [getStandings])


    return (
        <div className="container2">
            <div className="round">Stand na {state.round} speelrondes</div>
            {state.round === 0 ? <Loader /> :
                <>
                    <div className="leftRightRow">

                        <div className="leftRow">

                            < span className="left" >
                                <span className="stats">
                                    <span className="gs">GS</span>
                                    <span className="wgv">W|G|V</span>
                                    <span className="p">P</span>
                                    <span className="vt">V-T</span>
                                </span>
                            </span >

                            {state.leftRow.map((place, index) => {
                                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                                return (
                                    <div className="teamWrapper" key={index}>
                                        <div className="leftTeam">
                                            <div className="position">{position}</div>
                                            <img src={team.crestUrl} alt="logo" className="clubIcon" />
                                            <div key={index} className="team">{team.name}</div>
                                        </div>

                                        <span className="stats2">
                                            <span>{playedGames}</span>
                                            <span>{won}|{draw}|{lost}</span>
                                            <span>{points}</span>
                                            <span>{goalsFor}-{goalsAgainst}</span>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="rightRow">

                            < span className="right" >
                                <span className="stats">
                                    <span className="gs">GS</span>
                                    <span className="wgv">W|G|V</span>
                                    <span className="p">P</span>
                                    <span className="vt">V-T</span>
                                </span>
                            </span >

                            {state.rightRow.map((place, index) => {
                                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                                return (
                                    <div className="teamWrapper" key={index}>
                                        <div className="rightTeam">
                                            <div className="position2">{position}</div>
                                            <img src={team.crestUrl} alt="logo" className="clubIcon" />
                                            <div key={index} className="team">{team.name}</div>
                                        </div>

                                        <span className="stats2">
                                            <span>{playedGames}</span>
                                            <span>{won}|{draw}|{lost}</span>
                                            <span>{points}</span>
                                            <span>{goalsFor}-{goalsAgainst}</span>
                                        </span>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default Standings

