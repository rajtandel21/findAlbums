import React from 'react';

const ArtistData = (props)=>{
    return(
        <div>
            <h3>
                {props.name}
            </h3>
            <p>
                {props.genre}
            </p>
            <p>
                {props.info}
            </p>
        </div>
    );
}

export default ArtistData;