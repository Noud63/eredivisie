import React, { useState, useEffect, useCallback } from 'react'
import Pagination from './Pagination';
import Error from './Error';
// import Header from './Header';

const url = "https://api.football-data.org/v2/competitions/DED/matches"; //https://cors-anywhere.herokuapp.com/

const AllMatches = () => {

    const [state, setState] = useState([])
    const [matchDays, setMatchDays] = useState([])
    const [currentDay, setCurrentDay] = useState(1)
    const [totalMatches, setTotalMatches] = useState(0)

    const getMatches = useCallback(async () => {

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: { "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4" }
            })
            const data = await res.json()

            //Group objects by matchday value, create array of array of objects [ [obj, obj (matchday 1)], [obj, obj], ...........]
            let result = Object.values(
                data.matches.reduce((acc, m) => {
                    acc[m.matchday] = acc[m.matchday] || [];
                    acc[m.matchday].push(m);
                    return acc;
                }, {})
            );

            for (let week of result) {
                for (let m of week) {                              // m = single match
                    m.homeTeam.name = m.homeTeam.name
                        .replace("Rotterdam", "")
                        .replace("'65", "")
                        .replace("Almelo", "")
                        .replace("AFC", "")
                        .replace("Tilburg", "")
                        .replace("SBV", "");

                    m.awayTeam.name = m.awayTeam.name
                        .replace("Rotterdam", "")
                        .replace("'65", "")
                        .replace("Almelo", "")
                        .replace("AFC", "")
                        .replace("Tilburg", "")
                        .replace("SBV", "");

                    if (
                        m.score.fullTime.homeTeam === null ||
                        m.score.fullTime.awayTeam === null
                    ) {
                        m.score.fullTime.homeTeam = "?";
                        m.score.fullTime.awayTeam = "?";
                    }
                }
            }

            setState(result)
            setTotalMatches(result.length)
            const defaultPost = result[currentDay - 1]
            setMatchDays(defaultPost)

        } catch (error) {
            console.log(error)
        }
    }, [currentDay])


    useEffect(() => {
        getMatches()
    }, [state, getMatches])



    const paginate = (number) => {
        setCurrentDay(number)
        setMatchDays(state[number - 1])
    }

    return (
        <div>

            <div className="container">
                <div className="matches">

                    <div className="speelronde">Speelronde {currentDay}</div>
                    {totalMatches === 0 ? <Error /> :
                        matchDays.map((game, index) => {
                            const { homeTeam, awayTeam, score } = game
                            return <div className="match" key={index}>
                                <div className="teams"><div className="hometeam">{homeTeam.name}</div>
                                    <div className="scores">{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</div>
                                    <div className="awayteam">{awayTeam.name}</div></div>

                            </div>
                        })
                    }
                </div>
                <Pagination paginate={paginate} currentday={currentDay} />
            </div>
        </div>

    )
}

export default AllMatches

