import React, { useState, useEffect, useCallback, useContext } from 'react'

const url = "https://api.football-data.org/v2/competitions/DED/standings";

const initialState = {
    standings: [],
    round: 0,
    leftRow: [],
    rightRow: []
}

const MatchDay = React.createContext()

const Standings = ({ children }) => {

    const [state, setState] = useState(initialState)
    const [matchDay, setMatchDay] = useState(0)

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

            setMatchDay(data.season.currentMatchday)
            const left = table.slice(0, 9)
            const right = table.slice(9, 18)
            setState((state) => (    // functional update prev => { ...prev, leftRow: left etc }
                {
                    ...state,
                    leftRow: left,
                    rightRow: right,
                    standings: table,
                    round: matchDay
                }
            ))

            // setLeftRow(left)
            // setRightRow(right)
            // setstandings(table)
            // setRound(matchday)

        } catch (error) {
            console.log(error)
        }
    }, [matchDay])


    useEffect(() => {
        getStandings()
    }, [getStandings])

    return (
        <>
            <MatchDay.Provider value={{ matchDay, state }}>{children}</MatchDay.Provider>
        </>
    )
}

export const useGlobalState = () => {
    return useContext(MatchDay)
}


export { MatchDay, Standings }

