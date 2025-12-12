"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Recent.module.css";
import DateFormatter from "../utils/dateFormatter";
import GetStadium from "../utils/getStadium";

const MatchInfoModal = ({ showMatchInfo, program, ID }) => {
  const [match, setMatch] = useState({});
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!program || !ID) return;

    const found = program.find((game) => game.id === ID);
    setMatch(found || null);
  }, [program, ID]);

  const day = DateFormatter(match?.utcDate);

  const stadion = GetStadium(match?.homeTeam?.id); // [{...}]

  return (
    <div className={styles.modal} onClick={showMatchInfo}>
      {match && (
        <div className={styles.modalContent}>
          <div className={styles.modalTeams}>
            <img src={match.homeTeam?.crest} alt="" />
            <div className={styles.teamName}>
              <div className={styles.hometeam_modal}>
                {match.homeTeam?.name}
              </div>
              <div className={styles.scores_modal}>-</div>
              <div className={styles.awayteam_modal}>
                {match.awayTeam?.name}
              </div>
            </div>
            <img src={match.awayTeam?.crest} alt="" />
          </div>

          <div className={styles.date}>
            <div>{day.slice(0, -8)}</div>-<div>{day.slice(-6, day.length)}</div>
          </div>

          <div className={styles.plaats}>
            <div className={styles.stadion}>{stadion[0]?.stadion}</div>-
            <div className={styles.stadion}>{stadion[0]?.city}</div>
          </div>

          <div className={styles.stadionImage}>
             {!imgLoaded && <div className={styles.skeleton} />}
            <img
              src={stadion[0]?.image}
              alt=""
                onLoad={() => setImgLoaded(true)}
               className={`${styles.image} ${imgLoaded ? styles.loaded : ""}`}
            /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchInfoModal;
