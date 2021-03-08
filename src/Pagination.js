import React from 'react'
import './styles/Pagination.css'

const Pagination = ({ paginate, currentday, total }) => {

    const pageNumbers = []
    for (let i = 1; i <= total; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <div className="buttonNumbers">
                {pageNumbers.map((number) => {
                    return (number === currentday) ? <button type="button" key={number} onClick={() => paginate(number)} className="btn active">{number}</button> :
                        <button type="button" key={number} onClick={() => paginate(number)} className="btn">{number}</button>
                }
                )}
            </div>
        </div>
    )
}

export default Pagination
