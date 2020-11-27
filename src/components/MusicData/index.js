import React from 'react';

const MusicData = (props)=> {
    const songData = [];
    for(const [song, data] of Object.entries(props.songs)){
        songData.push(
            <div key={song}>
                <p>{song}: {data}</p>
                <button onClick={()=> props.handleLike(props.name, song)}>Like</button>
            </div>
        );   
    }
    return(
        <div>
            <h3>
                {props.name}
            </h3>
            {songData}
        </div>
    );
}

export default MusicData;