import React from 'react';

const AllPictures = (props) => {
    return (
        <div className="picture">
            <img src={props.pictures.largeImageURL} alt={props.pictures.tags} />
            <h2>{props.pictures.tags}</h2>
        </div>
    )
    
}

export default AllPictures;

