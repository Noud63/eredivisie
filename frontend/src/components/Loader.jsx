import React from 'react'
import '../styles/Loader.css'

const Loader = () => {
    return (
        <>
            <div className="LoaderError">
                <div className="error">Ooops, something went wrong!<br />wait one minute and try again!</div>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Loader
