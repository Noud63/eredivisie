import React from 'react'
import logo from './images/eredivisielogo.png'

const Home = () => {

    const myStyle = {
        width: '99vw',
        marginTop: '260px',
        display: 'flex',
        justifyContent: "center"
    }

    const imgStyle = {
        width: '50%',
        height: 'auto',
    }

    return (
        <div style={myStyle}>
            <img src={logo} alt="logo" style={imgStyle} />
        </div>
    )
}

export default Home
