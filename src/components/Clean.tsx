import React from "react";
import CarSquare from "./CarSquare";
import WipeCar from "./images/towel.png";
import ShineCar from "./images/shine.png";
import FillTires from "./images/pump.png";
import RepairWindows from "./images/glassrepair.png";

const str = ["Wipe Car", "Shine Car", "Fill Tires", "Repair Windows"];
const clean = ["towel", "shine", "pump", "glassrepair"];

const Clean = () => {
    return (
        <div>
            <h1>Clean Mode</h1>
            <p>
                {clean.map(
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

export default Clean;
