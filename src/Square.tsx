import React from "react";
import BlueCar from "./components/images/blue car.png";

type SquareProps = {
    black: boolean;
};

const Square: React.FC<SquareProps> = (props) => {
    const fill = props.black ? "black" : "white";
    const stroke = props.black ? "white" : "black";

    return (
        <div
            style={{
                backgroundImage: BlueCar,
                backgroundColor: fill,
                color: stroke,
                width: "70%",
                height: "70%"
            }}
        >
            {props.children}
        </div>
    );
};

export default Square;
