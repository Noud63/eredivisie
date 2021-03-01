import React, { useState, useEffect } from 'react'
import Header from './Header';

const url = "https://api.football-data.org/v2/competitions/DED/standings"; //https://cors-anywhere.herokuapp.com/

const Listcontainer = () => {

    const [standings, setstandings] = useState([])
    const [round, setRound] = useState(0)
    const [leftRow, setLeftRow] = useState([])
    const [rightRow, setRightRow] = useState([])

    const getStandings = async () => {

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: { "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4" }
            })
            const data = await res.json()
            const rank = data.standings[0].table
            for (let club of rank) {
                club.team.name = club.team.name
                    .replace("Rotterdam", "")
                    .replace("'65", "")
                    .replace("Almelo", "")
                    .replace("AFC", "")
                    .replace("Tilburg", "")
                    .replace("SBV", "")
            }

            const matchday = data.season.currentMatchday
            const left = rank.slice(0, 9)
            const right = rank.slice(9, 18)
            setLeftRow(left)
            setRightRow(right)
            setstandings(rank)
            setRound(matchday)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStandings()
    }, [standings])


    return (
        <div>
            <Header round={round} />
            <div className="container">
                <div className="leftRow">
                    {leftRow.map((place, index) => {
                        const { team, position } = place
                        return (
                            <div className="teamWrapper" key={index}>
                                <div className="position">{position}.</div>
                                <div className="icon"><img src={team.crestUrl} alt="logo" className="clubIcon" /></div>
                                <div key={index} className="team">{team.name}</div>
                            </div>
                        )
                    })}
                </div>

                <div className="rightRow">
                    {rightRow.map((place, index) => {
                        const { team, position } = place
                        return (
                            <div className="teamWrapper" key={index}>
                                <div className="position2">{position}.</div>
                                <div className="icon"><img src={team.crestUrl} alt="logo" className="clubIcon" /></div>
                                <div key={index} className="team">{team.name}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Listcontainer
