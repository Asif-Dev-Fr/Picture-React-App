import React from 'react';

const AllPictures = (props) => {

    return (
        <div className="picture">
            <a href={props.pictures.largeImageURL} target='_blank' rel="noopener noreferrer nofollow">
                <img src={props.pictures.largeImageURL} alt={props.pictures.tags} />
            </a>
            <h2>{props.pictures.tags}</h2>
        </div>
    )
    
}

export default AllPictures;

