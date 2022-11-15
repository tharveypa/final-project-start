import React from "react";

const Square: React.FC = (props) => {
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
