import React, { useEffect, useCallback } from "react";
import styles from "./styles/Recent.module.css";
import { useGlobalContext } from "./Context";
import { useGlobalState } from "./Standings";

const Recent = () => {

  const [lastGames, setLastGames] = React.useState([]);
  const [program, setProgram] = React.useState([]);

  const { state } = useGlobalContext();
  const { matchDay } = useGlobalState();

  const currentMatchDay = matchDay - 1;
  const upcomingGame = currentMatchDay + 1;
  const recent = state.slice(currentMatchDay - 1, currentMatchDay);
  const upcoming = state.slice(upcomingGame - 1, upcomingGame);

  /*
    const currentMatchDay = matchDay - 1;
    let upcomingGame;
    const recent = state.slice(currentMatchDay - 1, currentMatchDay);
    const upcoming = state.slice(upcomingGame - 1, upcomingGame);
  
    let scheduled = program.some(el => el.status === "SCHEDULED")
    if (scheduled) {
      upcomingGame = currentMatchDay + 1;
    } else {
      upcomingGame = currentMatchDay ;
    }
    */

  const getLastGames = useCallback(() => {
    for (let games of recent) {
      setLastGames(games);
    }
  }, [recent]);

  const getProgram = useCallback(() => {
    for (let games of upcoming) {
      setProgram(games);
    }
  }, [upcoming]);

  useEffect(() => {
    getLastGames();
    getProgram();
  }, [getLastGames, getProgram]);



  return (
    <>
      <div className={styles.container}>
        <div className={styles.matches}>
          <div className={styles.gamesnRound}>
            <div className={styles.alleWedstrijden}>Recent gespeeld</div>
            <div className={styles.speelrondes}>
              Speelronde
              <div className={styles.circle}>
                <div className={styles.dayNumber}>{currentMatchDay}</div>
              </div>
            </div>
          </div>

          {lastGames.map((game) => {
            const { homeTeam, awayTeam, score, id } = game;

            return (
              <div className={styles.match} key={id}>
                <div className={styles.teams}>
                  <div className={styles.hometeam}>{homeTeam.name}</div>
                  <div className={styles.scores}>
                    {score.fullTime.homeTeam} : {score.fullTime.awayTeam}
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
                <div className={styles.dayNumber}>{upcomingGame}</div>
              </div>
            </div>
          </div>

          {program.map((game) => {
            const { homeTeam, awayTeam, score, id } = game;

            return (
              <div className={styles.match} key={id}>
                <div className={styles.teams}>
                  <div className={styles.hometeam}>{homeTeam.name}</div>
                  <div className={styles.scores}>
                    {score.fullTime.homeTeam} : {score.fullTime.awayTeam}
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

export default Recent;