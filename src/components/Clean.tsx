import React from "react";
import CarSquare from "./CarSquare";

const str = ["WipeCar", "ShineCar", "FillTires", "RepairWindows"];
const clean = ["WipeCar", "ShineCar", "FillTires", "RepairWindows"];

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
                                description={str[i]}
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
