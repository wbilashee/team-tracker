import React, { useState, useEffect } from "react";
import Error from "./Error";
import Header from "./Header";
import { useParams } from "react-router-dom";
import MaleIcon from "@mui/icons-material/Male";
import FlagIcon from "@mui/icons-material/Flag";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export default function Details({ teams }) {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    
    useEffect(() => {
        const team = teams.filter(team => team.idTeam === id)[0];
        setTeam(team);
    }, [id, teams]);

    if (team) {
        const { strTeam, strGender, strSport, strCountry, strTeamBadge, intFormedYear, strStadiumThumb, strDescriptionEN, strTwitter, strFacebook, strYoutube } = team;
        return (
            <main>
                <Header image={strTeamBadge} />
                <section className="details">
                    <div className="container">
                        <div className="details-box">
                            <div>
                                <h2>{strTeam}</h2>
                                <h4><PlaceIcon /> Founded: {intFormedYear}</h4>
                                <h4><FlagIcon /> Country: {strCountry}</h4>
                                <h4><SportsSoccerIcon /> Sport Type: {strSport}</h4>
                                <h4><MaleIcon /> Gender: {strGender}</h4>
                            </div>
                            <div>
                                <img src={strStadiumThumb} alt="stadium" />
                            </div>
                        </div>
                        <div className="details-text">
                            <p>{strDescriptionEN}</p>
                        </div>
                        <div className="details-social">
                            <a href={strTwitter} title="twitter"><TwitterIcon /></a>
                            <a href={strFacebook} title="facebook"><FacebookIcon /></a>
                            <a href={strYoutube} title="youtube"><YouTubeIcon /></a>
                        </div>
                    </div>
                </section>
            </main>
        )
    } else {
        return <Error />
    }
}