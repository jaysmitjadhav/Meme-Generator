import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img
                src="./troll-face.png"
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project by Jay</h4>
        </header>
    )
}