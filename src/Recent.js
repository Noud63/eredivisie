import React from 'react'
import './styles/Recent.css'
import { useGlobalContext } from './Context'

const Recent = () => {

    const { state, matchDays, currentday, totalMatches, paginate } = useGlobalContext()
    console.log(state)

    return (
        <div className="lastGames">
            Laatst gespeelde wedstrijden hier
        </div>
    )
}

export default Recent
