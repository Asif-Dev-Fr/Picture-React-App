import React from 'react';

const Search = ({searchInput, searchButton, searchEnter}) => {
    return(
        <div className="searchBox">
            <input 
                type="text" 
                placeholder="Type the name of your picture" 
                onChange={searchInput}
                onKeyPress={searchEnter}
            />
            <button type="submit" onClick={searchButton}>Search</button>
        </div>
    )
}

export default Search;