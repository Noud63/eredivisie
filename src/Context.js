import React, { useState, useEffect, useCallback, useContext } from 'react'


const url = "https://api.football-data.org/v2/competitions/DED/matches";

const RecentMatches = React.createContext()

const AllGames = ({ children }) => {


    const [state, setState] = useState([])
    const [matchDays, setMatchDays] = useState([])
    const [currentDay, setCurrentDay] = useState(1)       // 1 t/m 34
    const [totalMatches, setTotalMatches] = useState(0)   // 34

    const getMatches = useCallback(async () => {

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: { "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4" }
            })
            const data = await res.json()
            console.log(data)
            //Group objects by matchday value, create array of array of objects [ [obj, obj (matchday 1)], [obj, obj (matchday 2)], ...........]
            let result = Object.values(
                data.matches.reduce((acc, m) => {
                    acc[m.matchday] = acc[m.matchday] || [];
                    acc[m.matchday].push(m);
                    return acc;
                }, {})
            );

            for (let week of result) {

                for (let m of week) {                   // m = single match
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
            const defaultPost = result[0]
            setMatchDays(defaultPost)

        } catch (error) {
            console.log(error)
        }
    }, [])


    useEffect(() => {
        getMatches()
    }, [getMatches])


    const paginate = (number) => {
        setCurrentDay(number)
        setMatchDays(state[number - 1])
    }


    const currentday = currentDay

    return (
        <>
            <RecentMatches.Provider value={{ state, matchDays, currentday, totalMatches, paginate }}>{children}</RecentMatches.Provider>
        </>
    )
}

export const useGlobalContext = () => {
    return useContext(RecentMatches)
}


// export default AllMatches
export { RecentMatches, AllGames }

