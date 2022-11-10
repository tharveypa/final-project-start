import React, { useState } from "react";
import Tank from "./interfaces/Tank";
import Overlay from "./Overlay";
import { TankEdit } from "./TankEdit";

type SquareProps = {
    thisTank: Tank;
    turnOnEdit: () => void;
};

const Square: React.FC<SquareProps> = (props) => {
    const { thisTank, turnOnEdit } = props;
    let tankPic = "";
    if (thisTank.salt) {
        tankPic = "salt.png";
    } else {
        tankPic = "fresh.png";
    }
    return (
        <div
            style={{
                position: "absolute",
                zIndex: 0,
                opacity: "0.85",
                width: "100%",
                height: "100%"
            }}
            onClick={() => turnOnEdit()}
        >
            {
                <img
                    src={require("./images/" + tankPic)}
                    alt="tankPic"
                    width="100%"
                    height="100%"
                />
            }
            {thisTank.pred && <Overlay color="red" opacity={0.25} />}
            {props.children}
        </div>
    );
};

export default Square;
