import React from "react";
import Overlay from "./Overlay";

type SquareProps = {
    salt: boolean;
    pred: boolean;
};

const Square: React.FC<SquareProps> = (props) => {
    const { salt, pred } = props;
    let tankPic = "";
    if (salt) {
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
        >
            {
                <img
                    src={require("./images/" + tankPic)}
                    alt="tankPic"
                    width="100%"
                    height="100%"
                />
            }
            {pred && <Overlay color="red" opacity={0.25} />}
            {props.children}
        </div>
    );
};

export default Square;
