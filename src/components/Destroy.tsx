import React from "react";
import Dirt from "./images/dirt.png";
import BirdPoop from "./images/birdpoop.png";
import Slash from "./images/slash.png";
import Hammer from "./images/hammer.png";

const destroy = ["./images/dirt.png", "Birdpoop", "Slash", "Hammer,"];

const Destroy = () => {
    return (
        <div className="toolncar">
            <h1>Destroy Mode</h1>
            <p>
                Destroy Mode Options:
                {destroy.map(
                    (t: string): JSX.Element => (
                        <div key={t}>
                            <img src={t} alt={t} />
                            heee
                        </div>
                    )
                )}
                {/*<div>
                    <img src={Dirt} alt="dirt" />
                    Dirty Car
                </div>
                <div>
                    <img src={BirdPoop} alt="bird poop" />
                    Bird Poop
                </div>
                <div>
                    <img src={Slash} alt="slash tires" />
                    Slash Tires
                </div>
                <div>
                    <img src={Hammer} alt="break windows" />
                    Break Windows
                </div>*/}
                <div>etc</div>
            </p>
        </div>
    );
};

export default Destroy;
