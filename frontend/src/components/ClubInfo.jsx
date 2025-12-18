"use client";
import React, { useEffect, useState } from "react";
import Clubs from "./Clubs";
import styles from "../styles/ClubInfo.module.css";
import { useGlobalContext } from "./Context";
import shirts from "../data/shirtsArray";
import position from "../utils/positionTranslation";
import nationality from "../utils/nationalityTranslation";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";

const ClubInfo = () => {
  const { state } = useGlobalContext();
  const { teams } = state;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (Array.isArray(teams) && teams.length > 0) {
      const squadArrays = teams.map((team) => team.squad || []);
      setPlayers(squadArrays);
    }
  }, [teams]);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.spacer}></div>
      <Clubs />
      {state.loading ? (
        <Loader />
      ) : (
        <div className={styles.clubsInfo}>
          {teams.map((team, index) => (
            <div className={styles.team} key={team.name} id={team.id}>
              <div className={styles.teamHeader}>
                <img src={team.crest} alt={team.name} />
                <div>{team.name}</div>
              </div>
              <div className={styles.teamInfo}>
                <div className={styles.infoAndShirts}>
                  <div className={styles.basicInfo}>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Naam :</span>
                      <span className={styles.teamName}>{team.name}</span>
                    </div>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Adres : </span>
                      <span className={styles.teamName}>
                        {team.address.slice(0, -8)}
                      </span>
                    </div>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Stadion : </span>
                      <span className={styles.teamName}>{team.venue}</span>
                    </div>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Opgericht : </span>
                      <span className={styles.teamName}>{team.founded}</span>
                    </div>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Coach : </span>
                      <span className={styles.teamName}>
                        {team.coach.firstName} {team.coach.lastName}
                      </span>
                    </div>
                    <div className={styles.infoProp}>
                      <span className={styles.teamLabel}>Website : </span>
                      <span className={styles.teamName}>
                        <a
                          href={team.website}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          {team.website}
                        </a>
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* <div className={styles.shirtLabel}>Shirts: </div> */}
                    {shirts.map((shirt, index) => (
                      <div key={shirt.id} className={styles.shirtsWrapper}>
                        {shirt.id === team.id && (
                          <div className={styles.coachShirts}>
                            <div className={styles.shirtsUitEnThuis}>
                              <div className={styles.shirtThuis}>
                                <img
                                  src={`/shirts/${shirt.thuis}`}
                                  alt=""
                                  className={styles.shirt}
                                />
                                <div className={styles.uitthuis}>thuis</div>
                              </div>
                              <div className={styles.shirtUit}>
                                <img
                                  src={`/shirts/${shirt.uit}`}
                                  alt=""
                                  className={styles.shirt}
                                />
                                <div className={styles.uitthuis}>uit</div>
                              </div>
                             
                            </div>
                             <div className={styles.coach}>
                                <img
                                  src={`/coaches/${shirt.trainerImg}`}
                                  alt=""
                                  className={styles.coachImg}
                                />
                                <div className={styles.uitthuis}>coach</div>
                              </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.allPlayers}>
                  <div className={styles.selectie}>Spelers selectie: </div>
                  <div className={styles.teamSelectionWrapper}>
                    <div className={styles.teamSelection}>
                      {players[index]?.map((player) => (
                        <div className={styles.players} key={player.name}>
                          <div className={styles.playerInfo}>
                            <div className={styles.playersName}>
                              <span>
                                {player.name.length > 24
                                  ? player.name.slice(0, 20) + "..."
                                  : player.name}
                              </span>
                            </div>

                            <div className={styles.playerDobNatPos}>
                              <div>
                                Leeftijd:{" "}
                                {2025 - player.dateOfBirth?.slice(0, 4) || "?"}{" "}
                                jaar
                              </div>
                              <div>Land: {nationality(player.nationality)}</div>
                              <div>Positie: {position(player.position)}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ScrollToTop />
    </div>
  );
};

export default ClubInfo;
