import React, { useEffect, useState } from "react";
import Clubs from "./Clubs";
import styles from "../styles/ClubInfo.module.css";
import { ArrowUp } from "lucide-react";
import { useGlobalContext } from "./Context";
import shirts from "../assets/shirtsArray";
import position from "../utils/positionTranslation";
import nationality from "../utils/nationalityTranslation";

const ClubInfo = () => {
  const { state } = useGlobalContext();
  const { teams } = state;

  const [players, setPlayers] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  useEffect(() => {
    if (Array.isArray(teams) && teams.length > 0) {
      const squadArrays = teams.map((team) => team.squad || []);
      setPlayers(squadArrays);
    }
  }, [teams]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // console.log("S:", shirts);
  // console.log("T:", teams);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.spacer}></div>
      <Clubs />
      <div className={styles.clubsInfo}>
        {teams &&
          teams.map((team, index) => (
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
                    <div className={styles.shirtLabel}>Shirts: </div>
                    {shirts.map((shirt, index) => (
                      <div key={shirt.id} className={styles.shirtsWrapper}>
                        {shirt.id === team.id && (
                          <div className={styles.shirtUitThuis}>
                            <div className={styles.shirtThuis}>
                              <img
                                src={`../images/shirts/${shirt.thuis}`}
                                alt=""
                                className={styles.shirt}
                              />
                              <div className={styles.uitthuis}>thuis</div>
                            </div>
                            <div className={styles.shirtUit}>
                              <img
                                src={`../images/shirts/${shirt.uit}`}
                                alt=""
                                className={styles.shirt}
                              />
                              <div className={styles.uitthuis}>uit</div>
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
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTopButton}
          aria-label="Scroll to top"
        >
          <ArrowUp size={26} color="#6593d8" />
        </button>
      )}
    </div>
  );
};

export default ClubInfo;
