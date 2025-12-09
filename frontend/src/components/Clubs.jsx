import React from "react";
import styles from "../styles/Clubs.module.css";
import { useGlobalContext } from "./Context";

const Clubs = () => {
  const { state } = useGlobalContext();

  const { teams } = state;

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className={styles.iconBoxWrapper}>
        <div className={styles.clubsIconWrapper}>
          <div className={styles.alleClubs}>Alle deelnemende clubs</div>
          <div className={styles.iconBox}>
            {teams &&
              teams.map((team, index) => {
                return (
                  <div
                    key={index}
                    className={styles.icon}
                    onClick={() => handleScroll(team.id)}
                  >
                    <img
                      src={team.crest}
                      alt="icon"
                      className={styles.iconPng}
                    />
                    <div className={styles.clubName}>{team.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
