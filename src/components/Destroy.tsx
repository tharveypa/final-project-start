import React from "react";
import Dirt from "./images/dirt.png";
import BirdPoop from "./images/birdpoop.png";
import Slash from "./images/slash.png";
import Hammer from "./images/hammer.png";

const destroy = [Dirt, BirdPoop, Slash, Hammer];
const str = ["Dirty Car", "Bird Poop", "Slash Tires", "Break Windows"];

const Destroy = () => {
    return (
        <div className="toolncar">
            <h1>Destroy Mode</h1>
            <p>
                Destroy Mode Options:
                {destroy.map(
                    (t: string): JSX.Element => (
                        <div key={t.toString()}>
                            <img src={t} alt={t.toString()} />
                            {str[destroy.indexOf(t)]}
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Destroy;
