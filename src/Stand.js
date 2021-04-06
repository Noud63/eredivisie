import React from "react";
import Loader from "./Loader";
import { useGlobalState } from "./Standings";
import styles from "./styles/Stand.module.css";

const Stand = () => {
  const { matchDay, state } = useGlobalState();

  return (
    <div className={styles.container2}>

      {matchDay === 0 ? <Loader /> :

        <div className={styles.leftRightRow}>
          <div className={styles.round}>De Stand</div>

          <div className={styles.rowWrap}>

            <div className={styles.leftRow}>

              < span className={styles.left}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span >

              {state.leftRow.map((place, index) => {
                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.leftTeam}>
                      <div className={styles.position}>{position}</div>
                      <img src={team.crestUrl} alt="logo" className={styles.clubIcon} />
                      <div key={index} className={styles.team}>{team.name}</div>
                    </div>

                    <span className={styles.stats2}>
                      <span>{playedGames}</span>
                      <span>{won}|{draw}|{lost}</span>
                      <span>{points}</span>
                      <span>{goalsFor}-{goalsAgainst}</span>
                    </span>
                  </div>
                )
              })}
            </div>

            <div className={styles.rightRow}>

              < span className={styles.right}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span >

              {state.rightRow.map((place, index) => {
                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.rightTeam}>
                      <div className={styles.position2}>{position}</div>
                      <img src={team.crestUrl} alt="logo" className={styles.clubIcon} />
                      <div key={index} className={styles.team}>{team.name}</div>
                    </div>

                    <span className={styles.stats2}>
                      <span>{playedGames}</span>
                      <span>{won}|{draw}|{lost}</span>
                      <span>{points}</span>
                      <span>{goalsFor}-{goalsAgainst}</span>
                    </span>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default Stand;
