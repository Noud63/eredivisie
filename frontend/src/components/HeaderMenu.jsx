
import styles from '../styles/HeaderMenu.module.css'
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className={styles.links}>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        <div>Home</div>
      </NavLink>

      <NavLink
        to="/uitslagen"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        <div>Wedstrijden</div>
      </NavLink>

      <NavLink
        to="/recent"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        <div>Recent</div>
      </NavLink>

      <NavLink
        to="/stand"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        <div>Stand</div>
      </NavLink>

      <NavLink
        to="/clubinfo"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        <div>Clubs</div>
      </NavLink>

    </div>
  );
};

export default HeaderMenu;