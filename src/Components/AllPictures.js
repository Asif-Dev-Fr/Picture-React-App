import React from 'react';

const AllPictures = (props) => {
    return (
        <div className="allPictures">
            <img src={props.pictures.previewURL} alt='' />
        </div>
    )
    
}

export default AllPictures;

