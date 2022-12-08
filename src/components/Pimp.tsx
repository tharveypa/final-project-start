import React from "react";
import CarSquare from "./CarSquare";

const pimp = ["towel", "shine", "pump", "glassrepair"];
const str = ["Wipe Car", "Shine Car", "Fill Tires", "Repair Glass"];

const Pimp = () => {
    return (
        <div>
            <h1>Pimp Mode</h1>
            <p>
                {pimp.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
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
