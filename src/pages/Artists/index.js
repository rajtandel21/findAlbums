import React from 'react';
import { ArtistData } from '../../components';

class Artists extends React.Component{
    state = {
        drake:{
            genre: "rap",
            info: "Aubrey Drake Graham[6] (born October 24, 1986) is a Canadian rapper, singer, songwriter, actor, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound.",
        },
        Rihanna: {
            genre: "R&B, pop, dance, EDM",
            info: "Robyn Rihanna Fenty (/riˈænə/ ree-AN-ə;[1][n 1] born 20 February 1988) is a Barbadian singer, actress, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes.",
        },
        Eminem: {
            genre: "Hip Hop",
            info: "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; often stylized as EMINƎM), is an American rapper, songwriter, and record producer. Credited with popularizing hip hop in Middle America, Eminem's global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music.",
        },
        Beyoncé: {
            genre: "R&B, pop, Hip hop",
            info: "Beyoncé Giselle Knowles-Carter (/biːˈjɒnseɪ/ bee-YON-say; née Knowles; born September 4, 1981)[4] is an American singer and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.",
        }
    }
    render(){
        const allArtists = [];
        for(const [artists, data] of Object.entries(this.state)){
            allArtists.push(<ArtistData key={artists} name={artists} genre={data.genre} info={data.info} />);
        }
        return(
            allArtists
        );
    }
}

export default Artists;