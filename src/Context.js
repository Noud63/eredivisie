import React, { useEffect, useContext, useState } from 'react'
import AllDataReducer from './reducers/AllDataReducer'
import axios from 'axios'
import "dotenv/config.js";

const URL = "https://api.football-data.org/v2/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v2/competitions/DED/matches";

const AllApiData = React.createContext()

const initialState = {
    leftRow: [],
    rightRow: [],
    matches: [],
    matchByDay: [],
    totalMatches: 0
}

const AllData = ({ children }) => {

    const [state, dispatch] = React.useReducer(AllDataReducer, initialState)

    const [matchDays, setMatchDays] = useState([])
    const [currentDay, setCurrentDay] = useState(1)       // 1 t/m 34
    const [matchDay, setMatchDay] = useState([])

    useEffect(() => {

        const getData = async () => {

            dispatch({ type: "DATA_REQUEST" })
            try {
                await axios.all([
                    await axios.get(URL, {
                        headers: { "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN }
                    }),
                    await axios.get(URL2, {
                        headers: { "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN }
                    })
                ])
                    .then(axios.spread((data1, data2) => {

                        const ranking = data1.data.standings[0].table
                        for (let club of ranking) {
                            club.team.name = club.team.name
                                .replace("Rotterdam", "")
                                .replace("'65", "")
                                .replace("Almelo", "")
                                .replace("AFC", "")
                                .replace("Tilburg", "")
                                .replace("SBV", "")
                        }

                        const matches = data2.data.matches

                        for (let club of matches) {
                            club.homeTeam.name = club.homeTeam.name
                                .replace("Rotterdam", "")
                                .replace("'65", "")
                                .replace("Almelo", "")
                                .replace("AFC", "")
                                .replace("Tilburg", "")
                                .replace("SBV", "");

                            club.awayTeam.name = club.awayTeam.name
                                .replace("Rotterdam", "")
                                .replace("'65", "")
                                .replace("Almelo", "")
                                .replace("AFC", "")
                                .replace("Tilburg", "")
                                .replace("SBV", "");

                            if (club.score.fullTime.homeTeam === null || club.score.fullTime.awayTeam === null) {
                                club.score.fullTime.homeTeam = "?";
                                club.score.fullTime.awayTeam = "?";
                            }
                        }

                        // Create an array of array of objects( all gamerounds) selected by matchday
                        let byDay = Object.values(
                            matches.reduce((acc, m) => {
                                acc[m.matchday] = acc[m.matchday] || [];
                                acc[m.matchday].push(m);
                                return acc;
                            }, {})
                        );


                        const defaultPost = byDay[0]
                        setMatchDays(defaultPost)

                        const leftRow = ranking.slice(0, 9)
                        const rightRow = ranking.slice(9, 18)
                        const matchByDay = byDay
                        const totalMatches = matches.length / leftRow.length
                        const day = data1.data.season.currentMatchday
                        setMatchDay(day)

                        const data = {
                            leftRow: leftRow,
                            rightRow: rightRow,
                            matches: matches,
                            matchByDay: matchByDay,
                            totalMatches: totalMatches,
                            currentMatchday: day
                        }

                        dispatch({ type: "DATA_REQUEST_SUCCESS", payload: data })


                    }));
            } catch (error) {
                dispatch({ type: "DATA_REQUEST_FAIL" })
                console.error("No data! Try again or wait for just a minute, maybe your request limit has exceeded.")
            }
        }

        getData()

    }, [])


    const paginate = (number) => {
        setCurrentDay(number)
        setMatchDays(state.matchByDay[number - 1])
    }

    return <AllApiData.Provider value={{ state, currentDay, matchDays, matchDay, paginate }}>{children}</AllApiData.Provider>

}

export const useGlobalContext = () => {
    return useContext(AllApiData)
}

export { AllApiData, AllData }

