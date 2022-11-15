import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

export default function Details({ teams }) {
    const { id } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const team = teams.filter(team => team.idTeam === id)[0];
        setTeam(team);
    }, [id, teams]);

    if (team) {
        const { strTeamBadge } = team;

        return (
            <main>
                <Header image={strTeamBadge} />
            </main>
        )
    }
}