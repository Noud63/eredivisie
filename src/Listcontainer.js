import React, { useState, useEffect } from 'react'

const url = "https://api.football-data.org/v2/competitions/DED/standings"; //https://cors-anywhere.herokuapp.com/

const Listcontainer = () => {

    const [standings, setstandings] = useState()
    console.log(standings)

    const getStandings = async () => {
        try {
            fetch(url, {
                method: "GET",
                headers: {
                    "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4"
                }
            }).then(res => res.json()).then((data) => {
                const rank = data.standings[0].table
                setstandings(rank)
            })

        } catch (error) {
            console.log('no data retrieved!')
        }

    }

    useEffect(() => {
        getStandings()
    }, [standings, getStandings])


    return (
        <div className="container">
            {standings.map(place => {
                const { team, position } = place
                return (
                    <div>{position}{team.name}</div>
                )

            })}
        </div>
    )
}

export default Listcontainer
