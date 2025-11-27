import React, { useEffect, useState } from "react";
import styles from "../styles/Recent.module.css";
import DateFormatter from "../utils/dateFormatter";
import GetStadium from "../utils/getStadium";
import goffertstadion from "../images/goffertstadion.jpg"

const MatchInfoModal = ({ showMatchInfo, timed, ID }) => {
  const [match, setMatch] = useState({});

  useEffect(() => {
    if (!timed || !ID) return;

    const found = timed.find((game) => game.id === ID);
    setMatch(found || null);
  }, [timed, ID]);

  const day = DateFormatter(match?.utcDate);

  const stadion = GetStadium(match?.homeTeam?.id);

  console.log(stadion);

  return (
    <div className={styles.modal} onClick={showMatchInfo}>
      {match && (
        <div className={styles.modalContent}>
          <div className={styles.modalTeams}>
            <img src={match.homeTeam?.crest} alt="" />
            <div className={styles.hometeam_modal}>{match.homeTeam?.name}</div>
            <div className={styles.scores_modal}>-</div>
            <div className={styles.awayteam_modal}>{match.awayTeam?.name}</div>
            <img src={match.awayTeam?.crest} alt="" />
          </div>
          

          <div className={styles.date}>
            <div>{day.slice(0, -8)}</div>-
            <div>{day.slice(-6, day.length)}</div>
          </div>

          <div className={styles.plaats}>
            <div className={styles.stadion}>{stadion[0].stadion}</div>-
            <div className={styles.stadion}>{stadion[0].city}</div>
          </div>

          <div ><img src={goffertstadion} alt="" style={{width:"100%", borderRadius: "5%"}}/></div>
        </div>
      )}
    </div>
  );
};

export default MatchInfoModal;
