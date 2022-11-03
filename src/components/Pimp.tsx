import React from "react";
import Towel from "./towel.png";
import Shine from "./shine.png";
import Pump from "./pump.png";
import GlassRepair from "./glass repair.png";

const Pimp = () => {
    return (
        <div>
            <h1>Pimp Mode</h1>
            <p>
                Pimp Mode Options:
                <div>
                    <img src={Towel} alt="towel" />
                    Wipe Car
                </div>
                <div>
                    <img src={Shine} alt="shine" />
                    Shine Car
                </div>
                <div>
                    <img src={Pump} alt="pump" />
                    Fill Tires
                </div>
                <div>
                    <img src={GlassRepair} alt="glass repair" />
                    Repair Windows
                </div>
                <div>etc</div>
            </p>
        </div>
    );
};

export default Pimp;
