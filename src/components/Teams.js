import React, { useState, useEffect } from "react";
import Team from "./Team";
const url = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League";

export default function Teams() {
    const [teams, setTeams] = useState([]);

    const fetchTeams = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTeams(data.teams);
    }

    useEffect(() => {
        fetchTeams();
    });

    return (
        <section className="teams">
            <div className="container">
                {teams && teams.map(team => <Team key={team.idTeam} {...team} />)}
            </div>
        </section>
    )
}
