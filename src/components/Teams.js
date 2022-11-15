import React from "react";
import Team from "./Team";
import Header from "./Header";

export default function Teams({ teams }) {
    return (
        <main>
            <Header />
            <section className="teams">
                <div className="container">
                    {teams && teams.map(team => <Team key={team.idTeam} {...team} />)}
                </div>
            </section>
        </main>
    )
}
