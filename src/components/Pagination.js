import React from 'react';
import './Pagination.scss';

const Pagination = ({
    statePrev,
    stateNext,
    loadFirstPage,
    loadPrevPage,
    loadNextPage,
    loadLastPage,
}) => {
    return (
        <div className="pagination">
            <button className="pagination-active" onClick={loadFirstPage}>first</button>
            <button
                className={statePrev === null ? "pagination-disabled" : "pagination-active"}
                onClick={loadPrevPage}>prev
            </button>
            <button
                className={stateNext === null ? "pagination-disabled" : "pagination-active"}
                onClick={loadNextPage}>next
            </button>
            <button className="pagination-active" onClick={loadLastPage}>last</button>
        </div>
    )
}

export default Pagination;