import React from "react";
import CarSquare from "./CarSquare";
/*
import City from "./images/city.png";
import Forest from "./images/forest.png";
import Street from "./images/street.png";
import Dump from "./images/dump.png";
import Mountain from "./images/mountain.png";
import Alley from "./images/alley.png";
import Cave from "./images/cave.png";
import Garage from "./images/garage.png";
*/

const str = [
    "City",
    "Forest",
    "Street",
    "Dump",
    "Mountain",
    "Alley",
    "Cave",
    "Garage"
];

/*
const edit = [
    "city",
    "forest",
    "street",
    "dump",
    "mountain",
    "alley",
    "cave",
    "garage"
];
*/

const Edit = () => {
    return (
        <div>
            <h1>Edit Mode</h1>
            <p>
                {str.map(
                    // eslint-disable-next-line no-extra-parens
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

export default Edit;
