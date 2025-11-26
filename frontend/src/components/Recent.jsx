import React, { useEffect} from "react";
import styles from "../styles/Recent.module.css";
import { useGlobalContext } from "./Context";
import { useLocation } from "react-router-dom";


const Recent = () => {

    const location = useLocation();
    const path = location.pathname;

   const { state } = useGlobalContext();

   let [finished, setFinished] = React.useState([]);
   let [timed, setTimed] = React.useState([]);
   let [recentMatchDay, setRecentMatchDay] = React.useState(0);
   let [matchDay, setMatchDay] = React.useState(0);

   // console.log("Matchbyday:", state.matchByDay.map((item) => item.map((match) => match.status === "TIMED")) );
   // console.log("Matchbydays:", state.matchByDay);
   // console.log("Day:", matchDay)
  
   useEffect(()=> {
    const finishedArr = [];
    const timedArr = [];

  state.matchByDay.forEach(day =>
    day.forEach(match => {
      if (match.status === "FINISHED") {
        finishedArr.push(match);
      } else if (match.status === "TIMED") {
        timedArr.push(match);
      }
    })
    );

    setFinished(finishedArr);
    setTimed(timedArr);

  // Derived values
  if (finishedArr.length > 0) {
    setRecentMatchDay(finishedArr[finishedArr.length - 1].matchday);
  }

  if (timedArr.length > 0) {
    setMatchDay(timedArr[0].matchday);
  }
    },[state.matchByDay]);  

   // console.log("Timed:", timed.slice(0, 9 ))
   
   // const [lastGames, setLastGames] = React.useState([]);
   // const [program, setProgram] = React.useState([]);

   // let currentMatchDay = matchDay 
   // program.every(match => match.status === "FINISHED" ? currentMatchDay = matchDay : currentMatchDay = matchDay - 1);
   // let upcomingMatchDay = currentMatchDay + 1;
   // let recent = state.matchByDay.slice(currentMatchDay - 1, currentMatchDay);
   // let upcoming = state.matchByDay.slice(upcomingMatchDay - 1, upcomingMatchDay);


   // const getLastGames = useCallback(() => {
   //    for (let games of recent) {
   //       setLastGames(games);
   //    }
   // }, [recent]);

   // const getProgram = useCallback(() => {
   //    for (let games of upcoming) {
   //       setProgram(games);
   //    }
   // }, [upcoming]);

   // useEffect(() => {
   //    getLastGames();
   //    getProgram();
   // }, [getLastGames, getProgram]);


   return (
      <>

         <div className={styles.container}>
                 {path === "/recent" && <div className={styles.spacer}></div>}
            <div className={styles.matches}>
               <div className={styles.gamesnRound}>
                  <div className={styles.alleWedstrijden}>Recent gespeeld</div>
                  <div className={styles.speelrondes}>
                     Speelronde
                      <div className={styles.circle}>
                        <div className={styles.dayNumber}>{recentMatchDay}</div>
                     </div>
                  </div>
               </div>

               {finished.slice(finished.length - 9, finished.length).map((game) => {
                  const { homeTeam, awayTeam, score, id } = game;

                  return (
                     <div className={styles.match} key={id}>
                        <div className={styles.teams}>
                           <div className={styles.hometeam}>{homeTeam.name}</div>
                           <div className={styles.scores}>
                              {score.fullTime.home} : {score.fullTime.away}
                           </div>
                           <div className={styles.awayteam}>{awayTeam.name}</div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className={styles.container2}>
            <div className={styles.matches}>
               <div className={styles.gamesnRound}>
                  <div className={styles.alleWedstrijden}>Programma</div>
                  <div className={styles.speelrondes}>
                     Speelronde
              <div className={styles.circle}>
                        <div className={styles.dayNumber}>{matchDay}</div>
                     </div>
                  </div>
               </div>

               {timed.slice(0, 9).map((game) => {
                  const { homeTeam, awayTeam, score, id } = game;

                  return (
                     <div className={styles.match} key={id}>
                        <div className={styles.teams}>
                           <div className={styles.hometeam}>{homeTeam.name}</div>
                           <div className={styles.scores}>
                              {score.fullTime.home} : {score.fullTime.away}
                           </div>
                           <div className={styles.awayteam}>{awayTeam.name}</div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default Recent