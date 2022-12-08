import React from "react";
import CarSquare from "./CarSquare";

const destroy = ["dirt", "birdpoop", "slash", "hammer"];
const str = ["Dirty Car", "Bird Poop", "Slash Tires", "Break Windows"];

const Destroy = () => {
    return (
        <div>
            <h1>Destroy Mode</h1>
            <p>
                {destroy.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            <CarSquare pic={t} description={str[i]}></CarSquare>
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Destroy;
