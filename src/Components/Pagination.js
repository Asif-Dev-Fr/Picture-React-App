import React from 'react';

const Pagination = (props) => {

    const pageNumbers = [];

    // Boucle pour savoir combien de pages sont nécessaire (dans notre cas, c'est state.result.length(100) / state.picturesPerPage(10))
    for(let i = 1; i <= Math.ceil(props.totalPictures / props.picturesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div className="navPagination">
            <nav>
                <ul>
                    {pageNumbers.map(value =>(
                        <li key={value}>
                            <a 
                                onClick={() => props.paginate(value)} href="#"
                                className='listPages'
                            >
                                {value}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;