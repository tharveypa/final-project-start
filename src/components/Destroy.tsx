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

const str = [
    "BrownDirt",
    "BlackDirt",
    "TanDirt",
    "WhitePoop",
    "BrownPoop",
    "GreenPoop",
    "SlashTires",
    "BreakWindows"
];

const Destroy = () => {
    return (
        <div>
            <h1>Destroy Mode</h1>
            <p>
                {str.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            {console.log(t)}
                            <CarSquare
                                pic={t}
                                title={str[i]}
                                description={str[i]}
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

export default Destroy;
