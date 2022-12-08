import React from "react";
import CarSquare from "./CarSquare";
import WipeCar from "./images/towel.png";
import ShineCar from "./images/shine.png";
import FillTires from "./images/pump.png";
import RepairWindows from "./images/glassrepair.png";

const clean = [WipeCar, ShineCar, FillTires, RepairWindows];
const str = ["towel", "shine", "pump", "glassrepair"];

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
                                pic={clean[i]}
                                description={str[i]}
                            ></CarSquare>
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Clean;
