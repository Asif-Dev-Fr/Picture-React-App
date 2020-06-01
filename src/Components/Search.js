import React from 'react';

const Search = ({searchInput, searchButton, searchEnter}) => {
    return(
        <div className="searchBox">
            <input 
                type="text" 
                placeholder="Search for a picture" 
                onChange={searchInput}
                onKeyPress={searchEnter}
            />
            <button type="submit" onClick={searchButton}>Search</button>
        </div>
    )
}

export default Search;