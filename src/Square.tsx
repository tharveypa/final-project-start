import React from "react";
import tankPic from "/Users/jasonhensley/Desktop/Class/CISC275/aquarium/final-project-start/src/images/tank.png";

type SquareProps = {
    black: boolean;
};

const Square: React.FC<SquareProps> = (props) => {
    return (
        <div
            style={{
                backgroundImage: tankPic,
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
