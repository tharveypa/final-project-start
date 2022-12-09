import React from "react";
import CarSquare from "./CarSquare";
import Wing from "./images/wing.png";
import Red from "./images/red.png";
import Blue from "./images/blue.png";
import Green from "./images/green.png";
import Yellow from "./images/yellow.png";
import Purple from "./images/purple.png";
import Orange from "./images/orange.png";
import LightTint from "./images/lighttint.png";
import MidTint from "./images/mediumtint.png";
import DarkTint from "./images/darktint.png";

const str = [
    "Wing",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Light Tint",
    "Medium Tint",
    "DarkTint"
];
const pimp = [
    "wing",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "lighttint",
    "mediumtint",
    "darktint"
];

const Pimp = () => {
    return (
        <div>
            <h1>Pimp Mode</h1>
            <p>
                {pimp.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            {console.log(t)}
                            <CarSquare
                                pic={t}
                                title={str[i]}
                                top={0}
                                left={0}
                            ></CarSquare>
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Pimp;
