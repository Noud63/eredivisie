import React from 'react'
import { useWindowWidth } from 'react-window-size-hooks';
import styles from './styles/Footer.module.css'
import derbystar from './images/derbystar.png'

const Footer = () => {

    const derby = React.useRef()

    const width = useWindowWidth();

    React.useEffect(() => {

        if (width < 850) {
            derby.current.style = "display: none"
        } else {
            derby.current.style = "display: flex"
        }

    }, [width])

    const link = "noudvandun@gmail.com"
    const link2 = <a href={'https://github.com/Noud63?tab=repositories'} target={'blank'} style={{ textDecoration: "none", color: "white" }}> github.com/Noud63</a>
    const link3 = <a href={'http://www.noudvandun.com'} target={'blank'} style={{ textDecoration: "none", color: "white" }}>Noud van Dun</a>

    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div><li>Contact: {link}</li></div><br></br>
                <div><li>GitHub: {link2}</li></div><br></br>
                <div><li>Website: {link3}</li></div>
            </div>
            <div className="derbystar" ref={derby}><img src={derbystar} alt="" className="ds" style={{ width: '90px', height: '90px' }} /></div>

        </div>


    )
}

export default Footer
