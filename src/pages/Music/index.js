import React from 'react';
import { MusicData } from '../../components';

class Music extends React.Component{
    state = {
        Drake: {
            song1: 0, 
            song2: 0, 
            song3: 0, 
            song4: 0
        },
        Rihanna: {
            song1: 0, 
            song2: 0, 
            song3: 0, 
            song4: 0
        },
        Eminem: {
            song1: 0, 
            song2: 0, 
            song3: 0, 
            song4: 0
        },
        Beyoncé: {
            song1: 0, 
            song2: 0, 
            song3: 0, 
            song4: 0
        }
    }
    
    handleLike = (artistName, songName)=> {
        this.setState(prevState=>({
            [artistName] : {...prevState[artistName],
                [songName] : prevState[artistName][songName] + 1
            }

        }));
    }

    render(){
        const allMusic = [];
        for(const [artist, music] of Object.entries(this.state)){
            allMusic.push(<MusicData key={artist} name={artist} songs={music} handleLike={this.handleLike}/>)
        }
        return(
            allMusic
        );
    }
}

export default Music;