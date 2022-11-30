import React from "react";
import Tank from "./interfaces/Tank";
import Overlay from "./Overlay";

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
        </div>
    );
};

export default Square;
//line after thisTank.pred = {props.children}
