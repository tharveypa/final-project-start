import React from "react";
import Dirt from "./dirt.png";
import BirdPoop from "./bird poop.png";
import Slash from "./slash.png";
import Hammer from "./hammer.png";

const Destroy = () => {
    return (
        <div className="toolncar">
            <h1>Destroy Mode</h1>
            <p>
                Destroy Mode Options:
                <div>
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
                </div>
                <div>etc</div>
            </p>
        </div>
    );
};

export default Destroy;
