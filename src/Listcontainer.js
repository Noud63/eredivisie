// import React, { useState, useEffect, useCallback } from 'react'
// import Header from './Header';
// import Error from './Error';

// const url = "https://api.football-data.org/v2/competitions/DED/standings"; //https://cors-anywhere.herokuapp.com/

// export const RoundContext = React.createContext()

// const initialState = {
//     standings: [],
//     round: 0,
//     leftRow: [],
//     rightRow: []
// }

// const Listcontainer = () => {

//     const [state, setState] = useState(initialState)

//     /** Instead of an object use separate useStates **/
//     // const [standings, setstandings] = useState([])
//     // const [round, setRound] = useState(0)
//     // const [leftRow, setLeftRow] = useState([])
//     // const [rightRow, setRightRow] = useState([])

//     const getStandings = useCallback(async () => {

//         try {
//             const res = await fetch(url, {
//                 method: "GET",
//                 headers: { "X-Auth-Token": "7bf5e57cdcd34e03826e0fb2b4620aa4" }
//             })
//             const data = await res.json()
//             console.log(data)
//             const table = data.standings[0].table
//             for (let club of table) {
//                 club.team.name = club.team.name
//                     .replace("Rotterdam", "")
//                     .replace("'65", "")
//                     .replace("Almelo", "")
//                     .replace("AFC", "")
//                     .replace("Tilburg", "")
//                     .replace("SBV", "")
//             }

//             const matchday = data.season.currentMatchday
//             const left = table.slice(0, 9)
//             const right = table.slice(9, 18)
//             setState({ ...state, leftRow: left, rightRow: right, standings: table, round: matchday })

//             // setLeftRow(left)
//             // setRightRow(right)
//             // setstandings(table)
//             // setRound(matchday)

//         } catch (error) {
//             console.log(error)
//         }
//     }, [state])


//     useEffect(() => {
//         getStandings()
//     }, [state, getStandings])


//     return (
//         <div>
//             <RoundContext.Provider value={{ ...state }}>
//                 <Header />
//             </RoundContext.Provider>

//             <div className="container">

//                 {state.round === 0 ? <Error /> :
//                     <>
//                         <div className="leftRow">
//                             {state.leftRow.map((place, index) => {
//                                 const { team, position } = place
//                                 return (
//                                     <div className="teamWrapper" key={index}>
//                                         <div className="position">{position}.</div>
//                                         <div className="icon"><img src={team.crestUrl} alt="logo" className="clubIcon" /></div>
//                                         <div key={index} className="team">{team.name}</div>
//                                     </div>
//                                 )
//                             })}
//                         </div>

//                         <div className="rightRow">
//                             {state.rightRow.map((place, index) => {
//                                 const { team, position } = place
//                                 return (
//                                     <div className="teamWrapper" key={index}>
//                                         <div className="position2">{position}.</div>
//                                         <div className="icon"><img src={team.crestUrl} alt="logo" className="clubIcon" /></div>
//                                         <div key={index} className="team">{team.name}</div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </>
//                 }

//             </div>
//         </div>
//     )
// }

// export default Listcontainer
