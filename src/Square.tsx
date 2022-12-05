import React from "react";

type SquareProps = {
    black: boolean;
};

const Square: React.FC<SquareProps> = (props) => {
    return (
        <div
            style={{
                color: "black",
                width: "100%",
                height: "100%"
            }}
        >
            {props.children}
        </div>
    );
};

export default Square;
