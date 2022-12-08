import React from "react";
import CarSquare from "./CarSquare";
import BrownDirt from "./images/browndirt.png";
import BlackDirt from "./images/blackdirt.png";
import TanDirt from "./images/tandirt.png";
import WhitePoop from "./images/whitepoop.png";
import BrownPoop from "./images/brownpoop.png";
import GreenPoop from "./images/greenpoop.png";
import SlashTires from "./images/slash.png";
import BreakWindows from "./images/hammer.png";

const destroy = [
    BrownDirt,
    BlackDirt,
    TanDirt,
    WhitePoop,
    BrownPoop,
    GreenPoop,
    SlashTires,
    BreakWindows
];
const str = [
    "browndirt",
    "blackdirt",
    "tandirt",
    "whitepoop",
    "brownpoop",
    "greenpoop",
    "slash",
    "breakwindows"
];

const Destroy = () => {
    return (
        <div>
            <h1>Destroy Mode</h1>
            <p>
                {destroy.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            {console.log(t)}
                            <CarSquare
                                pic={destroy[i]}
                                description={str[i]}
                            ></CarSquare>
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Destroy;
