import React from "react";
import tankPic from "./images/tank.png";

const Square: React.FC = (props) => {
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
            <img src={tankPic} alt="tankPic" width="100%" height="100%" />
            {props.children}
        </div>
    );
};

export default Square;
