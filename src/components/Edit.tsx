import React from "react";
import CarSquare from "./CarSquare";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
import Street from "./images/street.jpg";
import Dump from "./images/dump.jpg";
import Mountain from "./images/mountain.jpg";
import Alley from "./images/alley.jpg";
import Cave from "./images/cave.jpg";
import Garage from "./images/garage.jpg";

const edit = [City, Forest, Street, Dump, Mountain, Alley, Cave, Garage];
const str = [
    "city",
    "forest",
    "street",
    "dump",
    "mountain",
    "alley",
    "cave",
    "garage"
];

const Edit = () => {
    return (
        <div>
            <h1>Edit Mode</h1>
            <p>
                {edit.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            {console.log(t)}
                            <CarSquare
                                pic={edit[i]}
                                description={str[i]}
                            ></CarSquare>
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Edit;
