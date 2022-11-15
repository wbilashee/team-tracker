import React from "react";

export default function Header({ image }) {
    return (
        <header className="header">
            {image && <img src={image} alt="team" />}
            {!image && <h1>Team Tracker</h1>}
        </header>
    );
}