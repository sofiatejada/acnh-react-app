import React from 'react';

export default function Pagination({
    animalsPerPage,
    villagerList,
    paginate,
    previousPage,
    nextPage,
    currentPage,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(villagerList / animalsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <button onClick={previousPage}>Prev</button>
            <span>{currentPage}</span>
            <button onClick={nextPage}>Next</button>
        </>
    );
}
