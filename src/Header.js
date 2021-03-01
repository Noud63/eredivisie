import React from 'react'

const Header = ({ round }) => {
    return (
        <div className="header">
            <div className="eredivisie">Stand Eredivisie 2020-2021</div>
            <div className="round">Speelronde {round}</div>
        </div>
    )
}

export default Header
