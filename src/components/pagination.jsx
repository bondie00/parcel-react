import React from "react";

const Pagination = ({moviesperPage, totalMovies, paginate, currentPage}) => {
    const pageNumbers = []
    const displayNumbers = []

    for (let i = 1; i <= Math.ceil(totalMovies / moviesperPage); i++) {
        pageNumbers.push(i)
    }

    if (currentPage < 5) {
        for (let i = 1; i <= 7; i++) {
            displayNumbers.push(i)
        }
    }

    if (currentPage >= 5 && currentPage <= 6) {
        for (let i = 1; i <= 7; i++) {
            displayNumbers.push(i)
        }
        for (let i = 8; i <= currentPage + 3; i++) {
            displayNumbers.push(i)
        }
    }

    if (currentPage >= 7 && currentPage <= pageNumbers.length - 6) {
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
            displayNumbers.push(i)
        }
    }

    if (currentPage > pageNumbers.length - 6) {
        for (let i = currentPage - 3; i <= pageNumbers[pageNumbers.length-1]; i++) {
            displayNumbers.push(i)
        }
    }

    if (pageNumbers.length < 10) {
        return (
            <nav>
                <div class="pagination">
                    {currentPage > 1 &&
                        <button type="button" class="pageitem" onClick={() => paginate(currentPage - 1)}>
                        previous
                        </button>
                    }
                    
                    {pageNumbers.map(number => (
                        <button type="button" key={number} class="pageitem" onClick={() => paginate(number)} href="!#">
                        {number}
                        </button>
                    ))}

                    {currentPage != pageNumbers[pageNumbers.length - 1] &&
                        <button type="button" class="pageitem" onClick={() => paginate(currentPage + 1)}>
                        next
                        </button>
                    } 
                </div>
            </nav>
        )
    }

    else {
        if (currentPage <= 6) {
            return (
                <nav>
                    <div class="pagination">
                        {currentPage > 1 &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage - 1)}>
                            previous
                            </button>
                        }
    
                        {displayNumbers.map(number => (
                            <button type="button" key={number} class="pageitem" onClick={() => paginate(number)} href="!#">
                                    {number}
                            </button>
                        ))}
    
                        <div>...</div>
    
                        <button type="button" key={pageNumbers[pageNumbers.length - 2]} class="pageitem" onClick={() => paginate(pageNumbers[pageNumbers.length - 2])} href="!#">
                                    {pageNumbers[pageNumbers.length - 2]}
                        </button>
                        <button type="button" key={pageNumbers[pageNumbers.length - 1]} class="pageitem" onClick={() => paginate(pageNumbers[pageNumbers.length - 1])} href="!#">
                                    {pageNumbers[pageNumbers.length - 1]}
                        </button>
    
                        {currentPage != pageNumbers[pageNumbers.length - 1] &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage + 1)}>
                            next
                            </button>
                        } 
                    </div>
                </nav>
            )
        }

        if (currentPage >= 7 && currentPage <= pageNumbers.length - 6) {
            return (
                <nav>
                    <div class="pagination">
                        {currentPage > 1 &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage - 1)}>
                            previous
                            </button>
                        }
                        
                        <button type="button" key={pageNumbers[0]} class="pageitem" onClick={() => paginate(pageNumbers[0])} href="!#">
                        {pageNumbers[0]}
                        </button>
                        <button type="button" key={pageNumbers[1]} class="pageitem" onClick={() => paginate(pageNumbers[1])} href="!#">
                        {pageNumbers[1]}
                        </button>

                        <div>...</div>
    
                        {displayNumbers.map(number => (
                            <button type="button" key={number} class="pageitem" onClick={() => paginate(number)} href="!#">
                                    {number}
                            </button>
                        ))}
    
                        <div>...</div>
    
                        <button type="button" key={pageNumbers[pageNumbers.length - 2]} class="pageitem" onClick={() => paginate(pageNumbers[pageNumbers.length - 2])} href="!#">
                                    {pageNumbers[pageNumbers.length - 2]}
                        </button>
                        <button type="button" key={pageNumbers[pageNumbers.length - 1]} class="pageitem" onClick={() => paginate(pageNumbers[pageNumbers.length - 1])} href="!#">
                                    {pageNumbers[pageNumbers.length - 1]}
                        </button>
    
                        {currentPage != pageNumbers[pageNumbers.length - 1] &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage + 1)}>
                            next
                            </button>
                        } 
                    </div>
                </nav>
            )
        }

        if (currentPage > pageNumbers.length - 6) {
            return (
                <nav>
                    <div class="pagination">
                        {currentPage > 1 &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage - 1)}>
                            previous
                            </button>
                        }

                        <button type="button" key={pageNumbers[0]} class="pageitem" onClick={() => paginate(pageNumbers[0])} href="!#">
                        {pageNumbers[0]}
                        </button>
                        <button type="button" key={pageNumbers[1]} class="pageitem" onClick={() => paginate(pageNumbers[1])} href="!#">
                        {pageNumbers[1]}
                        </button>

                        <div>...</div>
    
                        {displayNumbers.map(number => (
                            <button type="button" key={number} class="pageitem" onClick={() => paginate(number)} href="!#">
                                    {number}
                            </button>
                        ))}
    
                        {currentPage != pageNumbers[pageNumbers.length - 1] &&
                            <button type="button" class="pageitem" onClick={() => paginate(currentPage + 1)}>
                            next
                            </button>
                        } 
                    </div>
                </nav>
            )
        }
    }
}

export default Pagination;