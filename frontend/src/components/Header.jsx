import React from 'react'
import styles from '../styles/Header.module.css'
import HeaderMenu from './HeaderMenu';
import logo from '../images/eredivisie_logo.png'
import knvb from '../images/knvb_logo.png'

const Header = () => {

    const [scrolled, setScrolled] = React.useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(false);
        }
        else {
            setScrolled(true);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={scrolled ? styles.header : styles.header + ' ' + styles.scrolled}>
                <div className={styles.redwhiteandblue}>
                    <div className={styles.stripe + ' ' + styles.red}></div>
                    <div className={styles.stripe + ' ' + styles.white}></div>
                    <div className={styles.stripe + ' ' + styles.blue}></div>
                </div>
            <div className={styles.eredivisie}>
              <div className={styles.banner}><img src={logo} alt="Eredivisie Logo" className={styles.logo} /></div>
                <div className={styles.eredivisieText}>
                    
                KNVB Eredivisie 2025-2026
                </div>
                
                        <div className={styles.banner}><img src={knvb} alt="Eredivisie Logo" className={styles.knvb} /></div>
                </div>

            <HeaderMenu />

        </div>
    )
}

export default Header
