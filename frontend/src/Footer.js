import React from 'react'
//import { useWindowWidth } from 'react-window-size-hooks';
import styles from './styles/Footer.module.css'
import derbystar65 from './images/derbystar65.png'
import logo from './images/eredivisielogo1.png'

const Footer = () => {

    return (
        <div className={styles.footer}>
           
            <div className={styles.logo} ><img src={logo} alt="" className={styles.erelogo} /></div>
            <div className={styles.derbystar} ><img src={derbystar65} alt="" className={styles.ball} /></div>

        </div>
    )
}

export default Footer
