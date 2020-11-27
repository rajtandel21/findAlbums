import React from 'react';
require('dotenv').config;

class ApiMusic extends React.Component{
    state = {
        counter: 0,
        albums: [],
        artist: "coldplay"
    }

    componentDidMount(){
        this.findAlbums();
    }

    findAlbums = () =>{
        fetch(`https://theaudiodb.com/api/v1/json/1/discography.php?s=${this.state.artist}`)
            .then(r => r.json())
            .then(data => {
                if(data.album !== null){
                    this.newData(data.album);
                }else{
                    this.newData([{intYearReleased: "null", strAlbum: "artist not found"}]);
                }});
    }

    fetchData = (e)=>{
        e.preventDefault();
        this.findAlbums();
    }

    newData = (array)=>{
        this.setState(prevState=>({
            prevState,
            albums : array
        }))
    }

    mySearchHandle = (e)=> {
        this.setState({
            artist : e.target.value
        })
    }

    render() {
        const ablumData = this.state.albums.map((album,idx)=> (<p key={idx}>{album.strAlbum} came out: {album.intYearReleased}</p>));
        return (
            <>
                <h3>Search albums form artists</h3>
                <form>
                    <input type="text" onChange={this.mySearchHandle} />
                    <button onClick={this.fetchData}>Search</button>
                </form>
                <h4>Albums by: {this.state.artist}</h4>
                <section>
                    {ablumData}
                </section>
            </>
        );
    }
}


export default ApiMusic;